import { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { BlogCard } from '@/components/sections/BlogCard'
import { getBlogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog de Software, IA y Automatización en Venezuela | Nevox',
  description: 'Guías técnicas, arquitecturas y estrategias de desarrollo de software, inteligencia artificial y automatización de procesos para empresas.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogHub() {
  const posts = getBlogPosts()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-0 overflow-hidden">
        <SectionWrapper size="hero" className="relative flex flex-col justify-center pt-24">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-start opacity-10">
            <div className="absolute w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[100px] mix-blend-screen" />
          </div>
          
          <div className="relative z-10 flex flex-col gap-6 max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.08]">
              Desarrollo de software, automatización e <span className="text-accent">IA</span>.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed text-balance max-w-2xl">
              Artículos técnicos, análisis de arquitectura y guías prácticas para optimizar operaciones empresariales con tecnología moderna.
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
