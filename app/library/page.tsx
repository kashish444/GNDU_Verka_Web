import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, BookOpen, Clock, Download, FileText, Newspaper, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LibraryPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold">Library</h1>
            <p className="mt-2 text-lg">Knowledge Hub of GNDU College Verka-Amritsar</p>
          </div>
        </section>

        {/* Library Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0c2340]">About Our Library</h2>
                <p className="text-gray-700 mb-4">
                  The GNDU College Verka-Amritsar Library serves as the intellectual heart of our institution.
                  Established along with the college in 2011, our library has grown into a comprehensive resource center
                  that supports the academic and research needs of our students and faculty.
                </p>
                <p className="text-gray-700 mb-4">
                  Our library houses a rich collection of books, journals, magazines, newspapers, and digital resources
                  across various disciplines. With a spacious reading area, computer terminals, and a peaceful
                  environment, it provides an ideal space for learning and intellectual exploration.
                </p>
                <p className="text-gray-700">
                  The library is continuously updated with the latest publications and resources to ensure that our
                  academic community has access to current knowledge and research in their respective fields.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-gray-700">
                      <span className="font-semibold">Collection:</span> Over 10,000 books, 50+ journals, and numerous
                      digital resources
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-gray-700">
                      <span className="font-semibold">Timing:</span> 9:00 AM - 5:00 PM (Monday-Saturday)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-gray-700">
                      <span className="font-semibold">Location:</span> First Floor, Main Academic Block
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Library"
                  alt="College Library"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        

        {/* Library Rules */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Library Rules</h2>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">1</div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Library Cards:</span> Each student will be issued a library
                        card, which must be presented when borrowing books. Library cards are non-transferable.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">2</div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Borrowing Limit:</span> Undergraduate students can borrow up to
                        3 books, and postgraduate students can borrow up to 5 books at a time.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">3</div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Loan Period:</span> Books are issued for 14 days and can be
                        renewed once if no reservation has been made for the same.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">4</div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Late Fees:</span> A fine of Rs. 5 per day will be charged for
                        books returned after the due date.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">5</div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Reference Materials:</span> Reference books, journals,
                        magazines, and newspapers can only be consulted within the library premises.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">6</div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Silence:</span> Maintain silence in the library. Mobile phones
                        must be kept on silent mode.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">7</div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Food and Drinks:</span> Eating, drinking, and smoking are
                        strictly prohibited in the library.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">8</div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Damage to Books:</span> Users will be held responsible for any
                        damage to library materials and will be required to replace the damaged item.
                      </p>
                    </li>
                  </ul>
                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" /> Download Complete Library Guidelines
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Library Resources</h2>

            <Tabs defaultValue="journals" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="journals">Journals</TabsTrigger>
                <TabsTrigger value="magazines">Magazines</TabsTrigger>
                <TabsTrigger value="newspapers">Newspapers</TabsTrigger>
                <TabsTrigger value="digital">Digital Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="journals">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 text-amber-600 mr-2" />
                      Academic Journals
                    </CardTitle>
                    <CardDescription>Scholarly publications for research and academic reference</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Science & Technology</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Journal of Computer Science</li>
                          <li>International Journal of Physics</li>
                          <li>Chemical Science Review</li>
                          <li>Biological Research Quarterly</li>
                          <li>Mathematics Today</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Arts & Humanities</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Journal of Historical Studies</li>
                          <li>Literary Review</li>
                          <li>Economics & Finance Journal</li>
                          <li>Political Science Quarterly</li>
                          <li>Sociological Perspectives</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Button variant="outline">View Complete Journal List</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="magazines">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 text-blue-600 mr-2" />
                      Magazines
                    </CardTitle>
                    <CardDescription>General interest and specialized magazines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">General Interest</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>India Today</li>
                          <li>Outlook</li>
                          <li>The Week</li>
                          <li>Frontline</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Science & Technology</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Science Reporter</li>
                          <li>Electronics For You</li>
                          <li>Digit</li>
                          <li>Sanctuary Asia</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Business & Career</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Business Today</li>
                          <li>Competition Success Review</li>
                          <li>Employment News</li>
                          <li>Yojana</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Button variant="outline">View All Magazines</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="newspapers">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Newspaper className="h-5 w-5 text-green-600 mr-2" />
                      Newspapers
                    </CardTitle>
                    <CardDescription>Daily and weekly newspapers for current affairs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">English</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>The Times of India</li>
                          <li>The Hindu</li>
                          <li>Hindustan Times</li>
                          <li>The Indian Express</li>
                          <li>The Tribune</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Regional Languages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Ajit (Punjabi)</li>
                          <li>Jagbani (Punjabi)</li>
                          <li>Punjab Kesari (Hindi)</li>
                          <li>Dainik Bhaskar (Hindi)</li>
                          <li>Punjabi Tribune (Punjabi)</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700 text-center">
                      Newspapers are available in the reading section and must be consulted within the library premises.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="digital">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 text-purple-600 mr-2" />
                      Digital Resources & INFLIBNET
                    </CardTitle>
                    <CardDescription>Online databases and e-resources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      The library provides access to various digital resources and online databases through INFLIBNET&apos;s
                      N-LIST program, enabling students and faculty to access e-journals, e-books, and research papers.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Available Resources</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>E-journals through N-LIST</li>
                          <li>E-books collection</li>
                          <li>Online research databases</li>
                          <li>Digital repository of previous years&apos; question papers</li>
                          <li>Access to National Digital Library of India</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">How to Access</h4>
                        <p className="text-gray-700">
                          Students and faculty can access these resources using their institutional login credentials.
                          Computer terminals are available in the library for accessing digital resources. Remote access
                          is also available for registered users.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-center space-x-4">
                      <Button>Access INFLIBNET</Button>
                      <Button variant="outline">Digital Resources Guide</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Library Staff */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Library Staff</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="text-center">
                <div className="pt-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=150&width=150&text=Librarian"
                      alt="Chief Librarian"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold">Dr. Harpreet Singh</h3>
                  <p className="text-amber-600 font-medium mb-2">Chief Librarian</p>
                  <p className="text-gray-700 text-sm mb-2">Ph.D. in Library Science</p>
                  <p className="text-gray-700 text-sm">harpreet.library@gndu-verka.ac.in</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <div className="pt-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=150&width=150&text=Assistant"
                      alt="Assistant Librarian"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold">Ms. Rajwinder Kaur</h3>
                  <p className="text-amber-600 font-medium mb-2">Assistant Librarian</p>
                  <p className="text-gray-700 text-sm mb-2">M.Lib.I.Sc.</p>
                  <p className="text-gray-700 text-sm">rajwinder.library@gndu-verka.ac.in</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <div className="pt-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=150&width=150&text=Technical"
                      alt="Technical Assistant"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold">Mr. Gurpreet Singh</h3>
                  <p className="text-amber-600 font-medium mb-2">Technical Assistant</p>
                  <p className="text-gray-700 text-sm mb-2">B.Lib.I.Sc., PGDCA</p>
                  <p className="text-gray-700 text-sm">gurpreet.library@gndu-verka.ac.in</p>
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

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I get a library card?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Library cards are issued to all enrolled students at the beginning of the academic year. New
                      students can visit the library with their college ID card and admission receipt to get their
                      library card issued.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What is the procedure for borrowing books?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      To borrow books, present your library card at the circulation desk along with the books you wish
                      to borrow. The librarian will process your request and update the due date. Remember to check the
                      condition of the book before borrowing to avoid being held responsible for pre-existing damage.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How can I access digital resources?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Digital resources can be accessed from the computer terminals in the library. For remote access,
                      you need to register with the librarian to get your login credentials for INFLIBNET and other
                      digital platforms. Once registered, you can access these resources from anywhere using your
                      credentials.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What happens if I lose a library book?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      If you lose a library book, report it immediately to the librarian. You will be required to
                      replace the book with a new copy of the same edition or a later edition. If the book is out of
                      print, you may be asked to pay three times the current market price of the book or replace it with
                      a book of equivalent value as suggested by the librarian.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I suggest books for the library to purchase?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Yes, students and faculty can suggest books for the library collection. There is a suggestion box
                      in the library, or you can fill out a book recommendation form available at the circulation desk.
                      The library committee reviews these suggestions periodically and procures books based on relevance
                      and budget availability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#0c2340] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Visit Our Library Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Explore our extensive collection of books, journals, and digital resources to enhance your learning and
              research.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700">Library Catalog</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Librarian
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

