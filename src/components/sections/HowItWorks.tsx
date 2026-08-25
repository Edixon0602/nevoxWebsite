import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

const CONTENT = {
  es: {
    title: "Metodología de implementación.",
    subtitle: "Un proceso estructurado desde el análisis de arquitectura hasta el despliegue en producción.",
    steps: [
      {
        number: "01",
        title: "Diagnóstico y levantamiento técnico",
        desc: "Analizamos tu stack tecnológico, bases de datos y flujos operativos para identificar cuellos de botella y oportunidades de automatización.",
      },
      {
        number: "02",
        title: "Diseño y arquitectura",
        desc: "Definimos la arquitectura del software, esquemas de bases de datos, flujos de n8n y contratos de API a la medida de tus requerimientos.",
      },
      {
        number: "03",
        title: "Desarrollo y despliegue",
        desc: "Construimos, conectamos e implementamos en entornos de producción con pruebas exhaustivas y documentación técnica completa.",
      },
    ]
  },
  en: {
    title: "Implementation methodology.",
    subtitle: "A structured workflow from architecture discovery to production deployment.",
    steps: [
      {
        number: "01",
        title: "Technical audit & discovery",
        desc: "We inspect your technology stack, database schemas, and operational pipelines to identify automation bottlenecks.",
      },
      {
        number: "02",
        title: "Architecture & system design",
        desc: "We define software architecture, database models, n8n workflows, and API contracts tailored to your exact operational requirements.",
      },
      {
        number: "03",
        title: "Development & deployment",
        desc: "We build, integrate, and deploy production systems with end-to-end testing and comprehensive technical documentation.",
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
