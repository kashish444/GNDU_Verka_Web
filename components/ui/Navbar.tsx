"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
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
  Search,
  Home,
} from "lucide-react"
import { Button } from "./button"

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [academicsOpen, setAcademicsOpen] = useState(false)
  const [admissionsOpen, setAdmissionsOpen] = useState(false)
  const [studentCornerOpen, setStudentCornerOpen] = useState(false)
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false)
  const [mobileAdmissionsOpen, setMobileAdmissionsOpen] = useState(false)
  const [mobileStudentCornerOpen, setMobileStudentCornerOpen] = useState(false)

  const gotohome = () => router.push("/")

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 50) // Reduced threshold for earlier trigger
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menu])

  const isActive = (href: string) => pathname === href

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar - Smooth Hide/Show when scrolled */}
      <motion.div
        initial={false}
        animate={{
          height: scrolled ? 0 : "auto",
          opacity: scrolled ? 0 : 1,
          marginBottom: scrolled ? 0 : "0px",
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1], // Custom easing for smoother animation
          height: { duration: 0.4 },
          opacity: { duration: 0.3 },
        }}
        className="overflow-hidden"
        style={{ willChange: "height, opacity" }}
      >
        {/* Top Blue Bar */}
        <div className="bg-[#0c2340] text-white py-1">
          <div className="container mx-auto px-2 flex justify-between items-center">
            {/* Left Side - Quick Links */}
            <div className="hidden lg:flex items-center space-x-4 text-xs font-medium">
              <Link href="/academics" className="hover:text-amber-300 transition-colors">
                ACADEMICS
              </Link>
              <Link href="/admissions" className="hover:text-amber-300 transition-colors">
                ADMISSIONS
              </Link>
              <Link href="/library" className="hover:text-amber-300 transition-colors">
                LIBRARY
              </Link>
              <Link href="/contact" className="hover:text-amber-300 transition-colors">
                CONTACT
              </Link>
            </div>

            {/* Right Side - Social Media & Admin */}
            <div className="flex items-center space-x-2">
              <div className="hidden lg:flex items-center space-x-2">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <Link href="#" key={i} aria-label={Icon.name} className="hover:text-amber-300 transition-colors">
                    <Icon className="h-3 w-3" />
                  </Link>
                ))}
              </div>
              <div className="h-3 w-px bg-white/30 hidden lg:block"></div>
              <Link
                href="/admin"
                className="flex items-center space-x-1 hover:text-amber-300 transition-colors text-xs font-medium"
              >
                <User className="h-3 w-3" />
                <span className="hidden md:block">ADMIN</span>
              </Link>
              <a
                href="https://gnduadmissions.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block"
              >
                <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-2 py-0.5 text-xs rounded shadow-md transition-all hover:shadow-lg">
                  REGISTER
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Middle White Section with Logo */}
        <div className="bg-white py-2">
          <div className="container mx-auto px-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-2">
              {/* Left Side - Punjabi Text & Contact */}
              <div className="hidden lg:block text-left">
                <div className="text-[#0c2340] font-bold text-sm mb-1">ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਿਟੀ ਕਾਲਜ</div>
                <div className="text-[#0c2340] text-xs mb-1">ਵੇਰਕਾ, ਅੰਮ੍ਰਿਤਸਰ (ਪੰਜਾਬ)</div>
                <div className="flex items-center space-x-3 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-2 w-2 mr-1" />
                    <span>81465-14040</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-2 w-2 mr-1" />
                    <span>osd.verka@gndu.ac.in</span>
                  </div>
                </div>
              </div>

              {/* Center - Logo */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center cursor-pointer" onClick={gotohome}>
                  <div className="relative">
                    <Image
                      src="/university-logo.jpg"
                      alt="University Logo"
                      width={50}
                      height={50}
                      className="rounded-full shadow-md border-2 border-amber-200"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - English Text & NAAC */}
              <div className="hidden lg:block text-right">
                <div className="text-[#0c2340] font-bold text-sm mb-1">GURU NANAK DEV UNIVERSITY COLLEGE</div>
                <div className="text-[#0c2340] text-xs mb-1">VERKA, AMRITSAR (PUNJAB)</div>
                <div className="flex justify-end items-center space-x-2">
                  <span className="text-xs font-semibold bg-amber-500 text-white px-1.5 py-0.5 rounded-full shadow-sm">
                    NAAC A++
                  </span>
                  <span className="text-xs text-gray-600 italic">(Constituent College)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation Bar - Always Visible */}
      <div className="bg-[#0c2340] py-1">
        <div className="container mx-auto px-2 flex justify-between items-center">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 w-full">
            {/* Left Side Navigation */}
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className={`flex items-center font-medium text-xs transition-colors duration-200 ${
                  isActive("/") ? "text-amber-400" : "text-white hover:text-amber-300"
                }`}
              >
                <Home className="h-3 w-3 mr-1" />
                HOME
              </Link>

              {/* Academics Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAcademicsOpen(true)}
                onMouseLeave={() => setAcademicsOpen(false)}
              >
                <Link
                  href="/academics"
                  className={`flex items-center font-medium text-xs transition-colors duration-200 ${
                    isActive("/academics") ? "text-amber-400" : "text-white hover:text-amber-300"
                  }`}
                >
                  ACADEMICS <ChevronDown className="ml-1 w-3 h-3" />
                </Link>
                <AnimatePresence>
                  {academicsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-1 bg-white shadow-xl rounded-md w-44 z-50 border"
                    >
                      <Link
                        href="/academics#courses"
                        className="block px-3 py-2 text-xs text-[#0c2340] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        Courses
                      </Link>
                      <Link
                        href="/academics#faculty"
                        className="block px-3 py-2 text-xs text-[#0c2340] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        Faculty
                      </Link>
                      <Link
                        href="/pdf/view?category=timetable"
                        className="block px-3 py-2 text-xs text-[#0c2340] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        Time Table
                      </Link>
                      <Link
                        href="/academic-calendar"
                        className="block px-3 py-2 text-xs text-[#0c2340] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        Academic Calendar
                      </Link>
                      <Link
                        href="/pdf/view?category=datesheet"
                        className="block px-3 py-2 text-xs text-[#0c2340] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        Date Sheet
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
                  className={`flex items-center font-medium text-xs transition-colors duration-200 ${
                    isActive("/admissions") ? "text-amber-400" : "text-white hover:text-amber-300"
                  }`}
                >
                  ADMISSIONS <ChevronDown className="ml-1 w-3 h-3" />
                </Link>
                <AnimatePresence>
                  {admissionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-1 bg-white shadow-xl rounded-md w-36 z-50 border"
                    >
                      <Link
                        href="/admissions#courses"
                        className="block px-3 py-2 text-xs text-[#0c2340] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        Courses Offered
                      </Link>
                      <a
                        href="/prospectus.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-xs text-[#0c2340] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        Prospectus
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Center - Logo (when scrolled) */}
            <div className="flex-1 flex justify-center">
              <motion.div
                initial={false}
                animate={{
                  opacity: scrolled ? 1 : 0,
                  scale: scrolled ? 1 : 0.8,
                  y: scrolled ? 0 : -10,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                  delay: scrolled ? 0.2 : 0, // Slight delay when appearing
                }}
                className="flex items-center cursor-pointer"
                onClick={gotohome}
                style={{ willChange: "opacity, transform" }}
              >
                {scrolled && (
                  <Image
                    src="/university-logo.jpg"
                    alt="University Logo"
                    width={32}
                    height={32}
                    className="rounded-full shadow-md border border-amber-200"
                  />
                )}
              </motion.div>
            </div>

            {/* Right Side Navigation */}
            <div className="flex items-center space-x-4">
              {/* Student Corner Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setStudentCornerOpen(true)}
                onMouseLeave={() => setStudentCornerOpen(false)}
              >
                <Link
                  href="/student-corner"
                  className={`flex items-center font-medium text-xs transition-colors duration-200 ${
                    isActive("/student-corner") ? "text-amber-400" : "text-white hover:text-amber-300"
                  }`}
                >
                  STUDENT CORNER <ChevronDown className="ml-1 w-3 h-3" />
                </Link>
                <AnimatePresence>
                  {studentCornerOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-1 bg-white shadow-xl rounded-md w-40 z-50 border right-0"
                    >
                      <Link
                        href="/student-corner#societies"
                        className="block px-3 py-2 text-xs text-[#0c2340] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        Societies and Clubs
                      </Link>
                      <Link
                        href="/student-corner#facilities"
                        className="block px-3 py-2 text-xs text-[#0c2340] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        Facilities
                      </Link>
                      <Link
                        href="/student-corner#support"
                        className="block px-3 py-2 text-xs text-[#0c2340] hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        Student Support
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/gallery"
                className={`font-medium text-xs transition-colors duration-200 ${
                  isActive("/gallery") ? "text-amber-400" : "text-white hover:text-amber-300"
                }`}
              >
                GALLERY
              </Link>

              <Link
                href="/library"
                className={`font-medium text-xs transition-colors duration-200 ${
                  isActive("/library") ? "text-amber-400" : "text-white hover:text-amber-300"
                }`}
              >
                LIBRARY
              </Link>

              <Link
                href="/contact"
                className={`font-medium text-xs transition-colors duration-200 ${
                  isActive("/contact") ? "text-amber-400" : "text-white hover:text-amber-300"
                }`}
              >
                CONTACT US
              </Link>

              <Search className="h-4 w-4 text-white hover:text-amber-300 cursor-pointer transition-colors" />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-amber-300 transition-colors ml-auto"
            onClick={() => setMenu(!menu)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center cursor-pointer" onClick={gotohome}>
            <Image
              src="/university-logo.jpg"
              alt="University Logo"
              width={28}
              height={28}
              className="rounded-full shadow-md border border-amber-200"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center w-screen h-screen gap-3 bg-white z-40 pt-16 overflow-y-auto lg:hidden"
          >
            <Link
              href="/"
              onClick={() => setMenu(false)}
              className="text-[#0c2340] hover:text-amber-600 font-medium text-sm"
            >
              HOME
            </Link>

            {/* Mobile Academics Dropdown */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Link
                  href="/academics"
                  onClick={() => setMenu(false)}
                  className="text-[#0c2340] hover:text-amber-600 font-medium text-sm"
                >
                  ACADEMICS
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
                    className="flex flex-col mt-2 space-y-1"
                  >
                    <Link
                      href="/academics#courses"
                      onClick={() => setMenu(false)}
                      className="text-amber-600 hover:text-amber-700 text-xs"
                    >
                      Courses
                    </Link>
                    <Link
                      href="/academics#faculty"
                      onClick={() => setMenu(false)}
                      className="text-amber-600 hover:text-amber-700 text-xs"
                    >
                      Faculty
                    </Link>
                    <Link
                      href="/pdf/view?category=timetable"
                      onClick={() => setMenu(false)}
                      className="text-amber-600 hover:text-amber-700 text-xs"
                    >
                      Time Table
                    </Link>
                    <Link
                      href="/academic-calendar"
                      onClick={() => setMenu(false)}
                      className="text-amber-600 hover:text-amber-700 text-xs"
                    >
                      Academic Calendar
                    </Link>
                    <Link
                      href="/pdf/view?category=datesheet"
                      onClick={() => setMenu(false)}
                      className="text-amber-600 hover:text-amber-700 text-xs"
                    >
                      Date Sheet
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
                  className="text-[#0c2340] hover:text-amber-600 font-medium text-sm"
                >
                  ADMISSIONS
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
                    className="flex flex-col mt-2 space-y-1"
                  >
                    <Link
                      href="/admissions#courses"
                      onClick={() => setMenu(false)}
                      className="text-amber-600 hover:text-amber-700 text-xs"
                    >
                      Courses Offered
                    </Link>
                    <a
                      href="/prospectus.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenu(false)}
                      className="text-amber-600 hover:text-amber-700 text-xs"
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
                  className="text-[#0c2340] hover:text-amber-600 font-medium text-sm"
                >
                  STUDENT CORNER
                </Link>
                <button
                  onClick={() => setMobileStudentCornerOpen(!mobileStudentCornerOpen)}
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
                    className="flex flex-col mt-2 space-y-1"
                  >
                    <Link
                      href="/student-corner#societies"
                      onClick={() => setMenu(false)}
                      className="text-amber-600 hover:text-amber-700 text-xs"
                    >
                      Societies and Clubs
                    </Link>
                    <Link
                      href="/student-corner#facilities"
                      onClick={() => setMenu(false)}
                      className="text-amber-600 hover:text-amber-700 text-xs"
                    >
                      Facilities
                    </Link>
                    <Link
                      href="/student-corner#support"
                      onClick={() => setMenu(false)}
                      className="text-amber-600 hover:text-amber-700 text-xs"
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
              className="text-[#0c2340] hover:text-amber-600 font-medium text-sm"
            >
              GALLERY
            </Link>

            <Link
              href="/library"
              onClick={() => setMenu(false)}
              className="text-[#0c2340] hover:text-amber-600 font-medium text-sm"
            >
              LIBRARY
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenu(false)}
              className="text-[#0c2340] hover:text-amber-600 font-medium text-sm"
            >
              CONTACT US
            </Link>

            <a href="https://gnduadmissions.org/" onClick={() => setMenu(false)} className="mt-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-2 rounded-md shadow-md transition-all hover:shadow-lg text-sm">
                REGISTER NOW
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
