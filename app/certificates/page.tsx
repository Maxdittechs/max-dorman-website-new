"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Award, ExternalLink, Search, Plus, Download, CheckCircle } from "lucide-react"
import Link from "next/link"

const mockCertificates = [
  {
    id: 1,
    title: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    dateEarned: "2024-01-15",
    status: "Active",
    skills: ["Cloud Computing", "Azure Services", "Security"],
    type: "certification",
    verified: true,
  },
]

export default function CertificatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [certificates] = useState(mockCertificates)

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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Certificates & Qualifications</h1>
            <p className="text-xl text-slate-600 mb-8">
              Professional certifications, degrees, and continuous learning achievements
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search certificates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button asChild>
                <Link href="/admin">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Certificate
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Award className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{cert.title}</CardTitle>
                        <CardDescription className="text-base">
                          {cert.code} • {cert.issuer}
                        </CardDescription>
                      </div>
                    </div>
                    {cert.verified && <CheckCircle className="h-5 w-5 text-green-500" title="Verified Certificate" />}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500">Date Earned</p>
                      <p className="font-medium">{new Date(cert.dateEarned).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Status</p>
                      <Badge variant={cert.status === "Active" ? "default" : "secondary"}>{cert.status}</Badge>
                    </div>
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm mb-2">Skills Covered</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Verify
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
