import { NextRequest, NextResponse } from "next/server";
import { esModalidadValida } from "@/lib/propuestas";
import { adminConfigurado, probarAdmin } from "@/lib/admin.server";
import {
  accesoPropuestaValido,
  cookieAccesoNombre,
  obtenerPropuesta,
  propuestaProtegida,
  registrarAceptacion,
} from "@/lib/propuestas.server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const propuesta = obtenerPropuesta(slug);
  const url = new URL(request.url);

  const base = {
    propuestaExiste: Boolean(propuesta),
    protegida: propuesta ? propuestaProtegida(propuesta) : false,
    adminConfigurado: adminConfigurado(),
  };

  if (url.searchParams.get("probe") === "1" && adminConfigurado()) {
    try {
      const sonda = await probarAdmin(slug);
      return NextResponse.json({ ...base, admin: sonda });
    } catch (error) {
      return NextResponse.json({
        ...base,
        adminError: String(error).slice(0, 300),
      });
    }
  }

  return NextResponse.json(base);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const propuesta = obtenerPropuesta(slug);

    if (!propuesta) {
      return NextResponse.json(
        { error: "Propuesta no encontrada" },
        { status: 404 }
      );
    }

    if (propuestaProtegida(propuesta)) {
      const token = request.cookies.get(cookieAccesoNombre(slug))?.value;
      if (!accesoPropuestaValido(propuesta, token)) {
        return NextResponse.json(
          { error: "Debes abrir la propuesta con tu contraseña para aceptarla." },
          { status: 403 }
        );
      }
    }

    const body = await request.json().catch(() => null);

    if (!body || body.aceptada !== true) {
      return NextResponse.json(
        { error: "Debes marcar la casilla para aceptar el presupuesto" },
        { status: 400 }
      );
    }

    const nombre = typeof body.nombre === "string" ? body.nombre.trim() : "";
    if (nombre.length < 2) {
      return NextResponse.json(
        { error: "Indica tu nombre completo" },
        { status: 400 }
      );
    }

    const modalidad = esModalidadValida(body.modalidad)
      ? body.modalidad
      : "2-pagos";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const nota = typeof body.nota === "string" ? body.nota.trim() : "";
    const fecha = new Date().toISOString();

    const actualizada = await registrarAceptacion(slug, {
      aceptada: true,
      modalidad,
      nombre,
      email,
      nota,
      fecha,
    });

    if (!actualizada) {
      return NextResponse.json(
        { error: "No se pudo guardar la aceptación." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      aceptacion: actualizada.aceptacion,
    });
  } catch (error) {
    console.error("Error registrando la aceptación:", error);
    return NextResponse.json(
      {
        error:
          "No se pudo guardar la aceptación en el servidor. Intenta nuevamente o escríbenos.",
        detalle: String(error).slice(0, 300),
      },
      { status: 502 }
    );
  }
}
