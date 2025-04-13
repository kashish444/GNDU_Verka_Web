import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, Users, BookOpen, Award, Heart, BookMarked, Leaf, UserCheck, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/ui/Navbar"
import Lander from "@/components/ui/Lander"

export default function ClubsSocietiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Title */}
        <Lander
          image={"collegeevent1.png"}
          heading={"Clubs & Societies"}
          description={"Explore the vibrant student-led organizations at GNDU College Verka-Amritsar"}
          cover="bottom"
        />

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0c2340]">Enriching Student Life</h2>
              <p className="text-gray-700">
                Our clubs and societies offer students opportunities to explore their interests, develop leadership
                skills, and build lasting friendships. From cultural activities to community service, there's something
                for everyone at GNDU College Verka-Amritsar.
              </p>
            </div>
          </div>
        </section>

        {/* Clubs and Societies List */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 text-amber-600 mr-2" />
                    National Service Scheme (NSS)
                  </CardTitle>
                  <CardDescription>Serving the community since 2014</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    NSS unit was established in the college in 2014-15. Since inception NSS unit has delivered
                    outstanding and fruitful outcomes. NSS has regularly observed a long list of National and
                    International days as instructed by authorities' time to time. Apart from one day camps NSS dept.
                    has organized special 7 days camp at villages Ludhar, Mudhal, Jahangir and Fathegarh shukar Chak.
                  </p>
                  <p className="text-gray-700 mb-4">
                    NSS units were regularized in the session 2023-2024. Currently, there are two regular NSS units in
                    College headed by Dr. Manjit Kaur (Assistant Professor in Political Science) and Dr. Jatinder Kaur
                    (Assistant Professor in Mathematics).
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">Coordinators:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Dr. Manjit Kaur (Assistant Professor in Political Science)</li>
                      <li>Dr. Jatinder Kaur (Assistant Professor in Mathematics)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Flag className="h-6 w-6 text-red-600 mr-2" />
                    National Cadet Corps (NCC)
                  </CardTitle>
                  <CardDescription>Building character, discipline, and leadership</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    NCC has been active in the college since its inception. College NCC has 24 Punjab Battalion wing.
                    The students attend various camps organized at the central level by NCC Directorates and Group HQ
                    and participate in events like Mountaineering, Trekking, Firing, Rock Climbing etc.
                  </p>
                  <p className="text-gray-700 mb-4">
                    NCC cadets also get opportunities to participate in Republic Day Parade, Prime Minister Rally New
                    Delhi, Youth Exchange Programmes at International Level. There are ample opportunities to make
                    career in Military and Para Military as there is direct entry for 'C' certificate holders. NCC
                    provides a platform for students to develop their leadership skills, character and sense of social
                    responsibility while also offering career opportunities and networking benefits.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">CTO College:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Dr. Nisha Chhabra</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 text-red-600 mr-2" />
                    Red Ribbon Club
                  </CardTitle>
                  <CardDescription>Promoting health awareness since 2015</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Red Ribbon Club was established in 2015 in our college to make students aware of AIDS. The club
                    organizes awareness camps on AIDS, Drug addiction, environment at regular intervals in the village
                    areas.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The club is envisaged to instill among all students in the college values of service, develop
                    healthy life styles and increase access to safe and adequate quantities of blood to all the needy by
                    promotion of Regular Voluntary Blood donation camp every year. Students also attend various camps
                    (water sports camp, adventure camps organized by ABVIMAS) and educational workshops organized by the
                    Youth Services Punjab every year.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">Coordinator:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Dr. Rupinder Preet Kaur (Assistant Professor in Chemistry)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 text-purple-600 mr-2" />
                    Mendeleev Chemical Society
                  </CardTitle>
                  <CardDescription>Advancing chemical science since 2019</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The Mendeleev Chemical Society, named after the renowned Russian chemist Dmitri Mendeleev, was
                    established in 2019 to promote the advancement of chemical science in our college. The society was
                    inaugurated by Dr. Manoj Kumar (Department of Chemistry, GNDU Amritsar).
                  </p>
                  <p className="text-gray-700 mb-4">
                    It aims to foster a deeper interest in chemistry among students and provide a platform for exploring
                    the subject beyond the classroom.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">Coordinator:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Dr. Rupinder Preet Kaur</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookMarked className="h-6 w-6 text-blue-600 mr-2" />
                    Bhagat Puran Singh Literary Society
                  </CardTitle>
                  <CardDescription>Fostering literary excellence since 2017</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Bhagat Puran Singh Literary society was inaugurated in the college in 2017 by Dr. Inderjit Kaur
                    (Inchrage Pingalwara Society). Several activities like guest lectures, extempore, recitation,
                    debates, declamatations etc. have been conducted by the society.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">Coordinator:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Mrs. Puneet Randhawa</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-6 w-6 text-green-600 mr-2" />
                    Eco Club
                  </CardTitle>
                  <CardDescription>Promoting environmental awareness since 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Under Environmental Education Programme and initiative of the Dean College Development Council an
                    Eco Club was established in the college in session 2023-24. It has organized various activities to
                    bring awareness about environmental friendly ways and habits.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">Coordinator:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Dr. Manjit Kaur</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 text-yellow-600 mr-2" />
                    Youth Welfare Department
                  </CardTitle>
                  <CardDescription>Promoting cultural and artistic talents</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Every year college participates in the Youth Festival organized by Guru Nanak Dev University,
                    Amritsar. Students actively participate in theatre, literary, fine arts, music and dance items.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">Youth Coordinator:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Dr. Rupinder Preet Kaur</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserCheck className="h-6 w-6 text-blue-600 mr-2" />
                    Buddy Program
                  </CardTitle>
                  <CardDescription>Fighting drug abuse through peer influence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The Buddy Program aims to educate children about the ill-effects of drug abuse and generate positive
                    peer influence. Educational institutions in Punjab have formed buddy groups to make youngsters aware
                    about drug addiction.
                  </p>
                  <p className="text-gray-700 mb-4">
                    This programme is key to Punjab's fight against drugs as it covers the adolescent age group and
                    young adults between 18 to 25 years who are the most vulnerable group of people as far as drug usage
                    is concerned. On the prevention front, students through the Buddy Program develop knowledge, the
                    right attitude and behaviour along with skills to prevent drug abuse.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">Coordinator:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Dr. Jatinder Kaur</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Flag className="h-6 w-6 text-amber-600 mr-2" />
                    SVEEP
                  </CardTitle>
                  <CardDescription>Promoting voter awareness and participation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    SVEEP is initiative of Election Commission of India under which activities are organized to educate
                    young voters about importance of right to vote.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">Coordinator:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Dr. Manjit Kaur</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 text-green-600 mr-2" />
                    My Bharat Portal
                  </CardTitle>
                  <CardDescription>Empowering youth through experiential learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    My Bharat is an initiative of Ministry of Youth Affairs and Sports to empower Indian youth through
                    social mobility, educational equity, and practical skills. The platform also offers a range of
                    Experiential Learning Programmes across various sectors, empowering young individuals to learn and
                    grow through practical application. Currently 379 college students are registered on My Bharat
                    portal.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">Coordinator:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Dr. Jatinder Kaur</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 text-purple-600 mr-2" />
                    Counseling Cell
                  </CardTitle>
                  <CardDescription>Supporting student mental health and wellbeing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The College has a Counseling cell where the students with emotional difficulties are listened to and
                    counseled.
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#0c2340]">Coordinator:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Dr. Nisha Chhabra (Assistant Professor in Psychology)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#0c2340] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join a Club Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Enhance your college experience by joining one of our many clubs and societies. Develop new skills, make
              friends, and create lasting memories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700">How to Join</Button>
              <Link href="/student-corner">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Back to Student Corner
                </Button>
              </Link>
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
