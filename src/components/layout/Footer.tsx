import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "../ui/Logo";

const CONTENT = {
  es: {
    desc: "Agencia digital especializada en hacer crecer tu negocio mientras duermes mediante automatización, IA y marketing de alto rendimiento.",
    services: "Servicios",
    contact: "Contacto",
    legal: "Legal",
    privacy: "Política de Privacidad",
    terms: "Términos y Condiciones",
    rights: "Todos los derechos reservados.",
    based: "Basados en LATAM, trabajando globalmente.",
    links: {
      smma: "/smma",
      automation: "/automatizacion",
      privacy: "/privacidad",
      terms: "/terminos"
    }
  },
  en: {
    desc: "Digital agency specializing in growing your business while you sleep through automation, AI, and high-performance marketing.",
    services: "Services",
    contact: "Contact",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
    rights: "All rights reserved.",
    based: "Based in LATAM, working globally.",
    links: {
      smma: "/en/smma",
      automation: "/en/automatizacion",
      privacy: "/en/privacidad",
      terms: "/en/terminos"
    }
  }
};

export const Footer = ({ lang = "es" }: { lang?: "es" | "en" }) => {
  const t = CONTENT[lang];
  return (
    <footer className="w-full border-t border-white/5 bg-surface mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href={lang === 'en' ? '/en' : '/'} className="inline-block">
              <Logo className="h-8" />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {t.desc}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-text-primary font-medium">{t.services}</h4>
            <div className="flex flex-col gap-4">
              <Link href={t.links.smma} className="text-text-secondary hover:text-accent transition-colors text-sm">
                Marketing & RRSS
              </Link>
              <Link href={t.links.automation} className="text-text-secondary hover:text-accent transition-colors text-sm">
                Automatización & IA
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-text-primary font-medium">{t.contact}</h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/nevoxagency/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors text-sm">
                Instagram
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="mailto:hola@nevox.pro" className="group inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors text-sm">
                Email
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-text-primary font-medium">{t.legal}</h4>
            <div className="flex flex-col gap-4">
              <Link href={t.links.privacy} className="text-text-secondary hover:text-accent transition-colors text-sm">
                {t.privacy}
              </Link>
              <Link href={t.links.terms} className="text-text-secondary hover:text-accent transition-colors text-sm">
                {t.terms}
              </Link>
            </div>
          </div>

        </div>

        <div className="w-full mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-tertiary text-xs">
            © {new Date().getFullYear()} Nevox. {t.rights}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-text-tertiary text-xs">{t.based}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
