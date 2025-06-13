import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = {
    title: "Getting Started with Microsoft Azure Fundamentals",
    content: "This is a sample blog post about Azure fundamentals...",
    date: "2024-01-15",
    author: "Max Dorman",
    tags: ["Azure", "Microsoft", "Cloud", "Fundamentals"],
    readTime: "5 min read",
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Max Dorman
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">
                Blog
              </Link>
              <Link href="/portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">
                Portfolio
              </Link>
              <Link href="/certificates" className="text-slate-600 hover:text-slate-900 transition-colors">
                Certificates
              </Link>
              <Link href="/microsoft-learn" className="text-slate-600 hover:text-slate-900 transition-colors">
                MS Learn
              </Link>
              <Link href="/admin" className="text-slate-600 hover:text-slate-900 transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </header>

          <article className="prose prose-slate max-w-none">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-slate-700 leading-relaxed">{post.content}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
