"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { ArrowLeft, Calendar } from "lucide-react"
import TrainerHeader from "@/components/trainer/trainer-header"

export default function CreateAssignment() {
  const router = useRouter()
  const [isPublished, setIsPublished] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Assignment Created",
      description: "Your assignment has been created successfully.",
    })
    router.push("/trainer/assignments")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <TrainerHeader />
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold">Create New Assignment</h1>
          </div>

          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Assignment Details</CardTitle>
                <CardDescription>Create a new assignment for your students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="e.g., Build a Responsive Landing Page" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Instructions</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed instructions for the assignment"
                    rows={5}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="batch">Assign to Batch</Label>
                    <Select defaultValue="web-dev-2023">
                      <SelectTrigger id="batch">
                        <SelectValue placeholder="Select batch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-dev-2023">Web Development 2023</SelectItem>
                        <SelectItem value="data-science">Data Science Fundamentals</SelectItem>
                        <SelectItem value="mobile-dev">Mobile App Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="due-date">Due Date</Label>
                    <div className="relative">
                      <Input id="due-date" type="date" required />
                      <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="points">Total Points</Label>
                    <Input id="points" type="number" placeholder="e.g., 100" min="0" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="submission-type">Submission Type</Label>
                    <Select defaultValue="file">
                      <SelectTrigger id="submission-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="file">File Upload</SelectItem>
                        <SelectItem value="text">Text Submission</SelectItem>
                        <SelectItem value="link">URL/Link</SelectItem>
                        <SelectItem value="multiple">Multiple Files</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resources">Additional Resources (Optional)</Label>
                  <Textarea
                    id="resources"
                    placeholder="Provide links or references to help with the assignment"
                    rows={2}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="published" checked={isPublished} onCheckedChange={setIsPublished} />
                  <Label htmlFor="published">{isPublished ? "Publish immediately" : "Save as draft"}</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button type="submit">Create Assignment</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
    </div>
  )
}

