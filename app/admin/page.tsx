"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Save, Plus, Lock } from "lucide-react"
import Link from "next/link"

// Simple password - in production, use environment variables
const ADMIN_PASSWORD = "Summer07max"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState("profile")

  // Check if user is already logged in (stored in browser)
  useEffect(() => {
    const savedAuth = localStorage.getItem("adminAuthenticated")
    if (savedAuth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem("adminAuthenticated", "true")
      setError("")
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("adminAuthenticated")
    setPassword("")
  }

  // Mock data states
  const [profile, setProfile] = useState({
    name: "Max Dorman",
    bio: "Currently learning Microsoft fundamentals and expanding my expertise in cloud technologies. Passionate about technology solutions and helping businesses grow through innovative IT services.",
    location: "Fife, Scotland",
    email: "maxd@ittechs.io",
    linkedin: "https://www.linkedin.com/in/max-dorman-1ba69814b",
    fiverr: "https://www.fiverr.com/maxittech?public_mode=true",
  })

  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
  })

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    type: "project",
    tags: "",
    fiverr: false,
  })

  const handleProfileSave = () => {
    alert("Profile updated successfully!")
  }

  const handlePostSave = () => {
    alert("Blog post created successfully!")
    setNewPost({ title: "", excerpt: "", content: "", tags: "" })
  }

  const handleProjectSave = () => {
    alert("Project uploaded successfully!")
    setNewProject({ title: "", description: "", type: "project", tags: "", fiverr: false })
  }

  // Login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <CardDescription>Enter your password to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">{error}</div>}
              <Button type="submit" className="w-full">
                <Lock className="mr-2 h-4 w-4" />
                Login to Admin Panel
              </Button>
            </form>
            <div className="mt-6 text-center">
              <Link href="/" className="text-sm text-slate-500 hover:text-slate-700">
                ← Back to Website
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
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
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Admin Dashboard</h1>
            <p className="text-slate-600">Manage your website content, profile, and uploads</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="blog">Blog Posts</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="mslearn">MS Learn</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
            </TabsList>

            {/* Profile Management */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Update your personal information and social links</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={profile.location}
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn URL</Label>
                      <Input
                        id="linkedin"
                        value={profile.linkedin}
                        onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fiverr">Fiverr Profile URL</Label>
                    <Input
                      id="fiverr"
                      value={profile.fiverr}
                      onChange={(e) => setProfile({ ...profile, fiverr: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profile-pic">Profile Picture</Label>
                    <div className="flex items-center gap-4">
                      <Input id="profile-pic" type="file" accept="image/*" />
                      <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload
                      </Button>
                    </div>
                  </div>

                  <Button onClick={handleProfileSave} className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Save Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Blog Management */}
            <TabsContent value="blog">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Write New Blog Post</CardTitle>
                    <CardDescription>Create and publish new blog content</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="post-title">Title</Label>
                      <Input
                        id="post-title"
                        placeholder="Enter post title..."
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="post-excerpt">Excerpt</Label>
                      <Textarea
                        id="post-excerpt"
                        placeholder="Brief description of the post..."
                        rows={2}
                        value={newPost.excerpt}
                        onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="post-content">Content</Label>
                      <Textarea
                        id="post-content"
                        placeholder="Write your blog post content here..."
                        rows={8}
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="post-tags">Tags (comma-separated)</Label>
                      <Input
                        id="post-tags"
                        placeholder="Azure, Microsoft, Cloud..."
                        value={newPost.tags}
                        onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                      />
                    </div>

                    <Button onClick={handlePostSave} className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Publish Post
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Portfolio Management */}
            <TabsContent value="portfolio">
              <Card>
                <CardHeader>
                  <CardTitle>Upload New Project</CardTitle>
                  <CardDescription>Add projects, certifications, and work samples to your portfolio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-title">Project Title</Label>
                      <Input
                        id="project-title"
                        placeholder="Enter project title..."
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project-type">Type</Label>
                      <Select
                        value={newProject.type}
                        onValueChange={(value) => setNewProject({ ...newProject, type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="project">Project</SelectItem>
                          <SelectItem value="certification">Certification</SelectItem>
                          <SelectItem value="case-study">Case Study</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-description">Description</Label>
                    <Textarea
                      id="project-description"
                      placeholder="Describe your project..."
                      rows={3}
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-tags">Tags (comma-separated)</Label>
                    <Input
                      id="project-tags"
                      placeholder="Azure, Microsoft, Implementation..."
                      value={newProject.tags}
                      onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Files</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-pdf">PDF Documents</Label>
                        <Input id="project-pdf" type="file" accept=".pdf" multiple />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="project-images">Images</Label>
                        <Input id="project-images" type="file" accept="image/*" multiple />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="fiverr-project"
                      checked={newProject.fiverr}
                      onChange={(e) => setNewProject({ ...newProject, fiverr: e.target.checked })}
                    />
                    <Label htmlFor="fiverr-project">Available on Fiverr</Label>
                  </div>

                  <Button onClick={handleProjectSave} className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Project
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Certificates Management */}
            <TabsContent value="certificates">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Certificate</CardTitle>
                  <CardDescription>Add certifications, degrees, and qualifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cert-title">Certificate Title</Label>
                      <Input id="cert-title" placeholder="Microsoft Azure Fundamentals" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cert-code">Certificate Code</Label>
                      <Input id="cert-code" placeholder="AZ-900" />
                    </div>
                  </div>

                  <Button className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Add Certificate
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Microsoft Learn Management */}
            <TabsContent value="mslearn">
              <Card>
                <CardHeader>
                  <CardTitle>Update Microsoft Learn Progress</CardTitle>
                  <CardDescription>Track your learning paths and achievements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ms-points">Total Points</Label>
                      <Input id="ms-points" type="number" placeholder="2450" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ms-streak">Learning Streak (days)</Label>
                      <Input id="ms-streak" type="number" placeholder="15" />
                    </div>
                  </div>

                  <Button className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Update Stats
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Media Management */}
            <TabsContent value="media">
              <Card>
                <CardHeader>
                  <CardTitle>Media Library</CardTitle>
                  <CardDescription>Manage your uploaded images and documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                    <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Upload Media Files</h3>
                    <p className="text-slate-500 mb-4">Drag and drop files here, or click to browse</p>
                    <Input type="file" multiple accept="image/*,.pdf" className="hidden" id="media-upload" />
                    <Button asChild>
                      <label htmlFor="media-upload" className="cursor-pointer">
                        Choose Files
                      </label>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
