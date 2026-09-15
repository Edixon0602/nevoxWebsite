"use client";

import * as React from "react";
import {
  CheckCircle,
  Handshake,
  SpinnerGap,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  MODALIDADES,
  calcularCuotas,
  formatearMonto,
  type Aceptacion,
  type ModalidadPago,
} from "@/lib/propuestas";

export function AceptacionCard({
  slug,
  inversion,
  moneda,
  aceptacionInicial = null,
}: {
  slug: string;
  inversion: number;
  moneda: string;
  aceptacionInicial?: Aceptacion | null;
}) {
  const [modalidad, setModalidad] = React.useState<ModalidadPago>("2-pagos");
  const [acepto, setAcepto] = React.useState(false);
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nota, setNota] = React.useState("");
  const [enviando, setEnviando] = React.useState(false);
  const [error, setError] = React.useState("");
  const [aceptacion, setAceptacion] = React.useState<Aceptacion | null>(
    aceptacionInicial
  );

  const puedeEnviar = acepto && nombre.trim().length > 1 && !enviando;

  async function aceptarPropuesta(event: React.FormEvent) {
    event.preventDefault();
    if (!puedeEnviar) return;

    setEnviando(true);
    setError("");

    try {
      const respuesta = await fetch(`/api/propuestas/${slug}/aceptar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aceptada: true,
          modalidad,
          nombre,
          email,
          nota,
        }),
      });

      const data = await respuesta.json().catch(() => ({}));

      if (!respuesta.ok) {
        const mensaje =
          data.error ||
          `No se pudo registrar la aceptación (HTTP ${respuesta.status}).`;
        setError(data.detalle ? `${mensaje} — ${data.detalle}` : mensaje);
        return;
      }

      setAceptacion(data.aceptacion as Aceptacion);
    } catch {
      setError("Error de conexión. Intenta nuevamente.");
    } finally {
      setEnviando(false);
    }
  }

  if (aceptacion) {
    const cuotasAceptadas = calcularCuotas(inversion, aceptacion.modalidad);
    return (
      <SectionWrapper size="default" className="bg-accent/[0.04]">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
          <span className="inline-flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Aceptada
          </span>
          <Card innerClassName="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <CheckCircle weight="duotone" className="h-10 w-10 text-accent" />
              <div className="flex flex-col">
                <h3 className="font-display text-2xl font-bold text-text-primary">
                  Propuesta aceptada
                </h3>
                <p className="text-sm text-text-secondary">
                  Gracias, {aceptacion.nombre}. Registramos tu aceptación con
                  modalidad de{" "}
                  <strong className="text-text-primary">
                    {MODALIDADES[aceptacion.modalidad].nombre}
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-white/5 border-t border-white/5">
              {cuotasAceptadas.map((cuota) => (
                <div
                  key={cuota.numero}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-text-secondary">
                    Pago {cuota.numero} — {cuota.etiqueta}
                  </span>
                  <span className="font-semibold text-text-primary">
                    {formatearMonto(cuota.monto, moneda)}{" "}
                    <span className="text-text-tertiary">
                      ({cuota.porcentaje}%)
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-text-tertiary">
              Recibirás los datos de pago y el inicio del proyecto por el canal
              acordado.
            </p>
          </Card>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper size="default" className="bg-accent/[0.04]">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
        <span className="inline-flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          <Handshake weight="duotone" className="h-4 w-4" />
          Aceptar propuesta
        </span>

        <form onSubmit={aceptarPropuesta} className="flex flex-col gap-6">
          <Card innerClassName="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-2xl font-bold text-text-primary">
                Elige tu modalidad de pago
              </h3>
              <p className="text-sm text-text-secondary">
                Puedes pagar en 2 cuotas (50% / 50%) o en 3 cuotas (33% / 33% /
                33%).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.keys(MODALIDADES) as ModalidadPago[]).map((id) => {
                const modalidadItem = MODALIDADES[id];
                const cuotasItem = calcularCuotas(inversion, id);
                const activo = modalidad === id;

                return (
                  <button
                    type="button"
                    key={id}
                    onClick={() => setModalidad(id)}
                    aria-pressed={activo}
                    className={`flex flex-col gap-4 rounded-2xl border p-5 text-left transition-all ${
                      activo
                        ? "border-accent/60 bg-accent/10 ring-1 ring-accent/40"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg font-bold text-text-primary">
                        {modalidadItem.nombre}
                      </span>
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                          activo
                            ? "border-accent bg-accent"
                            : "border-white/20"
                        }`}
                      >
                        {activo ? (
                          <span className="h-2 w-2 rounded-full bg-bg" />
                        ) : null}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {cuotasItem.map((cuota) => (
                        <div
                          key={cuota.numero}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-text-secondary">
                            {cuota.etiqueta}
                          </span>
                          <span className="font-semibold text-text-primary">
                            {formatearMonto(cuota.monto, moneda)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>

          <Card innerClassName="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-text-primary">
                  Nombre completo *
                </span>
                <input
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  required
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-accent/60"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-text-primary">
                  Correo electrónico
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-accent/60"
                  placeholder="tu@correo.com"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-text-primary">
                Nota (opcional)
              </span>
              <textarea
                value={nota}
                onChange={(event) => setNota(event.target.value)}
                rows={3}
                className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-accent/60"
                placeholder="Comentarios o ajustes que quieras agregar"
              />
            </label>

            <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <input
                type="checkbox"
                checked={acepto}
                onChange={(event) => setAcepto(event.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-accent)]"
              />
              <span className="text-sm text-text-secondary leading-relaxed">
                Acepto el presupuesto de{" "}
                <strong className="text-text-primary">
                  {formatearMonto(inversion, moneda)}
                </strong>{" "}
                y los términos de esta propuesta, con la modalidad de pago
                seleccionada.
              </span>
            </label>

            {error ? (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                <WarningCircle weight="duotone" className="h-5 w-5 shrink-0" />
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={!puedeEnviar}
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-4 text-sm font-semibold tracking-tight text-bg transition-all hover:bg-accent-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-accent"
            >
              {enviando ? (
                <>
                  <SpinnerGap
                    weight="bold"
                    className="h-4 w-4 animate-spin"
                  />
                  Registrando aceptación...
                </>
              ) : (
                <>
                  <Handshake weight="bold" className="h-4 w-4" />
                  Aceptar presupuesto
                </>
              )}
            </button>
          </Card>
        </form>
      </div>
    </SectionWrapper>
  );
}
