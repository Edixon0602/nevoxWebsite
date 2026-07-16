"use client";

import * as React from "react";
import { Button } from "../ui/Button";
import { SectionWrapper } from "../ui/SectionWrapper";

const CONTENT = {
  es: {
    tag: "Agencia Digital & IA",
    title: "Tu próximo cliente ya te buscó.",
    titleHighlight: "¿Estabas ahí?",
    description: "Nevox conecta marketing, automatización e IA para que no se te escape ninguna oportunidad, sin importar la hora.",
    primaryCTA: "Hablar con el equipo",
    secondaryCTA: "Ver qué hacemos"
  },
  en: {
    tag: "Digital & AI Agency",
    title: "Your next client already looked for you.",
    titleHighlight: "Were you there?",
    description: "Nevox connects marketing, automation, and AI so you never miss an opportunity — no matter the hour.",
    primaryCTA: "Talk to our team",
    secondaryCTA: "See what we do"
  }
};

export const Hero = ({ lang = "es" }: { lang?: "es" | "en" }) => {
  const t = CONTENT[lang];

  return (
    <SectionWrapper size="hero" className="relative flex min-h-[100dvh] items-center justify-center">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-accent/5 blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
        <span className="mb-8 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] bg-white/5 text-text-secondary ring-1 ring-white/10">
          {t.tag}
        </span>
        
        <h1 className="mb-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-[1.05] text-text-primary text-balance">
          {t.title} <span className="text-accent italic pr-2 block sm:inline">{t.titleHighlight}</span>
        </h1>
        
        <p className="mb-12 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed text-balance">
          {t.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button 
            className="w-full sm:w-auto text-base py-4 px-8"
            data-cal-link="serranonevox/descubrimiento"
            data-cal-config='{"layout":"month_view"}'
          >
            {t.primaryCTA}
          </Button>
          <Button 
            variant="ghost" 
            className="w-full sm:w-auto text-base py-4 px-8"
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.secondaryCTA}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
