"use client";
import AboutComponent from "@/components/AboutComponent";
import Hero from "@/components/Hero";
import MiningSolutions from "@/components/Solutions";
import Head from "@/components/Head"


export default function HomePage() {
  return (
    <>
    <Head/>
     <Hero/>
     <AboutComponent/>
     <MiningSolutions/>
    </>
  );
}
