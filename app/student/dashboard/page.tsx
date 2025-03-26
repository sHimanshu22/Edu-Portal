import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import StudentHeader from "@/components/student/student-header"
import StudentSidebar from "@/components/student/student-sidebar"
import CourseMaterials from "@/components/student/course-materials"
import AssignmentsList from "@/components/student/assignments-list"
import ProfileCard from "@/components/student/profile-card"

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <StudentHeader />
      <div className="flex flex-1">
        <StudentSidebar />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Student Dashboard</h1>
              <p className="text-muted-foreground">Access your course materials and assignments</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Course Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68%</div>
                  <Progress value={68} className="mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12/18</div>
                  <p className="text-xs text-muted-foreground">Materials accessed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5/8</div>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground">On completed assignments</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="materials">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="materials">Course Materials</TabsTrigger>
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
                <TabsTrigger value="profile">My Profile</TabsTrigger>
              </TabsList>

              <TabsContent value="materials" className="space-y-4">
                <h2 className="text-xl font-semibold">Available Course Materials</h2>
                <CourseMaterials />
              </TabsContent>

              <TabsContent value="assignments" className="space-y-4">
                <h2 className="text-xl font-semibold">Your Assignments</h2>
                <AssignmentsList />
              </TabsContent>

              <TabsContent value="profile" className="space-y-4">
                <h2 className="text-xl font-semibold">Student Profile</h2>
                <ProfileCard />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

