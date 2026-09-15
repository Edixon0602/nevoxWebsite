"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { LockKey, SpinnerGap, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";

export function PanelLogin() {
  const router = useRouter();
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [enviando, setEnviando] = React.useState(false);

  async function iniciarSesion(event: React.FormEvent) {
    event.preventDefault();
    setEnviando(true);
    setError("");

    try {
      const respuesta = await fetch("/api/propuestas/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await respuesta.json().catch(() => ({}));

      if (!respuesta.ok) {
        setError(data.error || "No se pudo iniciar sesión");
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
    <div className="flex w-full items-center justify-center px-6 pt-36 pb-24">
      <Card className="w-full max-w-md" innerClassName="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <LockKey weight="duotone" className="h-5 w-5 text-accent" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-display text-2xl font-bold text-text-primary">
              Panel de propuestas
            </h1>
            <p className="text-sm text-text-secondary">
              Acceso restringido al equipo.
            </p>
          </div>
        </div>

        <form onSubmit={iniciarSesion} className="flex flex-col gap-4">
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
              "Entrar"
            )}
          </button>
        </form>
      </Card>
    </div>
  );
}
