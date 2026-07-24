import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getBlogPost, getBlogPosts } from '@/lib/blog'
import { BlogLayout } from '@/components/layout/BlogLayout'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = getBlogPost(resolvedParams.slug)
  if (!post) return {}
  
  return {
    title: `${post.meta.title} | Nevox`,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: 'article',
      publishedTime: post.meta.date,
      modifiedTime: post.meta.lastUpdated,
      authors: ['Edixon Serrano'],
      images: post.meta.image ? [post.meta.image] : undefined,
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const post = getBlogPost(resolvedParams.slug)
  if (!post) notFound()

  // Schema generation
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.meta.title,
    "description": post.meta.description,
    "image": post.meta.image ? `https://nevox.pro${post.meta.image}` : undefined,
    "datePublished": post.meta.date,
    "dateModified": post.meta.lastUpdated || post.meta.date,
    "author": {
      "@type": "Person",
      "name": "Edixon Serrano",
      "url": "https://nevox.pro/blog/autor/edixon-serrano"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nevox",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nevox.pro/icon.png"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogLayout frontMatter={post.meta}>
        <MDXRemote 
          source={post.content} 
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            }
          }}
        />
      </BlogLayout>
    </>
  )
}
