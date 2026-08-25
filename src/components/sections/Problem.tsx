import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

const CONTENT = {
  es: {
    title: "Los procesos manuales y los silos de datos limitan la capacidad de escalar.",
    description: "Cuando la información vive aislada entre hojas de cálculo, correos y sistemas desarticulados, cada nuevo cliente aumenta la carga operativa en lugar del margen de beneficio.",
    pain1Title: "Operaciones fragmentadas",
    pain1Desc: "El equipo pierde horas trasladando datos manualmente entre herramientas incompatibles y corrigiendo errores de entrada.",
    pain2Title: "Tiempos de respuesta lentos",
    pain2Desc: "Las solicitudes de clientes e incidentes internos quedan en espera durante horas por falta de procesamiento y enrutamiento automatizado."
  },
  en: {
    title: "Manual processes and data silos constrain business growth.",
    description: "When information is scattered across spreadsheets, inboxes, and disconnected systems, scaling adds operational overhead rather than profit margin.",
    pain1Title: "Fragmented operations",
    pain1Desc: "Teams spend hours manually moving data between incompatible tools and fixing entry errors.",
    pain2Title: "Slow turnaround times",
    pain2Desc: "Customer requests and operational tasks stall for hours due to a lack of automated processing and routing."
  }
};

export const Problem = ({ lang = "es" }: { lang?: "es" | "en" }) => {
  const t = CONTENT[lang];

  return (
    <SectionWrapper size="large">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Col: Typographic statement */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary text-balance leading-[1.1]">
            {t.title}
          </h2>
        </div>

        {/* Right Col: Pain points expansion */}
        <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-8 pt-2 md:pt-4">
          <p className="text-text-secondary text-lg leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col gap-6 pl-6 border-l-2 border-accent/20">
            <div className="flex flex-col gap-1.5">
              <span className="font-display font-semibold text-text-primary">{t.pain1Title}</span>
              <span className="text-sm text-text-secondary">{t.pain1Desc}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-display font-semibold text-text-primary">{t.pain2Title}</span>
              <span className="text-sm text-text-secondary">{t.pain2Desc}</span>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
