import Image from "next/image"
import Link from "next/link"

import { Mail, MapPin, Phone, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/Navbar"
import Lander from "@/components/ui/Lander"

export default function AcademicsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <Navbar />

      {/* Header */}

      {/* Page Title */}
      {/* <section className="bg-[#0c2340] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Admissions</h1>
          <p className="mt-2 text-lg">
            Empowering Minds, Shaping Futures – Explore Our Diverse Courses at
            GNDU College Verka-Amritsar
          </p>
        </div>
      </section> */}
      <Lander
        image={"verka.png"}
        heading={"Admissions"}
        description={"Empowering Minds, Shaping Futures – Explore Our Diverse Courses at GNDU College Verka-Amritsar"}
      />

      {/* Courses Offered */}
      <section className="py-12 bg-gray-50" id="courses">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Courses Offered</h2>

          <Tabs defaultValue="ug" className="max-w-5xl mx-auto">
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
                  <div className="mt-6 flex justify-center">
                    <a
                      href="https://drive.google.com/file/d/1eEZQ2A4sI8lEMLXVwi5cLmibj9Q4qG1A/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-amber-600 hover:bg-amber-700">
                        <Eye className="mr-2 h-4 w-4" /> View Prospectus
                      </Button>
                    </a>
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
                  <div className="mt-6 flex justify-center">
                    <a
                      href="https://drive.google.com/file/d/1eEZQ2A4sI8lEMLXVwi5cLmibj9Q4qG1A/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-amber-600 hover:bg-amber-700">
                        <Eye className="mr-2 h-4 w-4" /> View Prospectus
                      </Button>
                    </a>
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
                  <div className="mt-6 flex justify-center">
                    <a
                      href="https://drive.google.com/file/d/1eEZQ2A4sI8lEMLXVwi5cLmibj9Q4qG1A/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-amber-600 hover:bg-amber-700">
                        <Eye className="mr-2 h-4 w-4" /> View Prospectus
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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
