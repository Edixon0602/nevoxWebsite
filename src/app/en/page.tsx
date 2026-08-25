import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nevox | Custom Software, Automation & AI",
  description: "Agency specializing in custom software development, process automation, and AI integrations for businesses.",
  openGraph: {
    title: "Nevox | Custom Software, Automation & AI",
    description: "Custom software development, workflow automation, and AI integrations for scaling businesses.",
    url: "https://nevox.pro/en",
    siteName: "Nevox",
    locale: "en_US",
    type: "website",
  },
};

export default function HomeEN() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-0 overflow-hidden">
        <Hero lang="en" />
        <TrustBar lang="en" />
        <Problem lang="en" />
        <Services lang="en" />
        <HowItWorks lang="en" />
        <Benefits lang="en" />
        <FinalCTA lang="en" />
      </div>

      <Footer lang="en" />
    </main>
  );
}
