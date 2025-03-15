import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function QuickLinks() {
  const links = [
    { title: "Student Login", href: "#" },
    { title: "Faculty Portal", href: "#" },
    { title: "Library", href: "#" },
    { title: "Career Services", href: "#" },
    { title: "Campus Map", href: "#" },
  ]

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Links</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <Button key={link.title} variant="outline" asChild>
              <Link href={link.href}>{link.title}</Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

