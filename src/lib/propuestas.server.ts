import fs from "fs";
import path from "path";
import crypto from "crypto";
import type { Aceptacion, Propuesta } from "./propuestas";
import { slugify } from "./propuestas";

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

export function registrarAceptacion(
  slug: string,
  aceptacion: Aceptacion
): Propuesta | null {
  const propuesta = obtenerPropuesta(slug);
  if (!propuesta) return null;

  propuesta.aceptacion = aceptacion;
  propuesta.estado = "aceptada";
  return guardarPropuesta(propuesta);
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
