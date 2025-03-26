import Link from "next/link"
import { Users, BookOpen, FileText, ClipboardList, Home } from "lucide-react"

export default function TrainerSidebar() {
  return (
    <aside className="hidden w-64 flex-shrink-0 border-r bg-background md:block">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Link
              href="/trainer/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/trainer/students"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <Users className="h-4 w-4" />
              <span>Students</span>
            </Link>
            <Link
              href="/trainer/batches"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <BookOpen className="h-4 w-4" />
              <span>Batches</span>
            </Link>
            <Link
              href="/trainer/materials"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <FileText className="h-4 w-4" />
              <span>Course Materials</span>
            </Link>
            <Link
              href="/trainer/assignments"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <ClipboardList className="h-4 w-4" />
              <span>Assignments</span>
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  )
}

