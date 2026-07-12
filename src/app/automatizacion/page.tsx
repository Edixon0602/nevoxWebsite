import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Robot, Infinity, ChartBar, Gear } from "@phosphor-icons/react/dist/ssr";

export default function Automatizacion() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-0 overflow-hidden">
        
        {/* IA Hero */}
        <SectionWrapper size="hero" className="relative flex items-center">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-end opacity-20">
            <div className="absolute w-[60vw] h-[60vw] rounded-full bg-accent/20 blur-[100px] mix-blend-screen" />
          </div>
          
          <div className="relative z-10 flex flex-col gap-6 max-w-4xl">
            <span className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] bg-white/5 text-text-secondary ring-1 ring-white/10 w-fit">
              IA & Automatización
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-text-primary leading-[1.1]">
              Tu negocio en piloto <span className="text-accent italic">automático</span>.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-balance max-w-2xl mb-4">
              Reemplaza las tareas repetitivas por infraestructura inteligente. Conectamos tus herramientas, automatizamos procesos e implementamos IA para que tu equipo se enfoque en lo que importa.
            </p>
            <div className="flex items-center gap-4">
              <Button className="py-4 px-8">Explorar automatización</Button>
            </div>
          </div>
        </SectionWrapper>

        {/* Automation Services Grid */}
        <SectionWrapper size="default" className="bg-surface/30">
          <div className="flex flex-col mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary max-w-2xl">
              Nuestras Soluciones Tecnológicas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <Robot weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Agentes Inteligentes (FlowBot)</h3>
              <p className="text-text-secondary leading-relaxed">
                Entrenamos agentes de IA conversacionales con tus datos. Resuelven dudas, califican leads y agendan citas 24/7 sin interacción humana.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <Infinity weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Automatización de Procesos (RPA)</h3>
              <p className="text-text-secondary leading-relaxed">
                Conectamos tu CRM, correo, ERP y herramientas de marketing para que la información fluya sola y se eliminen los errores de tipeo o retrasos.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <ChartBar weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Business Intelligence & Dashboards</h3>
              <p className="text-text-secondary leading-relaxed">
                Centralizamos tus datos de ventas, marketing y operaciones en dashboards visuales en tiempo real para decisiones basadas en datos.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <Gear weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Consultoría en IA</h3>
              <p className="text-text-secondary leading-relaxed">
                Evaluamos la viabilidad técnica de tu empresa y trazamos una hoja de ruta para implementar inteligencia artificial en tus procesos core.
              </p>
            </Card>

          </div>
        </SectionWrapper>

      </div>

      <Footer />
    </main>
  );
}
