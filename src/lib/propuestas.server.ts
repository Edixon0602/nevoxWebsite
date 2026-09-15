import fs from "fs";
import path from "path";
import crypto from "crypto";
import type { Aceptacion, Propuesta } from "./propuestas";
import { slugify } from "./propuestas";
import {
  adminConfigurado,
  leerAceptacionAdmin,
  registrarAceptacionAdmin,
} from "./admin.server";

const PROPUESTAS_DIR = path.join(process.cwd(), "data", "propuestas");

export const PANEL_COOKIE = "nevox_panel";
const PANEL_SALT = "nevox-propuestas-panel";

function asegurarDirectorio() {
  if (!fs.existsSync(PROPUESTAS_DIR)) {
    fs.mkdirSync(PROPUESTAS_DIR, { recursive: true });
  }
}

export function listarPropuestas(): Propuesta[] {
  if (!fs.existsSync(PROPUESTAS_DIR)) return [];

  return fs
    .readdirSync(PROPUESTAS_DIR)
    .filter((archivo) => archivo.endsWith(".json"))
    .map((archivo) => {
      try {
        return JSON.parse(
          fs.readFileSync(path.join(PROPUESTAS_DIR, archivo), "utf8")
        ) as Propuesta;
      } catch {
        return null;
      }
    })
    .filter((propuesta): propuesta is Propuesta => propuesta !== null)
    .sort((a, b) => (a.creada < b.creada ? 1 : -1));
}

export function obtenerPropuesta(slug: string): Propuesta | null {
  if (!/^[a-z0-9-]+$/i.test(slug)) return null;
  const ruta = path.join(PROPUESTAS_DIR, `${slug}.json`);
  if (!fs.existsSync(ruta)) return null;

  try {
    return JSON.parse(fs.readFileSync(ruta, "utf8")) as Propuesta;
  } catch {
    return null;
  }
}

export function guardarPropuesta(propuesta: Propuesta): Propuesta {
  asegurarDirectorio();
  const ruta = path.join(PROPUESTAS_DIR, `${propuesta.slug}.json`);
  fs.writeFileSync(ruta, JSON.stringify(propuesta, null, 2), "utf8");
  return propuesta;
}

export async function registrarAceptacion(
  slug: string,
  aceptacion: Aceptacion
): Promise<Propuesta | null> {
  const propuesta = obtenerPropuesta(slug);
  if (!propuesta) return null;

  if (adminConfigurado()) {
    await registrarAceptacionAdmin(propuesta, aceptacion);
  } else {
    propuesta.aceptacion = aceptacion;
    propuesta.estado = "aceptada";
    guardarPropuesta(propuesta);
  }

  propuesta.aceptacion = aceptacion;
  propuesta.estado = "aceptada";
  return propuesta;
}

async function conAceptacion(propuesta: Propuesta): Promise<Propuesta> {
  if (!adminConfigurado()) return propuesta;

  try {
    const aceptacion = await leerAceptacionAdmin(propuesta.slug);
    if (aceptacion) {
      propuesta.aceptacion = aceptacion;
      propuesta.estado = "aceptada";
    }
  } catch (error) {
    console.error("No se pudo leer la aceptación desde el panel admin:", error);
  }

  return propuesta;
}

export async function obtenerPropuestaConAceptacion(
  slug: string
): Promise<Propuesta | null> {
  const propuesta = obtenerPropuesta(slug);
  if (!propuesta) return null;
  return conAceptacion(propuesta);
}

export async function listarPropuestasConAceptacion(): Promise<Propuesta[]> {
  const propuestas = listarPropuestas();
  if (!adminConfigurado()) return propuestas;

  return Promise.all(propuestas.map((propuesta) => conAceptacion(propuesta)));
}

export function slugUnico(texto: string): string {
  const base = slugify(texto) || "propuesta";
  if (!obtenerPropuesta(base)) return base;

  let intento = 2;
  while (obtenerPropuesta(`${base}-${intento}`)) {
    intento += 1;
  }
  return `${base}-${intento}`;
}

function obtenerPasswordPanel(): string {
  return process.env.PROPUESTAS_PASSWORD || "nevox";
}

export function hashTokenPanel(password: string): string {
  return crypto
    .createHash("sha256")
    .update(`${PANEL_SALT}:${password}`)
    .digest("hex");
}

export function passwordPanelValida(password: unknown): password is string {
  if (typeof password !== "string") return false;
  return tokensIguales(hashTokenPanel(password), hashTokenPanel(obtenerPasswordPanel()));
}

export function tokenPanelValido(token?: string): boolean {
  if (!token) return false;
  return tokensIguales(token, hashTokenPanel(obtenerPasswordPanel()));
}

function tokensIguales(a: string, b: string): boolean {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  if (bufferA.length !== bufferB.length) return false;
  return crypto.timingSafeEqual(bufferA, bufferB);
}

const ACCESO_SALT = "nevox-propuesta-acceso";

export function hashPasswordPropuesta(password: string): string {
  return crypto
    .createHash("sha256")
    .update(`${ACCESO_SALT}:${password}`)
    .digest("hex");
}

function hashEsperado(propuesta: Propuesta): string | null {
  if (propuesta.passwordHash) return propuesta.passwordHash;
  const global = process.env.PROPUESTAS_VIEW_PASSWORD;
  if (global) return hashPasswordPropuesta(global);
  return null;
}

export function propuestaProtegida(propuesta: Propuesta): boolean {
  return hashEsperado(propuesta) !== null;
}

export function passwordPropuestaValida(
  propuesta: Propuesta,
  password: unknown
): boolean {
  if (typeof password !== "string" || password.length === 0) return false;
  const esperado = hashEsperado(propuesta);
  if (!esperado) return true;
  return tokensIguales(hashPasswordPropuesta(password), esperado);
}

export function cookieAccesoNombre(slug: string): string {
  return `nevox_prop_${slug}`;
}

function tokenAcceso(propuesta: Propuesta): string | null {
  const esperado = hashEsperado(propuesta);
  if (!esperado) return null;
  return crypto
    .createHash("sha256")
    .update(`acceso:${propuesta.slug}:${esperado}`)
    .digest("hex");
}

export function tokenAccesoPropuesta(propuesta: Propuesta): string | null {
  return tokenAcceso(propuesta);
}

export function accesoPropuestaValido(
  propuesta: Propuesta,
  token?: string
): boolean {
  const esperado = tokenAcceso(propuesta);
  if (!esperado) return true;
  if (!token) return false;
  return tokensIguales(token, esperado);
}
