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
import { Upload, ArrowLeft } from "lucide-react"
import TrainerHeader from "@/components/trainer/trainer-header"

export default function UploadMaterial() {
  const router = useRouter()
  const [isPublished, setIsPublished] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Material Uploaded",
      description: "Your course material has been uploaded successfully.",
    })
    router.push("/trainer/materials")
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
            <h1 className="text-3xl font-bold">Upload Course Material</h1>
          </div>

          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Material Details</CardTitle>
                <CardDescription>Upload a new presentation or document for your students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="e.g., Introduction to HTML & CSS" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Provide a brief description of this material" rows={3} />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="type">Material Type</Label>
                    <Select defaultValue="presentation">
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presentation">Presentation (PPT/PPTX)</SelectItem>
                        <SelectItem value="document">Document (PDF/DOC)</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

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
                </div>

                <div className="space-y-4">
                  <Label>Upload File</Label>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <div className="mt-4 space-y-1 text-center">
                      <p className="text-sm text-muted-foreground">Drag and drop your file here or click to browse</p>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: PPT, PPTX, PDF, DOC, DOCX (Max size: 50MB)
                      </p>
                    </div>
                    <Button variant="outline" className="mt-4">
                      Select File
                    </Button>
                  </div>
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
                <Button type="submit">Upload Material</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
    </div>
  )
}

