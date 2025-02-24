// components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import WhiteLogo from "@/public/Logos/Artboardw.png";
import BlackLogo from "@/public/Logos/Artboardb.png";
import { motion, useAnimation } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolled) {
      controls.start({ opacity: 20, y: 0, transition: { duration: 0.5, ease: "easeInOut" } });
    } else {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } });
    }
  }, [scrolled, controls]);

  const headerClassName = `fixed top-12 w-full z-30 transition-all duration-100 ${
    scrolled ? "bg-white shadow-md" : "bg-transparent"
  }`;

  const linkClassName = `block md:inline-block px-6 py-2 transition-colors duration-300 ${
    scrolled ? "text-black" : "text-white"
  } hover:text-gray-600`;

  return (
    <motion.header className={headerClassName}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className={`${linkClassName} font-bold`}>
            Home
          </Link>
          <Link href="/learning" className={linkClassName}>
            Learn
          </Link>
        </div>

        {/* Logo in the Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <motion.img
            src={scrolled ? BlackLogo.src : WhiteLogo.src}
            alt="Logo"
            width={120}
            height={40}
            className="transition-opacity duration-300"
            animate={{ opacity: scrolled ? 1 : 1, y: scrolled ? 0 : 10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Right Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/facilities" className={linkClassName}>
            Facilities
          </Link>
          <div className="relative">
            <button
              className={`${linkClassName} flex items-center space-x-1`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>Resources</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div
              className={`${
                dropdownOpen ? "block" : "hidden"
              } absolute left-0 top-full mt-2 ${
                scrolled ? "bg-white" : "bg-transparent"
              } text-black shadow-lg w-56 py-2 rounded-md z-40`}
            >
              <Link
                href="/market-analysis"
                className={`${linkClassName} hover:bg-gray-100 block`}
              >
                Market Analysis
              </Link>
              <Link
                href="/faqs"
                className={`${linkClassName} hover:bg-gray-100 block`}
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full ${
            scrolled ? "bg-transparent" : "bg-transparent"
          } shadow-md z-40`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className={linkClassName}>
              Home
            </Link>
            <Link href="/learn" className={linkClassName}>
              Learn
            </Link>
            <Link href="/about-us" className={linkClassName}>
              About Us
            </Link>
            <Link href="/market-analysis" className={linkClassName}>
              Market Analysis
            </Link>
            <Link href="/faqs" className={linkClassName}>
              FAQs
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;