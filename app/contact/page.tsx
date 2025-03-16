import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      

      {/* Header */}
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
            
            <Link href="/gallery" className="font-medium text-[#0c2340] hover:text-amber-600">
              Gallery
            </Link>
            
            <Link href="/contact" className="font-medium text-amber-600 border-b-2 border-amber-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Page Title */}
        <section className="bg-[#0c2340] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 text-lg">Get in touch with GNDU College Verka-Amritsar</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0c2340]">Get In Touch</h2>
                <p className="text-gray-700 mb-8">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Address</h3>
                      <p className="text-gray-700">
                        Guru Nanak Dev University College,
                        <br />
                        Verka-Amritsar, Punjab - 143001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-gray-700">81465-14040</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-gray-700">osd.verka@gndu.ac.in</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <div className="h-6 w-6 flex items-center justify-center text-purple-600 font-bold">@</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Social Media</h3>
                      <div className="flex space-x-4 mt-2">
                        <Link
                          href="https://facebook.com"
                          aria-label="Facebook"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Facebook className="h-5 w-5" />
                        </Link>
                        <Link
                          href="https://twitter.com"
                          aria-label="Twitter"
                          className="text-gray-600 hover:text-blue-400"
                        >
                          <Twitter className="h-5 w-5" />
                        </Link>
                        <Link
                          href="https://instagram.com"
                          aria-label="Instagram"
                          className="text-gray-600 hover:text-pink-600"
                        >
                          <Instagram className="h-5 w-5" />
                        </Link>
                        <Link
                          href="https://linkedin.com"
                          aria-label="LinkedIn"
                          className="text-gray-600 hover:text-blue-700"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                          href="https://youtube.com"
                          aria-label="YouTube"
                          className="text-gray-600 hover:text-red-600"
                        >
                          <Youtube className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.8534427264493!2d74.8742!3d31.6344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzAzLjgiTiA3NMKwNTInMjcuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-[#0c2340]">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Admission Inquiry" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Please write your message here..." rows={5} required />
                    </div>

                    <Button type="submit" className="w-full bg-[#0c2340] hover:bg-[#0c2340]/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Department Contacts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Admissions Office</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>81465-14040 (Ext. 101)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>admissions.verka@gndu.ac.in</span>
                    </p>
                    <p className="text-sm mt-2">
                      For admission inquiries, application status, and enrollment procedures.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Examination Cell</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>81465-14040 (Ext. 102)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>exam.verka@gndu.ac.in</span>
                    </p>
                    <p className="text-sm mt-2">For examination schedules, results, and certificate-related queries.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Accounts Department</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>81465-14040 (Ext. 103)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>accounts.verka@gndu.ac.in</span>
                    </p>
                    <p className="text-sm mt-2">For fee payments, scholarships, and financial matters.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Placement Cell</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>81465-14040 (Ext. 104)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>placement.verka@gndu.ac.in</span>
                    </p>
                    <p className="text-sm mt-2">
                      For career guidance, placement opportunities, and industry connections.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Library</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>81465-14040 (Ext. 105)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>library.verka@gndu.ac.in</span>
                    </p>
                    <p className="text-sm mt-2">For library resources, book issuance, and digital resource access.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Student Welfare</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>81465-14040 (Ext. 106)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>welfare.verka@gndu.ac.in</span>
                    </p>
                    <p className="text-sm mt-2">
                      For student support services, counseling, and extracurricular activities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What are the college working hours?</h3>
                  <p className="text-gray-700">
                    The college is open from Monday to Friday, 9:00 AM to 5:00 PM. Administrative offices are closed on
                    Saturdays and Sundays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How can I apply for admission?</h3>
                  <p className="text-gray-700">
                    Admission applications can be submitted online through our website or in person at the Admissions
                    Office. Please check the Admissions page for detailed procedures and requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Is hostel accommodation available?</h3>
                  <p className="text-gray-700">
                    Currently, the college does not provide hostel accommodation. However, we can assist students in
                    finding suitable accommodation near the campus.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How can I obtain my transcripts or certificates?</h3>
                  <p className="text-gray-700">
                    Requests for transcripts and certificates can be made at the Examination Cell. Please bring your ID
                    card and any required documentation when making the request.
                  </p>
                </CardContent>
              </Card>
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

