import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'Blog | Nevox',
  description: 'Digital marketing, AI, and automation resources.',
}

export default function BlogHubEN() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-0 overflow-hidden">
        <SectionWrapper size="hero" className="relative flex flex-col justify-center text-center">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-10">
            <div className="absolute w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[100px] mix-blend-screen" />
          </div>
          
          <div className="relative z-10 flex flex-col gap-6 max-w-4xl mx-auto items-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-text-primary leading-[1.1]">
              Coming <span className="text-accent italic">Soon</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-balance max-w-2xl">
              We are working on translating our best resources for you. Stay tuned.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <Footer lang="en" />
    </main>
  )
}
