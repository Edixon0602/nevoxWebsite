import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización con IA en Venezuela — Chatbots & RPA | Nevox",
  description: "Automatiza tu negocio con IA en Venezuela. Chatbots inteligentes, integración de CRMs y dashboards en tiempo real. Consulta sin costo.",
};

export default function AutomatizacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
