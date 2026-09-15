import {
  CalendarBlank,
  CheckCircle,
  Clock,
  CurrencyDollar,
  FileText,
  Stack as StackIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  MODALIDADES,
  calcularCuotas,
  formatearFecha,
  formatearMonto,
  type Propuesta,
} from "@/lib/propuestas";

function Etiqueta({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  );
}

function Dato({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs uppercase tracking-widest text-text-tertiary">
        {label}
      </span>
      <span className="text-sm font-medium text-text-primary">{value}</span>
    </div>
  );
}

export function PropuestaView({
  propuesta,
  children,
}: {
  propuesta: Propuesta;
  children?: React.ReactNode;
}) {
  const aceptada = propuesta.estado === "aceptada" && propuesta.aceptacion;
  const nombreCliente = propuesta.cliente?.trim();
  const mostrarCliente =
    !!nombreCliente && nombreCliente.toLowerCase() !== "cliente";

  return (
    <div className="w-full">
      <SectionWrapper size="hero" className="relative pt-36">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-end opacity-20">
          <div className="absolute w-[55vw] h-[55vw] rounded-full bg-accent/20 blur-[120px] mix-blend-screen" />
        </div>

        <div className="relative z-10 flex flex-col gap-8 max-w-5xl">
          <div className="flex flex-wrap items-center gap-3">
            <Etiqueta>Propuesta técnica y comercial</Etiqueta>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                aceptada
                  ? "bg-accent/15 text-accent"
                  : "bg-white/5 text-text-secondary"
              }`}
            >
              {aceptada ? "Aceptada" : "Pendiente de aprobación"}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.08] text-balance">
            {propuesta.titulo}
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {propuesta.proyecto}
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-2">
            {mostrarCliente ? (
              <Dato label="Cliente" value={nombreCliente} />
            ) : null}
            <Dato
              label="Inversión"
              value={formatearMonto(propuesta.inversion, propuesta.moneda)}
            />
            <Dato label="Plazo" value={propuesta.tiempo} />
            {propuesta.validaHasta ? (
              <Dato
                label="Válida hasta"
                value={formatearFecha(propuesta.validaHasta)}
              />
            ) : null}
          </div>
        </div>
      </SectionWrapper>

      {propuesta.resumen ? (
        <SectionWrapper size="default" className="bg-surface/30">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
            <Etiqueta>01 — Resumen</Etiqueta>
            <Card>
              <p className="text-lg text-text-secondary leading-relaxed text-balance">
                {propuesta.resumen}
              </p>
            </Card>
          </div>
        </SectionWrapper>
      ) : null}

      {propuesta.alcance.length > 0 ? (
        <SectionWrapper size="default">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
            <Etiqueta>02 — Alcance</Etiqueta>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {propuesta.alcance.map((bloque, index) => (
                <Card key={bloque.titulo + index} innerClassName="flex flex-col gap-4">
                  <span className="font-display text-3xl font-bold text-accent/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    {bloque.titulo}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {bloque.descripcion}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </SectionWrapper>
      ) : null}

      {propuesta.entregables.length > 0 ? (
        <SectionWrapper size="default" className="bg-surface/30">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
            <Etiqueta>03 — Entregables</Etiqueta>
            <div className="flex flex-col divide-y divide-white/5 rounded-2xl border border-white/5 bg-surface/40">
              {propuesta.entregables.map((entregable, index) => (
                <div
                  key={entregable.titulo + index}
                  className="flex items-start gap-4 p-6"
                >
                  <CheckCircle
                    weight="duotone"
                    className="mt-0.5 h-6 w-6 shrink-0 text-accent"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-text-primary">
                      {entregable.titulo}
                    </span>
                    {entregable.descripcion ? (
                      <span className="text-sm text-text-secondary">
                        {entregable.descripcion}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      ) : null}

      {propuesta.fases.length > 0 ? (
        <SectionWrapper size="default">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
            <Etiqueta>04 — Cronograma</Etiqueta>
            <div className="flex flex-col gap-4">
              {propuesta.fases.map((fase, index) => (
                <div
                  key={fase.titulo + index}
                  className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-surface/40 p-6 md:flex-row md:items-start md:gap-8"
                >
                  <div className="flex items-center gap-3 md:w-40 md:shrink-0">
                    <CalendarBlank
                      weight="duotone"
                      className="h-5 w-5 text-accent"
                    />
                    <span className="text-sm font-semibold text-text-primary">
                      {fase.periodo}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-lg font-bold text-text-primary">
                      {fase.titulo}
                    </span>
                    <span className="text-sm text-text-secondary leading-relaxed">
                      {fase.detalle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      ) : null}

      {propuesta.stack.length > 0 || propuesta.tiempo ? (
        <SectionWrapper size="default" className="bg-surface/30">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
            <Etiqueta>
              {propuesta.stack.length > 0 ? "05 — Tecnología" : "05 — Plazos"}
            </Etiqueta>
            <div
              className={`grid grid-cols-1 gap-6 ${
                propuesta.stack.length > 0 ? "md:grid-cols-2" : ""
              }`}
            >
              {propuesta.stack.length > 0 ? (
                <Card innerClassName="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <StackIcon
                      weight="duotone"
                      className="h-6 w-6 text-accent"
                    />
                    <h3 className="font-display text-xl font-bold text-text-primary">
                      Stack
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {propuesta.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              ) : null}
              {propuesta.tiempo ? (
                <Card innerClassName="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <Clock weight="duotone" className="h-6 w-6 text-accent" />
                    <h3 className="font-display text-xl font-bold text-text-primary">
                      Tiempo estimado
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {propuesta.tiempo}
                  </p>
                </Card>
              ) : null}
            </div>
          </div>
        </SectionWrapper>
      ) : null}

      <SectionWrapper size="default">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
          <Etiqueta>06 — Inversión</Etiqueta>
          <div className="flex flex-col gap-6">
            <Card innerClassName="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <CurrencyDollar
                  weight="duotone"
                  className="h-8 w-8 text-accent"
                />
                <div className="flex flex-col">
                  <span className="text-sm uppercase tracking-widest text-text-tertiary">
                    Inversión total
                  </span>
                  <span className="font-display text-4xl font-bold text-text-primary">
                    {formatearMonto(propuesta.inversion, propuesta.moneda)}
                  </span>
                </div>
              </div>
              <p className="max-w-xs text-sm text-text-secondary leading-relaxed">
                Elige la modalidad de pago que prefieras al momento de aceptar
                la propuesta.
              </p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(Object.keys(MODALIDADES) as Array<
                keyof typeof MODALIDADES
              >).map((id) => {
                const modalidad = MODALIDADES[id];
                const cuotas = calcularCuotas(propuesta.inversion, id);
                return (
                  <Card key={id} innerClassName="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-bold text-text-primary">
                        {modalidad.nombre}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                        {modalidad.hitos.length} cuotas
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {modalidad.descripcion}
                    </p>
                    <div className="flex flex-col gap-3 border-t border-white/5 pt-4">
                      {cuotas.map((cuota) => (
                        <div
                          key={cuota.numero}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-text-secondary">
                            {cuota.etiqueta}
                          </span>
                          <span className="font-semibold text-text-primary">
                            {formatearMonto(cuota.monto, propuesta.moneda)}{" "}
                            <span className="text-text-tertiary">
                              ({cuota.porcentaje}%)
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {propuesta.condiciones.length > 0 ? (
        <SectionWrapper size="default" className="bg-surface/30">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
            <Etiqueta>07 — Condiciones</Etiqueta>
            <Card innerClassName="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <FileText weight="duotone" className="h-6 w-6 text-accent" />
                <h3 className="font-display text-xl font-bold text-text-primary">
                  Términos de la propuesta
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {propuesta.condiciones.map((condicion, index) => (
                  <li
                    key={condicion + index}
                    className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {condicion}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </SectionWrapper>
      ) : null}

      {children}
    </div>
  );
}
