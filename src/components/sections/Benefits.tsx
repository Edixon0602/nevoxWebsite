import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

const CONTENT = {
  es: {
    title: "Resultados operativos directos.",
    b1Title: "Eliminación de tareas manuales",
    b1Desc: "Sincronización continua de inventarios, registros y órdenes entre CRM, bases de datos y herramientas internas sin errores de tipeo.",
    b2Title: "Atención y captura continua",
    b2Desc: "Agentes de IA capaces de responder consultas técnicas y comerciales, procesar datos y agendar reuniones las 24 horas del día.",
    b3Title: "Visibilidad y control en tiempo real",
    b3Desc: "Métricas operativas consolidadas en paneles visuales para evaluar rendimiento, costos y tiempos de respuesta de forma transparente."
  },
  en: {
    title: "Direct operational impact.",
    b1Title: "Manual task elimination",
    b1Desc: "Continuous synchronization of inventory, records, and orders across CRM, databases, and internal tools without human error.",
    b2Title: "Continuous intake & processing",
    b2Desc: "AI agents capable of answering technical and commercial queries, processing data, and scheduling appointments 24/7.",
    b3Title: "Real-time visibility & control",
    b3Desc: "Consolidated operational telemetry in visual dashboards to track performance, costs, and response times transparently."
  }
};

export const Benefits = ({ lang = "es" }: { lang?: "es" | "en" }) => {
  const t = CONTENT[lang];

  return (
    <SectionWrapper size="large">
      <div className="flex flex-col mb-16 md:mb-20">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary text-balance max-w-2xl">
          {t.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Benefit 1 */}
        <div className="flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-semibold text-accent tracking-wider">01</span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">{t.b1Title}</h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t.b1Desc}
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-semibold text-accent tracking-wider">02</span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">{t.b2Title}</h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t.b2Desc}
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-semibold text-accent tracking-wider">03</span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">{t.b3Title}</h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t.b3Desc}
            </p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
