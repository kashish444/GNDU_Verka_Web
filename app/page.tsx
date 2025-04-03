import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, ChevronRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="/banner.jpg"
              alt="University Campus"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Welcome to Guru Nanak Dev University
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    Empowering minds, transforming lives through quality
                    education and research excellence
                  </p>
                  <div className="flex flex-wrap gap-4"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principal's Message Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#0c2340]">
              Principal&apos;s Message
            </h2>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex flex-col justify-center items-center">
                <div className="relative h-[300px] w-[300px] rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/picture.png"
                    alt="Mrs. Puneet Randhawa - Principal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-bold text-lg">Mrs. Puneet Randhawa</h3>
                  <p className="text-gray-600">OSD/Principal</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 mb-4">
                    Education is a fundamental societal need which churns human
                    mind with the essentialities of a basic value system. Values
                    and worldly education share a dialectical relationship.
                    Students imbibe values and simultaneously study hard for
                    career building and thus achieve self-actualization. The
                    Bhagwad Gita states, “Right knowledge is the ultimate
                    solution to all our problems.” As we delve deeply into Lord
                    Krishna&apos;s &apos;Karamyog Philosophy&apos; we realise that every act
                    can be an act of prayer. Career building and spiritual
                    enhancement must evolve in a parallel pattern. Guru Nanak
                    Dev University College, Verka is an insignia of an
                    institutionalised value system. In this prestigious
                    institution, we aim to channelize our students towards a
                    challenging path of self-realisation and cultivate primal
                    human values which will assist them to be honest and sincere
                    human beings. The aim of our tenacious faculty is to assist
                    the students to garner adequate social skills to make a
                    profitable career and at the same time, nurture a path of
                    values like truth, honesty, innate goodness, consistent hard
                    work, catering to the value of living life in the present,
                    punctuality, good conduct, developing a multi-tasking
                    calibre, nourishing holistic skills and above all being
                    simple individuals with a ripe character. Our college
                    aspires to create dedicated citizens who are proud to be
                    diminutive specks of a great motherland. We need secular
                    minded beings who stand in awe of a country which is
                    multilingual, multicultural and has a kaleidoscopic variety
                    of traditions and religions. Right from the Himalayan peaks,
                    stretching forth towards southern tip of Kanya Kumari, India
                    has a magnanimity with a secular mindset, which we
                    incorporate to our students.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The session 2023-2024 has been an immensely successful
                    pursuit. It is with profound contentment that I acknowledge
                    the cumulative effort of the entire workforce, primarily
                    students and teachers, who have put in their best efforts
                    for such an efficient and fruitful session. I also express
                    my gratitude to all our other employees who constantly work
                    for the cleanliness and maintenance of the college.
                  </p>
                  <div className="mt-4 text-right">
                    <p className="font-semibold text-[#0c2340]">
                      Mrs. Puneet Randhawa
                    </p>
                    <p className="text-sm text-gray-600">OSD/Principal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mission & Vision */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0c2340]">
                    Our Mission
                  </CardTitle>
                  <CardDescription>What drives us forward</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center flex-row m-auto justify-center">
                      <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 mt-1">
                        •
                      </span>
                      <span>
                        To foster quest for excellence by quality and value
                        based education and create competitive academic
                        environment.
                      </span>
                    </li>
                    <li className="flex items-center m-auto justify-center">
                      <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 mt-1">
                        •
                      </span>
                      <span>
                        To ensure holistic development, inculcate moral, social
                        and ethical value system in students.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 mt-1">
                        •
                      </span>
                      <span>
                        To sensitize and educate young learners about concern
                        for environment and create informed and global citizens
                        endowed with love and respect for the society and
                        nation.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0c2340]">
                    Our Vision
                  </CardTitle>
                  <CardDescription>Where we aim to be</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">
                        1
                      </span>
                      <span>To provide quality education to the students.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">
                        2
                      </span>
                      <span>
                        To transform and enhance quality of life of the
                        community through value education.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">
                        3
                      </span>
                      <span>
                        To enable and groom the students for accepting future
                        challenges.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">
                        4
                      </span>
                      <span>
                        To endeavor for creating a vibrant and inclusive
                        learning atmosphere that promotes critical thinking.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">
                        5
                      </span>
                      <span>
                        To pursue academic excellence and holistic development
                        of students.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">
                        6
                      </span>
                      <span>
                        To establish as a leading and self-sustained institution
                        of higher education.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Campus Highlights */}
        <section className="py-12 bg-[#0c2340] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Campus Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  50+
                </div>
                <p className="text-lg">Academic Programs</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  100+
                </div>
                <p className="text-lg">Faculty Members</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  5000+
                </div>
                <p className="text-lg">Students</p>
              </div>
            </div>

            <div className="mt-12 text-center"></div>
          </div>
        </section>

        {/* News & Announcements Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#0c2340]">
              News & Announcements
            </h2>

            <Tabs defaultValue="news" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="news">Latest News</TabsTrigger>
                <TabsTrigger value="announcements">Announcements</TabsTrigger>
              </TabsList>

              <TabsContent value="news">
                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 relative h-48 md:h-auto">
                          <Image
                            src="/research.png"
                            alt={`News ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="md:w-3/4 p-6">
                          <div className="text-sm text-gray-500 mb-2">
                            May {item + 10}, 2023
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            GNDU Verka Branch Launches New Research Center
                          </h3>
                          <p className="text-gray-600 mb-4">
                            The new state-of-the-art research facility will
                            focus on sustainable technologies and innovation,
                            providing students with hands-on experience in
                            cutting-edge research.
                          </p>
                          <Link
                            href={`/news/${item}`}
                            className="text-amber-600 hover:text-amber-700 flex items-center"
                          >
                            Read More <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </CardContent>
                      </div>
                    </Card>
                  ))}

                  <div className="text-center mt-8">
                    <Button variant="outline">View All News</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="announcements">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Card
                      key={item}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="bg-amber-100 text-amber-600 p-3 rounded-full mr-4">
                            <Bell className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">
                              May {item + 5}, 2023
                            </div>
                            <h3 className="font-bold mb-1">
                              Admission Open for 2023-24 Academic Session
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Applications are invited for various undergraduate
                              and postgraduate programs for the academic year
                              2023-24.
                            </p>
                            <Link
                              href={`/announcements/${item}`}
                              className="text-amber-600 hover:text-amber-700 text-sm flex items-center mt-2"
                            >
                              View Details{" "}
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="text-center mt-8">
                    <Button variant="outline">View All Announcements</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
