import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c2340] text-white pt-6 pb-4">
      <div className="container mx-auto px-4">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
          
          {/* 1. Logo and Description */}
          <div>
            <div className="flex items-center mb-3">
              <Image
                src="/university-logo.jpg"
                alt="Guru Nanak Dev University Logo"
                width={60}
                height={60}
                className="mr-3 bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-lg font-bold">GNDU</h3>
                <p className="text-sm text-gray-300">Verka Branch</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Guru Nanak Dev University, Verka Branch is committed to providing quality education and fostering academic excellence.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-300">
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

          {/* 3. Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Important Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/admissions#resource" className="text-gray-300 hover:text-amber-300">
                  Prospectus
                </Link>
              </li>
              <li>
                <Link href="/academic-calendar#resource" className="text-gray-300 hover:text-amber-300">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/student-corner/student-support" className="text-gray-300 hover:text-amber-300">
                  Student Support
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                 <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Guru Nanak Dev University, Verka Branch, Amritsar, Punjab - 143001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">81465-14040</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">osd.verka@gndu.ac.in</span>
              </li>
            </ul>
          </div>

{/* 5. Faculty Credits Section */}
<div className="lg:col-span-2">
  <h3 className="text-lg font-bold mb-4 text-center">Meet the Minds</h3>
  <div className="flex flex-row justify-center gap-6">
    {/* Profile 1 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <Image
        src="/headmam.jpeg"
        alt="Dr. Kuljit Kaur"
         width={96}
        height={96}
        className="rounded-full object-cover [object-position:center_1%] border-2 w-[96px] h-[96px]"
      />
      <p className="text-sm mt-2 font-semibold text-white whitespace-nowrap">Dr. Kuljit Kaur</p>
      <p className="text-xs text-gray-300 whitespace-nowrap">(Head and Professor)</p>
    </div>

    {/* Profile 2 */}
    <div className="flex flex-col items-center text-center min-w-[150px]">
      <Image
        src="/kashish.jpeg"
        alt="Mr. Kashish Sharma"
        width={96}
        height={96}
        className="rounded-full object-cover [object-position:center_10%] border-2 w-[96px] h-[96px]"
      />
      <p className="text-sm mt-2 font-semibold text-white whitespace-nowrap">Mr. Kashish Sharma</p>
      <p className="text-xs text-gray-300 whitespace-nowrap">(Assistant Professor)</p>
    </div>
  </div>
</div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-5 text-center text-gray-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Guru Nanak Dev University, Verka Branch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
