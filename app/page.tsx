import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">EduPortal</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/login" className="text-white hover:text-gray-200">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-gray-200">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-50">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Streamlined Learning Management</h2>
                <p className="text-xl text-gray-600">
                  A comprehensive platform for educational institutions to manage course materials, assignments, and
                  student information.
                </p>
                <div className="flex space-x-4">
                  <Button asChild size="lg">
                    <Link href="/login">Get Started</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Educational platform illustration"
                  className="rounded-lg shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Role-Based Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Separate dashboards and permissions for administrators, trainers, and students.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Course Material Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Controlled release of presentations and resources as the course progresses.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Assignment System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Create, assign, and track assignments with submission capabilities for students.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Student Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive student information including contact details and parent information.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Batch Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Organize students into batches for efficient course delivery and management.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Resume Collection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Upload and manage student resumes for placement and career development.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p>&copy; {new Date().getFullYear()} EduPortal. All rights reserved.</p>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

