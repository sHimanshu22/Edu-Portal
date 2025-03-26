"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { ArrowLeft, Upload } from "lucide-react"
import TrainerHeader from "@/components/trainer/trainer-header"

export default function AddStudent() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Student Added",
      description: "The student has been added successfully.",
    })
    router.push("/trainer/students")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <TrainerHeader />
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold">Add New Student</h1>
          </div>

          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Student Information</CardTitle>
                <CardDescription>Add a new student to your batch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="parent-name">Parent/Guardian Name</Label>
                    <Input id="parent-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parent-phone">Parent/Guardian Phone</Label>
                    <Input id="parent-phone" type="tel" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="batch">Assign to Batch</Label>
                  <Select defaultValue="web-dev-2023">
                    <SelectTrigger id="batch">
                      <SelectValue placeholder="Select batch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-dev-2023">Web Development 2023</SelectItem>
                      <SelectItem value="data-science">Data Science Fundamentals</SelectItem>
                      <SelectItem value="mobile-dev">Mobile App Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label>Student Photo</Label>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <div className="mt-2 space-y-1 text-center">
                      <p className="text-sm text-muted-foreground">Upload a photo of the student</p>
                      <p className="text-xs text-muted-foreground">JPG, PNG or GIF (Max size: 2MB)</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      Select Photo
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Resume (Optional)</Label>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <div className="mt-2 space-y-1 text-center">
                      <p className="text-sm text-muted-foreground">Upload student's resume</p>
                      <p className="text-xs text-muted-foreground">PDF, DOCX, DOC (Max size: 5MB)</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      Select Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button type="submit">Add Student</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
    </div>
  )
}

