import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { CaseMetrics } from "@/components/sections/CaseMetrics";
import { Verticals } from "@/components/sections/Verticals";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-0 overflow-hidden">
        <Hero />
        <TrustBar />
        <Problem />
        <Services />
        <HowItWorks />
        <Benefits />
        <CaseMetrics />
        <Verticals />
        <FAQ />
        <FinalCTA />
      </div>

      <Footer />
    </main>
  );
}
