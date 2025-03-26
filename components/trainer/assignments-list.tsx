import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye, CheckCircle } from "lucide-react"

export default function AssignmentsList() {
  // Mock data for assignments
  const assignments = [
    {
      id: 1,
      title: "Build a Responsive Landing Page",
      batch: "Web Development 2023",
      dueDate: "2023-09-15",
      submissions: 15,
      totalStudents: 18,
      status: "active",
    },
    {
      id: 2,
      title: "JavaScript DOM Manipulation",
      batch: "Web Development 2023",
      dueDate: "2023-09-22",
      submissions: 12,
      totalStudents: 18,
      status: "active",
    },
    {
      id: 3,
      title: "Data Visualization with D3.js",
      batch: "Data Science Fundamentals",
      dueDate: "2023-09-25",
      submissions: 8,
      totalStudents: 15,
      status: "draft",
    },
  ]

  return (
    <Card>
      <div className="p-6">
        <div className="rounded-md border">
          <div className="grid grid-cols-6 border-b bg-muted/50 p-4 font-medium">
            <div className="col-span-2">Assignment</div>
            <div>Batch</div>
            <div>Due Date</div>
            <div>Submissions</div>
            <div className="text-right">Actions</div>
          </div>
          {assignments.map((assignment) => (
            <div key={assignment.id} className="grid grid-cols-6 items-center p-4">
              <div className="col-span-2">
                <div className="font-medium">{assignment.title}</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Badge variant={assignment.status === "active" ? "success" : "secondary"}>{assignment.status}</Badge>
                </div>
              </div>
              <div>{assignment.batch}</div>
              <div>{new Date(assignment.dueDate).toLocaleDateString()}</div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>
                  {assignment.submissions}/{assignment.totalStudents}
                </span>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

