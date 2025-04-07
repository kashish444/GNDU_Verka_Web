import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
  Download,
  Calendar,
  BookOpen,
  GraduationCap,
  Award,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/ui/Navbar";

export default function AcademicsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Title */}
        <section className="bg-[#0c2340] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Academics</h1>
            <p className="mt-2 text-lg">
              Excellence in Education at GNDU College Verka-Amritsar
            </p>
          </div>
        </section>

        {/* Academic Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0c2340]">
                Academic Excellence
              </h2>
              <p className="text-gray-700">
                At GNDU College Verka-Amritsar, we are committed to providing
                quality education through innovative teaching methodologies,
                comprehensive curriculum, and a supportive learning environment.
                Our academic programs are designed to foster critical thinking,
                creativity, and practical skills that prepare students for
                successful careers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Education</h3>
                  <p className="text-gray-600">
                    Comprehensive curriculum designed to meet industry standards
                    and academic excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
                  <p className="text-gray-600">
                    Highly qualified and dedicated faculty members committed to
                    student success.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Recognized Programs
                  </h3>
                  <p className="text-gray-600">
                    UGC recognized programs with focus on both theoretical
                    knowledge and practical skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Offered */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Courses Offered
            </h2>

            <Tabs defaultValue="ug" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="ug">UG Programmes</TabsTrigger>
                <TabsTrigger value="pg">PG Programmes</TabsTrigger>
                <TabsTrigger value="diploma">Diploma/Certificate</TabsTrigger>
              </TabsList>

              <TabsContent value="ug">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#0c2340]">
                      Undergraduate Programmes
                    </CardTitle>
                    <CardDescription>
                      4-year UG Degree Programme
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Sr. No.</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Eligibility</TableHead>
                            <TableHead className="text-right">Seats</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell className="font-medium">
                              Bachelor of Arts (BA)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 in any stream</TableCell>
                            <TableCell className="text-right">400</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell className="font-medium">
                              Bachelor of Science (Medical)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 with Biology</TableCell>
                            <TableCell className="text-right">45</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell className="font-medium">
                              Bachelor of Science (Non-Medical)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 with Physics & Math</TableCell>
                            <TableCell className="text-right">45</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>4</TableCell>
                            <TableCell className="font-medium">
                              Bachelor of Science (Computer Science)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 with Math</TableCell>
                            <TableCell className="text-right">45</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>5</TableCell>
                            <TableCell className="font-medium">
                              Bachelor of Science (Economics)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 in any stream</TableCell>
                            <TableCell className="text-right">45</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>6</TableCell>
                            <TableCell className="font-medium">
                              Bachelor of Science (Fashion Designing)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 in any stream</TableCell>
                            <TableCell className="text-right">30</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>7</TableCell>
                            <TableCell className="font-medium">
                              Bachelor of Computer Application (BCA)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 in any stream</TableCell>
                            <TableCell className="text-right">140</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>8</TableCell>
                            <TableCell className="font-medium">
                              Bachelor of Science (IT)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 in any stream</TableCell>
                            <TableCell className="text-right">40</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>9</TableCell>
                            <TableCell className="font-medium">
                              B.Com. (Regular)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 in any stream</TableCell>
                            <TableCell className="text-right">300</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>10</TableCell>
                            <TableCell className="font-medium">
                              B.Com. (Financial Services)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 in any stream</TableCell>
                            <TableCell className="text-right">60</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>11</TableCell>
                            <TableCell className="font-medium">
                              Bachelor of Business Administration (BBA)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 in any stream</TableCell>
                            <TableCell className="text-right">30</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>12</TableCell>
                            <TableCell className="font-medium">
                              B.Voc. (Software Development)
                            </TableCell>
                            <TableCell>4 Years</TableCell>
                            <TableCell>10+2 in any stream</TableCell>
                            <TableCell className="text-right">50</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pg">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#0c2340]">
                      Postgraduate Programmes
                    </CardTitle>
                    <CardDescription>
                      Master&apos;;s Degree and PG Diploma Programmes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Sr. No.</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Eligibility</TableHead>
                            <TableHead className="text-right">Seats</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell className="font-medium">
                              M.Com.
                            </TableCell>
                            <TableCell>2 Years</TableCell>
                            <TableCell>B.Com or equivalent</TableCell>
                            <TableCell className="text-right">30</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell className="font-medium">
                              MA (Political Science)
                            </TableCell>
                            <TableCell>2 Years</TableCell>
                            <TableCell>Bachelor&apos;;s degree</TableCell>
                            <TableCell className="text-right">60</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell className="font-medium">
                              M.Sc. (Computer Science)
                            </TableCell>
                            <TableCell>2 Years</TableCell>
                            <TableCell>BCA/B.Sc. IT or equivalent</TableCell>
                            <TableCell className="text-right">30</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>4</TableCell>
                            <TableCell className="font-medium">
                              M.Sc. Mathematics
                            </TableCell>
                            <TableCell>2 Years</TableCell>
                            <TableCell>B.Sc. with Mathematics</TableCell>
                            <TableCell className="text-right">30</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>5</TableCell>
                            <TableCell className="font-medium">PGDCA</TableCell>
                            <TableCell>1 Year</TableCell>
                            <TableCell>Bachelor&apos;s degree</TableCell>
                            <TableCell className="text-right">30</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>6</TableCell>
                            <TableCell className="font-medium">
                              PG Diploma in Financial Services (Banking and
                              Insurance)
                            </TableCell>
                            <TableCell>1 Year</TableCell>
                            <TableCell>Bachelor&apos;s degree</TableCell>
                            <TableCell className="text-right">30</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div className="mt-6 flex justify-center">
<<<<<<< HEAD
                      
=======
                      <Button className="bg-amber-600 hover:bg-amber-700">
                        <Download className="mr-2 h-4 w-4" /> Download PG
                        Brochure
                      </Button>
>>>>>>> fa8718c10f72e03494c2df271df80ad3edfa9ab8
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="diploma">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#0c2340]">
                      Diploma & Certificate Courses
                    </CardTitle>
                    <CardDescription>
                      Short-term Professional Courses
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Sr. No.</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Eligibility</TableHead>
                            <TableHead className="text-right">Seats</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell className="font-medium">
                              Certificate Course in Medical Lab Technology
                              (CMLT)
                            </TableCell>
                            <TableCell>6 Months</TableCell>
                            <TableCell>10+2 with Science</TableCell>
                            <TableCell className="text-right">50</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell className="font-medium">
                              Diploma in Computer Application (DCA)
                            </TableCell>
                            <TableCell>1 Year</TableCell>
                            <TableCell>10+2 in any stream</TableCell>
                            <TableCell className="text-right">50</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div className="mt-6 flex justify-center">
<<<<<<< HEAD
                    
=======
                      <Button className="bg-amber-600 hover:bg-amber-700">
                        <Download className="mr-2 h-4 w-4" /> Download Diploma
                        Brochure
                      </Button>
>>>>>>> fa8718c10f72e03494c2df271df80ad3edfa9ab8
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Faculty Details */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Our Distinguished Faculty
            </h2>
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sr.No</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email ID</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Area of Specialization</TableHead>
                      <TableHead>D.O.J</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell className="font-medium">
                        Mrs. Puneet Randhawa
                      </TableCell>
                      <TableCell>Puneetkaurbrar1@gmail.com</TableCell>
                      <TableCell>English</TableCell>
                      <TableCell>
                        Woman, Family and Society in the select texts of Dilip
                        Kaur Tiwana, Ashapurna Devi and Githa Hariharan: A
                        Comparative study
                      </TableCell>
                      <TableCell>04/10/2011</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell className="font-medium">
                        Mr. Sukhmaninder Pal Singh
                      </TableCell>
                      <TableCell>sukhmaninder.verka@gndu.ac.in</TableCell>
                      <TableCell>History</TableCell>
                      <TableCell>Modern India</TableCell>
                      <TableCell>05/10/2011</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell className="font-medium">
                        Dr. Nisha Chhabra
                      </TableCell>
                      <TableCell>nisha.verka@gndu.ac.in</TableCell>
                      <TableCell>Psychology</TableCell>
                      <TableCell>
                        Mental Health Councelling, Research and Mindful
                        Meditation
                      </TableCell>
                      <TableCell>05/10/2011</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell className="font-medium">
                        Dr. Sonika Thakur
                      </TableCell>
                      <TableCell>sonikaphy.verka@gndu.ac.in</TableCell>
                      <TableCell>Physics</TableCell>
                      <TableCell>Material Science</TableCell>
                      <TableCell>05/10/2011</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell className="font-medium">
                        Dr. Rupinder Preet Kaur
                      </TableCell>
                      <TableCell>rupinderpreet@gmail.com</TableCell>
                      <TableCell>Chemistry</TableCell>
                      <TableCell>
                        Computational and Theoretical Chemistry-Density
                        Functional Theory, Ab-into methods, QSAR, Molecular
                        Dynamics
                      </TableCell>
                      <TableCell>10/09/2012</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>6</TableCell>
                      <TableCell className="font-medium">
                        Dr. Manjit Kaur
                      </TableCell>
                      <TableCell>manjit.polverka@gndu.ac.in</TableCell>
                      <TableCell>Political Science</TableCell>
                      <TableCell>
                        International Politics, Nationalism, Mohajir Politics in
                        Pakistan, Diaspora, Issues in Punjab Politics
                      </TableCell>
                      <TableCell>01/11/2012</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>7</TableCell>
                      <TableCell className="font-medium">
                        Dr. Jatinder Kaur
                      </TableCell>
                      <TableCell>jatinderkaulakh@gmail.com</TableCell>
                      <TableCell>Mathematics</TableCell>
                      <TableCell>
                        Applied Mathematics, Stochastic Modelling and
                        Forecasting using soft Computing Techniques
                      </TableCell>
                      <TableCell>02/11/2012</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>8</TableCell>
                      <TableCell className="font-medium">
                        Mr. Gurmeet Singh
                      </TableCell>
                      <TableCell>gurmeetgill905@gmail.com</TableCell>
                      <TableCell>Mathematics</TableCell>
                      <TableCell>Real Analysis, Algebra</TableCell>
                      <TableCell>02/11/2012</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>9</TableCell>
                      <TableCell className="font-medium">
                        Dr. Jamaninder Pal Singh
                      </TableCell>
                      <TableCell>jasminderpal@gmail.com</TableCell>
                      <TableCell>Economics</TableCell>
                      <TableCell>
                        Microeconomics, Industrial Economics, Quantitative
                        Techniques, Development Economics
                      </TableCell>
                      <TableCell>06/11/2012</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Academic Resources */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Academic Resources
            </h2>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    Academic Calendar
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      <p className="text-gray-700">
                        The academic calendar provides important dates for the
                        academic year, including:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Semester start and end dates</li>
                        <li>Examination schedules</li>
                        <li>Holidays and vacations</li>
                        <li>Special events and functions</li>
                      </ul>
                      <Button className="mt-2" variant="outline">
                        <Calendar className="mr-2 h-4 w-4" /> Download Academic
                        Calendar
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Syllabus
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      <p className="text-gray-700">
                        The syllabus for each course outlines the course
                        objectives, content, recommended readings, and
                        assessment methods.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <Button variant="outline" className="justify-start">
                          <BookOpen className="mr-2 h-4 w-4" /> Undergraduate
                          Syllabus
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <BookOpen className="mr-2 h-4 w-4" /> Postgraduate
                          Syllabus
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <BookOpen className="mr-2 h-4 w-4" /> Diploma Course
                          Syllabus
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <BookOpen className="mr-2 h-4 w-4" /> Certificate
                          Course Syllabus
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    Examination Guidelines
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      <p className="text-gray-700">
                        The examination guidelines provide information about
                        examination rules, regulations, and procedures.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Examination schedule and pattern</li>
                        <li>Evaluation criteria and grading system</li>
                        <li>Rules for conduct during examinations</li>
                        <li>
                          Procedures for revaluation and supplementary
                          examinations
                        </li>
                      </ul>
                      <Button className="mt-2" variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Download
                        Examination Guidelines
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">
                    Library Resources
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      <p className="text-gray-700">
                        The college library provides access to a wide range of
                        resources to support academic learning and research.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Books, journals, and magazines</li>
                        <li>Digital resources and e-journals</li>
                        <li>Reference materials and research papers</li>
                        <li>Study spaces and computer facilities</li>
                      </ul>
                      <div className="mt-4">
                        <Link
                          href="/library"
                          className="text-amber-600 hover:text-amber-700 font-medium"
                        >
                          Explore Library Resources →
                        </Link>
                      </div>
                    </div>
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
              Ready to Begin Your Academic Journey?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join GNDU College Verka-Amritsar to experience quality education
              and comprehensive academic programs.
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
                  <p className="text-sm text-gray-300">
                    College Verka-Amritsar
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Guru Nanak Dev University College, Verka-Amritsar is committed
                to providing quality education and fostering academic
                excellence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/academics"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    Academics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admissions"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    Admissions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Important Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/examination"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    Examination
                  </Link>
                </li>
                <li>
                  <Link
                    href="/results"
                    className="text-gray-300 hover:text-amber-300"
                  >
                    Results
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-300 hover:text-amber-300"
                  >
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
                    Guru Nanak Dev University College, Verka-Amritsar, Punjab -
                    143001
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
              &copy; {new Date().getFullYear()} Guru Nanak Dev University
              College, Verka-Amritsar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> fa8718c10f72e03494c2df271df80ad3edfa9ab8
