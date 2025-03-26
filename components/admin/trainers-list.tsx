import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2 } from "lucide-react"

export default function TrainersList() {
  // Mock data for trainers
  const trainers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      department: "Computer Science",
      batches: 3,
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      department: "Data Science",
      batches: 2,
      status: "active",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      department: "Web Development",
      batches: 1,
      status: "inactive",
    },
  ]

  return (
    <Card>
      <div className="p-6">
        <div className="rounded-md border">
          <div className="grid grid-cols-6 border-b bg-muted/50 p-4 font-medium">
            <div className="col-span-2">Trainer</div>
            <div>Department</div>
            <div>Batches</div>
            <div>Status</div>
            <div className="text-right">Actions</div>
          </div>
          {trainers.map((trainer) => (
            <div key={trainer.id} className="grid grid-cols-6 items-center p-4">
              <div className="col-span-2 flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${trainer.name.charAt(0)}`} />
                  <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{trainer.name}</div>
                  <div className="text-sm text-muted-foreground">{trainer.email}</div>
                </div>
              </div>
              <div>{trainer.department}</div>
              <div>{trainer.batches} active</div>
              <div>
                <Badge variant={trainer.status === "active" ? "success" : "secondary"}>{trainer.status}</Badge>
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

