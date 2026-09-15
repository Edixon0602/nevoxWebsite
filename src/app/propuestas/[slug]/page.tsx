import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropuestaView } from "@/components/propuestas/PropuestaView";
import { AceptacionCard } from "@/components/propuestas/AceptacionCard";
import { obtenerPropuesta } from "@/lib/propuestas.server";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const propuesta = obtenerPropuesta(slug);

  if (!propuesta) {
    return { title: "Propuesta no encontrada | Nevox" };
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
  const propuesta = obtenerPropuesta(slug);

  if (!propuesta) notFound();

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
