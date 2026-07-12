import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ShareNetwork, PresentationChart, Megaphone, Browsers } from "@phosphor-icons/react/dist/ssr";

export default function SMMA() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-0 overflow-hidden">
        
        {/* SMMA Hero */}
        <SectionWrapper size="hero" className="relative flex items-center">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-end opacity-20">
            <div className="absolute w-[60vw] h-[60vw] rounded-full bg-accent/20 blur-[100px] mix-blend-screen" />
          </div>
          
          <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
            <span className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] bg-white/5 text-text-secondary ring-1 ring-white/10 w-fit">
              Agencia de Marketing & Growth
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-text-primary leading-[1.1]">
              Atrae, convence y <span className="text-accent italic">convierte</span>.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-balance max-w-2xl mb-4">
              Dejamos de lado las métricas de vanidad. Diseñamos embudos de venta, pauta publicitaria y estrategias de contenido enfocadas en generar ingresos predecibles.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                className="py-4 px-8"
                data-cal-link="serranonevox/descubrimiento"
                data-cal-config='{"layout":"month_view"}'
              >
                Auditoría gratuita
              </Button>
            </div>
          </div>
        </SectionWrapper>

        {/* SMMA Services Grid */}
        <SectionWrapper size="default" className="bg-surface/30">
          <div className="flex flex-col mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary max-w-2xl">
              Nuestro enfoque de marketing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <ShareNetwork weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Gestión de Redes & Contenido</h3>
              <p className="text-text-secondary leading-relaxed">
                Transformamos tu presencia social en un activo de ventas. Creamos contenido magnético que educa a tu cliente ideal y posiciona tu autoridad de marca.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <Megaphone weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Campañas SEM / Meta Ads</h3>
              <p className="text-text-secondary leading-relaxed">
                Inversión publicitaria milimétrica. Compramos tráfico altamente calificado y lo dirigimos hacia ofertas irresistibles para maximizar el ROAS.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <Browsers weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Desarrollo Web & Landing Pages</h3>
              <p className="text-text-secondary leading-relaxed">
                Tu sitio web debe ser tu mejor vendedor. Diseñamos experiencias ultra-optimizadas para conversión con un diseño premium que genera confianza instantánea.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <PresentationChart weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Posicionamiento SEO</h3>
              <p className="text-text-secondary leading-relaxed">
                Capturamos la demanda existente. Posicionamos tu negocio en los primeros resultados para que te encuentren exactamente cuando están listos para comprar.
              </p>
            </Card>

          </div>
        </SectionWrapper>

      </div>

      <Footer />
    </main>
  );
}
