import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, Users, BookOpen, Shield, HeartPulse, Coffee, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function StudentCornerPage() {
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
            <Link href="mailto:osd.verka@gndu.ac.in" className="flex items-center hover:text-amber-300">
              <Mail className="h-4 w-4 mr-1" />
              <span>osd.verka@gndu.ac.in</span>
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
              <p className="text-sm text-gray-600">Verka-Amritsar</p>
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
            <Link href="/student-corner" className="font-medium text-[#0c2340] hover:text-amber-600">
              Student Corner
            </Link>
            <Link href="/gallery" className="font-medium text-[#0c2340] hover:text-amber-600">
              Gallery
            </Link>
            <Link href="/library" className="font-medium text-[#0c2340] hover:text-amber-600">
              Library
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

      <main className="flex-1">
        {/* Page Title */}
        <section className="bg-[#0c2340] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Student Corner</h1>
            <p className="mt-2 text-lg">Resources and support for GNDU College Verka-Amritsar students</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0c2340]">Student Life at GNDU</h2>
              <p className="text-gray-700">
                The Student Corner is your gateway to all student-related resources, activities, and support services.
                We are committed to providing a nurturing environment where students can thrive academically, socially,
                and personally. Explore the various facilities, clubs, and support systems available to enhance your
                college experience.
              </p>
            </div>
          </div>
        </section>

        {/* Societies and Clubs */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Societies & Clubs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cultural Society</h3>
                  <p className="text-gray-700 mb-4">
                    Promotes cultural activities, organizes festivals, and celebrates diverse traditions through music,
                    dance, and drama.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Literary Club</h3>
                  <p className="text-gray-700 mb-4">
                    Fosters love for literature through debates, poetry sessions, creative writing workshops, and
                    literary competitions.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">NSS Unit</h3>
                  <p className="text-gray-700 mb-4">
                    Engages students in community service, social awareness campaigns, and volunteer activities for
                    societal development.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-amber-600 hover:bg-amber-700">View All Clubs & Societies</Button>
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Scholarships</h2>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Merit Scholarships</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      <p className="text-gray-700">
                        Merit scholarships are awarded to students who demonstrate exceptional academic performance.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>University Merit Scholarship: For top 10% students in each program</li>
                        <li>Academic Excellence Award: For students with 90% or above in previous academic year</li>
                        <li>Subject Topper Scholarship: For students ranking first in their respective subjects</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        <span className="font-semibold">Application Period:</span> July 15 - August 30 each year
                      </p>
                      <Button className="mt-2" variant="outline">
                        Download Application Form
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Government Scholarships</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      <p className="text-gray-700">
                        Various government scholarships are available for eligible students based on different criteria.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Post-Matric Scholarship for SC/ST students</li>
                        <li>Central Sector Scholarship Scheme</li>
                        <li>Prime Minister's Scholarship Scheme</li>
                        <li>State Government Scholarships for minority communities</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        <span className="font-semibold">Application Process:</span> Apply through the National
                        Scholarship Portal
                      </p>
                      <Button className="mt-2" variant="outline">
                        Visit National Scholarship Portal
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Financial Aid</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      <p className="text-gray-700">
                        Financial aid is available for students facing economic hardships to ensure that financial
                        constraints do not hinder education.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Fee Concession: Partial or full fee waiver based on financial need</li>
                        <li>Book Bank Facility: Free textbooks for economically disadvantaged students</li>
                        <li>Emergency Financial Assistance: For students facing unexpected financial crises</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        <span className="font-semibold">Contact:</span> Financial Aid Office, Administrative Block
                      </p>
                      <Button className="mt-2" variant="outline">
                        Apply for Financial Aid
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Student Facilities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Medical+Room"
                    alt="Medical Room"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <HeartPulse className="h-6 w-6 text-red-500 mr-2" />
                    <h3 className="text-xl font-bold">Medical Room</h3>
                  </div>
                  <p className="text-gray-700">
                    The college has a well-equipped medical room with a qualified nurse available during college hours.
                    First aid and basic medical services are provided for minor health issues and emergencies.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Location:</span> Ground Floor, Administrative Block
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Timing:</span> 9:00 AM - 4:00 PM (Monday-Friday)
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Canteen"
                    alt="Canteen"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Coffee className="h-6 w-6 text-amber-600 mr-2" />
                    <h3 className="text-xl font-bold">Canteen</h3>
                  </div>
                  <p className="text-gray-700">
                    The college canteen offers a variety of nutritious and affordable food options in a clean and
                    comfortable environment. Special care is taken to maintain hygiene and quality.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Location:</span> Central Campus Area
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Timing:</span> 8:30 AM - 4:30 PM (Monday-Saturday)
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Common+Room"
                    alt="Common Room"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold">Common Room</h3>
                  </div>
                  <p className="text-gray-700">
                    Separate common rooms for male and female students provide a space to relax, socialize, and engage
                    in recreational activities during free periods.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Location:</span> First Floor, Main Building
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Facilities:</span> Indoor games, newspapers, magazines, TV
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-amber-600 hover:bg-amber-700">Explore All Facilities</Button>
            </div>
          </div>
        </section>

        {/* Anti-Ragging & Grievance Redressal */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Student Support</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-red-600 mr-2" />
                    Anti-Ragging Cell
                  </CardTitle>
                  <CardDescription>Zero tolerance policy against ragging</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The college has a dedicated Anti-Ragging Cell to ensure a ragging-free campus environment. Any form
                    of ragging is strictly prohibited and punishable as per UGC regulations.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Committee Members:</span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dr. Manjit Kaur (Chairperson)</li>
                      <li>Mr. Sukhmaninder Pal Singh (Member)</li>
                      <li>Dr. Nisha Chhabra (Member)</li>
                      <li>Student Representative</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      <span className="font-semibold">Contact:</span> anti-ragging@gndu-verka.ac.in
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Helpline:</span> 81465-14040 (Ext. 108)
                    </p>
                  </div>
                  <Button className="mt-4 w-full">Report Ragging Incident</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-6 w-6 text-blue-600 mr-2" />
                    Discipline & Grievance Redressal
                  </CardTitle>
                  <CardDescription>Fair and transparent grievance resolution</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The Discipline and Grievance Redressal Committee addresses student grievances and ensures that
                    discipline is maintained on campus. Students can approach the committee for resolution of academic,
                    administrative, or personal grievances.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Committee Members:</span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Mrs. Puneet Randhawa (Chairperson)</li>
                      <li>Dr. Rupinder Preet Kaur (Member)</li>
                      <li>Dr. Jamaninder Pal Singh (Member)</li>
                      <li>Student Welfare Officer</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      <span className="font-semibold">Contact:</span> grievance@gndu-verka.ac.in
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Office Hours:</span> 10:00 AM - 3:00 PM (Monday-Friday)
                    </p>
                  </div>
                  <Button className="mt-4 w-full">Submit Grievance</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#0c2340] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Involved in Campus Life</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Make the most of your college experience by participating in various activities, joining clubs, and
              utilizing the resources available to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700">Join a Club</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Student Handbook
              </Button>
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
                  src="/placeholder.svg?height=60&width=60"
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

