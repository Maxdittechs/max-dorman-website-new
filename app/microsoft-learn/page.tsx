"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Trophy, Target, Plus, ExternalLink } from "lucide-react"
import Link from "next/link"

const learningStats = {
  totalPoints: 2450,
  rank: "Intermediate",
  streakDays: 15,
  completedModules: 34,
}

const currentLearningPaths = [
  {
    id: 1,
    title: "Azure Administrator Associate",
    code: "AZ-104",
    progress: 65,
    modules: 12,
    completedModules: 8,
  },
]

export default function MicrosoftLearnPage() {
  const [activeTab, setActiveTab] = useState("overview")

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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Microsoft Learn Progress</h1>
            <p className="text-xl text-slate-600 mb-8">
              Track my learning journey and skill development on Microsoft Learn
            </p>
            <Button asChild>
              <Link href="/admin">
                <Plus className="mr-2 h-4 w-4" />
                Update Progress
              </Link>
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="paths">Learning Paths</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">{learningStats.totalPoints}</p>
                    <p className="text-sm text-slate-500">Total Points</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">{learningStats.streakDays}</p>
                    <p className="text-sm text-slate-500">Day Streak</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <BookOpen className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">{learningStats.completedModules}</p>
                    <p className="text-sm text-slate-500">Modules Done</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-8 w-8 bg-blue-500 rounded mx-auto mb-2 flex items-center justify-center text-white font-bold">
                      {learningStats.rank.charAt(0)}
                    </div>
                    <p className="text-2xl font-bold text-slate-900">{learningStats.rank}</p>
                    <p className="text-sm text-slate-500">Current Rank</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="paths" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentLearningPaths.map((path) => (
                  <Card key={path.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{path.title}</CardTitle>
                      <CardDescription>{path.code}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                      </div>

                      <div className="text-sm">
                        <p className="text-slate-500">Modules</p>
                        <p className="font-medium">
                          {path.completedModules}/{path.modules}
                        </p>
                      </div>

                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Continue Path
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
