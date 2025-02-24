import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import FooterSection from "@/components/Footer";

export const metadata: Metadata = {
  title: "Potentia",
  description: "Bitcoin Mining",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
