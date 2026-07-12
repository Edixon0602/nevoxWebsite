import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";


export const TrustBar = () => {
  return (
    <SectionWrapper size="default" className="pt-0 md:pt-0">
      <div className="flex flex-col items-center border-y border-white/5 bg-surface/50 py-12 md:py-16 backdrop-blur-sm">
        
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex flex-col gap-2 pt-6 md:pt-0">
            <span className="text-4xl md:text-5xl font-display font-bold text-text-primary tabular-nums">+15</span>
            <span className="text-text-tertiary text-sm font-medium tracking-wide">Negocios automatizados</span>
          </div>
          <div className="flex flex-col gap-2 pt-6 md:pt-0">
            <span className="text-4xl md:text-5xl font-display font-bold text-text-primary tabular-nums">4</span>
            <span className="text-text-tertiary text-sm font-medium tracking-wide">Países con clientes activos</span>
          </div>
          <div className="flex flex-col gap-2 pt-6 md:pt-0">
            <span className="text-4xl md:text-5xl font-display font-bold text-text-primary tabular-nums">92%</span>
            <span className="text-text-tertiary text-sm font-medium tracking-wide">Tasa de retención</span>
          </div>
        </div>
        
      </div>
    </SectionWrapper>
  );
};
