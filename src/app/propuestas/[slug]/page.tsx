import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { PropuestaView } from "@/components/propuestas/PropuestaView";
import { AceptacionCard } from "@/components/propuestas/AceptacionCard";
import { PropuestaGate } from "@/components/propuestas/PropuestaGate";
import {
  accesoPropuestaValido,
  cookieAccesoNombre,
  obtenerPropuestaConAceptacion,
  propuestaProtegida,
} from "@/lib/propuestas.server";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const propuesta = await obtenerPropuestaConAceptacion(slug);

  if (!propuesta) {
    return { title: "Propuesta no encontrada | Nevox" };
  }

  if (propuestaProtegida(propuesta)) {
    return {
      title: "Propuesta privada | Nevox",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${propuesta.titulo} | Propuesta Nevox`,
    description: propuesta.resumen || propuesta.proyecto,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PropuestaPage({ params }: Props) {
  const { slug } = await params;
  const propuesta = await obtenerPropuestaConAceptacion(slug);

  if (!propuesta) notFound();

  if (propuestaProtegida(propuesta)) {
    const cookieStore = await cookies();
    const token = cookieStore.get(cookieAccesoNombre(slug))?.value;
    if (!accesoPropuestaValido(propuesta, token)) {
      return <PropuestaGate slug={propuesta.slug} titulo={propuesta.titulo} />;
    }
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Quotation",
    name: propuesta.titulo,
    description: propuesta.resumen,
    dateCreated: propuesta.creada,
    priceCurrency: propuesta.moneda,
    price: propuesta.inversion,
    provider: {
      "@type": "Organization",
      name: "Nevox",
      url: "https://nevox.pro",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PropuestaView propuesta={propuesta}>
        <AceptacionCard
          slug={propuesta.slug}
          inversion={propuesta.inversion}
          moneda={propuesta.moneda}
          aceptacionInicial={propuesta.aceptacion ?? null}
        />
      </PropuestaView>
    </>
  );
}
