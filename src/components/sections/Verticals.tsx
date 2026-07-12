import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import Link from "next/link";
import { Button } from "../ui/Button";

export const Verticals = () => {
  return (
    <SectionWrapper size="default">
      <div className="flex flex-col lg:flex-row items-stretch gap-8 min-h-[600px]">
        
        {/* Left: SMMA */}
        <div className="flex-1 flex flex-col p-12 lg:p-16 rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 group relative overflow-hidden transition-all hover:bg-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col h-full justify-between gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary">Agencia de Marketing</span>
              <h3 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">SMMA & Growth</h3>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                Domina tu mercado con contenido que convierte, anuncios de precisión y embudos optimizados.
              </p>
            </div>
            
            <Link href="/smma" className="mt-auto self-start">
              <Button variant="ghost">Ver servicios de marketing</Button>
            </Link>
          </div>
        </div>

        {/* Right: Automation */}
        <div className="flex-1 flex flex-col p-12 lg:p-16 rounded-[2.5rem] bg-accent/5 ring-1 ring-accent/20 group relative overflow-hidden transition-all hover:bg-accent/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:scale-110" />
          
          <div className="relative z-10 flex flex-col h-full justify-between gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Inteligencia Artificial</span>
              <h3 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">Tech & Data</h3>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                Desarrollo web a medida, chatbots inteligentes y automatización de procesos RPA para escalar sin fricción.
              </p>
            </div>
            
            <Link href="/automatizacion" className="mt-auto self-start">
              <Button variant="primary">Ver servicios tech</Button>
            </Link>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
