import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

export default function Navbar() {
  return (
    <header className="bg-white  shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0c2340] text-white py-2 px-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <Link
              href="/contact"
              className="flex items-center hover:text-amber-300"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span>81465-14040</span>
            </Link>
            <Link
              href="mailto:info@gndu.ac.in"
              className="flex items-center hover:text-amber-300"
            >
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
      {/* Header */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/university-logo.jpg"
            alt="Guru Nanak Dev University Logo"
            width={80}
            height={80}
            className="mr-3"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#0c2340]">
              Guru Nanak Dev University
            </h1>
            <p className="text-sm text-gray-600">Verka-Amritsar</p>
          </div>
        </div>
        <nav className="hidden lg:flex space-x-6">
          <Link
            href="/"
            className="font-medium text-[#0c2340] hover:text-amber-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-medium text-[#0c2340] hover:text-amber-600"
          >
            About
          </Link>
          <Link
            href="/academics"
            className="font-medium text-[#0c2340] hover:text-amber-600"
          >
            Academics
          </Link>
          <Link
            href="/admissions"
            className="font-medium text-[#0c2340] hover:text-amber-600"
          >
            Admissions
          </Link>
          <Link
            href="/student-corner"
            className="font-medium text-[#0c2340] hover:text-amber-600"
          >
            Student Corner
          </Link>
          <Link
            href="/gallery"
            className="font-medium text-[#0c2340] hover:text-amber-600"
          >
            Gallery
          </Link>
          <Link
            href="/library"
            className="font-medium text-[#0c2340] hover:text-amber-600"
          >
            Library
          </Link>
          <Link
            href="/contact"
            className="font-medium text-[#0c2340] hover:text-amber-600"
          >
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="lg:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
}
