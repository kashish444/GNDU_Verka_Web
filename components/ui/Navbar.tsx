"use client";

import React, { useEffect, useState } from "react";
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
  const [othersOpen, setOthersOpen] = useState(false);
  const [mobileOthersOpen, setMobileOthersOpen] = useState(false);

  const gotohome = () => router.push("/");

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const isActive = (href: string) => pathname === href;

  const navItemClass = (href: string) =>
    `font-medium ${isActive(href) ? "text-amber-600" : "text-[#0c2340] hover:text-amber-600"}`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0c2340] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 md:text-sm text-xs">
            <Link href="/contact" className="flex items-center hover:text-amber-300">
              <Phone className="h-4 w-4 mr-1" />
              <span className="md:block hidden">81465-14040</span>
            </Link>
            <Link href="mailto:info@gndu.ac.in" className="flex items-center hover:text-amber-300">
              <Mail className="h-4 w-4 mr-1" />
              <span className="md:block hidden">osd.verka@gndu.ac.in</span>
            </Link>
          </div>
          <span className="absolute -z-10 left-0 right-0 m-auto lg:flex hidden text-center justify-center items-center">
            Guru Nanak Dev University Verka College
          </span>
          <div className="flex items-center space-x-3">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <Link href="#" key={i} aria-label={Icon.name}>
                <Icon className="h-4 w-4 hover:text-amber-300" />
              </Link>
            ))}
            <Link href="/login" className="flex flex-row items-center space-x-1 hover:text-amber-300">
              <User className="h-4 w-4" />
              <p>Admin</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center bg-white">
        <div className="flex items-center mb-4 md:mb-0 cursor-pointer" onClick={gotohome}>
          <Image src="/university-logo.jpg" alt="University Logo" width={80} height={80} className="mr-3" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#0c2340]">Guru Nanak Dev University</h1>
            <p className="text-sm text-gray-600">Amritsar</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 items-center relative">
          {[
            { name: "Home", href: "/" },
            { name: "Academics", href: "/academics" },
            { name: "Admissions", href: "/admissions" },
            { name: "Student Corner", href: "/student-corner" },
            { name: "Gallery", href: "/gallery" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className={navItemClass(item.href)}>
              {item.name}
            </Link>
          ))}

          {/* Others Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOthersOpen(true)}
            onMouseLeave={() => setOthersOpen(false)}
          >
            <button className={`flex items-center ${pathname.startsWith("/about") || pathname.startsWith("/contact") || pathname.startsWith("/library") ? "text-amber-600" : "text-[#0c2340] hover:text-amber-600"} font-medium`}>
              Others <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {othersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-6 mt-2 bg-white shadow-lg rounded-md w-40 z-50"
                >
                  <Link href="/library" className={`block px-4 py-2 text-sm ${isActive("/library") ? "text-amber-600" : "text-[#0c2340] hover:bg-amber-100"}`}>
                    Library
                  </Link>
                  <Link href="/contact" className={`block px-4 py-2 text-sm ${isActive("/contact") ? "text-amber-600" : "text-[#0c2340] hover:bg-amber-100"}`}>
                    Contact Us
                  </Link>
                  <Link href="/about" className={`block px-4 py-2 text-sm ${isActive("/about") ? "text-amber-600" : "text-[#0c2340] hover:bg-amber-100"}`}>
                    About Us
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="outline" className="lg:hidden" onClick={() => setMenu(!menu)}>
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
            className="absolute inset-0 flex flex-col items-center w-screen h-screen gap-5 bg-white z-40 pt-24"
          >
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Academics", href: "/academics" },
              { name: "Admissions", href: "/admissions" },
              { name: "Student Corner", href: "/student-corner" },
              { name: "Gallery", href: "/gallery" },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenu(false)} className={navItemClass(item.href)}>
                {item.name}
              </Link>
            ))}

            {/* Mobile Others Dropdown */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setMobileOthersOpen(!mobileOthersOpen)}
                className="text-[#0c2340] hover:text-amber-600 flex items-center"
              >
                Others <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {mobileOthersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col mt-2"
                  >
                    {["/library", "/contact", "/about"].map((href) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => {
                          setMenu(false);
                          setMobileOthersOpen(false);
                        }}
                        className={`${isActive(href) ? "text-amber-600" : "text-[#0c2340] hover:text-amber-600"}`}
                      >
                        {href.replace("/", "").replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </Link>
                    ))}
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
