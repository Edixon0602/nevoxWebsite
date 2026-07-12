import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

const STEPS = [
  {
    number: "01",
    title: "Auditoría Profunda",
    desc: "Analizamos tu presencia digital, cuellos de botella operativos y sistemas actuales para encontrar fugas de capital y tiempo.",
  },
  {
    number: "02",
    title: "Estrategia e Integración",
    desc: "Diseñamos un sistema a medida: embudos de venta, automatizaciones internas y chatbots conectados a tu CRM.",
  },
  {
    number: "03",
    title: "Ejecución y Escalamiento",
    desc: "Lanzamos campañas con IA, monitoreamos las métricas en tiempo real e iteramos para maximizar el retorno de inversión.",
  },
];

export const HowItWorks = () => {
  return (
    <SectionWrapper size="default" className="bg-surface/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Sticky Context */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Tu negocio como un motor de precisión.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-md">
            No somos una agencia tradicional que te entrega reportes vacíos. Implementamos infraestructura técnica y comercial para que crezcas.
          </p>
        </div>

        {/* Right: Scrolling Steps */}
        <div className="flex flex-col gap-12 md:gap-16">
          {STEPS.map((step, index) => (
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
