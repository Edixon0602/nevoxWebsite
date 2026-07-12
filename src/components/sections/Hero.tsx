"use client";

import * as React from "react";
import { Button } from "../ui/Button";
import { SectionWrapper } from "../ui/SectionWrapper";

export const Hero = () => {
  return (
    <SectionWrapper size="hero" className="relative flex min-h-[100dvh] items-center justify-center">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-accent/5 blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
        <span className="mb-8 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] bg-white/5 text-text-secondary ring-1 ring-white/10">
          Agencia Digital & IA
        </span>
        
        <h1 className="mb-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-[1.05] text-text-primary text-balance">
          Haz que tu negocio <span className="text-accent italic pr-2">crezca</span> mientras duermes
        </h1>
        
        <p className="mb-12 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed text-balance">
          Marketing digital, automatización con IA e inteligencia de negocios. Todo integrado. Sin fricciones. Escala tu empresa como un sistema de alta precisión.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button 
            className="w-full sm:w-auto text-base py-4 px-8"
            data-cal-link="serranonevox/descubrimiento"
            data-cal-config='{"layout":"month_view"}'
          >
            Agendar consultoría gratuita
          </Button>
          <Button 
            variant="ghost" 
            className="w-full sm:w-auto text-base py-4 px-8"
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conocer servicios
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
