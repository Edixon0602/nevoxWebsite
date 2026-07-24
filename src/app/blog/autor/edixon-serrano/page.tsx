import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AuthorBio } from '@/components/layout/AuthorBio'

export const metadata: Metadata = {
  title: 'Edixon Serrano — Founder & CEO | Nevox',
  description: 'Conoce más sobre Edixon Serrano, especialista en marketing, automatización e IA en Venezuela y fundador de Nevox.',
}

export default function AuthorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Edixon Serrano",
    "jobTitle": "Founder & CEO de Nevox",
    "image": "https://nevox.pro/authors/edixon-serrano.jpg",
    "url": "https://nevox.pro/blog/autor/edixon-serrano",
    "sameAs": [
      "https://www.linkedin.com/in/edixon-serrano",
      "https://www.instagram.com/sedev06/",
      "https://www.tiktok.com/@sedev06"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Nevox",
      "url": "https://nevox.pro"
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-0 overflow-hidden">
        <SectionWrapper size="default" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-3xl mx-auto w-full">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-12">
              Acerca del Autor
            </h1>
            
            <div className="bg-surface/30 rounded-3xl p-8 md:p-12 border border-white/5">
              <AuthorBio />
              
              <div className="mt-12 space-y-6 text-text-secondary leading-relaxed">
                <p>
                  Con años de experiencia en el ecosistema digital, mi objetivo principal es ayudar a las empresas en Venezuela y LATAM a escalar operaciones integrando tecnología avanzada con estrategias de marketing probadas.
                </p>
                <p>
                  En Nevox, diseño e implemento sistemas de captación de clientes, embudos automatizados de ventas y agentes de inteligencia artificial que permiten a los negocios operar de manera más eficiente y sin depender 100% de la intervención humana.
                </p>
                <p>
                  Mi filosofía es simple: la tecnología no debe ser complicada, debe ser rentable. Cada herramienta que implementamos tiene un único propósito: generar más ingresos o ahorrar más tiempo.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  )
}
