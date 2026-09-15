"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  CheckCircle,
  FloppyDisk,
  Plus,
  SignOut,
  SpinnerGap,
  Trash,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";
import {
  MODALIDADES,
  calcularCuotas,
  formatearMonto,
  type Propuesta,
} from "@/lib/propuestas";

type BloqueForm = { titulo: string; descripcion: string };
type FaseForm = { periodo: string; titulo: string; detalle: string };

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-accent/60";
const labelText = "text-sm font-medium text-text-primary";

function reemplazar<T>(lista: T[], index: number, valor: T): T[] {
  return lista.map((item, i) => (i === index ? valor : item));
}

export function GeneradorPropuestas({
  propuestas,
}: {
  propuestas: Propuesta[];
}) {
  const router = useRouter();

  const [titulo, setTitulo] = React.useState("");
  const [slug, setSlug] = React.useState("");
  const [cliente, setCliente] = React.useState("");
  const [proyecto, setProyecto] = React.useState("");
  const [resumen, setResumen] = React.useState("");
  const [inversion, setInversion] = React.useState("720");
  const [moneda, setMoneda] = React.useState("USD");
  const [tiempo, setTiempo] = React.useState("");
  const [validaHasta, setValidaHasta] = React.useState("");
  const [alcance, setAlcance] = React.useState<BloqueForm[]>([
    { titulo: "", descripcion: "" },
  ]);
  const [entregables, setEntregables] = React.useState<BloqueForm[]>([
    { titulo: "", descripcion: "" },
  ]);
  const [fases, setFases] = React.useState<FaseForm[]>([
    { periodo: "", titulo: "", detalle: "" },
  ]);
  const [stack, setStack] = React.useState("");
  const [condiciones, setCondiciones] = React.useState("");
  const [enviando, setEnviando] = React.useState(false);
  const [error, setError] = React.useState("");
  const [creada, setCreada] = React.useState<Propuesta | null>(null);

  const inversionNum = Number(inversion) || 0;

  function limpiar() {
    setTitulo("");
    setSlug("");
    setCliente("");
    setProyecto("");
    setResumen("");
    setInversion("720");
    setMoneda("USD");
    setTiempo("");
    setValidaHasta("");
    setAlcance([{ titulo: "", descripcion: "" }]);
    setEntregables([{ titulo: "", descripcion: "" }]);
    setFases([{ periodo: "", titulo: "", detalle: "" }]);
    setStack("");
    setCondiciones("");
    setCreada(null);
    setError("");
  }

  async function guardar(event: React.FormEvent) {
    event.preventDefault();
    setEnviando(true);
    setError("");
    setCreada(null);

    const payload = {
      titulo,
      slug: slug || undefined,
      cliente,
      proyecto,
      resumen,
      inversion: inversionNum,
      moneda,
      tiempo,
      validaHasta: validaHasta || undefined,
      alcance: alcance.filter((b) => b.titulo || b.descripcion),
      entregables: entregables.filter((b) => b.titulo || b.descripcion),
      fases: fases.filter((f) => f.titulo || f.detalle || f.periodo),
      stack,
      condiciones,
    };

    try {
      const respuesta = await fetch("/api/propuestas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await respuesta.json().catch(() => ({}));

      if (!respuesta.ok) {
        setError(data.error || "No se pudo guardar la propuesta");
        return;
      }

      setCreada(data.propuesta as Propuesta);
      router.refresh();
    } catch {
      setError("Error de conexión. Intenta nuevamente.");
    } finally {
      setEnviando(false);
    }
  }

  async function cerrarSesion() {
    await fetch("/api/propuestas/login", { method: "DELETE" });
    router.refresh();
  }

  return (
    <div className="w-full px-6 pb-24 pt-36 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Panel interno
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
              Generador de propuestas
            </h1>
            <p className="max-w-xl text-text-secondary">
              Completa el formulario para generar una propuesta con link
              compartible y aceptación en línea.
            </p>
          </div>
          <button
            type="button"
            onClick={cerrarSesion}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            <SignOut weight="bold" className="h-4 w-4" />
            Cerrar sesión
          </button>
        </div>

        {creada ? (
          <div className="flex flex-col gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-6">
            <div className="flex items-center gap-3">
              <CheckCircle weight="duotone" className="h-6 w-6 text-accent" />
              <span className="font-medium text-text-primary">
                Propuesta creada correctamente
              </span>
            </div>
            <Link
              href={`/propuestas/${creada.slug}`}
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              /propuestas/{creada.slug}
              <ArrowUpRight weight="bold" className="h-4 w-4" />
            </Link>
          </div>
        ) : null}

        {error ? (
          <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            <WarningCircle weight="duotone" className="h-5 w-5 shrink-0" />
            {error}
          </div>
        ) : null}

        <form onSubmit={guardar} className="flex flex-col gap-8">
          <Card innerClassName="flex flex-col gap-6">
            <h2 className="font-display text-xl font-bold text-text-primary">
              Datos generales
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className={labelText}>Título de la propuesta *</span>
                <input
                  className={inputClass}
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  placeholder="Bot de Automatización P2P — Binance + Banco de Venezuela"
                  required
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelText}>Cliente</span>
                <input
                  className={inputClass}
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  placeholder="Nombre del cliente"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelText}>Proyecto (subtítulo)</span>
                <input
                  className={inputClass}
                  value={proyecto}
                  onChange={(e) => setProyecto(e.target.value)}
                  placeholder="Automatización de operaciones P2P"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelText}>Slug (opcional)</span>
                <input
                  className={inputClass}
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="se-genera-del-titulo"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelText}>Válida hasta</span>
                <input
                  type="date"
                  className={inputClass}
                  value={validaHasta}
                  onChange={(e) => setValidaHasta(e.target.value)}
                />
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className={labelText}>Resumen</span>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={4}
                  value={resumen}
                  onChange={(e) => setResumen(e.target.value)}
                  placeholder="Descripción general del proyecto..."
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelText}>Inversión total (USD) *</span>
                <input
                  type="number"
                  min="1"
                  step="1"
                  className={inputClass}
                  value={inversion}
                  onChange={(e) => setInversion(e.target.value)}
                  required
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelText}>Moneda</span>
                <select
                  className={inputClass}
                  value={moneda}
                  onChange={(e) => setMoneda(e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="VES">VES</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className={labelText}>Tiempo estimado</span>
                <input
                  className={inputClass}
                  value={tiempo}
                  onChange={(e) => setTiempo(e.target.value)}
                  placeholder="3 a 4 semanas"
                />
              </label>
            </div>

            {inversionNum > 0 ? (
              <div className="grid grid-cols-1 gap-4 border-t border-white/5 pt-6 md:grid-cols-2">
                {(Object.keys(MODALIDADES) as Array<
                  keyof typeof MODALIDADES
                >).map((id) => (
                  <div
                    key={id}
                    className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <span className="text-sm font-semibold text-text-primary">
                      {MODALIDADES[id].nombre}
                    </span>
                    {calcularCuotas(inversionNum, id).map((cuota) => (
                      <div
                        key={cuota.numero}
                        className="flex items-center justify-between text-xs text-text-secondary"
                      >
                        <span>{cuota.etiqueta}</span>
                        <span className="font-semibold text-text-primary">
                          {formatearMonto(cuota.monto, moneda)}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : null}
          </Card>

          <Card innerClassName="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-text-primary">
                Alcance *
              </h2>
              <button
                type="button"
                onClick={() =>
                  setAlcance([...alcance, { titulo: "", descripcion: "" }])
                }
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                <Plus weight="bold" className="h-4 w-4" />
                Agregar bloque
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {alcance.map((bloque, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <div className="flex items-center gap-3">
                    <input
                      className={inputClass}
                      value={bloque.titulo}
                      onChange={(e) =>
                        setAlcance(
                          reemplazar(alcance, index, {
                            ...bloque,
                            titulo: e.target.value,
                          })
                        )
                      }
                      placeholder={`Bloque ${index + 1}`}
                    />
                    {alcance.length > 1 ? (
                      <button
                        type="button"
                        onClick={() =>
                          setAlcance(alcance.filter((_, i) => i !== index))
                        }
                        className="shrink-0 rounded-lg p-3 text-text-tertiary transition-colors hover:bg-white/5 hover:text-red-300"
                        aria-label="Eliminar bloque"
                      >
                        <Trash weight="bold" className="h-4 w-4" />
                      </button>
                    ) : null}
                  </div>
                  <textarea
                    className={`${inputClass} resize-none`}
                    rows={3}
                    value={bloque.descripcion}
                    onChange={(e) =>
                      setAlcance(
                        reemplazar(alcance, index, {
                          ...bloque,
                          descripcion: e.target.value,
                        })
                      )
                    }
                    placeholder="Descripción del bloque de alcance..."
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card innerClassName="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-text-primary">
                Entregables
              </h2>
              <button
                type="button"
                onClick={() =>
                  setEntregables([
                    ...entregables,
                    { titulo: "", descripcion: "" },
                  ])
                }
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                <Plus weight="bold" className="h-4 w-4" />
                Agregar entregable
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {entregables.map((entregable, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <div className="flex items-center gap-3">
                    <input
                      className={inputClass}
                      value={entregable.titulo}
                      onChange={(e) =>
                        setEntregables(
                          reemplazar(entregables, index, {
                            ...entregable,
                            titulo: e.target.value,
                          })
                        )
                      }
                      placeholder={`Entregable ${index + 1}`}
                    />
                    {entregables.length > 1 ? (
                      <button
                        type="button"
                        onClick={() =>
                          setEntregables(
                            entregables.filter((_, i) => i !== index)
                          )
                        }
                        className="shrink-0 rounded-lg p-3 text-text-tertiary transition-colors hover:bg-white/5 hover:text-red-300"
                        aria-label="Eliminar entregable"
                      >
                        <Trash weight="bold" className="h-4 w-4" />
                      </button>
                    ) : null}
                  </div>
                  <input
                    className={inputClass}
                    value={entregable.descripcion}
                    onChange={(e) =>
                      setEntregables(
                        reemplazar(entregables, index, {
                          ...entregable,
                          descripcion: e.target.value,
                        })
                      )
                    }
                    placeholder="Detalle breve (opcional)"
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card innerClassName="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-text-primary">
                Cronograma
              </h2>
              <button
                type="button"
                onClick={() =>
                  setFases([
                    ...fases,
                    { periodo: "", titulo: "", detalle: "" },
                  ])
                }
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                <Plus weight="bold" className="h-4 w-4" />
                Agregar fase
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {fases.map((fase, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <div className="flex items-center gap-3">
                    <input
                      className={inputClass}
                      value={fase.periodo}
                      onChange={(e) =>
                        setFases(
                          reemplazar(fases, index, {
                            ...fase,
                            periodo: e.target.value,
                          })
                        )
                      }
                      placeholder="Semana 1"
                    />
                    <input
                      className={inputClass}
                      value={fase.titulo}
                      onChange={(e) =>
                        setFases(
                          reemplazar(fases, index, {
                            ...fase,
                            titulo: e.target.value,
                          })
                        )
                      }
                      placeholder="Título de la fase"
                    />
                    {fases.length > 1 ? (
                      <button
                        type="button"
                        onClick={() =>
                          setFases(fases.filter((_, i) => i !== index))
                        }
                        className="shrink-0 rounded-lg p-3 text-text-tertiary transition-colors hover:bg-white/5 hover:text-red-300"
                        aria-label="Eliminar fase"
                      >
                        <Trash weight="bold" className="h-4 w-4" />
                      </button>
                    ) : null}
                  </div>
                  <textarea
                    className={`${inputClass} resize-none`}
                    rows={2}
                    value={fase.detalle}
                    onChange={(e) =>
                      setFases(
                        reemplazar(fases, index, {
                          ...fase,
                          detalle: e.target.value,
                        })
                      )
                    }
                    placeholder="Detalle de la fase..."
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card innerClassName="flex flex-col gap-6">
            <h2 className="font-display text-xl font-bold text-text-primary">
              Tecnología y condiciones
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className={labelText}>
                  Stack (una tecnología por línea)
                </span>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={6}
                  value={stack}
                  onChange={(e) => setStack(e.target.value)}
                  placeholder={"Python + ADB\nBinance P2P API\nSupabase"}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelText}>
                  Condiciones (una por línea)
                </span>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={6}
                  value={condiciones}
                  onChange={(e) => setCondiciones(e.target.value)}
                  placeholder={"Inversión total: $720 USD\nAnticipo para iniciar"}
                />
              </label>
            </div>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={enviando}
              className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-4 text-sm font-semibold text-bg transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
            >
              {enviando ? (
                <>
                  <SpinnerGap weight="bold" className="h-4 w-4 animate-spin" />
                  Guardando...
                </>
              ) : (
                <>
                  <FloppyDisk weight="bold" className="h-4 w-4" />
                  Generar propuesta
                </>
              )}
            </button>
            <button
              type="button"
              onClick={limpiar}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Limpiar
            </button>
          </div>
        </form>

        {propuestas.length > 0 ? (
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-bold text-text-primary">
              Propuestas existentes
            </h2>
            <div className="flex flex-col divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/5 bg-surface/40">
              {propuestas.map((propuesta) => (
                <Link
                  key={propuesta.slug}
                  href={`/propuestas/${propuesta.slug}`}
                  target="_blank"
                  className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-white/[0.03]"
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-text-primary">
                      {propuesta.titulo}
                    </span>
                    <span className="text-xs text-text-tertiary">
                      {propuesta.slug}
                    </span>
                  </div>
                  <ArrowUpRight
                    weight="bold"
                    className="h-4 w-4 text-text-tertiary transition-colors group-hover:text-accent"
                  />
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
