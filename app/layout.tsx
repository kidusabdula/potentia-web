import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from '@/components/NavBar';
import TopBar from "@/components/TopBar";
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import { Footer } from "@/components/ui/footer";
import FooterSection from "@/components/Footer";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "potentia",
  description: "BitCoin Mining",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <TopBar/>
        <main>{children}</main>
        <FooterSection/>
      </body>
    </html>
  );
}
