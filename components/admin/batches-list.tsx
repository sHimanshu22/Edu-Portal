import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Users } from "lucide-react"

export default function BatchesList() {
  // Mock data for batches
  const batches = [
    {
      id: 1,
      name: "Web Development 2023",
      trainer: "John Smith",
      startDate: "2023-09-01",
      endDate: "2023-12-15",
      students: 18,
      status: "active",
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      trainer: "Sarah Johnson",
      startDate: "2023-08-15",
      endDate: "2023-11-30",
      students: 15,
      status: "active",
    },
    {
      id: 3,
      name: "Mobile App Development",
      trainer: "Michael Brown",
      startDate: "2023-10-01",
      endDate: "2024-01-15",
      students: 12,
      status: "upcoming",
    },
  ]

  return (
    <Card>
      <div className="p-6">
        <div className="rounded-md border">
          <div className="grid grid-cols-6 border-b bg-muted/50 p-4 font-medium">
            <div className="col-span-2">Batch Name</div>
            <div>Trainer</div>
            <div>Duration</div>
            <div>Students</div>
            <div className="text-right">Actions</div>
          </div>
          {batches.map((batch) => (
            <div key={batch.id} className="grid grid-cols-6 items-center p-4">
              <div className="col-span-2">
                <div className="font-medium">{batch.name}</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Badge variant={batch.status === "active" ? "success" : "secondary"}>{batch.status}</Badge>
                </div>
              </div>
              <div>{batch.trainer}</div>
              <div>
                <div className="text-sm">
                  {new Date(batch.startDate).toLocaleDateString()} - {new Date(batch.endDate).toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{batch.students}</span>
              </div>
              <div className="flex justify-end gap-2">
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

