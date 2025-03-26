import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminHeader from "@/components/admin/admin-header"
import AdminSidebar from "@/components/admin/admin-sidebar"
import TrainersList from "@/components/admin/trainers-list"
import BatchesList from "@/components/admin/batches-list"
import StatisticsCards from "@/components/admin/statistics-cards"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage trainers, batches, and system settings</p>
            </div>

            <StatisticsCards />

            <Tabs defaultValue="trainers">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="trainers">Trainers</TabsTrigger>
                <TabsTrigger value="batches">Batches</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="trainers" className="space-y-4">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">Trainers Management</h2>
                  <Button asChild>
                    <Link href="/admin/trainers/new">Add New Trainer</Link>
                  </Button>
                </div>
                <TrainersList />
              </TabsContent>

              <TabsContent value="batches" className="space-y-4">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">Batches Management</h2>
                  <Button asChild>
                    <Link href="/admin/batches/new">Create New Batch</Link>
                  </Button>
                </div>
                <BatchesList />
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>System Settings</CardTitle>
                    <CardDescription>Configure global settings for the portal</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Storage Settings</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            Configure Cloud Storage
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Email Notifications</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            Configure Email Templates
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">User Permissions</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            Manage Role Permissions
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">System Backup</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            Configure Backup Schedule
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

