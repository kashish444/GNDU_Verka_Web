import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
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
                <p className="text-sm text-gray-300">Verka Branch</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Guru Nanak Dev University, Verka Branch is committed to providing
              quality education and fostering academic excellence.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-amber-300"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-amber-300"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-amber-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:text-amber-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="hover:text-amber-300"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
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
                  Guru Nanak Dev University, Verka Branch, Amritsar, Punjab -
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
            &copy; {new Date().getFullYear()} Guru Nanak Dev University, Verka
            Branch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}