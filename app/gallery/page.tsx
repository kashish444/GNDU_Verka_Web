import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react"
export default function CampusLifePage() {
  // Sample image data - you can replace with your actual images
  const galleryImages = [
    {
      id: 1,
      imageSrc: "/verka.png",
      title: "Campus Building 1",
      description: "Modern infrastructure with state-of-the-art facilities for students.",
    },
    {
      id: 2,
      imageSrc: "/campus2.png",
      title: "Campus Building 2",
      description: "Modern infrastructure with state-of-the-art facilities for students.",
    },
    {
      id: 3,
      imageSrc: "/collegeevent1.png",
      title: "College Event 1",
      description: "Cultural and academic events that enrich student experience.",
    },
    {
      id: 4,
      imageSrc: "/collegeevent2.png",
      title: "College Event 2",
      description: "Cultural and academic events that enrich student experience.",
    },
    {
      id: 5,
      imageSrc: "/sportact.png",
      title: "Sports Activity 1",
      description: "Sports facilities and competitions to promote physical fitness.",
    },
    {
      id: 6,
      imageSrc: "/sportact.png",
      title: "Sports Activity 2",
      description: "Sports facilities and competitions to promote physical fitness.",
    },
    {
      id: 7,
      imageSrc: "/studentactivity.png",
      title: "Student Activity 1",
      description: "Extracurricular activities that develop leadership and teamwork.",
    },
    {
      id: 8,
      imageSrc: "/studentactivity.png",
      title: "Student Activity 2",
      description: "Extracurricular activities that develop leadership and teamwork.",
    },
    {
      id: 9,
      imageSrc: "/verka.png",
      title: "Library",
      description: "Our well-stocked library houses thousands of books, journals, and digital resources.",
    },
    {
      id: 10,
      imageSrc: "/computer.png",
      title: "Computer Labs",
      description: "Modern computer laboratories equipped with the latest hardware and software.",
    },
    {
      id: 11,
      imageSrc: "/sports.png",
      title: "Sports Complex",
      description: "Comprehensive sports facilities including indoor and outdoor courts and fields.",
    },
    {
      id: 12,
      imageSrc: "/verka.png",
      title: "Auditorium",
      description: "A spacious auditorium for hosting cultural events, seminars, and conferences.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
     {/* Top Bar */}
     <div className="bg-[#0c2340] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/contact" className="flex items-center hover:text-amber-300">
              <Phone className="h-4 w-4 mr-1" />
              <span>81465-14040</span>
            </Link>
            <Link href="mailto:info@gndu.ac.in" className="flex items-center hover:text-amber-300">
              <Mail className="h-4 w-4 mr-1" />
              <span>osd.verka@gndu.ac.in</span>
            </Link>
            
          </div>
          <span>Guru Nanak Dev University Verka Branch</span>
          <div className="flex items-center space-x-3">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-4 w-4 hover:text-amber-300" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter className="h-4 w-4 hover:text-amber-300" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram className="h-4 w-4 hover:text-amber-300" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4 hover:text-amber-300" />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <Youtube className="h-4 w-4 hover:text-amber-300" />
            </Link>
          </div>
        </div>
      </div>
      

      {/* Header */}
      <header className="bg-white py-4 shadow-md sticky top-0 z-50">
              <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <Image
                    src="/university-logo.jpg"
                    alt="Guru Nanak Dev University Logo"
                    width={80}
                    height={80}
                    className="mr-3"
                  />
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold text-[#0c2340]">Guru Nanak Dev University</h1>
                    <p className="text-sm text-gray-600">College Verka-Amritsar</p>
                  </div>
                </div>
                <nav className="hidden lg:flex space-x-6">
                  <Link href="/" className="font-medium text-[#0c2340] hover:text-amber-600">
                    Home
                  </Link>
                  <Link href="/about" className="font-medium text-[#0c2340] hover:text-amber-600">
                    About
                  </Link>
                  <Link href="/academics" className="font-medium text-[#0c2340] hover:text-amber-600">
                    Academics
                  </Link>
                  <Link href="/admissions" className="font-medium text-[#0c2340] hover:text-amber-600">
                    Admissions
                  </Link>
                  
                  <Link href="/gallery" className="font-medium text-amber-600 border-b-2 border-amber-600">
                    Gallery
                  </Link>
                  
                  <Link href="/contact" className="font-medium text-[#0c2340] hover:text-amber-600">
                    Contact
                  </Link>
                </nav>
              </div>
            </header>

      <main className="flex-1">
        {/* Page Title */}
        <section className="bg-[#0c2340] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Campus Life</h1>
            <p className="mt-2 text-lg">Explore the vibrant life at GNDU College Verka-Amritsar</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0c2340]">Life at GNDU College Verka</h2>
              <p className="text-gray-700">
                Our campus is a vibrant hub of academic, cultural, and recreational activities. Students enjoy a
                balanced life with modern facilities, engaging events, and a supportive community. Explore our gallery
                to get a glimpse of the enriching campus experience we offer.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery - Simplified to show all images together */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#0c2340]">Campus Gallery</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {galleryImages.map((item) => (
                <GalleryItem key={item.id} imageSrc={item.imageSrc} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#0c2340] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience Campus Life at GNDU College Verka</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join us to experience a vibrant campus life that balances academic excellence with extracurricular
              activities.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0c2340] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/university-logo.jpg"
                  alt="Guru Nanak Dev University Logo"
                  width={60}
                  height={60}
                  className="mr-3 bg-white rounded-full p-1"
                />
                <div>
                  <h3 className="text-lg font-bold">GNDU</h3>
                  <p className="text-sm text-gray-300">College Verka-Amritsar</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Guru Nanak Dev University College, Verka-Amritsar is committed to providing quality education and
                fostering academic excellence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-amber-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="text-gray-300 hover:text-amber-300">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="text-gray-300 hover:text-amber-300">
                    Admissions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Important Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/examination" className="text-gray-300 hover:text-amber-300">
                    Examination
                  </Link>
                </li>
                <li>
                  <Link href="/results" className="text-gray-300 hover:text-amber-300">
                    Results
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-amber-300">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">
                    Guru Nanak Dev University College, Verka-Amritsar, Punjab - 143001
                  </span>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">81465-14040</span>
                </li>
                <li className="flex">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">osd.verka@gndu.ac.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-300 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Guru Nanak Dev University College, Verka-Amritsar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Gallery Item Component
function GalleryItem({ imageSrc, title, description }: { imageSrc: string; title: string; description: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="relative h-[400px] w-full">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
      </DialogContent>
    </Dialog>
  )
}

