import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TrainerHeader from "@/components/trainer/trainer-header"
import TrainerSidebar from "@/components/trainer/trainer-sidebar"
import StudentsList from "@/components/trainer/students-list"
import MaterialsList from "@/components/trainer/materials-list"
import AssignmentsList from "@/components/trainer/assignments-list"

export default function TrainerDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <TrainerHeader />
      <div className="flex flex-1">
        <TrainerSidebar />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Trainer Dashboard</h1>
              <p className="text-muted-foreground">Manage your batches, course materials, and assignments</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-xs text-muted-foreground">Across 3 active batches</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Course Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">12 published, 12 drafts</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Requires review</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="students">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="materials">Course Materials</TabsTrigger>
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
              </TabsList>

              <TabsContent value="students" className="space-y-4">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">Students Management</h2>
                  <Button asChild>
                    <Link href="/trainer/students/new">Add New Student</Link>
                  </Button>
                </div>
                <StudentsList />
              </TabsContent>

              <TabsContent value="materials" className="space-y-4">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">Course Materials</h2>
                  <Button asChild>
                    <Link href="/trainer/materials/new">Upload New Material</Link>
                  </Button>
                </div>
                <MaterialsList />
              </TabsContent>

              <TabsContent value="assignments" className="space-y-4">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">Assignments</h2>
                  <Button asChild>
                    <Link href="/trainer/assignments/new">Create New Assignment</Link>
                  </Button>
                </div>
                <AssignmentsList />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

