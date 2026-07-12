import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Card } from "../ui/Card";
import { ArrowRight, ShareNetwork, Robot, ChartLineUp, AppWindow } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const Services = () => {
  return (
    <SectionWrapper size="default">
      <div className="flex flex-col mb-16 md:mb-24">
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Nuestro Ecosistema</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary max-w-2xl text-balance">
          Dos pilares diseñados para el crecimiento sistemático.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* SMMA Vertical */}
        <Card className="group h-full" innerClassName="flex flex-col h-full justify-between gap-12">
          <div className="flex flex-col gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ring-1 ring-white/10">
              <ShareNetwork weight="duotone" className="w-7 h-7 text-text-primary" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-3xl font-bold text-text-primary">Marketing & Contenido</h3>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                Atraemos y nutrimos a tu audiencia con contenido estratégico, pauta optimizada y embudos de conversión probados.
              </p>
            </div>
            <ul className="flex flex-col gap-3 mt-4">
              {['Gestión de Redes Sociales', 'Campañas SEM / Meta Ads', 'Creación de Contenido', 'Email Marketing'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <Link href="/smma" className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors pt-4 border-t border-white/5">
            Explorar servicios de Marketing
            <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Card>

        {/* Automation Vertical */}
        <Card className="group h-full" innerClassName="flex flex-col h-full justify-between gap-12">
          <div className="flex flex-col gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ring-1 ring-white/10">
              <Robot weight="duotone" className="w-7 h-7 text-accent" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-3xl font-bold text-text-primary">IA & Automatización</h3>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                Reducimos el trabajo manual al mínimo mediante agentes conversacionales, integraciones de software y análisis de datos en tiempo real.
              </p>
            </div>
            <ul className="flex flex-col gap-3 mt-4">
              {['Chatbots Inteligentes (FlowBot)', 'Automatización de Procesos (RPA)', 'Dashboards y Business Intelligence', 'Consultoría Tecnológica'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <Link href="/automatizacion" className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors pt-4 border-t border-white/5">
            Explorar IA & Automatización
            <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Card>

      </div>
    </SectionWrapper>
  );
};
