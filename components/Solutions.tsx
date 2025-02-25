"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants for header, stats, and cards
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const MiningSolutions: React.FC = () => {
  return (
    <section className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center py-14 px-6 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/SolutionsImage.jpg"
        alt="Mining Solutions Background"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* Black Shade Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Main Content */}
      <motion.div
        className="w-full max-w-6xl relative z-10 flex flex-col items-center gap-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans mb-4">
            potentia Mining Solutions
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Empowering the future of digital mining with cutting-edge technology, sustainable energy, and global impact.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Stats - Stretched Out */}
          <div className="flex flex-col items-center justify-between gap-12 md:gap-16 h-full">
            <motion.div
              custom={0}
              variants={statVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <span className="text-5xl md:text-6xl font-bold text-white">
                100,000+
              </span>
              <p className="text-lg md:text-xl text-zinc-300 mt-4">
                Active Miners Worldwide
              </p>
            </motion.div>

            <motion.div
              custom={1}
              variants={statVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <span className="text-5xl md:text-6xl font-bold text-white">
                530 MW
              </span>
              <p className="text-lg md:text-xl text-zinc-300 mt-4">
                Total Energy Capacity Globally
              </p>
            </motion.div>

            <motion.div
              custom={2}
              variants={statVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <span className="text-5xl md:text-6xl font-bold text-white">
                5+
              </span>
              <p className="text-lg md:text-xl text-zinc-300 mt-4">
                Countries of Operation
              </p>
            </motion.div>
          </div>

          {/* Right Text Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-zinc-900 rounded-lg p-4 md:p-5 shadow-md border border-zinc-800 max-w-md mx-auto"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Bitcoin Mining Excellence
              </h3>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                Potentia leads global Bitcoin mining with advanced ASICs like the Bitmain Antminer S19, spanning the USA, Canada, Ethiopia, and China. We optimize hashrates (up to 100+ TH/s) via proof-of-work, ensuring network security and profitability while integrating renewable energy for sustainability, empowering 100,000+ miners worldwide.
              </p>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-zinc-900 rounded-lg p-4 md:p-5 shadow-md border border-zinc-800 max-w-md mx-auto"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Cloud Mining & Hosting Innovation
              </h3>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                Our cloud mining platform offers scalable, cost-effective mining with 530 MW capacity across 5+ countries. Powered by HPC, it provides real-time monitoring, load balancing, and pool integration (e.g., F2Pool, AntPool), enabling remote participation while prioritizing energy efficiency and grid stability for businesses and individuals.
              </p>
            </motion.div>

            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-zinc-900 rounded-lg p-4 md:p-5 shadow-md border border-zinc-800 max-w-md mx-auto"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Potentia Store Solutions
              </h3>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                In Dallas, our store distributes cutting-edge mining gear like WhatsMiner and Bitmain ASICs, offering tailored packages, consultations, and maintenance. We equip miners with tools for efficiency and profitability, supported by educational resources, making Potentia your hub for thriving in the Bitcoin mining ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MiningSolutions;