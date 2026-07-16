import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ShareNetwork, PresentationChart, Megaphone, Browsers } from "@phosphor-icons/react/dist/ssr";

export default function SMMA_EN() {
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
              Marketing & Growth Agency
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-text-primary leading-[1.1]">
              Attract, convince and <span className="text-accent italic">convert</span>.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-balance max-w-2xl mb-4">
              We leave vanity metrics behind. We design sales funnels, advertising campaigns, and content strategies focused on generating predictable revenue.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                className="py-4 px-8"
                data-cal-link="serranonevox/descubrimiento"
                data-cal-config='{"layout":"month_view"}'
              >
                Free Audit
              </Button>
            </div>
          </div>
        </SectionWrapper>

        {/* SMMA Services Grid */}
        <SectionWrapper size="default" className="bg-surface/30">
          <div className="flex flex-col mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary max-w-2xl">
              Our marketing approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <ShareNetwork weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Social Media & Content</h3>
              <p className="text-text-secondary leading-relaxed">
                We transform your social presence into a sales asset. We create magnetic content that educates your ideal client and positions your brand authority.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <Megaphone weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">SEM / Meta Ads Campaigns</h3>
              <p className="text-text-secondary leading-relaxed">
                Millimeter-precise ad spend. We buy highly qualified traffic and direct it towards irresistible offers to maximize ROAS.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <Browsers weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Web Development & Landing Pages</h3>
              <p className="text-text-secondary leading-relaxed">
                Your website should be your best salesperson. We design ultra-optimized experiences for conversion with a premium design that generates instant trust.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <PresentationChart weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">SEO Positioning</h3>
              <p className="text-text-secondary leading-relaxed">
                We capture existing demand. We position your business in the top results so they find you exactly when they are ready to buy.
              </p>
            </Card>

          </div>
        </SectionWrapper>

      </div>

      <Footer lang="en" />
    </main>
  );
}
