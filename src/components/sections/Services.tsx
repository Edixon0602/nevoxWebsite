import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Card } from "../ui/Card";
import { ArrowRight, ShareNetwork, Robot } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const CONTENT = {
  es: {
    tag: "Nuestro Ecosistema",
    title: "Dos pilares diseñados para el crecimiento sistemático.",
    marketing: {
      title: "Marketing & Contenido",
      desc: "Atraemos y nutrimos a tu audiencia con contenido estratégico, pauta optimizada y embudos de conversión probados.",
      list: ['Gestión de Redes Sociales', 'Campañas SEM / Meta Ads', 'Creación de Contenido', 'Email Marketing'],
      cta: "Explorar servicios de Marketing",
      href: "/smma"
    },
    automation: {
      title: "IA & Automatización",
      desc: "Reducimos el trabajo manual al mínimo mediante agentes conversacionales, integraciones de software y análisis de datos en tiempo real.",
      list: ['Chatbots Inteligentes (FlowBot)', 'Automatización de Procesos (RPA)', 'Dashboards y Business Intelligence', 'Consultoría Tecnológica'],
      cta: "Explorar IA & Automatización",
      href: "/automatizacion"
    }
  },
  en: {
    tag: "Our Ecosystem",
    title: "Two pillars designed for systematic growth.",
    marketing: {
      title: "Marketing & Content",
      desc: "We attract and nurture your audience with strategic content, optimized ads, and proven conversion funnels.",
      list: ['Social Media Management', 'SEM / Meta Ads Campaigns', 'Content Creation', 'Email Marketing'],
      cta: "Explore Marketing Services",
      href: "/en/smma"
    },
    automation: {
      title: "AI & Automation",
      desc: "We reduce manual work to a minimum using conversational agents, software integrations, and real-time data analysis.",
      list: ['Intelligent Chatbots (FlowBot)', 'Process Automation (RPA)', 'Dashboards & Business Intelligence', 'Tech Consulting'],
      cta: "Explore AI & Automation",
      href: "/en/automatizacion"
    }
  }
};

export const Services = ({ lang = "es" }: { lang?: "es" | "en" }) => {
  const t = CONTENT[lang];

  return (
    <SectionWrapper size="default">
      <div id="servicios" className="flex flex-col mb-16 md:mb-24">
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.tag}</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary max-w-2xl text-balance">
          {t.title}
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
              <h3 className="font-display text-3xl font-bold text-text-primary">{t.marketing.title}</h3>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                {t.marketing.desc}
              </p>
            </div>
            <ul className="flex flex-col gap-3 mt-4">
              {t.marketing.list.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <Link href={t.marketing.href} className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors pt-4 border-t border-white/5">
            {t.marketing.cta}
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
              <h3 className="font-display text-3xl font-bold text-text-primary">{t.automation.title}</h3>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                {t.automation.desc}
              </p>
            </div>
            <ul className="flex flex-col gap-3 mt-4">
              {t.automation.list.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <Link href={t.automation.href} className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors pt-4 border-t border-white/5">
            {t.automation.cta}
            <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Card>

      </div>
    </SectionWrapper>
  );
};
