"use client";

import * as React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Plus, Minus } from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence } from "motion/react";

const FAQS = [
  {
    q: "¿En cuánto tiempo empezamos a ver resultados?",
    a: "Depende del servicio. Las automatizaciones internas muestran ROI en 48 horas (tiempo ahorrado). Las campañas de marketing toman entre 15 a 30 días en calibrarse para ventas predecibles.",
  },
  {
    q: "¿Qué pasa si ya tengo un equipo de marketing?",
    a: "Perfecto. Entramos como una capa tecnológica y estratégica. Tu equipo creativo hace lo suyo, nosotros nos encargamos de que la distribución y la automatización detrás de escena escalen sin romperse.",
  },
  {
    q: "¿Tengo que firmar contratos a largo plazo?",
    a: "No. Trabajamos mes a mes con la confianza de que los resultados te mantendrán con nosotros. Si no generamos valor, no hay por qué forzar una relación a largo plazo.",
  },
  {
    q: "¿Cómo funciona FlowBot?",
    a: "Es un agente de IA entrenado exclusivamente con los datos de tu empresa. Responde como tú, conoce tu inventario, califica leads 24/7 y se conecta directo a tu CRM para agendar reuniones.",
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
