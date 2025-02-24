"use client"; 
import { Footer, FooterColumn, FooterBottom, FooterContent } from "./ui/footer";
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Import Next.js Link component

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4 bg-black">
      <div className="mx-auto max-w-container">
        <Footer className="bg-black">
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <Image
                  src="/artboardw.png" // Use absolute path for Next.js
                  alt="mockup"
                  width={150}
                  height={150}
                />
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Product</h3>
              <Link href="/" className="text-sm text-white">
                Changelog
              </Link>
              <Link href="/" className="text-sm text-white">
                Documentation
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Company</h3>
              <Link href="/" className="text-sm text-white">
                About
              </Link>
              <Link href="/" className="text-sm text-white">
                Careers
              </Link>
              <Link href="/" className="text-sm text-white">
                Blog
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Contact</h3>
              <Link href="/" className="text-sm text-white">
                Discord
              </Link>
              <Link href="/" className="text-sm text-white">
                Twitter
              </Link>
              <Link href="/" className="text-sm text-white">
                Github
              </Link>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 potentia. All rights reserved</div>
            <div className="flex items-center gap-4">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}