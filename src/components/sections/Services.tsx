import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Card } from "../ui/Card";
import { ArrowRight, Code, Robot } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const CONTENT = {
  es: {
    title: "Servicios e infraestructura tecnológica.",
    software: {
      title: "Desarrollo de Software",
      desc: "Construimos aplicaciones web, portales de clientes y arquitecturas cloud con Next.js, Node.js y TypeScript.",
      list: ['Aplicaciones web y plataformas a medida', 'Portales de clientes y paneles internos', 'Arquitecturas cloud y microservicios', 'Diseño de APIs e integraciones seguras'],
      cta: "Conocer más sobre software",
      href: "/automatizacion"
    },
    automation: {
      title: "Automatización & IA",
      desc: "Conectamos herramientas existentes y desplegamos agentes de IA para procesar información y ejecutar acciones 24/7.",
      list: ['Agentes conversacionales especializados (FlowBot)', 'Automatización de flujos de trabajo con n8n', 'Sincronización de bases de datos, CRM y ERP', 'Monitoreo de datos y tableros en tiempo real'],
      cta: "Explorar automatización & IA",
      href: "/automatizacion"
    }
  },
  en: {
    title: "Services & technology infrastructure.",
    software: {
      title: "Software Engineering",
      desc: "We build web applications, client portals, and cloud architectures with Next.js, Node.js, and TypeScript.",
      list: ['Custom web apps and platforms', 'Client portals and internal dashboards', 'Cloud architectures and microservices', 'Secure API design and integrations'],
      cta: "Learn more about software",
      href: "/en/automatizacion"
    },
    automation: {
      title: "Automation & AI",
      desc: "We connect existing toolchains and deploy AI agents to process data and execute operational tasks 24/7.",
      list: ['Specialized conversational agents (FlowBot)', 'Workflow automation via n8n', 'Database, CRM, and ERP synchronization', 'Real-time telemetry and reporting'],
      cta: "Explore automation & AI",
      href: "/en/automatizacion"
    }
  }
};

export const Services = ({ lang = "es" }: { lang?: "es" | "en" }) => {
  const t = CONTENT[lang];

  return (
    <SectionWrapper size="default">
      <div id="servicios" className="flex flex-col mb-12 md:mb-16">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary max-w-2xl text-balance">
          {t.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Software Development Vertical */}
        <Card className="group h-full" innerClassName="flex flex-col h-full justify-between gap-8 p-8 md:p-10">
          <div className="flex flex-col gap-6">
            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <Code weight="duotone" className="w-6 h-6 text-text-primary" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary">{t.software.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {t.software.desc}
              </p>
            </div>
            <ul className="flex flex-col gap-2.5 mt-2">
              {t.software.list.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="text-accent font-mono text-xs">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <Link href={t.software.href} className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-accent transition-colors pt-6 border-t border-white/5">
            {t.software.cta}
            <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Card>

        {/* Automation & AI Vertical */}
        <Card className="group h-full" innerClassName="flex flex-col h-full justify-between gap-8 p-8 md:p-10">
          <div className="flex flex-col gap-6">
            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <Robot weight="duotone" className="w-6 h-6 text-accent" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary">{t.automation.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {t.automation.desc}
              </p>
            </div>
            <ul className="flex flex-col gap-2.5 mt-2">
              {t.automation.list.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="text-accent font-mono text-xs">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <Link href={t.automation.href} className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-accent transition-colors pt-6 border-t border-white/5">
            {t.automation.cta}
            <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Card>

      </div>
    </SectionWrapper>
  );
};
