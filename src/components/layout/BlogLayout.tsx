import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { AuthorBio } from "./AuthorBio"

interface BlogLayoutProps {
  children: React.ReactNode
  frontMatter: {
    title: string
    description: string
    date: string
    lastUpdated?: string
    tags: string[]
    image?: string
  }
}

export function BlogLayout({ children, frontMatter }: BlogLayoutProps) {
  const publishedDate = new Date(frontMatter.date).toLocaleDateString('es-VE', { year: 'numeric', month: 'long', day: 'numeric' })
  const updatedDate = frontMatter.lastUpdated ? new Date(frontMatter.lastUpdated).toLocaleDateString('es-VE', { year: 'numeric', month: 'long', day: 'numeric' }) : null

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      <div className="w-full flex flex-col gap-0 overflow-hidden">
        <SectionWrapper size="default" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <article className="max-w-3xl mx-auto w-full">
            <header className="flex flex-col gap-6 mb-12">
              <div className="flex gap-2 flex-wrap">
                {frontMatter.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]">
                {frontMatter.title}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-text-tertiary mt-2">
                <span>Publicado: {publishedDate}</span>
                {updatedDate && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <span>Actualizado: {updatedDate}</span>
                  </>
                )}
              </div>
            </header>
            
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
              {children}
            </div>

            <AuthorBio />
          </article>
        </SectionWrapper>
      </div>

      <Footer />
    </main>
  )
}
