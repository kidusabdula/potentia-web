"use client";
import { Footer, FooterColumn, FooterBottom, FooterContent } from "./ui/footer";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link"; // Import Next.js Link component

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4 bg-black">
      <div className="mx-auto max-w-container">
        <Footer className="bg-black">
          <FooterContent>
            {/* Logo Section */}
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <Image
                  src="/Artboardw.png"
                  alt="Potentia Logo"
                  width={150}
                  height={150}
                />
              </div>
            </FooterColumn>

            {/* About Us Section */}
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">About Us</h3>
              <Link href="/about" className="text-sm text-white hover:text-gray-300">
                Our Story
              </Link>
              <Link href="/about#mission" className="text-sm text-white hover:text-gray-300">
                Mission
              </Link>
              <Link href="/about#team" className="text-sm text-white hover:text-gray-300">
                Team
              </Link>
            </FooterColumn>

            {/* Contact Us Section */}
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Contact Us</h3>
              <Link href="mailto:support@potentia.com" className="text-sm text-white hover:text-gray-300">
                Email Us
              </Link>
              <Link href="tel:+1234567890" className="text-sm text-white hover:text-gray-300">
                Call Us
              </Link>
              <Link href="/contact" className="text-sm text-white hover:text-gray-300">
                Contact Form
              </Link>
            </FooterColumn>

            {/* Social Media Section */}
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Follow Us</h3>
              <Link href="https://twitter.com/potentia" className="text-sm text-white hover:text-gray-300">
                Twitter
              </Link>
              <Link href="https://instagram.com/potentia" className="text-sm text-white hover:text-gray-300">
                Instagram
              </Link>
              <Link href="https://linkedin.com/company/potentia" className="text-sm text-white hover:text-gray-300">
                LinkedIn
              </Link>
            </FooterColumn>
          </FooterContent>

          {/* Footer Bottom */}
          <FooterBottom>
            <div>© 2025 Potentia. All rights reserved</div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-sm text-white hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white hover:text-gray-300">
                Terms of Service
              </Link>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}