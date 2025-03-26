import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Eye } from "lucide-react"

export default function CourseMaterials() {
  // Mock data for course materials
  const materials = [
    {
      id: 1,
      title: "Introduction to HTML & CSS",
      type: "Presentation",
      uploadDate: "2023-09-05",
      size: "2.4 MB",
      accessed: true,
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      type: "Presentation",
      uploadDate: "2023-09-12",
      size: "3.1 MB",
      accessed: true,
    },
    {
      id: 3,
      title: "React Components & Props",
      type: "Presentation",
      uploadDate: "2023-09-19",
      size: "4.2 MB",
      accessed: false,
    },
  ]

  return (
    <Card>
      <div className="p-6">
        <div className="rounded-md border">
          <div className="grid grid-cols-5 border-b bg-muted/50 p-4 font-medium">
            <div className="col-span-2">Title</div>
            <div>Type</div>
            <div>Release Date</div>
            <div className="text-right">Actions</div>
          </div>
          {materials.map((material) => (
            <div key={material.id} className="grid grid-cols-5 items-center p-4">
              <div className="col-span-2">
                <div className="font-medium">{material.title}</div>
                <div className="text-sm text-muted-foreground">{material.size}</div>
              </div>
              <div>
                <Badge variant="outline">{material.type}</Badge>
              </div>
              <div>{new Date(material.uploadDate).toLocaleDateString()}</div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

