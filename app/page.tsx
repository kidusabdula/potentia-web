"use client";
import AboutComponent from "@/components/AboutComponent";
import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import MiningSolutions from "@/components/Solutions";


export default function HomePage() {
  return (
    <>
     <Hero/>
     <AboutComponent/>
     <MiningSolutions/>
     <Cards/>
    </>
  );
}
