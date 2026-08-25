"use client";

import * as React from "react";
import { Button } from "../ui/Button";
import { SectionWrapper } from "../ui/SectionWrapper";

const CONTENT = {
  es: {
    title: "Desarrollo de software y automatización con IA.",
    description: "Construimos aplicaciones web a medida, integramos flujos de datos y desplegamos agentes de inteligencia artificial para empresas que necesitan escalar su capacidad operativa.",
    primaryCTA: "Agendar llamada técnica",
    secondaryCTA: "Ver servicios"
  },
  en: {
    title: "Custom software development and AI automation.",
    description: "We engineer tailored web platforms, integrate business data pipelines, and deploy AI agents for companies looking to expand operational capacity.",
    primaryCTA: "Book technical call",
    secondaryCTA: "View services"
  }
};

export const Hero = ({ lang = "es" }: { lang?: "es" | "en" }) => {
  const t = CONTENT[lang];

  return (
    <SectionWrapper size="hero" className="relative flex min-h-[100dvh] items-center justify-center pt-24">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-accent/5 blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
        <h1 className="mb-6 font-display text-5xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight leading-[1.08] text-text-primary text-balance">
          {t.title}
        </h1>
        
        <p className="mb-10 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed text-balance">
          {t.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button 
            className="w-full sm:w-auto py-3.5 px-7"
            data-cal-link="serranonevox/descubrimiento"
            data-cal-config='{"layout":"month_view"}'
          >
            {t.primaryCTA}
          </Button>
          <Button 
            variant="ghost" 
            className="w-full sm:w-auto py-3.5 px-7"
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.secondaryCTA}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
