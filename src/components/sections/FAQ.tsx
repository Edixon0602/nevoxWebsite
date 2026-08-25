"use client";

import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Plus, Minus } from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence } from "motion/react";

const FAQS = [
  {
    q: "¿En cuánto tiempo se implementa una solución?",
    a: "Las automatizaciones de procesos y agentes de IA muestran impacto y ahorro de tiempo desde la primera semana de despliegue. Los proyectos de desarrollo de software a medida se ejecutan en sprints ágiles con entregas funcionales y continuas.",
  },
  {
    q: "¿Qué tipo de software y plataformas desarrollan?",
    a: "Construimos aplicaciones web modernas (Next.js, React, Node.js, TypeScript), plataformas SaaS, portales de autogestión para clientes, paneles administrativos a medida y arquitecturas cloud conectadas con APIs seguras.",
  },
  {
    q: "¿Cómo se integran las automatizaciones con las herramientas que ya usamos?",
    a: "Nos conectamos de forma no invasiva a tu stack actual (CRMs como HubSpot/Salesforce, ERPs, WhatsApp, bases de datos SQL/NoSQL, hojas de cálculo y pasarelas de pago) mediante webhooks, APIs y flujos estructurados con n8n.",
  },
  {
    q: "¿Cómo funciona un agente de IA como FlowBot?",
    a: "Es un agente inteligente entrenado con la base de conocimientos y reglas de tu negocio. Puede responder preguntas técnicas o comerciales, consultar inventarios, procesar solicitudes y registrar datos en tiempo real las 24 horas del día.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <SectionWrapper size="default">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left: Title */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary text-balance">
            Preguntas frecuentes
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-sm">
            Transparencia total. Si tienes otra duda, la resolveremos en nuestra llamada.
          </p>
        </div>

        {/* Right: Accordion items */}
        <div className="lg:col-span-7 flex flex-col border-t border-white/5">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="flex flex-col border-b border-white/5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full py-6 text-left group"
                >
                  <span className="font-display text-xl font-medium text-text-primary group-hover:text-accent transition-colors pr-8">
                    {faq.q}
                  </span>
                  <div className="text-text-secondary group-hover:text-accent transition-colors shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-text-secondary leading-relaxed pr-8 md:pr-12">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};
