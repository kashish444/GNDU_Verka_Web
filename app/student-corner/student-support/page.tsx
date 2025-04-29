

import { Shield, Award, Scale, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/ui/Navbar"
import Lander from "@/components/ui/Lander"
import Footer from "@/components/ui/Footer"
export default function StudentSupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Title */}
        <Lander
          image={"collegeevent1.png"}
          heading={"Student Support Services"}
          description={"Comprehensive support systems for GNDU College Verka-Amritsar students"}
          cover="bottom"
        />

        {/* Introduction */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0c2340]">Supporting Student Success</h2>
              <p className="text-gray-700">
                At GNDU College Verka-Amritsar, we are committed to providing comprehensive support services to ensure
                our students&apos;
 academic success, personal growth, and overall wellbeing. Our dedicated support cells and
                committees work tirelessly to create a safe, inclusive, and nurturing environment for all students.
              </p>
            </div>
          </div>
        </section>

        {/* Student Support Services List */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
        
        <p className="text-gray-700">
          <span className="font-semibold">Helpline:</span> 81465-14040 (Ext. 108)
        </p>
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
                    options, prepare for interviews, and make informed decisions about their future.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Incharge:</span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dr. Jasminder Pal Singh (Assistant Professor in Economics)</li>
                    </ul>
                  
                    <p className="text-gray-700">
                      <span className="font-semibold">Office Hours:</span> 10:00 AM - 3:00 PM (Monday-Friday)
                    </p>
                  </div>
                  <Button className="mt-4 w-full bg-[#0c2340] hover:bg-[#0c2340]/90">
                    Schedule Counseling Session
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow flex flex-col justify-between">
  <div>
    <CardHeader>
      <CardTitle className="flex items-center">
        <Scale className="h-6 w-6 text-green-600 mr-2" />
        Internal Complaint Committee (ICC)
      </CardTitle>
      <CardDescription>Fair and transparent grievance resolution</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-4">
        The Internal Complaint Committee addresses student grievances and ensures that a safe and respectful
        environment is maintained on campus.
      </p>
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">Incharge:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Dr. Sonika Thakur (Assistant Professor in Physics)</li>
        </ul>
        <p className="text-gray-700">
          <span className="font-semibold">Members:</span>
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Dr. Manjit Kaur (Assistant Professor in Political Science)</li>
          <li>Dr. Rupinder Preet Kaur (Assistant Professor in Chemistry)</li>
        </ul>
        
      </div>
    </CardContent>
  </div>

  <div className="px-6 pb-6 mt-auto">
    <Button className="w-full bg-[#0c2340] hover:bg-[#0c2340]/90">
      Submit Complaint
    </Button>
  </div>
</Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-purple-600 mr-2" />
                    Sexual Harassment Cell
                  </CardTitle>
                  <CardDescription>Creating a safe campus environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The Sexual Harassment Cell is committed to preventing and addressing issues of sexual harassment on
                    campus, ensuring a safe and respectful environment for all students.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Chairperson:</span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dr. Sonika Thakur (Assistant Professor in Physics)</li>
                    </ul>
                    <p className="text-gray-700">
                      <span className="font-semibold">Members:</span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Mrs. Puneet Randhawa (Assistant Professor in English)</li>
                      <li>Dr. Rupinder Preet Kaur (Assistant Professor in Chemistry)</li>
                      <li>Dr. Manjit Kaur (Assistant Professor in Political Science)</li>
                      <li>Mrs. Namarta Gupta (Family Counselor)</li>
                    </ul>
                    
                  </div>
                  <Button className="mt-4 w-full bg-[#0c2340] hover:bg-[#0c2340]/90">Report Incident</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-6 w-6 text-amber-600 mr-2" />
                    Discipline Committee
                  </CardTitle>
                  <CardDescription>Maintaining order and decorum on campus</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The Discipline Committee is responsible for maintaining discipline and decorum on campus. It
                    addresses issues related to student conduct and ensures a harmonious academic environment.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Members:</span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Principal/OSD and All Regular staff members</li>
                    </ul>
                  
                  </div>
                  <Button className="mt-4 w-full bg-[#0c2340] hover:bg-[#0c2340]/90">
                    Contact Discipline Committee
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 text-red-600 mr-2" />
                    Counseling Cell
                  </CardTitle>
                  <CardDescription>Supporting student mental health and wellbeing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The College has a Counseling cell where the students with emotional difficulties are listened to and
                    counseled. The cell provides support for mental health issues, stress management, and personal
                    development.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Coordinator:</span>
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dr. Nisha Chhabra (Assistant Professor in Psychology)</li>
                    </ul>
                   
                  </div>
                  <Button className="mt-4 w-full bg-[#0c2340] hover:bg-[#0c2340]/90">Book Counseling Session</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      
      </main>

      {/* Footer */}
       <Footer />

    </div>
  )
}
