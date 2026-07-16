import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

const CONTENT = {
  es: {
    title: "Mientras tú te enfocas,",
    titleHighlight: "el sistema trabaja.",
    b1Title: "Tu equipo deja de hacer trabajo mecánico",
    b1Desc: "Respondemos mensajes, actualizamos CRMs, calificamos leads. Todo lo que come tiempo sin agregar valor real.",
    b2Title: "Ves lo que pasa en tiempo real",
    b2Desc: "Un dashboard centralizado te dice de dónde vienen tus clientes y cuánto te cuesta cada uno.",
    b3Title: "No pierdes clientes por demoras",
    b3Desc: "El sistema responde en segundos, cualquier día, cualquier hora. El lead entra y el proceso arranca solo."
  },
  en: {
    title: "While you focus,",
    titleHighlight: "the system works.",
    b1Title: "Your team stops doing mechanical work",
    b1Desc: "We reply to messages, update CRMs, qualify leads. Everything that eats time without adding real value.",
    b2Title: "See what happens in real time",
    b2Desc: "A centralized dashboard tells you where your clients come from and how much each one costs.",
    b3Title: "Stop losing clients to delays",
    b3Desc: "The system replies in seconds, any day, any time. The lead comes in and the process starts automatically."
  }
};

export const Benefits = ({ lang = "es" }: { lang?: "es" | "en" }) => {
  const t = CONTENT[lang];

  return (
    <SectionWrapper size="large">
      <div className="flex flex-col items-center text-center mb-20 md:mb-32">
        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-text-primary text-balance max-w-4xl leading-[1.05]">
          {t.title} <span className="text-accent italic">{t.titleHighlight}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
        
        {/* Benefit 1 */}
        <div className="flex flex-col gap-6 items-center text-center px-4">
          <div className="w-full aspect-[4/3] rounded-3xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
            <span className="font-display font-bold text-6xl text-white/10">01</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-text-primary">{t.b1Title}</h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            {t.b1Desc}
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="flex flex-col gap-6 items-center text-center px-4 md:mt-16">
          <div className="w-full aspect-[4/3] rounded-3xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
            <span className="font-display font-bold text-6xl text-white/10">02</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-text-primary">{t.b2Title}</h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            {t.b2Desc}
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col gap-6 items-center text-center px-4 md:mt-32">
          <div className="w-full aspect-[4/3] rounded-3xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
            <span className="font-display font-bold text-6xl text-white/10">03</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-text-primary">{t.b3Title}</h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            {t.b3Desc}
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
};
