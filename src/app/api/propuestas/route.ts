import { NextRequest, NextResponse } from "next/server";
import type { BloqueAlcance, Entregable, Fase, Propuesta } from "@/lib/propuestas";
import { slugify } from "@/lib/propuestas";
import {
  PANEL_COOKIE,
  guardarPropuesta,
  hashPasswordPropuesta,
  listarPropuestas,
  slugUnico,
  tokenPanelValido,
} from "@/lib/propuestas.server";

export const dynamic = "force-dynamic";

function estaAutorizado(request: NextRequest): boolean {
  return tokenPanelValido(request.cookies.get(PANEL_COOKIE)?.value);
}

function texto(valor: unknown): string {
  return typeof valor === "string" ? valor.trim() : "";
}

function aArreglo(valor: unknown): string[] {
  if (Array.isArray(valor)) {
    return valor.map((item) => texto(item)).filter(Boolean);
  }
  if (typeof valor === "string") {
    return valor
      .split("\n")
      .map((linea) => linea.trim())
      .filter(Boolean);
  }
  return [];
}

function aBloques(valor: unknown): BloqueAlcance[] {
  if (!Array.isArray(valor)) return [];
  return valor
    .map((item) => ({
      titulo: texto((item as BloqueAlcance)?.titulo),
      descripcion: texto((item as BloqueAlcance)?.descripcion),
    }))
    .filter((item) => item.titulo || item.descripcion);
}

function aEntregables(valor: unknown): Entregable[] {
  return aBloques(valor);
}

function aFases(valor: unknown): Fase[] {
  if (!Array.isArray(valor)) return [];
  return valor
    .map((item) => ({
      periodo: texto((item as Fase)?.periodo),
      titulo: texto((item as Fase)?.titulo),
      detalle: texto((item as Fase)?.detalle),
    }))
    .filter((item) => item.titulo || item.detalle || item.periodo);
}

export async function GET(request: NextRequest) {
  if (!estaAutorizado(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
  return NextResponse.json({ propuestas: listarPropuestas() });
}

export async function POST(request: NextRequest) {
  if (!estaAutorizado(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const titulo = texto(body.titulo);
  if (!titulo) {
    return NextResponse.json(
      { error: "El título de la propuesta es obligatorio" },
      { status: 400 }
    );
  }

  const inversion = Number(body.inversion);
  if (!Number.isFinite(inversion) || inversion <= 0) {
    return NextResponse.json(
      { error: "La inversión debe ser un número mayor a cero" },
      { status: 400 }
    );
  }

  const alcance = aBloques(body.alcance);
  const entregables = aEntregables(body.entregables);
  const fases = aFases(body.fases);
  const stack = aArreglo(body.stack);
  const condiciones = aArreglo(body.condiciones);
  const password = texto(body.password);

  if (alcance.length === 0) {
    return NextResponse.json(
      { error: "Agrega al menos un bloque de alcance" },
      { status: 400 }
    );
  }

  const slugBase = texto(body.slug);
  const slug = slugBase ? slugify(slugBase) : slugUnico(titulo);

  if (!slug) {
    return NextResponse.json(
      { error: "No se pudo generar un identificador válido" },
      { status: 400 }
    );
  }

  const propuesta: Propuesta = {
    slug,
    titulo,
    proyecto: texto(body.proyecto) || titulo,
    cliente: texto(body.cliente),
    resumen: texto(body.resumen),
    alcance,
    entregables,
    stack,
    tiempo: texto(body.tiempo) || "A convenir",
    inversion,
    moneda: texto(body.moneda) || "USD",
    fases,
    condiciones,
    estado: "enviada",
    creada: new Date().toISOString().slice(0, 10),
    validaHasta: texto(body.validaHasta) || undefined,
    aceptacion: null,
    ...(password ? { passwordHash: hashPasswordPropuesta(password) } : {}),
  };

  guardarPropuesta(propuesta);

  return NextResponse.json({ ok: true, propuesta }, { status: 201 });
}
