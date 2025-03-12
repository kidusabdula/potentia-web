"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useNavbar } from "@/context/NavBarContext";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { sticky } = useNavbar();
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClassName = `${
    sticky ? "fixed top-0 w-full z-30" : "relative"
  } transition-all duration-300 ${
    scrolled ? "bg-white shadow-md" : "bg-transparent"
  }`;

  const linkClassName = `block px-6 py-2 transition-colors duration-300 ${
    scrolled ? "text-black" : "text-white"
  } hover:text-gray-300`;

  const mobileLinkClassName = `block px-6 py-3 text-white transition-colors duration-300 hover:text-gray-300`;

  const handleDropdownEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownTimeout(setTimeout(() => setDropdownOpen(false), 500));
  };

  return (
    <motion.header className={headerClassName}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Left Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className={`${linkClassName} font-bold`}>
            Home
          </Link>
          <Link href="/facilities" className={linkClassName}>
            Facilities
          </Link>
        </div>

        {/* Logo in the Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" title="Potentia Home">
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: 1,
                y: scrolled ? 0 : 10,
                scale: scrolled ? 1 : 2.5,
              }}
              whileHover={{
                scale: scrolled ? 1.1 : 2.6,
                y: scrolled ? -5 : 5,
                transition: { duration: 0.7, type: "spring", stiffness: 300 },
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Image
                src={scrolled ? "/Artboardb.png" : "/Artboardw.png"}
                alt="Potentia Bitcoin Mining Logo"
                width={100}
                height={40}
                priority
                quality={100}
                className="object-contain"
                unoptimized={true} // Ensures optimization unless SVG
                placeholder="empty" // Disables blurry placeholder
              />
            </motion.div>
          </Link>
        </div>

        {/* Right Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/about" className={linkClassName}>
            About
          </Link>
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
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
            {dropdownOpen && (
              <motion.div
                className={`absolute left-0 top-full mt-2 ${
                  scrolled ? "bg-white" : "bg-transparent"
                } text-black shadow-lg w-56 py-2 rounded-md z-40`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/learn"
                  className={`${linkClassName} hover:bg-gray-100 block`}
                >
                  Learn
                </Link>
                <Link
                  href="/faq"
                  className={`${linkClassName} hover:bg-gray-100 block`}
                >
                  Downloadables
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-50 ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <motion.nav
        className="md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black text-white shadow-lg z-40"
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-start pt-20 px-6 space-y-6">
          <Link href="/" className={mobileLinkClassName} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={mobileLinkClassName} onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/facilities" className={mobileLinkClassName} onClick={() => setMenuOpen(false)}>
            Facilities
          </Link>
          <Link href="/learn" className={mobileLinkClassName} onClick={() => setMenuOpen(false)}>
            Learn
          </Link>
          <Link href="/faq" className={mobileLinkClassName} onClick={() => setMenuOpen(false)}>
            Downloadables
          </Link>
        </div>
      </motion.nav>

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </motion.header>
  );
};

export default Header;