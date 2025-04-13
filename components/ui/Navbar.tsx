"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  User,
  Youtube,
  ChevronDown,
} from "lucide-react";
import { Button } from "./button";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [menu, setMenu] = useState(false);

  const [mobileOthersOpen, setMobileOthersOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [studentCornerOpen, setStudentCornerOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileAdmissionsOpen, setMobileAdmissionsOpen] = useState(false);
  const [mobileStudentCornerOpen, setMobileStudentCornerOpen] = useState(false);

  const gotohome = () => router.push("/");

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const isActive = (href: string) => pathname === href;
  const navItemClass = (href: string) =>
    `font-medium ${
      isActive(href) ? "text-amber-600" : "text-[#0c2340] hover:text-amber-600"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0c2340] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 md:text-sm text-xs">
            <Link
              href="/contact"
              className="flex items-center hover:text-amber-300"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="md:block hidden">81465-14040</span>
            </Link>
            <Link
              href="mailto:info@gndu.ac.in"
              className="flex items-center hover:text-amber-300"
            >
              <Mail className="h-4 w-4 mr-1" />
              <span className="md:block hidden">osd.verka@gndu.ac.in</span>
            </Link>
          </div>
          <span>Guru Nanak Dev University College Verka</span>
          <div className="flex items-center space-x-3">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
              (Icon, i) => (
                <Link href="#" key={i} aria-label={Icon.name}>
                  <Icon className="h-4 w-4 hover:text-amber-300" />
                </Link>
              )
            )}
            <Link
              href="/login"
              className="flex flex-row items-center space-x-1 hover:text-amber-300"
            >
              <User className="h-4 w-4" />
              <p>Admin</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center bg-white">
        <div
          className="flex items-center mb-4 md:mb-0 cursor-pointer"
          onClick={gotohome}
        >
          <Image
            src="/university-logo.jpg"
            alt="University Logo"
            width={80}
            height={80}
            className="mr-3"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#0c2340]">
              Guru Nanak Dev University
            </h1>
            <p className="text-sm text-gray-600">Amritsar</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 items-center relative">
          <Link href="/" className={navItemClass("/")}>
            Home
          </Link>

          {/* Academics Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAcademicsOpen(true)}
            onMouseLeave={() => setAcademicsOpen(false)}
          >
            <Link
              href="/academics"
              className={`flex items-center ${
                isActive("/academics")
                  ? "text-amber-600"
                  : "text-[#0c2340] hover:text-amber-600"
              } font-medium`}
            >
              Academics <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
            <AnimatePresence>
              {academicsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-6 mt-2 bg-white shadow-lg rounded-md w-48 z-50"
                >
                  <Link
                    href="/academics#courses"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/academics/courses")
                        ? "text-amber-600"
                        : "text-[#0c2340] hover:bg-amber-100"
                    }`}
                  >
                    Courses
                  </Link>
                  <Link
                    href="/academics#faculty"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/academics/faculty")
                        ? "text-amber-600"
                        : "text-[#0c2340] hover:bg-amber-100"
                    }`}
                  >
                    Faculty
                  </Link>
                  <Link
                    href="/academics#resources"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/academics/timetable")
                        ? "text-amber-600"
                        : "text-[#0c2340] hover:bg-amber-100"
                    }`}
                  >
                    Time Table
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/15UCbwABR_W2MNzNEvRVGQP7fOHKgwdry/view?usp=sharing"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/academics/calendar")
                        ? "text-amber-600"
                        : "text-[#0c2340] hover:bg-amber-100"
                    }`}
                  >
                    Academic Calendar
                  </Link>
                  <Link
                    href="/academics#resources"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/academics/examination")
                        ? "text-amber-600"
                        : "text-[#0c2340] hover:bg-amber-100"
                    }`}
                  >
                    Examination Guidelines
                  </Link>
                  <Link
                    href="/academics#resources"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/academics/datasheet")
                        ? "text-amber-600"
                        : "text-[#0c2340] hover:bg-amber-100"
                    }`}
                  >
                    Datasheet
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Admissions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAdmissionsOpen(true)}
            onMouseLeave={() => setAdmissionsOpen(false)}
          >
            <Link
              href="/admissions"
              className={`flex items-center ${
                isActive("/admissions")
                  ? "text-amber-600"
                  : "text-[#0c2340] hover:text-amber-600"
              } font-medium`}
            >
              Admissions <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
            <AnimatePresence>
              {admissionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-6 mt-2 bg-white shadow-lg rounded-md w-40 z-50"
                >
                  <Link
                    href="/admissions#courses"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/admissions/courses")
                        ? "text-amber-600"
                        : "text-[#0c2340] hover:bg-amber-100"
                    }`}
                  >
                    Courses Offered
                  </Link>
                  <a
                    href="/prospectus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-[#0c2340] hover:bg-amber-100"
                  >
                    Prospectus
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Student Corner Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setStudentCornerOpen(true)}
            onMouseLeave={() => setStudentCornerOpen(false)}
          >
            <Link
              href="/student-corner"
              className={`flex items-center ${
                isActive("/student-corner")
                  ? "text-amber-600"
                  : "text-[#0c2340] hover:text-amber-600"
              } font-medium`}
            >
              Student Corner <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
            <AnimatePresence>
              {studentCornerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-6 mt-2 bg-white shadow-lg rounded-md w-40 z-50"
                >
                  <Link
                    href="/student-corner#societies"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/student-corner/societies")
                        ? "text-amber-600"
                        : "text-[#0c2340] hover:bg-amber-100"
                    }`}
                  >
                    Societies and Clubs
                  </Link>
                  <Link
                    href="/student-corner#facilities"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/student-corner/facilities")
                        ? "text-amber-600"
                        : "text-[#0c2340] hover:bg-amber-100"
                    }`}
                  >
                    Facilities
                  </Link>
                  <Link
                    href="/student-corner#support"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/student-corner/support")
                        ? "text-amber-600"
                        : "text-[#0c2340] hover:bg-amber-100"
                    }`}
                  >
                    Student Support
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/gallery" className={navItemClass("/gallery")}>
            Gallery
          </Link>

          <Link href="/library" className={navItemClass("/library")}>
            Library
          </Link>

          <Link href="/contact" className={navItemClass("/contact")}>
           Contact Us
          </Link>

          <Link href="/about" className={navItemClass("/about")}>
           About Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          className="lg:hidden"
          onClick={() => setMenu(!menu)}
        >
          Menu
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center w-screen h-screen gap-5 bg-white z-40 pt-24 overflow-y-auto"
          >
            <Link
              href="/"
              onClick={() => setMenu(false)}
              className={navItemClass("/")}
            >
              Home
            </Link>

            {/* Mobile Academics Dropdown */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Link
                  href="/academics"
                  onClick={() => setMenu(false)}
                  className="text-[#0c2340] hover:text-amber-600"
                >
                  Academics
                </Link>
                <button
                  onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                  className="ml-1 text-[#0c2340] hover:text-amber-600"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <AnimatePresence>
                {mobileAcademicsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col mt-2"
                  >
                    <Link
                      href="/academics/courses"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Courses
                    </Link>
                    <Link
                      href="/academics/faculty"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Faculty
                    </Link>
                    <Link
                      href="/academics/timetable"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Time Table
                    </Link>
                    <Link
                      href="/academics/calendar"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Academic Calendar
                    </Link>
                    <Link
                      href="/academics/examination"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Examination Guidelines
                    </Link>
                    <Link
                      href="/academics/datasheet"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Datasheet
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Admissions Dropdown */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Link
                  href="/admissions"
                  onClick={() => setMenu(false)}
                  className="text-[#0c2340] hover:text-amber-600"
                >
                  Admissions
                </Link>
                <button
                  onClick={() => setMobileAdmissionsOpen(!mobileAdmissionsOpen)}
                  className="ml-1 text-[#0c2340] hover:text-amber-600"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <AnimatePresence>
                {mobileAdmissionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col mt-2"
                  >
                    <Link
                      href="/admissions/courses"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Courses Offered
                    </Link>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Prospectus
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Student Corner Dropdown */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Link
                  href="/student-corner"
                  onClick={() => setMenu(false)}
                  className="text-[#0c2340] hover:text-amber-600"
                >
                  Student Corner
                </Link>
                <button
                  onClick={() =>
                    setMobileStudentCornerOpen(!mobileStudentCornerOpen)
                  }
                  className="ml-1 text-[#0c2340] hover:text-amber-600"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <AnimatePresence>
                {mobileStudentCornerOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col mt-2"
                  >
                    <Link
                      href="/student-corner/societies"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Societies and Clubs
                    </Link>
                    <Link
                      href="/student-corner/facilities"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Facilities
                    </Link>
                    <Link
                      href="/student-corner/support"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Student Support
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/gallery"
              onClick={() => setMenu(false)}
              className={navItemClass("/gallery")}
            >
              Gallery
            </Link>

            {/* Mobile Others Dropdown */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Link
                  href="/about"
                  onClick={() => setMenu(false)}
                  className="text-[#0c2340] hover:text-amber-600"
                >
                  Others
                </Link>
                <button
                  onClick={() => setMobileOthersOpen(!mobileOthersOpen)}
                  className="ml-1 text-[#0c2340] hover:text-amber-600"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <AnimatePresence>
                {mobileOthersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col mt-2"
                  >
                    <Link
                      href="/library"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Library
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setMenu(false)}
                      className="text-[#0c2340] hover:text-amber-600 py-1"
                    >
                      About Us
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
