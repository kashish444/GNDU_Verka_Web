
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Title */}
        <section className="bg-[#0c2340] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 text-lg">
              Get in touch with GNDU College Verka-Amritsar
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0c2340]">
                  Get In Touch
                </h2>
                <p className="text-gray-700 mb-8">
                  We&apos;re here to help and answer any questions you might
                  have. We look forward to hearing from you.
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
                      <div className="h-6 w-6 flex items-center justify-center text-purple-600 font-bold">
                        @
                      </div>
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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.916708643449!2d74.93697431513045!3d31.65343568133151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391962c3eddce689%3A0xde7c0f261fea141b!2sGNDU%20College%20Verka%2C%20Amritsar!5e0!3m2!1sen!2sin!4v1648451234567!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="GNDU College Verka Location"
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
                  <CardTitle className="text-2xl text-center text-[#0c2340]">
                    Send Us a Message
                  </CardTitle>
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
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Admission Inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please write your message here..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#0c2340] hover:bg-[#0c2340]/90"
                    >
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
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Department Contacts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Admissions Office</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>9041904149 (Ext. 101)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>gnducverka@gmail.com</span>
                    </p>
                    <p className="text-sm mt-2">
                      For admission inquiries, application status, and
                      enrollment procedures.
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
                      <span>9041904149, 9501085220 (Ext. 102)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>Sonikaphy.verka@gndu.ac.in</span>
                    </p>
                    <p className="text-sm mt-2">
                      For examination schedules, results, and
                      certificate-related queries.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Accounts Department
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>9041904149 (Ext. 103)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>gnducverka@gmail.com</span>
                    </p>
                    <p className="text-sm mt-2">
                      For fee payments, scholarships, and financial matters.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Placement Cell</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>9501085220 (Ext. 104)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>Sonikaphy.verka@gndu.ac.in</span>
                    </p>
                    <p className="text-sm mt-2">
                      For career guidance, placement opportunities, and industry
                      connections.
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
                      <span>7837369181,9463170114 (Ext. 105)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>Libverka.mk@gmail.com</span>
                    </p>
                    <p className="text-sm mt-2">
                      For library resources, book issuance, and digital resource
                      access.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Student Welfare</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>9988301345 (Ext. 106)</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>Nisha.verka@gndu.ac.in</span>
                    </p>
                    <p className="text-sm mt-2">
                      For student support services, counseling, and
                      extracurricular activities.
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
                  <h3 className="text-lg font-bold mb-2">
                    What are the college working hours?
                  </h3>
                  <p className="text-gray-700">
                    The college is open from Monday to Friday, 9:00 AM to 5:00
                    PM. Administrative offices are closed on Saturdays and
                    Sundays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    How can I apply for admission?
                  </h3>
                  <p className="text-gray-700">
                    Admission applications can be submitted online through our
                    website or in person at the Admissions Office. Please check
                    the Admissions page for detailed procedures and
                    requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    Is hostel accommodation available?
                  </h3>
                  <p className="text-gray-700">
                    Currently, the college does not provide hostel
                    accommodation. However, we can assist students in finding
                    suitable accommodation near the campus.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    How can I obtain my transcripts or certificates?
                  </h3>
                  <p className="text-gray-700">
                    Requests for transcripts and certificates can be made at the
                    Examination Cell. Please bring your ID card and any required
                    documentation when making the request.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
     <Footer />
    </div>
  );
}
