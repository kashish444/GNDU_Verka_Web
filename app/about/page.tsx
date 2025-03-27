import Image from "next/image";
import Link from "next/link";
import { Award, School, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/ui/Navbar";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Reusing the same header structure from the homepage */}
      {/* Top Bar */}
      <Navbar />
      {/* Header */}

      <main className="flex-1">
        {/* Page Title */}
        <section className="bg-[#0c2340] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
            <p className="mt-2 text-lg">
              Learn about Guru Nanak Dev University College Verka-Amritsar
            </p>
          </div>
        </section>

        {/* College Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0c2340]">
                  About the College
                </h2>
                <p className="text-gray-700 mb-4">
                  Guru Nanak Dev University College, Verka was established as a
                  constituent college of Guru Nanak Dev University in 2011. It
                  is a co-educational college. The administrative functioning of
                  the college is regulated by Guru Nanak Dev University,
                  Amritsar.
                </p>
                <p className="text-gray-700 mb-4">
                  It is situated in the lush green surroundings of the
                  countryside away from the din of the city. It is located
                  between the Amritsar-Jalandhar by-pass and Amritsar-Batala
                  bypass. It has a sprawling campus covering 15 acres of land
                  donated by Mushtarqa Malkan Committee of the village Verka.
                  The people of Verka would be remembered for this act forever.
                </p>
                <p className="text-gray-700 mb-4">
                  The constituent colleges were set up to bring higher education
                  within the reach of the people of remote rural areas, so that
                  maximum benefit reaches the less privileged and the needy. The
                  college will scale new heights under the able guidance of Dr.
                  Karamjeet Singh, the present Vice-Chancellor of Guru Nanak Dev
                  University.
                </p>
                <p className="text-gray-700">
                  The College is covered under the 2(F) & 12(B) scheme of the
                  UGC. As a result, it is entitled to receive financial support
                  from the Central government, the government of Punjab and the
                  UGC. The teaching fraternity of college is highly qualified
                  and dedicated who constantly strive for their growth as well
                  as for the holistic development of their students.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
              College Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <School className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">
                        College Type
                      </h3>
                      <p className="font-semibold">
                        Constituent College of GNDU Amritsar
                      </p>
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
                      <h3 className="font-medium text-gray-500">
                        College Nature
                      </h3>
                      <p className="font-semibold">
                        Post Graduate, Multi-Faculty, Co-educational
                      </p>
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
                      <h3 className="font-medium text-gray-500">
                        Total Students
                      </h3>
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
}
