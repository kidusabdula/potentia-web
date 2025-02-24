"use client";
import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import IconSection from "@/components/IconSection";
import MiningSolutions from "@/components/Solutions";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";


export default function HomePage() {
  return (
    <>
     <Hero/>
     <Sponsors/>
     <MiningSolutions/>
     <IconSection/>
     <Team/>
     <Cards/>
    </>
  );
}
