"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const bitcoinMiningImage = "/MiningPic.jpg";
const cloudMiningImage = "/CloudMining.jpg";
const storeImage = "/StoreImage.jpg";
const solutionsImage = "/SolutionsImage.jpg";

const MiningSolutions: React.FC = () => {
  // Animation variants for header and stats
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

  return (
    <section className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center py-14 px-6 relative">
      {/* Background Image */}
      <Image
        src={solutionsImage}
        alt="Mining Solutions Background"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* Black Shade Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Main Content */}
      <motion.div
        className="w-full max-w-6xl relative z-10 flex flex-col items-center gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white font-sans mb-4">
            Mining Solutions
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Empowering the future of digital mining with cutting-edge technology
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
              <p className="text-lg md:text-xl text-zinc-300 mt-4">Total Miners</p>
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
              <p className="text-lg md:text-xl text-zinc-300 mt-4">Globally</p>
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
              <p className="text-lg md:text-xl text-zinc-300 mt-4">Countries</p>
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 md:gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-zinc-900 rounded-lg p-4 shadow-md border border-zinc-800"
            >
              <Image
                src={bitcoinMiningImage}
                alt="Bitcoin Mining"
                width={300}
                height={150}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Bitcoin Mining
                </h3>
                <p className="text-sm text-zinc-300 mt-2">
                  potentia is one of the top upcoming Bitcoin Miners in the
                  world, with operations across the USA, Canada, Ethiopia, and China.
                </p>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-zinc-900 rounded-lg p-4 shadow-md border border-zinc-800"
            >
              <Image
                src={cloudMiningImage}
                alt="Cloud Mining & Hosting"
                width={300}
                height={150}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Cloud Mining & Hosting
                </h3>
                <p className="text-sm text-zinc-300 mt-2">
                  As a leading force in the world of mining, potentia is an upcoming
                  cloud miner and host
                </p>
              </div>
            </motion.div>

            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-zinc-900 rounded-lg p-4 shadow-md border border-zinc-800"
            >
              <Image
                src={storeImage}
                alt="Phoenix Store"
                width={300}
                height={150}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Our Store
                </h3>
                <p className="text-sm text-zinc-300 mt-2">
                  Centrally located in Dallas, is the premier distributor of
                  mining products, renowned for cutting-edge design.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MiningSolutions;