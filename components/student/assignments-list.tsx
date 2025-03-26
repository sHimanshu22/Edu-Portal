import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Eye, CheckCircle, Clock } from "lucide-react"

export default function AssignmentsList() {
  // Mock data for assignments
  const assignments = [
    {
      id: 1,
      title: "Build a Responsive Landing Page",
      dueDate: "2023-09-15",
      status: "submitted",
      grade: "85%",
    },
    {
      id: 2,
      title: "JavaScript DOM Manipulation",
      dueDate: "2023-09-22",
      status: "pending",
      grade: null,
    },
    {
      id: 3,
      title: "React State Management",
      dueDate: "2023-09-30",
      status: "not-started",
      grade: null,
    },
  ]

  return (
    <Card>
      <div className="p-6">
        <div className="rounded-md border">
          <div className="grid grid-cols-5 border-b bg-muted/50 p-4 font-medium">
            <div className="col-span-2">Assignment</div>
            <div>Due Date</div>
            <div>Status</div>
            <div className="text-right">Actions</div>
          </div>
          {assignments.map((assignment) => (
            <div key={assignment.id} className="grid grid-cols-5 items-center p-4">
              <div className="col-span-2">
                <div className="font-medium">{assignment.title}</div>
                <div className="text-sm text-muted-foreground">
                  {assignment.grade ? `Grade: ${assignment.grade}` : "Not graded yet"}
                </div>
              </div>
              <div>{new Date(assignment.dueDate).toLocaleDateString()}</div>
              <div>
                {assignment.status === "submitted" ? (
                  <Badge variant="success" className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>Submitted</span>
                  </Badge>
                ) : assignment.status === "pending" ? (
                  <Badge variant="warning" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>In Progress</span>
                  </Badge>
                ) : (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <span>Not Started</span>
                  </Badge>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

