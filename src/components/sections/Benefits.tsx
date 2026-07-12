import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

export const Benefits = () => {
  return (
    <SectionWrapper size="large">
      <div className="flex flex-col items-center text-center mb-20 md:mb-32">
        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-text-primary text-balance max-w-4xl leading-[1.05]">
          La diferencia entre sobrevivir y <span className="text-accent italic">dominar</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
        
        {/* Benefit 1 */}
        <div className="flex flex-col gap-6 items-center text-center px-4">
          <div className="w-full aspect-[4/3] rounded-3xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
            <span className="font-display font-bold text-6xl text-white/10">01</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-text-primary">Recupera tu tiempo</h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            Las tareas mecánicas desaparecen de tu día a día. Tu equipo se concentra en estrategia y ventas de alto valor.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="flex flex-col gap-6 items-center text-center px-4 md:mt-16">
          <div className="w-full aspect-[4/3] rounded-3xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
            <span className="font-display font-bold text-6xl text-white/10">02</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-text-primary">Visibilidad total</h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            Toma decisiones basadas en datos reales. Dashboards en vivo que muestran exactamente dónde está el dinero.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col gap-6 items-center text-center px-4 md:mt-32">
          <div className="w-full aspect-[4/3] rounded-3xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
            <span className="font-display font-bold text-6xl text-white/10">03</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-text-primary">Ventas en automático</h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            Mientras duermes, tu sistema captura leads, los califica y agenda llamadas directamente en tu calendario.
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
};
