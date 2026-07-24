import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPostMeta {
  title: string
  description: string
  date: string
  lastUpdated?: string
  author: string
  slug: string
  tags: string[]
  image?: string
  featured?: boolean
}

export interface BlogPost {
  meta: BlogPostMeta
  content: string
}

export function getBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(blogDirectory)) return []
  
  const files = fs.readdirSync(blogDirectory)
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const fullPath = path.join(blogDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return data as BlogPostMeta
    })
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  return posts
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      meta: data as BlogPostMeta,
      content
    }
  } catch (error) {
    return null
  }
}
