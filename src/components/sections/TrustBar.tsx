import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

const LOGOS = [
  "Acme Corp", "Globex", "Initech", "Soylent" // Placeholders - we will replace with generic svg icons or text if no svgs
];

export const TrustBar = () => {
  return (
    <SectionWrapper size="default" className="pt-0 md:pt-0">
      <div className="flex flex-col items-center border-y border-white/5 bg-surface/50 py-12 md:py-16 backdrop-blur-sm">
        
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex flex-col gap-2 pt-6 md:pt-0">
            <span className="text-4xl md:text-5xl font-display font-bold text-text-primary tabular-nums">+50</span>
            <span className="text-text-tertiary text-sm font-medium tracking-wide">Negocios automatizados</span>
          </div>
          <div className="flex flex-col gap-2 pt-6 md:pt-0">
            <span className="text-4xl md:text-5xl font-display font-bold text-text-primary tabular-nums">12</span>
            <span className="text-text-tertiary text-sm font-medium tracking-wide">Países con clientes activos</span>
          </div>
          <div className="flex flex-col gap-2 pt-6 md:pt-0">
            <span className="text-4xl md:text-5xl font-display font-bold text-text-primary tabular-nums">98%</span>
            <span className="text-text-tertiary text-sm font-medium tracking-wide">Tasa de retención anual</span>
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-col items-center gap-6 w-full">
          <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary font-semibold">
            Empresas que confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {LOGOS.map((name, i) => (
              <div key={i} className="text-xl font-display font-bold text-text-secondary tracking-widest">
                {name.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </SectionWrapper>
  );
};
