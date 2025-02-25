"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-zinc-700/80 via-black/90 to-zinc-900 pt-40">
      {/* Gradient Background (No Images or Videos) */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Overlay Content with Animation */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4 sm:px-6"
      >
        <h1 className="mb-6 text-4xl font-bold font-sans sm:text-5xl md:text-6xl">
          Build Today&apos;s Digital Transformation
        </h1>
        <p className="mb-8 max-w-xl text-lg font-sans sm:text-xl md:text-2xl">
          Empowering the future with high-performance computing, Bitcoin
          mining, and grid support.
        </p>
        <div>
          <Link href="/about" passHref>
            <Button
              variant="default"
              size="lg"
              aria-label="Get Started with our services"
              className="group"
            >
              About Potentia
              <svg
                className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M9 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;