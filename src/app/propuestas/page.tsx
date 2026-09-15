import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Plus, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { formatearFecha, formatearMonto } from "@/lib/propuestas";
import {
  PANEL_COOKIE,
  listarPropuestas,
  tokenPanelValido,
} from "@/lib/propuestas.server";

export const dynamic = "force-dynamic";

export default async function PropuestasPage() {
  const cookieStore = await cookies();
  const autenticado = tokenPanelValido(
    cookieStore.get(PANEL_COOKIE)?.value
  );

  if (!autenticado) {
    redirect("/propuestas/panel");
  }

  const propuestas = listarPropuestas();

  return (
    <SectionWrapper size="hero">
      <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Panel interno
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                Propuestas
              </h1>
              <p className="max-w-xl text-text-secondary">
                Genera, comparte y da seguimiento a las propuestas comerciales
                de Nevox.
              </p>
            </div>
            <Link
              href="/propuestas/panel"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-all hover:bg-accent-hover"
            >
              <Plus weight="bold" className="h-4 w-4" />
              Nueva propuesta
            </Link>
          </div>

          {propuestas.length === 0 ? (
            <div className="rounded-2xl border border-white/5 bg-surface/40 p-12 text-center text-text-secondary">
              Aún no hay propuestas guardadas.
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/5 bg-surface/40">
              {propuestas.map((propuesta) => (
                <Link
                  key={propuesta.slug}
                  href={`/propuestas/${propuesta.slug}`}
                  className="group flex flex-col gap-3 p-6 transition-colors hover:bg-white/[0.03] md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-lg font-bold text-text-primary">
                        {propuesta.titulo}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          propuesta.estado === "aceptada"
                            ? "bg-accent/15 text-accent"
                            : "bg-white/5 text-text-secondary"
                        }`}
                      >
                        {propuesta.estado === "aceptada" ? (
                          <span className="inline-flex items-center gap-1">
                            <SealCheck weight="duotone" className="h-3.5 w-3.5" />
                            Aceptada
                          </span>
                        ) : (
                          "Enviada"
                        )}
                      </span>
                    </div>
                    <span className="text-sm text-text-secondary">
                      {propuesta.cliente?.trim()
                        ? `${propuesta.cliente.trim()} · `
                        : ""}
                      {formatearFecha(propuesta.creada)}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xl font-bold text-text-primary">
                      {formatearMonto(propuesta.inversion, propuesta.moneda)}
                    </span>
                    <ArrowUpRight
                      weight="bold"
                      className="h-5 w-5 text-text-tertiary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                </Link>
              ))}
        </div>
      )}
      </div>
    </SectionWrapper>
  );
}
