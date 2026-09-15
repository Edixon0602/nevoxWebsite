import type { Aceptacion, ModalidadPago, Propuesta } from "./propuestas";
import { calcularCuotas } from "./propuestas";

const ADMIN_BASE_URL = (process.env.NEVOX_ADMIN_API_URL || "").replace(
  /\/+$/,
  ""
);
const ADMIN_API_KEY = process.env.NEVOX_ADMIN_API_KEY;
const TIMEOUT_MS = 6000;

export function adminConfigurado(): boolean {
  return Boolean(ADMIN_BASE_URL && ADMIN_API_KEY);
}

function cabeceras(extra?: Record<string, string>): Record<string, string> {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ADMIN_API_KEY}`,
    ...extra,
  };
}

async function adminFetch(
  path: string,
  init: RequestInit = {}
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    return await fetch(`${ADMIN_BASE_URL}${path}`, {
      ...init,
      headers: cabeceras(init.headers as Record<string, string> | undefined),
      signal: controller.signal,
      cache: "no-store",
    });
  } finally {
    clearTimeout(timer);
  }
}

interface RespuestaAceptacion {
  aceptada?: boolean;
  modalidad?: string;
  nombre?: string;
  email?: string | null;
  nota?: string | null;
  fecha?: string;
}

function esModalidad(valor: unknown): valor is ModalidadPago {
  return valor === "2-pagos" || valor === "3-pagos";
}

function aAceptacion(data: RespuestaAceptacion): Aceptacion {
  return {
    aceptada: data.aceptada !== false,
    modalidad: esModalidad(data.modalidad) ? data.modalidad : "2-pagos",
    nombre: data.nombre ?? "",
    email: data.email ?? "",
    nota: data.nota ?? "",
    fecha: data.fecha ?? new Date().toISOString(),
  };
}

export async function registrarAceptacionAdmin(
  propuesta: Propuesta,
  aceptacion: Aceptacion
): Promise<void> {
  const payload = {
    origen: "nevox-web",
    propuesta: {
      slug: propuesta.slug,
      titulo: propuesta.titulo,
      proyecto: propuesta.proyecto,
      resumen: propuesta.resumen,
      tiempo: propuesta.tiempo,
      inversion: propuesta.inversion,
      moneda: propuesta.moneda,
      alcance: propuesta.alcance,
      entregables: propuesta.entregables,
      fases: propuesta.fases,
      condiciones: propuesta.condiciones,
    },
    cliente: {
      nombre: aceptacion.nombre,
      email: aceptacion.email,
    },
    aceptacion: {
      aceptada: true,
      modalidad: aceptacion.modalidad,
      cuotas: calcularCuotas(propuesta.inversion, aceptacion.modalidad),
      nombre: aceptacion.nombre,
      email: aceptacion.email,
      nota: aceptacion.nota,
      fecha: aceptacion.fecha,
    },
  };

  const respuesta = await adminFetch("/propuestas/aceptacion", {
    method: "POST",
    headers: { "Idempotency-Key": propuesta.slug },
    body: JSON.stringify(payload),
  });

  if (!respuesta.ok) {
    const detalle = await respuesta.text().catch(() => "");
    throw new Error(
      `El panel admin respondió ${respuesta.status}: ${detalle.slice(0, 200)}`
    );
  }
}

export async function leerAceptacionAdmin(
  slug: string
): Promise<Aceptacion | null> {
  const respuesta = await adminFetch(
    `/propuestas/${encodeURIComponent(slug)}/aceptacion`
  );

  if (respuesta.status === 404) return null;

  if (!respuesta.ok) {
    throw new Error(`El panel admin respondió ${respuesta.status}`);
  }

  const data = (await respuesta.json().catch(() => null)) as
    | RespuestaAceptacion
    | null;

  if (!data || data.aceptada === false) return null;
  return aAceptacion(data);
}
