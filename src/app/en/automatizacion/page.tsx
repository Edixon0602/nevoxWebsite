"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Robot, Infinity, ChartBar, Gear } from "@phosphor-icons/react/dist/ssr";

export default function Automatizacion_EN() {
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
              AI & Automation
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-text-primary leading-[1.1]">
              Your business on <span className="text-accent italic">autopilot</span>.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-balance max-w-2xl mb-4">
              Replace repetitive tasks with intelligent infrastructure. We connect your tools, automate processes, and implement AI so your team can focus on what matters.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                className="py-4 px-8"
                onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Automation
              </Button>
            </div>
          </div>
        </SectionWrapper>

        {/* Automation Services Grid */}
        <SectionWrapper size="default" className="bg-surface/30">
          <div id="soluciones" className="flex flex-col mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary max-w-2xl">
              Our Tech Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <Robot weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Intelligent Agents (FlowBot)</h3>
              <p className="text-text-secondary leading-relaxed">
                We train conversational AI agents with your data. They answer questions, qualify leads, and book appointments 24/7 with zero human interaction.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <Infinity weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Process Automation (RPA)</h3>
              <p className="text-text-secondary leading-relaxed">
                We connect your CRM, email, ERP, and marketing tools so information flows seamlessly, eliminating typos and delays.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <ChartBar weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">Business Intelligence & Dashboards</h3>
              <p className="text-text-secondary leading-relaxed">
                We centralize your sales, marketing, and operations data into visual, real-time dashboards for data-driven decisions.
              </p>
            </Card>

            <Card className="group" innerClassName="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-2">
                <Gear weight="duotone" className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary">AI Consulting</h3>
              <p className="text-text-secondary leading-relaxed">
                We evaluate your company's technical viability and draw a roadmap to implement artificial intelligence in your core processes.
              </p>
            </Card>

          </div>
        </SectionWrapper>

      </div>

      <Footer lang="en" />
    </main>
  );
}
