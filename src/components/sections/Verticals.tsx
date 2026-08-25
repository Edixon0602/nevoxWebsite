import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import Link from "next/link";
import { Button } from "../ui/Button";

export const Verticals = () => {
  return (
    <SectionWrapper size="default">
      <div className="flex flex-col lg:flex-row items-stretch gap-8 min-h-[600px]">
        
        {/* Left: Software Development */}
        <div className="flex-1 flex flex-col p-8 md:p-12 lg:p-14 rounded-2xl bg-white/[0.03] border border-white/10 group relative overflow-hidden transition-all hover:bg-white/[0.05]">
          <div className="relative z-10 flex flex-col h-full justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Software a Medida</h3>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                Plataformas web, aplicaciones SaaS, sistemas de gestión y paneles a medida construidos para responder a las necesidades exactas de tu operación.
              </p>
            </div>
            
            <Link href="/automatizacion" className="mt-auto self-start">
              <Button variant="ghost">Ver soluciones de software</Button>
            </Link>
          </div>
        </div>

        {/* Right: Automation & AI */}
        <div className="flex-1 flex flex-col p-8 md:p-12 lg:p-14 rounded-2xl bg-accent/[0.03] border border-accent/20 group relative overflow-hidden transition-all hover:bg-accent/[0.06]">
          <div className="relative z-10 flex flex-col h-full justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">Automatización & IA</h3>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                Agentes inteligentes, flujos de trabajo autónomos y pipelines de datos para que tu negocio funcione sin cuellos de botella humanos.
              </p>
            </div>
            
            <Link href="/automatizacion" className="mt-auto self-start">
              <Button variant="primary">Ver servicios de IA</Button>
            </Link>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
