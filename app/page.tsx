"use client"

import { useState } from "react"
import Image from "next/image"


import { Card, CardContent } from "@/components/ui/card"

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import { Ribbon } from "lucide-react"
import NewsAndAnnouncements from "@/components/ui/NewsAndAnnouncements"


function PrincipalsMessage() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 mb-4">
        Education is a fundamental societal need which churns human mind with the essentialities of a basic value
        system. Values and worldly education share a dialectical relationship. Students imbibe values and also
        simultaneously study hard for career building and thus achieve self-actualization. The Bhagwad Gita states,
        Right knowledge is the ultimate solution to all our problems. As we delve deeply into Lord Krishna&apos;s
        &apos;Karamyog Philosophy&apos; we realise that every act can be an act of prayer. Career building and spiritual
        enhancement must evolve in a parallel pattern. Guru Nanak Dev University College, Verka is an insignia of an
        institutionalised value system.
      </p>

      {!expanded ? (
        <div className="text-center mt-4">
          <button
            onClick={() => setExpanded(true)}
            className="text-amber-600 hover:text-amber-700 flex items-center justify-center mx-auto"
          >
            Read More <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </div>
      ) : (
        <>
          <p className="text-gray-700 mb-4">
            In this prestigious institution, we aim to channelize our students towards a challenging path of
            self-realisation and cultivate primal human values which will assist them to be honest and sincere human
            beings. The aim of our tenacious faculty is to assist the students to garner adequate social skills to make
            a profitable career and at the same time, nurture a path of values like truth, honesty, innate goodness,
            consistent hard work, catering to the value of living life in the present, punctuality, good conduct,
            developing a multi-tasking calibre, nourishing holistic skills and above all being simple individuals with a
            ripe character. Our college aspires to create dedicated citizens who are proud to be diminutive specks of a
            great motherland. We need secular minded beings who stand in awe of a country which is multilingual,
            multicultural and has a kaleidoscopic variety of traditions and religions. Right from the Himalayan peaks,
            stretching forth towards southern tip of Kanya Kumari, India has a magnanimity with a secular mindset, which
            we incorporate to our students.
          </p>
          <p className="text-gray-700 mb-4">
            The session 2023-2024 has been an immensely successful pursuit. It is with profound contentment that I
            acknowledge the cumulative effort of the entire workforce, primarily students and teachers, who have put in
            their best efforts for such an efficient and fruitful session. I also express my gratitude to all our other
            employees who constantly work for the cleanliness and maintenance of the college.
          </p>
          <div className="text-center mt-4">
            <button
              onClick={() => setExpanded(false)}
              className="text-amber-600 hover:text-amber-700 flex items-center justify-center mx-auto"
            >
              Show Less <ChevronUp className="h-4 w-4 ml-1" />
            </button>
          </div>
        </>
      )}

      <div className="mt-4 text-right">
        <p className="font-semibold text-[#0c2340]">Mrs. Puneet Randhawa</p>
        <p className="text-sm text-gray-600">OSD/Principal</p>
      </div>
    </div>
  )
}

function MissionContent() {
  const [expanded, setExpanded] = useState(false)

  return (
    <ul className="space-y-3 text-gray-700">
      <li className="flex items-center flex-row m-auto justify-center">
        <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 mt-1">•</span>
        <span>
          To foster quest for excellence by quality and value based education and create competitive academic
          environment.
        </span>
      </li>
      <li className="flex items-center m-auto justify-center">
        <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 mt-1">•</span>
        <span>To ensure holistic development, inculcate moral, social and ethical value system in students.</span>
      </li>
      <li className="flex items-center">
        <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2 mt-1">•</span>
        <span>
          To sensitize and educate young learners about concern for environment and create informed and global citizens
          endowed with love and respect for the society and nation.
        </span>
      </li>

      {!expanded ? (
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(true)}
            className="text-amber-600 hover:text-amber-700 flex items-center justify-center mx-auto"
          >
            Read More <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </div>
      ) : (
        <>
          <div className="mt-4 text-center">
            <button
              onClick={() => setExpanded(false)}
              className="text-amber-600 hover:text-amber-700 flex items-center justify-center mx-auto"
            >
              Show Less <ChevronUp className="h-4 w-4 ml-1" />
            </button>
          </div>
        </>
      )}
    </ul>
  )
}

function VisionContent() {
  const [expanded, setExpanded] = useState(false)

  return (
    <ul className="space-y-3 text-gray-700">
      <li className="flex items-center">
        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">•</span>
        <span>To provide quality education to the students.</span>
      </li>
      <li className="flex items-center">
        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">•</span>
        <span>To transform and enhance quality of life of the community through value education.</span>
      </li>
      <li className="flex items-center">
        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">•</span>
        <span>To enable and groom the students for accepting future challenges.</span>
      </li>

      {!expanded ? (
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(true)}
            className="text-blue-600 hover:text-blue-700 flex items-center justify-center mx-auto"
          >
            Read More <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </div>
      ) : (
        <>
          <li className="flex items-center">
            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">•</span>
            <span>
              To endeavor for creating a vibrant and inclusive learning atmosphere that promotes critical thinking.
            </span>
          </li>
          <li className="flex items-center">
            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">•</span>
            <span>To pursue academic excellence and holistic development of students.</span>
          </li>
          <li className="flex items-center">
            <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 mt-1">•</span>
            <span>To establish as a leading and self-sustained institution of higher education.</span>
          </li>
          <div className="mt-4 text-center">
            <button
              onClick={() => setExpanded(false)}
              className="text-blue-600 hover:text-blue-700 flex items-center justify-center mx-auto"
            >
              Show Less <ChevronUp className="h-4 w-4 ml-1" />
            </button>
          </div>
        </>
      )}
    </ul>
  )
}

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image src="/banner.jpg" alt="University Campus" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white leading-tight">
                  <h1 className="text-xl md:text-3xl font-bold">Welcome to</h1>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Guru Nanak Dev University <br /> College, Verka
                  </h1>
                  <p className="text-lg md:text-xl leading-tight">
                    Empowering minds, transforming lives through quality education and research excellence
                  </p>
                  <div className="flex flex-wrap gap-4"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Ribbon */}
        <section className=" bg-white">
          <div className="bg-[#0c2340] text-white py-10">
            <div className="container mx-auto px-4">
              {/* Heading */}
              <div className="flex items-center justify-center mb-10">
                <Ribbon className="h-6 w-6 text-amber-500 mr-3" />
                <h2 className="text-3xl font-bold text-white">University Leadership</h2>
              </div>

              {/* Leadership Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                {/* Vice Chancellor */}
                <div className="flex flex-col items-center">
                  <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden shadow-lg mb-4">
                    <Image src="/karamjeet.png" alt="Vice Chancellor" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Dr. Karamjeet Singh</h3>
                  <p className="text-gray-300">Vice Chancellor</p>
                </div>

                {/* Dean, Academic Affairs */}
                <div className="flex flex-col items-center">
                  <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden shadow-lg mb-4">
                    <Image src="/palwinder.jpg" alt="Dean Academic Affairs" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Dr. Palwinder Singh</h3>
                  <p className="text-gray-300">Dean, Academic Affairs</p>
                </div>

                {/* Registrar */}
                <div className="flex flex-col items-center">
                  <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden shadow-lg mb-4">
                    <Image src="/karanjeet.jpg" alt="Registrar" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Dr. Karamjit Singh Chahal</h3>
                  <p className="text-gray-300">Registrar</p>
                </div>

                {/* Dean, CDC */}
                <div className="flex flex-col items-center">
                  <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden shadow-lg mb-4">
                    <Image src="/saroj.jpg" alt="Dean" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Dr. Saroj Bala</h3>
                  <p className="text-gray-300">Dean, College Development Council</p>
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
              <div className="md:col-span-2">
                <PrincipalsMessage />
              </div>
              <div className="md:col-span-1 flex flex-col justify-center items-center">
                <div className="relative h-[300px] w-[300px] rounded-full overflow-hidden shadow-lg">
                  <Image src="/picture.png" alt="Mrs. Puneet Randhawa - Principal" fill className="object-cover" />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-bold text-lg">Mrs. Puneet Randhawa</h3>
                  <p className="text-gray-600">OSD/Principal</p>
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
                  <CardTitle className="text-2xl text-[#0c2340]">Our Mission</CardTitle>
                  <CardDescription>What drives us forward</CardDescription>
                </CardHeader>
                <CardContent>
                  <MissionContent />
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0c2340]">Our Vision</CardTitle>
                  <CardDescription>Where we aim to be</CardDescription>
                </CardHeader>
                <CardContent>
                  <VisionContent />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Campus Highlights */}
        <section className="py-6 bg-[#0c2340] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Campus Highlights</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">20+</div>
                <p className="text-lg">Academic Programs</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
                <p className="text-lg">Faculty Members</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">800+</div>
                <p className="text-lg">Students</p>
              </div>
            </div>

            <div className="mt-12 text-center"></div>
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
                <Image src="/verka.png" alt="College Campus" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* News & Announcements Section */}
        <NewsAndAnnouncements/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
