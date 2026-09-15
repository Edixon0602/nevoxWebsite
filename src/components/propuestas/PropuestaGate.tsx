"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { LockKey, SpinnerGap, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";

export function PropuestaGate({
  slug,
  titulo,
}: {
  slug: string;
  titulo: string;
}) {
  const router = useRouter();
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [enviando, setEnviando] = React.useState(false);

  async function ingresar(event: React.FormEvent) {
    event.preventDefault();
    setEnviando(true);
    setError("");

    try {
      const respuesta = await fetch(`/api/propuestas/${slug}/acceso`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await respuesta.json().catch(() => ({}));

      if (!respuesta.ok) {
        setError(data.error || "No se pudo validar la contraseña");
        return;
      }

      router.refresh();
    } catch {
      setError("Error de conexión. Intenta nuevamente.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center px-6 pt-32 pb-24">
      <Card className="w-full max-w-md" innerClassName="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <LockKey weight="duotone" className="h-6 w-6 text-accent" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Propuesta privada
            </span>
            <h1 className="font-display text-2xl font-bold text-text-primary">
              {titulo}
            </h1>
            <p className="text-sm text-text-secondary">
              Ingresa la contraseña que te compartimos para ver el contenido de
              esta propuesta.
            </p>
          </div>
        </div>

        <form onSubmit={ingresar} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-text-primary">
              Contraseña
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoFocus
              required
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-accent/60"
              placeholder="••••••••"
            />
          </label>

          {error ? (
            <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              <WarningCircle weight="duotone" className="h-5 w-5 shrink-0" />
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={enviando || password.length === 0}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
          >
            {enviando ? (
              <>
                <SpinnerGap weight="bold" className="h-4 w-4 animate-spin" />
                Verificando...
              </>
            ) : (
              "Ver propuesta"
            )}
          </button>
        </form>
      </Card>
    </div>
  );
}
