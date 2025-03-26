import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Edit, FileText, Download } from "lucide-react"

export default function StudentsList() {
  // Mock data for students
  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      batch: "Web Development 2023",
      progress: 75,
      hasResume: true,
    },
    {
      id: 2,
      name: "Emma Williams",
      email: "emma.williams@example.com",
      batch: "Web Development 2023",
      progress: 82,
      hasResume: true,
    },
    {
      id: 3,
      name: "Ryan Davis",
      email: "ryan.davis@example.com",
      batch: "Data Science Fundamentals",
      progress: 68,
      hasResume: false,
    },
  ]

  return (
    <Card>
      <div className="p-6">
        <div className="rounded-md border">
          <div className="grid grid-cols-6 border-b bg-muted/50 p-4 font-medium">
            <div className="col-span-2">Student</div>
            <div>Batch</div>
            <div>Progress</div>
            <div>Resume</div>
            <div className="text-right">Actions</div>
          </div>
          {students.map((student) => (
            <div key={student.id} className="grid grid-cols-6 items-center p-4">
              <div className="col-span-2 flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${student.name.charAt(0)}`} />
                  <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{student.name}</div>
                  <div className="text-sm text-muted-foreground">{student.email}</div>
                </div>
              </div>
              <div>{student.batch}</div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${student.progress}%` }}></div>
                  </div>
                  <span className="text-sm">{student.progress}%</span>
                </div>
              </div>
              <div>
                {student.hasResume ? (
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    <span>Resume</span>
                  </Button>
                ) : (
                  <Badge variant="outline">Not uploaded</Badge>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <FileText className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

