import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

export const CaseMetrics = () => {
  return (
    <SectionWrapper size="default" className="border-y border-white/5 bg-[#101010]">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Quote Left */}
        <div className="flex-1 flex flex-col gap-8">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent/40 mb-4">
            <path d="M15.4286 28.5714C17.7954 28.5714 19.7143 26.6525 19.7143 24.2857C19.7143 21.9189 17.7954 20 15.4286 20C13.0617 20 11.1429 21.9189 11.1429 24.2857C11.1429 32 19.7143 33.7143 19.7143 33.7143M34.2857 28.5714C36.6525 28.5714 38.5714 26.6525 38.5714 24.2857C38.5714 21.9189 36.6525 20 34.2857 20C31.9189 20 30 21.9189 30 24.2857C30 32 38.5714 33.7143 38.5714 33.7143" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-text-primary leading-[1.2]">
            "El sistema que construyó Nevox nos permitió absorber el triple de demanda sin contratar personal extra. Simplemente funciona."
          </h3>
          
          <div className="flex flex-col gap-1 mt-4">
            <span className="font-semibold text-text-primary tracking-wide">CEO, Empresa Logística</span>
            <span className="text-text-tertiary text-sm">Escalaron sus ventas 300% en 6 meses</span>
          </div>
        </div>

        {/* Data Right */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 shrink-0">
          <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-display font-bold text-accent">+300%</span>
              <span className="text-sm font-medium text-text-secondary">Crecimiento en Leads</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-display font-bold text-text-primary">-45h</span>
              <span className="text-sm font-medium text-text-secondary">Horas semanales ahorradas</span>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-display font-bold text-text-primary">100%</span>
              <span className="text-sm font-medium text-text-secondary">Tasa de respuesta inmediata</span>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
