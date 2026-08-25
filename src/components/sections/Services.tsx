import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Card } from "../ui/Card";
import { ArrowRight, Code, Robot } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const CONTENT = {
  es: {
    tag: "Nuestras Soluciones",
    title: "Infraestructura tecnológica diseñada para escalar.",
    software: {
      title: "Desarrollo de Software & Web",
      desc: "Creamos software a medida, plataformas SaaS, portales de clientes y aplicaciones web robustas con tecnologías modernas.",
      list: ['Aplicaciones Web & SaaS a Medida', 'Portales de Clientes y Paneles Internos', 'Arquitecturas Escalables (Next.js / Cloud)', 'APIs & Microservicios'],
      cta: "Conocer más sobre Software",
      href: "/automatizacion"
    },
    automation: {
      title: "Automatización & Agentes IA",
      desc: "Eliminamos el trabajo manual y la fricción operativa mediante flujos automatizados (n8n/Make) y agentes inteligentes conectados a tu negocio.",
      list: ['Agentes de IA Conversacionales (FlowBot)', 'Automatización de Flujos (n8n / RPA)', 'Sincronización de CRM, ERP & Bases de Datos', 'Dashboards y Business Intelligence'],
      cta: "Explorar Automatización & IA",
      href: "/automatizacion"
    }
  },
  en: {
    tag: "Our Solutions",
    title: "Technology infrastructure engineered to scale.",
    software: {
      title: "Custom Software & Web Development",
      desc: "We build custom software, SaaS platforms, client portals, and resilient web applications using modern tech stacks.",
      list: ['Custom Web Apps & SaaS Platforms', 'Client Portals & Internal Dashboards', 'Scalable Architectures (Next.js / Cloud)', 'APIs & Microservices'],
      cta: "Learn more about Software",
      href: "/en/automatizacion"
    },
    automation: {
      title: "Process Automation & AI Agents",
      desc: "We eliminate manual work and operational bottlenecks with end-to-end workflows (n8n/Make) and smart AI agents connected to your stack.",
      list: ['Conversational AI Agents (FlowBot)', 'Workflow Automations (n8n / RPA)', 'CRM, ERP & Database Integrations', 'Real-time BI & Dashboards'],
      cta: "Explore Automation & AI",
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
        
        {/* Software Development Vertical */}
        <Card className="group h-full" innerClassName="flex flex-col h-full justify-between gap-12">
          <div className="flex flex-col gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ring-1 ring-white/10">
              <Code weight="duotone" className="w-7 h-7 text-text-primary" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-3xl font-bold text-text-primary">{t.software.title}</h3>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                {t.software.desc}
              </p>
            </div>
            <ul className="flex flex-col gap-3 mt-4">
              {t.software.list.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <Link href={t.software.href} className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors pt-4 border-t border-white/5">
            {t.software.cta}
            <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Card>

        {/* Automation & AI Vertical */}
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
