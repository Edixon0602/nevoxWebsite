import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "../ui/Logo";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-surface mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Logo className="h-8" />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Agencia digital especializada en hacer crecer tu negocio mientras duermes mediante automatización, IA y marketing de alto rendimiento.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-text-primary font-medium">Servicios</h4>
            <div className="flex flex-col gap-4">
              <Link href="/smma" className="text-text-secondary hover:text-accent transition-colors text-sm">
                Marketing & RRSS
              </Link>
              <Link href="/automatizacion" className="text-text-secondary hover:text-accent transition-colors text-sm">
                Automatización & IA
              </Link>
              <Link href="/desarrollo-web" className="text-text-secondary hover:text-accent transition-colors text-sm">
                Desarrollo Web
              </Link>
              <Link href="/seo" className="text-text-secondary hover:text-accent transition-colors text-sm">
                Posicionamiento SEO
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-text-primary font-medium">Redes</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="group inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors text-sm">
                Instagram
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#" className="group inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors text-sm">
                LinkedIn
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#" className="group inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors text-sm">
                Twitter / X
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-text-primary font-medium">Legal</h4>
            <div className="flex flex-col gap-4">
              <Link href="/privacidad" className="text-text-secondary hover:text-accent transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-text-secondary hover:text-accent transition-colors text-sm">
                Términos y Condiciones
              </Link>
            </div>
          </div>

        </div>

        <div className="w-full mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-tertiary text-xs">
            © {new Date().getFullYear()} Nevox. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-text-tertiary text-xs">Based in LATAM, working globally.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
