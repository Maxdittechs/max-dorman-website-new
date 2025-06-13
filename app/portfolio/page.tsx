"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, FileText, ImageIcon, Plus, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const mockProjects = [
  {
    id: 1,
    title: "Microsoft Azure Migration Project",
    description: "Successfully migrated on-premises infrastructure to Azure cloud, reducing costs by 30%.",
    type: "project",
    fileType: "pdf",
    tags: ["Azure", "Cloud Migration", "Infrastructure"],
    date: "2024-01-20",
    fiverr: true,
  },
  {
    id: 2,
    title: "Azure Fundamentals Certification",
    description: "Microsoft Azure Fundamentals (AZ-900) certification achievement.",
    type: "certification",
    fileType: "pdf",
    tags: ["Certification", "Azure", "Microsoft"],
    date: "2024-01-10",
    fiverr: false,
  },
]

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [projects] = useState(mockProjects)

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Portfolio</h1>
            <p className="text-xl text-slate-600 mb-8">
              Showcase of my projects, certifications, and professional work
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search portfolio..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button asChild>
                <Link href="/admin">
                  <Plus className="mr-2 h-4 w-4" />
                  Upload New Project
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {project.fileType === "pdf" ? (
                        <FileText className="h-5 w-5 text-red-500" />
                      ) : (
                        <ImageIcon className="h-5 w-5 text-blue-500" />
                      )}
                      <Badge variant={project.type === "certification" ? "default" : "secondary"}>{project.type}</Badge>
                    </div>
                    {project.fiverr && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Fiverr
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="bg-slate-100 rounded-lg p-8 mb-4 flex items-center justify-center">
                    {project.fileType === "pdf" ? (
                      <FileText className="h-16 w-16 text-slate-400" />
                    ) : (
                      <Image
                        src="/placeholder.svg?height=120&width=200"
                        alt={project.title}
                        width={200}
                        height={120}
                        className="rounded"
                      />
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    {project.fiverr && (
                      <Button size="sm" variant="outline" asChild>
                        <Link
                          href="https://www.fiverr.com/maxittech?public_mode=true"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Fiverr
                        </Link>
                      </Button>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 mt-2">{new Date(project.date).toLocaleDateString()}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">Need IT Solutions?</CardTitle>
                <CardDescription className="text-green-700">
                  I'm available for freelance projects on Fiverr. Let's work together on your next IT challenge!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
                  <Link
                    href="https://www.fiverr.com/maxittech?public_mode=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit My Fiverr Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
