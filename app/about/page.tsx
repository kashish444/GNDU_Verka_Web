import Image from "next/image"
import Link from "next/link"
import { Award, School, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Reusing the same header structure from the homepage */}
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
            <Link href="/about" className="font-medium text-amber-600 border-b-2 border-amber-600">
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
        </div>
      </header>

      <main className="flex-1">
        {/* Page Title */}
        <section className="bg-[#0c2340] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
            <p className="mt-2 text-lg">Learn about Guru Nanak Dev University College Verka-Amritsar</p>
          </div>
        </section>

        {/* College Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0c2340]">About the College</h2>
                <p className="text-gray-700 mb-4">
                  Guru Nanak Dev University College, Verka was established as a constituent college of Guru Nanak Dev
                  University in 2011. It is a co-educational college. The administrative functioning of the college is
                  regulated by Guru Nanak Dev University, Amritsar.
                </p>
                <p className="text-gray-700 mb-4">
                  It is situated in the lush green surroundings of the countryside away from the din of the city. It is
                  located between the Amritsar-Jalandhar by-pass and Amritsar-Batala bypass. It has a sprawling campus
                  covering 15 acres of land donated by Mushtarqa Malkan Committee of the village Verka. The people of
                  Verka would be remembered for this act forever.
                </p>
                <p className="text-gray-700 mb-4">
                  The constituent colleges were set up to bring higher education within the reach of the people of
                  remote rural areas, so that maximum benefit reaches the less privileged and the needy. The college
                  will scale new heights under the able guidance of Dr. Karamjeet Singh, the present Vice-Chancellor of
                  Guru Nanak Dev University.
                </p>
                <p className="text-gray-700">
                  The College is covered under the 2(F) & 12(B) scheme of the UGC. As a result, it is entitled to
                  receive financial support from the Central government, the government of Punjab and the UGC. The
                  teaching fraternity of college is highly qualified and dedicated who constantly strive for their
                  growth as well as for the holistic development of their students.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/verka.png"
                  alt="College Campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* College Details */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">College Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <School className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">College Type</h3>
                      <p className="font-semibold">Constituent College of GNDU Amritsar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">College Nature</h3>
                      <p className="font-semibold">Post Graduate, Multi-Faculty, Co-educational</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">NAAC Grade</h3>
                      <p className="font-semibold">A++</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Established</h3>
                      <p className="font-semibold">2011</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">District</h3>
                      <p className="font-semibold">Amritsar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Total Students</h3>
                      <p className="font-semibold">869</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Contact No.</h3>
                      <p className="font-semibold">81465-14040</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Email-ID</h3>
                      <p className="font-semibold">osd.verka@gndu.ac.in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0c2340]">Our Mission</CardTitle>
                  <CardDescription>What drives us forward</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 mt-1">•</span>
                      <span>
                        To foster quest for excellence by quality and value based education and create competitive
                        academic environment.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 mt-1">•</span>
                      <span>
                        To ensure holistic development, inculcate moral, social and ethical value system in students.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 mt-1">•</span>
                      <span>
                        To sensitize and educate young learners about concern for environment and create informed and
                        global citizens endowed with love and respect for the society and nation.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0c2340]">Our Vision</CardTitle>
                  <CardDescription>Where we aim to be</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">1</span>
                      <span>To provide quality education to the students.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">2</span>
                      <span>To transform and enhance quality of life of the community through value education.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">3</span>
                      <span>To enable and groom the students for accepting future challenges.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">4</span>
                      <span>
                        To endeavor for creating a vibrant and inclusive learning atmosphere that promotes critical
                        thinking.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">5</span>
                      <span>To pursue academic excellence and holistic development of students.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">6</span>
                      <span>To establish as a leading and self-sustained institution of higher education.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Offered */}
        <section className="py-12 bg-gray-50">
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
                  <CardContent className="p-6">
                    <Table>
                      <TableCaption>4-year UG Degree Programme</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Sr. No.</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead className="text-right">Seats</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell>Bachelor of Arts (BA)</TableCell>
                          <TableCell className="text-right">400</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2</TableCell>
                          <TableCell>Bachelor of Science (Medical)</TableCell>
                          <TableCell className="text-right">45</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>3</TableCell>
                          <TableCell>Bachelor of Science (Non-Medical)</TableCell>
                          <TableCell className="text-right">45</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>4</TableCell>
                          <TableCell>Bachelor of Science (Computer Science)</TableCell>
                          <TableCell className="text-right">45</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>5</TableCell>
                          <TableCell>Bachelor of Science (Economics)</TableCell>
                          <TableCell className="text-right">45</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>6</TableCell>
                          <TableCell>Bachelor of Science (Fashion Designing)</TableCell>
                          <TableCell className="text-right">30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>7</TableCell>
                          <TableCell>Bachelor of Computer Application (BCA)</TableCell>
                          <TableCell className="text-right">140</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>8</TableCell>
                          <TableCell>Bachelor of Science (IT)</TableCell>
                          <TableCell className="text-right">40</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>9</TableCell>
                          <TableCell>B.Com. (Regular)</TableCell>
                          <TableCell className="text-right">300</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10</TableCell>
                          <TableCell>B.Com. (Financial Services)</TableCell>
                          <TableCell className="text-right">60</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>11</TableCell>
                          <TableCell>Bachelor of Business Administration (BBA)</TableCell>
                          <TableCell className="text-right">30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>12</TableCell>
                          <TableCell>B.Voc. (Software Development)</TableCell>
                          <TableCell className="text-right">50</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pg">
                <Card>
                  <CardContent className="p-6">
                    <Table>
                      <TableCaption>Post Graduate Programme</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Sr. No.</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead className="text-right">Seats</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell>M.Com.</TableCell>
                          <TableCell className="text-right">30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2</TableCell>
                          <TableCell>MA (Political Science)</TableCell>
                          <TableCell className="text-right">60</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>3</TableCell>
                          <TableCell>M.Sc. (Computer Science)</TableCell>
                          <TableCell className="text-right">30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>4</TableCell>
                          <TableCell>M.Sc Mathematics</TableCell>
                          <TableCell className="text-right">30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>5</TableCell>
                          <TableCell>PGDCA</TableCell>
                          <TableCell className="text-right">30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>6</TableCell>
                          <TableCell>PG Diploma in Financial Services (Banking and Insurance)</TableCell>
                          <TableCell className="text-right">30</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="diploma">
                <Card>
                  <CardContent className="p-6">
                    <Table>
                      <TableCaption>Diploma/Certificate Courses</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Sr. No.</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead className="text-right">Seats</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell>Certificate Course in Medical Lab Technology (CMLT)</TableCell>
                          <TableCell className="text-right">50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2</TableCell>
                          <TableCell>Diploma in Computer Application (DCA)</TableCell>
                          <TableCell className="text-right">50</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Faculty Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Faculty Details</h2>

            <Card className="max-w-5xl mx-auto">
              <CardContent className="p-6">
                <Table>
                  <TableCaption>Faculty Members</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Sr. No.</TableHead>
                      <TableHead className="w-[100px]">Faculty ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Appointment Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>73005</TableCell>
                      <TableCell>Mrs. Puneet Randhawa (OSD/Principal)</TableCell>
                      <TableCell>English</TableCell>
                      <TableCell>Permanent</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>73003</TableCell>
                      <TableCell>Mr. Sukhmaninder Pal Singh</TableCell>
                      <TableCell>History</TableCell>
                      <TableCell>Permanent</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>73002</TableCell>
                      <TableCell>Dr. Nisha Chhabra</TableCell>
                      <TableCell>Psychology</TableCell>
                      <TableCell>Permanent</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell>73004</TableCell>
                      <TableCell>Dr. Sonika Thakur</TableCell>
                      <TableCell>Physics</TableCell>
                      <TableCell>Permanent</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell>73006</TableCell>
                      <TableCell>Dr. Rupinder Preet Kaur</TableCell>
                      <TableCell>Chemistry</TableCell>
                      <TableCell>Permanent</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>6</TableCell>
                      <TableCell>73007</TableCell>
                      <TableCell>Dr. Manjit Kaur</TableCell>
                      <TableCell>Political Science</TableCell>
                      <TableCell>Permanent</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>7</TableCell>
                      <TableCell>73008</TableCell>
                      <TableCell>Dr. Jatinder Kaur</TableCell>
                      <TableCell>Mathematics</TableCell>
                      <TableCell>Permanent</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>8</TableCell>
                      <TableCell>73009</TableCell>
                      <TableCell>Mr. Gurmeet Singh</TableCell>
                      <TableCell>Mathematics</TableCell>
                      <TableCell>Permanent</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>9</TableCell>
                      <TableCell>73010</TableCell>
                      <TableCell>Dr. Jamaninder Pal Singh</TableCell>
                      <TableCell>Economics</TableCell>
                      <TableCell>Permanent</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer - Reusing the same footer structure from the homepage */}
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

