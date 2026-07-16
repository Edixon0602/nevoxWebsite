import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

const CONTENT = {
  es: {
    title: "La mayoría de negocios pierden clientes sin darse cuenta.",
    description: "Alguien llena un formulario a las 11 PM. Nadie responde hasta el lunes. Para entonces ya contrató a otro. Eso no es mala suerte, es una operación con huecos.",
    pain1Title: "Siempre apagando incendios",
    pain1Desc: "Cuando el equipo opera en modo reactivo, escalar es imposible. Cada nuevo cliente agrega caos en vez de caja.",
    pain2Title: "Leads que se enfrían solos",
    pain2Desc: "Sin un sistema que responda rápido y haga seguimiento, la mayoría de prospectos se pierden antes del primer contacto real."
  },
  en: {
    title: "Most businesses lose clients without even noticing.",
    description: "Someone fills out a form at 11 PM. Nobody replies until Monday. By then, they've hired someone else. That's not bad luck, it's a leaky operation.",
    pain1Title: "Always putting out fires",
    pain1Desc: "When your team operates in reactive mode, scaling is impossible. Every new client adds chaos instead of cash flow.",
    pain2Title: "Leads going cold",
    pain2Desc: "Without a system that replies instantly and follows up, most prospects are lost before the first real contact."
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
