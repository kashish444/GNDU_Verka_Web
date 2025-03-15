import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronRight,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react"

export default function Home() {
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
              <p className="text-sm text-gray-600">Verka Branch, Amritsar</p>
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
            
            <Link href="/gallery" className="font-medium text-[#0c2340] hover:text-amber-600">
              Gallery
            </Link>
            
            <Link href="/contact" className="font-medium text-[#0c2340] hover:text-amber-600">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="lg:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="/image.png"
              alt="University Campus"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Guru Nanak Dev University</h1>
                  <p className="text-lg md:text-xl mb-6">
                    Empowering minds, transforming lives through quality education and research excellence
                  </p>
                  <div className="flex flex-wrap gap-4">
                   
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Links Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#0c2340]">Quick Access</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Admissions</h3>
                  <p className="text-gray-600 mb-4">Admission process, eligibility criteria, and application details</p>
                  <Link href="/admissions" className="text-amber-600 hover:text-amber-700 flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Departments</h3>
                  <p className="text-gray-600 mb-4">Explore our academic departments and programs offered</p>
                  <Link href="/departments" className="text-blue-600 hover:text-blue-700 flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Bell className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Notices</h3>
                  <p className="text-gray-600 mb-4">Important notifications, circulars, and announcements</p>
                  <Link href="/notices" className="text-green-600 hover:text-green-700 flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Events</h3>
                  <p className="text-gray-600 mb-4">Upcoming events, seminars, workshops, and cultural activities</p>
                  <Link href="/events" className="text-purple-600 hover:text-purple-700 flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* News & Announcements Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#0c2340]">News & Announcements</h2>

            <Tabs defaultValue="news" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="news">Latest News</TabsTrigger>
                <TabsTrigger value="announcements">Announcements</TabsTrigger>
              </TabsList>

              <TabsContent value="news">
                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 relative h-48 md:h-auto">
                          <Image
                            src="/research.png"
                            alt={`News ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="md:w-3/4 p-6">
                          <div className="text-sm text-gray-500 mb-2">May {item + 10}, 2023</div>
                          <h3 className="text-xl font-bold mb-2">GNDU Verka Branch Launches New Research Center</h3>
                          <p className="text-gray-600 mb-4">
                            The new state-of-the-art research facility will focus on sustainable technologies and
                            innovation, providing students with hands-on experience in cutting-edge research.
                          </p>
                          <Link
                            href={`/news/${item}`}
                            className="text-amber-600 hover:text-amber-700 flex items-center"
                          >
                            Read More <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </CardContent>
                      </div>
                    </Card>
                  ))}

                  <div className="text-center mt-8">
                    <Button variant="outline">View All News</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="announcements">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Card key={item} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="bg-amber-100 text-amber-600 p-3 rounded-full mr-4">
                            <Bell className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">May {item + 5}, 2023</div>
                            <h3 className="font-bold mb-1">Admission Open for 2023-24 Academic Session</h3>
                            <p className="text-gray-600 text-sm">
                              Applications are invited for various undergraduate and postgraduate programs for the
                              academic year 2023-24.
                            </p>
                            <Link
                              href={`/announcements/${item}`}
                              className="text-amber-600 hover:text-amber-700 text-sm flex items-center mt-2"
                            >
                              View Details <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="text-center mt-8">
                    <Button variant="outline">View All Announcements</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Campus Highlights */}
        <section className="py-12 bg-[#0c2340] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Campus Highlights</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
                <p className="text-lg">Academic Programs</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">100+</div>
                <p className="text-lg">Faculty Members</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">5000+</div>
                <p className="text-lg">Students</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-amber-600 hover:bg-amber-700">Virtual Campus Tour</Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#0c2340]">Upcoming Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/annual.png"
                      alt={`Event ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-100 text-amber-600 p-2 rounded text-sm font-medium mr-2">
                        May {item + 15}
                      </div>
                      <div className="text-sm text-gray-500">10:00 AM</div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Annual Cultural Festival</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Join us for a celebration of art, music, and cultural performances by students and faculty.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Main Auditorium</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">View All Events</Button>
            </div>
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
                  <p className="text-sm text-gray-300">Verka Branch</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Guru Nanak Dev University, Verka Branch is committed to providing quality education and fostering
                academic excellence.
              </p>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-amber-300">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-amber-300">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-amber-300">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-amber-300">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://youtube.com" aria-label="YouTube" className="hover:text-amber-300">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
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
                <li>
                  <Link href="/research" className="text-gray-300 hover:text-amber-300">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/campus-life" className="text-gray-300 hover:text-amber-300">
                    Campus Life
                  </Link>
                </li>
                <li>
                  <Link href="/placements" className="text-gray-300 hover:text-amber-300">
                    Placements
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
                  <Link href="/tenders" className="text-gray-300 hover:text-amber-300">
                    Tenders
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-amber-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/alumni" className="text-gray-300 hover:text-amber-300">
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link href="/rti" className="text-gray-300 hover:text-amber-300">
                    RTI
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
                    Guru Nanak Dev University, Verka Branch, Amritsar, Punjab - 143001
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
            <p>&copy; {new Date().getFullYear()} Guru Nanak Dev University, Verka Branch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

