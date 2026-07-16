import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

const CONTENT = {
  es: {
    title: "Así trabajamos. Sin vueltas.",
    subtitle: "Nos metemos en el negocio, encontramos los huecos y los cerramos. Nada de estrategias genéricas.",
    steps: [
      {
        number: "01",
        title: "Miramos lo que tienes",
        desc: "En 30 minutos entendemos tu operación, tus herramientas y dónde se está yendo el dinero o el tiempo.",
      },
      {
        number: "02",
        title: "Diseñamos lo que necesitas",
        desc: "No templates. Construimos el sistema exacto para tu negocio: automatizaciones, embudos, agentes de IA.",
      },
      {
        number: "03",
        title: "Lo ponemos a correr",
        desc: "Implementamos, conectamos tus herramientas y te entregamos algo que funciona. No un PDF con recomendaciones.",
      },
    ]
  },
  en: {
    title: "How we work. No BS.",
    subtitle: "We dive into your business, find the leaks, and close them. No generic strategies.",
    steps: [
      {
        number: "01",
        title: "We look at what you have",
        desc: "In 30 minutes, we understand your operation, your tools, and where time or money is bleeding.",
      },
      {
        number: "02",
        title: "We design what you need",
        desc: "No templates. We build the exact system for your business: automations, funnels, AI agents.",
      },
      {
        number: "03",
        title: "We make it run",
        desc: "We implement, connect your tools, and hand you something that works. Not a PDF with recommendations.",
      },
    ]
  }
};

export const HowItWorks = ({ lang = "es" }: { lang?: "es" | "en" }) => {
  const t = CONTENT[lang];

  return (
    <SectionWrapper size="default" className="bg-surface/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Sticky Context */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            {t.title}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-md">
            {t.subtitle}
          </p>
        </div>

        {/* Right: Scrolling Steps */}
        <div className="flex flex-col gap-12 md:gap-16">
          {t.steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
              <span className="font-display text-5xl md:text-6xl font-bold text-white/5 group-hover:text-accent/30 transition-colors tabular-nums tracking-tighter">
                {step.number}
              </span>
              <div className="flex flex-col gap-4 mt-2">
                <h3 className="font-display text-2xl font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};
