"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { ArrowLeft, Download, FileText, Calendar, User } from "lucide-react"
import StudentHeader from "@/components/student/student-header"

export default function MaterialDetail({ params }: { params: { id: string } }) {
  const router = useRouter()

  // Mock material data
  const material = {
    id: params.id,
    title: "JavaScript Fundamentals",
    description:
      "This presentation covers the core concepts of JavaScript including variables, data types, functions, and control structures.",
    type: "Presentation",
    uploadDate: "2023-09-12",
    size: "3.1 MB",
    trainer: "Sarah Johnson",
    accessed: true,
    relatedMaterials: [
      { id: "1", title: "Introduction to HTML & CSS", type: "Presentation" },
      { id: "3", title: "React Components & Props", type: "Presentation" },
    ],
  }

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your file is being downloaded.",
    })
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
            <h1 className="text-3xl font-bold">Course Material</h1>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{material.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 pt-1">
                    <Badge variant="outline">{material.type}</Badge>
                    <span className="mx-1">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(material.uploadDate).toLocaleDateString()}
                    </span>
                    <span className="mx-1">•</span>
                    <span>{material.size}</span>
                  </CardDescription>
                </div>
                <Button onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Description</h3>
                <div className="rounded-lg bg-muted p-4 text-sm">{material.description}</div>
              </div>

              <div className="flex items-center gap-2 rounded-lg border p-4">
                <User className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  Uploaded by: <span className="font-medium">{material.trainer}</span>
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Preview</h3>
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <div className="flex h-full items-center justify-center">
                    <FileText className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
              </div>

              {material.relatedMaterials.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-medium">Related Materials</h3>
                  <div className="space-y-2">
                    {material.relatedMaterials.map((relatedMaterial) => (
                      <div
                        key={relatedMaterial.id}
                        className="flex items-center justify-between rounded-lg border p-3"
                        onClick={() => router.push(`/student/materials/${relatedMaterial.id}`)}
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{relatedMaterial.title}</span>
                          <Badge variant="outline" className="ml-2">
                            {relatedMaterial.type}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={() => router.back()}>
                Back to Materials
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

