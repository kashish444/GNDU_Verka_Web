"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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
} from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const router = useRouter();
  const gotohome = () => {
    router.push("/");
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [menu]);

  return (
    <>
      <header className="bg-white  shadow-md sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-[#0c2340] text-white py-2 px-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4 md:text-sm text-xs">
              <Link
                href="/contact"
                className="flex items-center hover:text-amber-300"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span className="md:block hidden ">81465-14040</span>
              </Link>
              <Link
                href="mailto:info@gndu.ac.in"
                className="flex items-center hover:text-amber-300"
              >
                <Mail className="h-4 w-4 mr-1" />
                <span className="md:block hidden">osd.verka@gndu.ac.in</span>
              </Link>
            </div>
            <span className="absolute left-0 right-0 m-auto md:flex hidden text-center justify-center items-center ">
              Guru Nanak Dev University Verka College
            </span>
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

              <Link
                href="/login"
                className="flex flex-row justify-center items-center space-x-1 hover:text-amber-300"
              >
                <User className="h-4 w-4 hover:text-amber-300" />
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
              alt="Guru Nanak Dev University Logo"
              width={80}
              height={80}
              className="mr-3"
            />
            <div className="">
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
              About Us
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
              Contact Us
            </Link>
          </nav>
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
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -100,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col justify-center items-center w-screen h-screen gap-5 -z-[20] bg-white"
            >
              <div className="w-screen h-[10rem]"></div>
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
                About Us
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
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
