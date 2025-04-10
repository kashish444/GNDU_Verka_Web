import Image from "next/image";

import { MapPin, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/ui/Navbar";
import Lander from "@/components/ui/Lander";
import Footer from "@/components/ui/Footer";

export default function LibraryPage() {
  const rules = [
    "All users are required to show their college IDs to the security person/officer upon entrance to the library.",
    "All users must observe total silence in the library and its environs at all times.",
    "Students are advised to stand in queue for issued and return books.",
    "Books will be issued only for 21 days.",
    "Defaulters will be charged fine of Rs.3/- per day after due date.",
    "Library book is lost/damaged student will have to pay fine @ current price of book.",
    "Books will issue only to card holder. Any student found trying to issue on other's card his/her membership will be cancelled.",
    "Bags, polybags, folders etc. must be left in the luggage area inside the library. Personal books can be allowed inside the library with the permission of library staff.",
    "Reference books, magazines, journals, dictionaries, encyclopedias and other reference materials are only for reading within library and can't be issued to anybody.",
    "No discussion permitted inside the Library.",
    "No student is allowed to enter the circulation area without the consent of the library staff.",
    "All users are required to show all items to the security person/officer before leaving the library.",
  ];

  const collections = [
    { name: "Fiction", count: 120 },
    { name: "Non-Fiction", count: 85 },
    { name: "Science", count: 60 },
    { name: "History", count: 45 },
    { name: "Technology", count: 30 },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Title */}

        <Lander
          image="library2.jpeg"
          heading="Library"
          description="Knowledge Hub of GNDU College Verka-Amritsar"
          cover="100% 30%"
        />

        {/* Library Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0c2340]">
                  About Our Library
                </h2>
                <p className="text-gray-700 mb-4">
                  The GNDU College Verka-Amritsar Library serves as the
                  intellectual heart of our institution. Established along with
                  the college in 2011, our library has grown into a
                  comprehensive resource center that supports the academic and
                  research needs of our students and faculty.
                </p>
                <p className="text-gray-700 mb-4">
                  Our library houses a rich collection of books, journals,
                  magazines, newspapers, and digital resources across various
                  disciplines. With a spacious reading area, computer terminals,
                  and a peaceful environment, it provides an ideal space for
                  learning and intellectual exploration.
                </p>
                <p className="text-gray-700">
                  The library is continuously updated with the latest
                  publications and resources to ensure that our academic
                  community has access to current knowledge and research in
                  their respective fields.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-gray-700">
                      <span className="font-semibold">Collection:</span> Over
                      10,000 books, 50+ journals, and numerous digital resources
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-gray-700">
                      <span className="font-semibold">Timing:</span> 9:00 AM -
                      5:00 PM (Monday-Saturday)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-gray-700">
                      <span className="font-semibold">Location:</span> First
                      Floor, Main Academic Block
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/library.jpeg"
                  alt="College Library"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Library Collections */}
        <section className="py-12">
          <div className="container mx-auto px-4 w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Library Collections
            </h2>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-300 text-left">
                        <th className="p-3 text-gray-600">Collection</th>
                        <th className="p-3 text-gray-600">No. of Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      {collections.map((collection, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="p-3 flex items-center gap-3 text-gray-700">
                            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                              <BookOpen className="w-4 h-4" />
                            </div>
                            {collection.name}
                          </td>
                          <td className="p-3 text-gray-700">
                            {collection.count}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Library Rules */}
        <section className="py-12">
          <div className="container mx-auto px-4 w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Library Rules
            </h2>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4" key="list">
                    {rules.map((rule, index) => (
                      <>
                        <li className="flex items-center" key={index}>
                          <div className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{rule}</p>
                        </li>
                      </>
                    ))}
                  </ul>
                  {/* <div className="mt-6 text-center">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" /> Download Complete
                      Library Guidelines
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources */}
        {/* <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Library Resources
            </h2>

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
                    <CardDescription>
                      Scholarly publications for research and academic reference
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Science & Technology
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Journal of Computer Science</li>
                          <li>International Journal of Physics</li>
                          <li>Chemical Science Review</li>
                          <li>Biological Research Quarterly</li>
                          <li>Mathematics Today</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Arts & Humanities
                        </h4>
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
                      <Button variant="outline">
                        View Complete Journal List
                      </Button>
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
                    <CardDescription>
                      General interest and specialized magazines
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          General Interest
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>India Today</li>
                          <li>Outlook</li>
                          <li>The Week</li>
                          <li>Frontline</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Science & Technology
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Science Reporter</li>
                          <li>Electronics For You</li>
                          <li>Digit</li>
                          <li>Sanctuary Asia</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Business & Career
                        </h4>
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
                    <CardDescription>
                      Daily and weekly newspapers for current affairs
                    </CardDescription>
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
                        <h4 className="font-semibold text-lg mb-2">
                          Regional Languages
                        </h4>
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
                      Newspapers are available in the reading section and must
                      be consulted within the library premises.
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
                    <CardDescription>
                      Online databases and e-resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      The library provides access to various digital resources
                      and online databases through INFLIBNET&apos;s N-LIST
                      program, enabling students and faculty to access
                      e-journals, e-books, and research papers.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Available Resources
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>E-journals through N-LIST</li>
                          <li>E-books collection</li>
                          <li>Online research databases</li>
                          <li>
                            Digital repository of previous years&apos; question
                            papers
                          </li>
                          <li>Access to National Digital Library of India</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          How to Access
                        </h4>
                        <p className="text-gray-700">
                          Students and faculty can access these resources using
                          their institutional login credentials. Computer
                          terminals are available in the library for accessing
                          digital resources. Remote access is also available for
                          registered users.
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
        </section> */}

        {/* Library Staff */}
        <section className="py-12">
          <div className="container mx-auto px-4 flex flex-col justify-center items-center m-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Library Staff
            </h2>

            <div className="flex md:flex-row flex-col gap-6 max-w-5xl mx-auto flex-wrap justify-center m-auto">
              <Card className="text-center w-72">
                <div className="pt-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src="/person.png"
                      alt="Chief Librarian"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold">Dr. Manjit Kaur</h3>
                  <p className="text-amber-600 font-medium mb-2">
                    Library Teacher Incharge
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    Assistant Professor in Political Science
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center  w-72">
                <div className="pt-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src="/person.png"
                      alt="Assistant Librarian"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold">Mr. Navjit Singh</h3>
                  <p className="text-amber-600 font-medium mb-2">
                    Library Restorer
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <div className="flex md:w-1/2 w-[80%] mx-auto mb-20 ">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#0c2340] mb-4">
                Message from Library Teacher Incharge
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Library is a window to the world of possibilities and
                opportunities. In order to cater to the needs of the students
                and teachers of different disciplines, the college library has a
                wide range of acquisitions of books, magazines, and newspapers.
                We welcome the readers to take benefit of the library
                facilities. We aspire to upgrade our library and move towards
                its digitization. Our library staff is always available to serve
                the best interests of our readers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How do I get a library card?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Library cards are issued to all enrolled students at the
                      beginning of the academic year. New students can visit the
                      library with their college ID card and admission receipt
                      to get their library card issued.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What is the procedure for borrowing books?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      To borrow books, present your library card at the
                      circulation desk along with the books you wish to borrow.
                      The librarian will process your request and update the due
                      date. Remember to check the condition of the book before
                      borrowing to avoid being held responsible for pre-existing
                      damage.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How can I access digital resources?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Digital resources can be accessed from the computer
                      terminals in the library. For remote access, you need to
                      register with the librarian to get your login credentials
                      for INFLIBNET and other digital platforms. Once
                      registered, you can access these resources from anywhere
                      using your credentials.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What happens if I lose a library book?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      If you lose a library book, report it immediately to the
                      librarian. You will be required to replace the book with a
                      new copy of the same edition or a later edition. If the
                      book is out of print, you may be asked to pay three times
                      the current market price of the book or replace it with a
                      book of equivalent value as suggested by the librarian.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Can I suggest books for the library to purchase?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Yes, students and faculty can suggest books for the
                      library collection. There is a suggestion box in the
                      library, or you can fill out a book recommendation form
                      available at the circulation desk. The library committee
                      reviews these suggestions periodically and procures books
                      based on relevance and budget availability.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Visit Our Library Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Explore our extensive collection of books, journals, and digital
              resources to enhance your learning and research.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700">
                Library Catalog
              </Button>
              <Button
                variant="outline"
                className="hover:text-black hover:border-white bg-white/10 text-white"
              >
                Contact Librarian
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}