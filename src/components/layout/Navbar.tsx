"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { List, X, Translate } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/Button";

import { Logo } from "../ui/Logo";

const NAV_LINKS = {
  es: [
    { href: "/", label: "Inicio" },
    { href: "/smma", label: "SMMA" },
    { href: "/automatizacion", label: "Automatización" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/smma", label: "SMMA" },
    { href: "/en/automatizacion", label: "Automation" },
  ]
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname() || "";
  const router = useRouter();

  const isEn = pathname.startsWith('/en');
  const lang = isEn ? 'en' : 'es';
  const links = NAV_LINKS[lang];

  const handleLanguageSwitch = () => {
    if (isEn) {
      // switch to ES
      const newPath = pathname.replace(/^\/en/, '') || '/';
      router.push(newPath);
    } else {
      // switch to EN
      const newPath = `/en${pathname === '/' ? '' : pathname}`;
      router.push(newPath);
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="flex items-center justify-between w-full max-w-4xl px-4 py-3 rounded-full bg-surface/80 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl">
          <Link href={isEn ? "/en" : "/"} className="pl-2">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "bg-white/10 text-text-primary"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleLanguageSwitch}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors uppercase tracking-widest rounded-full hover:bg-white/5"
            >
              <Translate className="w-4 h-4" />
              {isEn ? 'ES' : 'EN'}
            </button>
            <Button 
              variant="primary" 
              icon={false} 
              className="py-2.5 px-6 font-semibold"
              data-cal-link="serranonevox/descubrimiento"
              data-cal-config='{"layout":"month_view"}'
            >
              {isEn ? "Book a Call" : "Agendar"}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <List className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-3xl flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-12">
              <button
                onClick={handleLanguageSwitch}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-text-primary bg-white/5 rounded-full ring-1 ring-white/10"
              >
                <Translate className="w-4 h-4" />
                {isEn ? 'Ver en Español' : 'View in English'}
              </button>
              <button
                className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-center mt-12">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-display font-medium text-text-primary"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="mt-8"
              >
                <Button 
                  className="w-full text-lg py-4"
                  onClick={() => setIsOpen(false)}
                  data-cal-link="serranonevox/descubrimiento"
                  data-cal-config='{"layout":"month_view"}'
                >
                  {isEn ? "Book Strategy Session" : "Agendar consultoría"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
