
import Link from "next/link";
import Footer from "@/components/ui/Footer";

import {
 
  Download,
  Calendar,
  BookOpen,
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
            <div className="max-w-3xl mx-auto text-center mb-2">
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
</div>
            </section>

       {/* Courses Offered */}
      <section className="py-2 bg-gray-50" id="courses">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center text-[#0c2340]">Courses Offered</h2>

          <Tabs defaultValue="ug" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="ug">UG Programmes</TabsTrigger>
              <TabsTrigger value="pg">PG Programmes</TabsTrigger>
              <TabsTrigger value="diploma">Diploma/Certificate</TabsTrigger>
            </TabsList>

            <TabsContent value="ug">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#0c2340]">Undergraduate Programmes</CardTitle>
                  <CardDescription>4-year UG Degree Programme</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Sr. No.</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead className="text-right">Syllabus</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell className="font-medium">Bachelor of Arts (BA)</TableCell>
                          <TableCell>Department of Arts</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2</TableCell>
                          <TableCell className="font-medium">Bachelor of Science (Medical)</TableCell>
                          <TableCell>Department of Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>3</TableCell>
                          <TableCell className="font-medium">Bachelor of Science (Non-Medical)</TableCell>
                          <TableCell>Department of Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>4</TableCell>
                          <TableCell className="font-medium">Bachelor of Science (Computer Science)</TableCell>
                          <TableCell>Department of Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>5</TableCell>
                          <TableCell className="font-medium">Bachelor of Science (Economics)</TableCell>
                          <TableCell>Department of Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>6</TableCell>
                          <TableCell className="font-medium">Bachelor of Science (Fashion Designing)</TableCell>
                          <TableCell>Department of Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>7</TableCell>
                          <TableCell className="font-medium">Bachelor of Computer Application (BCA)</TableCell>
                          <TableCell>Department of Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>8</TableCell>
                          <TableCell className="font-medium">Bachelor of Science (IT)</TableCell>
                          <TableCell>Department of Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>9</TableCell>
                          <TableCell className="font-medium">B.Com. (Regular)</TableCell>
                          <TableCell>Department of Commerce</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10</TableCell>
                          <TableCell className="font-medium">B.Com. (Financial Services)</TableCell>
                          <TableCell>Department of Commerce</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>11</TableCell>
                          <TableCell className="font-medium">Bachelor of Business Administration (BBA)</TableCell>
                          <TableCell>Department of Commerce</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>12</TableCell>
                          <TableCell className="font-medium">B.Voc. (Software Development)</TableCell>
                          <TableCell>Department of Vocational Studies</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
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
                  <CardTitle className="text-xl text-[#0c2340]">Postgraduate Programmes</CardTitle>
                  <CardDescription>Master&apos;;s Degree and PG Diploma Programmes</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Sr. No.</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead className="text-right">Syllabus</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell className="font-medium">M.Com.</TableCell>
                          <TableCell>Department of Commerce</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2</TableCell>
                          <TableCell className="font-medium">MA (Political Science)</TableCell>
                          <TableCell>Department of Political Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>3</TableCell>
                          <TableCell className="font-medium">M.Sc. (Computer Science)</TableCell>
                          <TableCell>Department of Computer Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>4</TableCell>
                          <TableCell className="font-medium">M.Sc. Mathematics</TableCell>
                          <TableCell>Department of Mathematics</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>5</TableCell>
                          <TableCell className="font-medium">PGDCA</TableCell>
                          <TableCell>Department of Computer Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>6</TableCell>
                          <TableCell className="font-medium">
                            PG Diploma in Financial Services (Banking and Insurance)
                          </TableCell>
                          <TableCell>Department of Commerce</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                 
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="diploma">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#0c2340]">Diploma & Certificate Courses</CardTitle>
                  <CardDescription>Short-term Professional Courses</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Sr. No.</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead className="text-right">Syllabus</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell className="font-medium">
                            Certificate Course in Medical Lab Technology (CMLT)
                          </TableCell>
                          <TableCell>Department of Medical Lab Technology</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2</TableCell>
                          <TableCell className="font-medium">Diploma in Computer Application (DCA)</TableCell>
                          <TableCell>Department of Computer Science</TableCell>
                          <TableCell className="text-right">
                            <a
                              href="https://online.gndu.ac.in/syllabi.asp"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", cursor: "pointer" }}
                            >
                              Link
                            </a>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                     
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

        {/* Faculty Details */}
        <section className="py-5 bg-gray-50" id="faculty">
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
        <section className="py-5 bg-gray-50" id="resources">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[#0c2340]">
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
                      <a href="/academic-calendar">
                      <Button className="mt-2" variant="outline">
                        <Calendar className="mr-2 h-4 w-4" /> View Academic Calendar
                      </Button>
                    </a>
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
  <a
    href="https://online.gndu.ac.in/syllabi.asp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" className="justify-start w-full">
      <BookOpen className="mr-2 h-4 w-4" />
      View Syllabus
    </Button>
  </a>
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
                      <a
  href="https://docs.google.com/document/d/1Om9220Q3v6_QO4HLigYWdcPQyX2r5ECb/edit?usp=sharing&ouid=100832964902746238927&rtpof=true&sd=true"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="mt-2" variant="outline">
    <Download className="mr-2 h-4 w-4" />
    Download Examination Guidelines
  </Button>
</a>
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

      
      </main>

      {/* Footer */}
            <Footer />
    </div>
  );
}
