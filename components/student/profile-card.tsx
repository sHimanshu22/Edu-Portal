"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Upload } from "lucide-react"

export default function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock student data
  const studentData = {
    name: "Dumneshwar Sonawane",
    email: "dumneshwar22@gmail.com.com",
    phone: "+91 8208527003",
    parentName: "Sharad Sonawane",
    parentPhone: "+91 9923599620",
    batch: "Web Development 2025",
    joinDate: "2025-04-02",
  }

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    })
    setIsEditing(false)
  }

  const handleResumeUpload = () => {
    toast({
      title: "Resume Uploaded",
      description: "Your resume has been uploaded successfully.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Profile</CardTitle>
        <CardDescription>View and manage your personal information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt={studentData.name} />
            <AvatarFallback>{studentData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">{studentData.name}</h3>
            <p className="text-sm text-muted-foreground">{studentData.email}</p>
            <p className="text-sm text-muted-foreground">Batch: {studentData.batch}</p>
            <p className="text-sm text-muted-foreground">
              Joined: {new Date(studentData.joinDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        <Tabs defaultValue="personal">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4">
            {isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={studentData.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={studentData.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue={studentData.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parent-name">Parent Name</Label>
                    <Input id="parent-name" defaultValue={studentData.parentName} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parent-phone">Parent Phone</Label>
                    <Input id="parent-phone" defaultValue={studentData.parentPhone} />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveProfile}>Save Changes</Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Full Name</h4>
                    <p>{studentData.name}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <p>{studentData.email}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Phone Number</h4>
                    <p>{studentData.phone}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Parent Name</h4>
                    <p>{studentData.parentName}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Parent Phone</h4>
                    <p>{studentData.parentPhone}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="resume" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-medium">Upload your resume</h3>
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your resume file here or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground">Supported formats: PDF, DOCX, DOC (Max size: 5MB)</p>
                  </div>
                  <Button onClick={handleResumeUpload}>Upload Resume</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-4">
        <p className="text-xs text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </CardFooter>
    </Card>
  )
}

