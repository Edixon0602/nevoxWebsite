import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nevox.pro'

  // Static pages
  const routes = [
    '',
    '/smma',
    '/automatizacion',
    '/en',
    '/en/smma',
    '/en/automatizacion',
    '/privacidad',
    '/terminos',
    '/en/privacy',
    '/en/terms',
    '/blog',
    '/en/blog',
    '/blog/autor/edixon-serrano'
  ]

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts (dynamic)
  let blogRoutes: MetadataRoute.Sitemap = []
  
  try {
    const blogDir = path.join(process.cwd(), 'src/content/blog')
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir)
      const mdxFiles = files.filter((file) => file.endsWith('.mdx'))
      
      blogRoutes = mdxFiles.map((file) => {
        const slug = file.replace(/\.mdx$/, '')
        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }
      })
    }
  } catch (error) {
    console.error('Error generating blog sitemap:', error)
  }

  return [...staticRoutes, ...blogRoutes]
}
