import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, ExternalLink, Mail, MapPin, BookOpen, Briefcase, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Max Dorman</h1>
            <div className="flex items-center gap-6">
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span className="text-slate-600">Fife, Scotland</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Hello, I'm <span className="text-blue-600">Max Dorman</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Currently learning Microsoft fundamentals and expanding my expertise in cloud technologies. Passionate
                about technology solutions and helping businesses grow through innovative IT services.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="px-3 py-1">
                  Microsoft Fundamentals
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Cloud Technologies
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  IT Solutions
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link
                    href="https://www.linkedin.com/in/max-dorman-1ba69814b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn Profile
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="mailto:maxd@ittechs.io">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Max Dorman"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Explore My Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Latest Blog Posts
                </CardTitle>
                <CardDescription>Insights on Microsoft technologies, cloud computing, and IT trends</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/blog">
                    View Blog
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                  Portfolio & Projects
                </CardTitle>
                <CardDescription>Showcase of my work, certifications, and professional projects</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/portfolio">
                    View Portfolio
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Certificates & Qualifications
                </CardTitle>
                <CardDescription>My professional certifications and educational achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/certificates">
                    View Certificates
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  Microsoft Learn Progress
                </CardTitle>
                <CardDescription>Track my learning journey and skill development</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/microsoft-learn">
                    View Progress
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">Let's Connect</h4>
            <p className="text-slate-300 mb-6">Ready to discuss your next project or just want to say hello?</p>
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="secondary" size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="https://www.linkedin.com/in/max-dorman-1ba69814b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="mailto:maxd@ittechs.io">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </Link>
              </Button>
            </div>
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400">© 2024 Max Dorman. All rights reserved. | maxd@ittechs.io</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
