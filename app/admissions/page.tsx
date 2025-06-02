import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import { Eye } from "lucide-react";

export default function AcademicsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <Navbar />
      

      {/* Header */}

      {/* Page Title */}
      <section className="bg-[#0c2340] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Admissions</h1>
          <p className="mt-2 text-lg">
            Empowering Minds, Shaping Futures – Explore Our Diverse Courses at
            GNDU College Verka-Amritsar
          </p>
        </div>
      </section> 
     {/* <Lander
        image={"verka.png"}
        heading={"Admissions"}
        description={"Empowering Minds, Shaping Futures – Explore Our Diverse Courses at GNDU College Verka-Amritsar"}
      />*/}
      {/* Courses Offered */}
        <section className="py-12 bg-gray-50" id="courses">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              Courses Offered
            </h2>

            <Tabs defaultValue="ug" className="max-w-4xl mx-auto">
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
                            <TableHead className="w-[60px]">Sr. No.</TableHead>
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
                    <div className="mt-6 flex justify-center">
                    <a
                      href="https://www.gnduadmissions.org/campusadmissions/pdf/verkacollege202526.pdf"
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
                    <a
                      href="https://www.gnduadmissions.org/campusadmissions/pdf/verkacollege202526.pdf"
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
                    <a
                      href=""
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
      {/* Bottom Bar */}
      <Footer />
    </div>
  );
}
