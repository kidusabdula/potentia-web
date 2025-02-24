"use client";

import React from 'react'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming ShadCN Button component
import Head from "next/head";


const Hero = () => {
  return (
    <div className=''>
         {/* Preload Video */}
     <Head>
        <link rel="preload" href="/videos/hero-bg.webm" as="video" type="video/webm" />
      </Head>

      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src="/videos/hero-bg.webm" type="video/webm" />
          <source src="/Videos/HeroSectionVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="my-16 relative z-10 flex h-full flex-col items-center justify-center text-center text-white"
        >
          <h1 className="mb-6 text-5xl font-bold md:text-6xl font-sans">
            Pioneering Digital Transformation
          </h1>
          <p className="mb-8 max-w-2xl text-xl md:text-2xl font-sans">
            Empowering the future with high-performance computing, Bitcoin
            mining, and grid support.
          </p>
          <div>
            <Button variant="ghost" size="lg" aria-label="Get Started">
              Get Started
              <svg
                className="ml-2 h-5 w-5 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M9 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>

        {/* Fallback Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-800/80"></div>
      </section>
    </div>
  )
}

export default Hero