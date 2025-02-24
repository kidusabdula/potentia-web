"use client"; 
import { Footer, FooterColumn, FooterBottom, FooterContent } from "./ui/footer";
// Removed import of motion

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4 bg-black">
      <div className="mx-auto max-w-container">
        <Footer className="bg-black">
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <img
                  src="./artboardw.png"
                  alt="mockup"
                  width={150}
                  height={150}
                />
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Product</h3>
              <a href="/" className="text-sm text-white">
                Changelog
              </a>
              <a href="/" className="text-sm text-white">
                Documentation
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Company</h3>
              <a href="/" className="text-sm text-white">
                About
              </a>
              <a href="/" className="text-sm text-white">
                Careers
              </a>
              <a href="/" className="text-sm text-white">
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Contact</h3>
              <a href="/" className="text-sm text-white">
                Discord
              </a>
              <a href="/" className="text-sm text-white">
                Twitter
              </a>
              <a href="/" className="text-sm text-white">
                Github
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 potentia. All rights reserved</div>
            <div className="flex items-center gap-4">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}