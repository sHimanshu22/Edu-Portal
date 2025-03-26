"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ArrowLeft, Upload, FileText, Clock, Calendar } from "lucide-react"
import StudentHeader from "@/components/student/student-header"

export default function AssignmentDetail({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  // Mock assignment data
  const assignment = {
    id: params.id,
    title: "JavaScript DOM Manipulation",
    description:
      "Create a web page that demonstrates various DOM manipulation techniques using JavaScript. Your page should include examples of creating, modifying, and deleting DOM elements dynamically.",
    dueDate: "2023-09-22T23:59:59",
    points: 100,
    status: "pending",
    resources: [
      { name: "DOM Manipulation Guide", url: "#" },
      { name: "Example Code", url: "#" },
    ],
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false)
      toast({
        title: "Assignment Submitted",
        description: "Your assignment has been submitted successfully.",
      })
      router.push("/student/assignments")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <StudentHeader />
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold">Assignment Details</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{assignment.title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Due: {new Date(assignment.dueDate).toLocaleString()}</span>
                <span className="mx-2">•</span>
                <span>{assignment.points} points</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Instructions</h3>
                <div className="rounded-lg bg-muted p-4 text-sm">{assignment.description}</div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Resources</h3>
                <div className="space-y-2">
                  {assignment.resources.map((resource, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-lg border p-3">
                      <FileText className="h-4 w-4 text-primary" />
                      <a href={resource.url} className="text-sm font-medium hover:underline">
                        {resource.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                    Time remaining: {getRemainingTime(assignment.dueDate)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Submit Your Assignment</CardTitle>
                <CardDescription>Upload your completed assignment or provide a link to your work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Comments (Optional)</h3>
                  <Textarea placeholder="Add any comments or notes about your submission" rows={3} />
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Upload Your Work</h3>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <div className="mt-4 space-y-1 text-center">
                      <p className="text-sm text-muted-foreground">Drag and drop your file here or click to browse</p>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: ZIP, HTML, JS, PDF (Max size: 10MB)
                      </p>
                    </div>
                    <Button variant="outline" className="mt-4">
                      Select File
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => router.back()}>
                  Save as Draft
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Assignment"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
    </div>
  )
}

function getRemainingTime(dueDate: string): string {
  const now = new Date()
  const due = new Date(dueDate)
  const diffMs = due.getTime() - now.getTime()

  if (diffMs <= 0) {
    return "Past due"
  }

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} and ${diffHours} hour${diffHours > 1 ? "s" : ""}`
  } else {
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} and ${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}`
  }
}

