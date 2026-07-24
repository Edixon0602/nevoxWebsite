import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { BlogCard } from '@/components/sections/BlogCard'
import { getBlogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog de Marketing Digital, IA y Automatización en Venezuela | Nevox',
  description: 'Recursos, guías y estrategias de marketing digital, inteligencia artificial y automatización para escalar tu negocio en Venezuela y LATAM.',
}

export default function BlogHub() {
  const posts = getBlogPosts()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-0 overflow-hidden">
        <SectionWrapper size="hero" className="relative flex flex-col justify-center">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-start opacity-10">
            <div className="absolute w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[100px] mix-blend-screen" />
          </div>
          
          <div className="relative z-10 flex flex-col gap-6 max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-text-primary leading-[1.1]">
              Recursos de marketing digital e <span className="text-accent italic">IA</span> para negocios en Venezuela
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-balance max-w-2xl">
              Estrategias accionables, guías técnicas y las últimas tendencias en automatización y growth para escalar tu empresa.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper size="default" className="bg-surface/30">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-text-secondary text-lg">Próximamente estaremos publicando nuestros primeros artículos.</p>
            </div>
          )}
        </SectionWrapper>
      </div>

      <Footer />
    </main>
  )
}
