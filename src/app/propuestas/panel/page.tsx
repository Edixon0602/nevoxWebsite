import { cookies } from "next/headers";
import { PanelLogin } from "./PanelLogin";
import { GeneradorPropuestas } from "./GeneradorPropuestas";
import {
  PANEL_COOKIE,
  listarPropuestasConAceptacion,
  tokenPanelValido,
} from "@/lib/propuestas.server";

export const dynamic = "force-dynamic";

export default async function PanelPage() {
  const cookieStore = await cookies();
  const autenticado = tokenPanelValido(cookieStore.get(PANEL_COOKIE)?.value);

  if (!autenticado) {
    return <PanelLogin />;
  }

  const propuestas = await listarPropuestasConAceptacion();

  return (
    <GeneradorPropuestas
      propuestas={propuestas.map((p) => ({ slug: p.slug, titulo: p.titulo }))}
    />
  );
}
