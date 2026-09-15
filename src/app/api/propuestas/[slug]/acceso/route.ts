import { NextRequest, NextResponse } from "next/server";
import {
  accesoPropuestaValido,
  cookieAccesoNombre,
  obtenerPropuesta,
  passwordPropuestaValida,
  propuestaProtegida,
  tokenAccesoPropuesta,
} from "@/lib/propuestas.server";

export const dynamic = "force-dynamic";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const propuesta = obtenerPropuesta(slug);

  if (!propuesta) {
    return NextResponse.json(
      { error: "Propuesta no encontrada" },
      { status: 404 }
    );
  }

  if (!propuestaProtegida(propuesta)) {
    return NextResponse.json({ ok: true });
  }

  const body = await request.json().catch(() => null);

  if (!passwordPropuestaValida(propuesta, body?.password)) {
    return NextResponse.json(
      { error: "Contraseña incorrecta" },
      { status: 401 }
    );
  }

  const token = tokenAccesoPropuesta(propuesta);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(cookieAccesoNombre(slug), token ?? "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const propuesta = obtenerPropuesta(slug);

  if (!propuesta) {
    return NextResponse.json(
      { error: "Propuesta no encontrada" },
      { status: 404 }
    );
  }

  const token = request.cookies.get(cookieAccesoNombre(slug))?.value;
  return NextResponse.json({
    requerida: propuestaProtegida(propuesta),
    autorizado: accesoPropuestaValido(propuesta, token),
  });
}
