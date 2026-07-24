import Image from 'next/image'
import Link from 'next/link'
import { LinkedinLogo, InstagramLogo, TiktokLogo } from '@phosphor-icons/react/dist/ssr'

export function AuthorBio() {
  return (
    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 items-start">
      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent/20">
        <Image
          src="/authors/edixon-serrano.jpg"
          alt="Edixon Serrano"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h4 className="font-display font-bold text-xl text-text-primary">
            <Link href="/blog/autor/edixon-serrano" className="hover:text-accent transition-colors">
              Edixon Serrano
            </Link>
          </h4>
          <p className="text-accent text-sm font-medium">Founder & CEO de Nevox</p>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
          Ayudo a empresas en Venezuela y LATAM a escalar mediante marketing estratégico, automatización de procesos e inteligencia artificial.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Link href="https://www.linkedin.com/in/edixon-serrano" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-accent transition-colors">
            <LinkedinLogo weight="duotone" className="w-5 h-5" />
          </Link>
          <Link href="https://www.instagram.com/sedev06/" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-accent transition-colors">
            <InstagramLogo weight="duotone" className="w-5 h-5" />
          </Link>
          <Link href="https://www.tiktok.com/@sedev06" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-accent transition-colors">
            <TiktokLogo weight="duotone" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
