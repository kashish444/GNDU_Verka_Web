import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import {
  
  Users,
 
  Shield,
  HeartPulse,
  Coffee,
 
  Award,
  BookMarked,
  Flag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/ui/Navbar";


export default function StudentCornerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Title */}
        <section className="bg-[#0c2340] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Student Corner</h1>
            <p className="mt-2 text-lg">Resources and support for GNDU College Verka-Amritsar students</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0c2340]">Student Life at GNDU</h2>
              <p className="text-gray-700">
                The Student Corner is your gateway to all student-related resources, activities, and support services.
                We are committed to providing a nurturing environment where students can thrive academically, socially,
                and personally. Explore the various facilities, clubs, and support systems available to enhance your
                college experience.
              </p>
            </div>
          </div>
        </section>

        {/* Societies and Clubs */}
        <section className=" bg-gray-50" id="societies">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Societies & Clubs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">National Service Scheme (NSS)</h3>
                  <p className="text-gray-700 mb-4">
                    NSS unit was established in the college in 2014-15. It organizes various activities including
                    special 7-day camps at villages, observes national and international days, and promotes community
                    service.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Coordinators:</span> Dr. Manjit Kaur and Dr. Jatinder Kaur
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Flag className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">National Cadet Corps (NCC)</h3>
                  <p className="text-gray-700 mb-4">
                    NCC has been active in the college since its inception. College NCC has 24 Punjab Battalion wing.
                    Students attend various camps and participate in events like Mountaineering, Trekking, and more.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">CTO College:</span> Dr. Nisha Chhabra
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <BookMarked className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bhagat Puran Singh Literary Society</h3>
                  <p className="text-gray-700 mb-4">
                    Inaugurated in 2017, this society conducts various literary activities like guest lectures,
                    extempore, recitation, debates, and declamations to enhance students&apos;
 literary skills.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Coordinator:</span> Mrs. Puneet Randhawa
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/student-corner/clubs-societies">
                <Button className="bg-amber-600 hover:bg-amber-700">View All Clubs & Societies</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Scholarships</h2>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Merit Scholarships</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      <p className="text-gray-700">
                        Merit scholarships are awarded to students who demonstrate exceptional academic performance.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>University Merit Scholarship: For top 10% students in each program</li>
                        <li>Academic Excellence Award: For students with 90% or above in previous academic year</li>
                        <li>Subject Topper Scholarship: For students ranking first in their respective subjects</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        <span className="font-semibold">Application Period:</span> July 15 - August 30 each year
                      </p>
                      
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Government Scholarships</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      <p className="text-gray-700">
                        Various government scholarships are available for eligible students based on different criteria.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Post-Matric Scholarship for SC/ST students</li>
                        <li>Central Sector Scholarship Scheme</li>
                        <li>Prime Minister&apos;
s Scholarship Scheme</li>
                        <li>State Government Scholarships for minority communities</li>
                        <li>SC/BC/Minority Scholarships as per Punjab Government Rules</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        <span className="font-semibold">Application Process:</span> Apply through the National
                        Scholarship Portal
                      </p>
                     
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Financial Aid</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      <p className="text-gray-700">
                        Financial aid is available for students facing economic hardships to ensure that financial
                        constraints do not hinder education.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Fee Concession: Partial or full fee waiver based on financial need</li>
                        <li>Book Bank Facility: Free textbooks for economically disadvantaged students</li>
                        <li>Emergency Financial Assistance: For students facing unexpected financial crises</li>
                      </ul>
                      <p className="text-gray-700 mt-2">
                        <span className="font-semibold">Contact:</span> Financial Aid Office, Administrative Block
                      </p>
                      
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-12 bg-gray-50" id="facilities">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Student Facilities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <HeartPulse className="h-6 w-6 text-red-500 mr-2" />
                    <h3 className="text-xl font-bold">Medical Room</h3>
                  </div>
                  <p className="text-gray-700">
                    The College has an infirmary with requisite medicines and medical apparatus. The students are
                    provided first aid during emergency. The college too has a Counseling cell where the students with
                    emotional difficulties are listened to and counseled.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Location:</span> Ground Floor, Administrative Block
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Timing:</span> 9:00 AM - 4:00 PM (Monday-Friday)
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Coffee className="h-6 w-6 text-amber-600 mr-2" />
                    <h3 className="text-xl font-bold">Canteen</h3>
                  </div>
                  <p className="text-gray-700">
                    The cafeteria housed amid green surroundings is a place of buzz. Catering to the needs of students,
                    it provides delicious food items to the students. The hygiene and health are given paramount
                    importance.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Location:</span> Central Campus Area
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Timing:</span> 8:30 AM - 4:30 PM (Monday-Saturday)
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold">Common Room</h3>
                  </div>
                  <p className="text-gray-700">
                    The College has a common room where the students sit, study and eat their tiffins during their free
                    periods.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Location:</span> First Floor, Main Building
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Facilities:</span> Indoor games, newspapers, magazines, TV
                  </p>
                </CardContent>
              </Card>
            </div>

            
          </div>
        </section>

        {/* Student Support */}
        <section className="py-12" id="support">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">Student Support</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow flex flex-col justify-between">
  <div>
    <CardHeader>
      <CardTitle className="flex items-center">
        <Shield className="h-6 w-6 text-red-600 mr-2" />
        Anti-Ragging Cell
      </CardTitle>
      <CardDescription>Zero tolerance policy against ragging</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-4">
        The college has a dedicated Anti-Ragging Cell to ensure a ragging-free campus environment. Any form
        of ragging is strictly prohibited and punishable as per UGC regulations.
      </p>
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">Incharge:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Dr. Sonika Thakur (Assistant Professor in Physics)</li>
        </ul>
        
      </div>
    </CardContent>
  </div>

  <div className="px-6 pb-6 mt-auto">
    <Button className="w-full bg-[#0c2340] hover:bg-[#0c2340]/90">
      Report Ragging Incident
    </Button>
  </div>
</Card>


              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 text-blue-600 mr-2" />
                    Career Counseling Cell
                  </CardTitle>
                  <CardDescription>Guidance for your professional journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The cell was formulated to provide career guidance to the students. It helps students explore career
                     and make informed decisions about their future.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Incharge:</span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dr. Jasminder Pal Singh (Assistant Professor in Economics)</li>
                    </ul>
                   
                  </div>
                  <Button className="mt-4 w-full">Schedule Counseling Session</Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/student-corner/student-support">
                <Button className="bg-amber-600 hover:bg-amber-700">View All Student Support Services</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#0c2340] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Involved in Campus Life</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Make the most of your college experience by participating in various activities, joining clubs, and
              utilizing the resources available to you.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
            <Footer />
    </div>
  );
}
