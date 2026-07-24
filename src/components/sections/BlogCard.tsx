import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  title: string
  description: string
  slug: string
  date: string
  tags: string[]
  image?: string
}

export function BlogCard({ title, description, slug, date, tags, image }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('es-VE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Link href={`/blog/${slug}`} className="group flex flex-col h-full bg-surface/30 rounded-2xl border border-white/5 overflow-hidden hover:border-accent/30 transition-all hover:bg-surface/50">
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-black/20">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary line-clamp-3 text-sm mb-6 flex-grow">
          {description}
        </p>
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-text-tertiary">{formattedDate}</span>
          <span className="text-xs font-medium text-accent">Leer más &rarr;</span>
        </div>
      </div>
    </Link>
  )
}
