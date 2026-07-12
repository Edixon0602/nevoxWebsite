"use client";

import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Button } from "../ui/Button";

export const FinalCTA = () => {
  return (
    <SectionWrapper size="large" className="relative overflow-hidden">
      
      {/* Background visual */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] rounded-full border border-white/5 animate-[spin_60s_linear_infinite] flex items-center justify-center">
          <div className="w-[80%] h-[80%] rounded-full border border-white/5 border-dashed" />
        </div>
        <div className="absolute inset-0 bg-bg/80 backdrop-blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto py-12">
        <h2 className="mb-8 font-display text-5xl md:text-7xl font-bold tracking-tighter text-text-primary text-balance leading-[1.1]">
          No más tareas mecánicas.<br />No más leads perdidos.
        </h2>
        
        <p className="mb-12 max-w-xl text-lg text-text-secondary leading-relaxed text-balance mx-auto">
          Agenda una sesión estratégica gratuita de 30 minutos. Analizaremos tus cuellos de botella y te mostraremos exactamente cómo automatizar tu crecimiento.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Button 
            className="w-full sm:w-auto text-base py-5 px-10"
            data-cal-link="serranonevox/descubrimiento"
            data-cal-config='{"layout":"month_view"}'
          >
            Agendar sesión estratégica
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
