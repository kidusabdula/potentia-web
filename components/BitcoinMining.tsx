"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming ShadCN Button component
import Image from "next/image";

const bitcoinPickaxeImage = "/bitcoin-pickaxe.png"; 
const miningFacilityImage = "/mining-facility.png"; 

const BitcoinMiningInfo: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const cardHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 bg-white text-black overflow-hidden">
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 opacity-10" style={{ background: "url('/noise.png') repeat" }} />

      {/* Content Container */}
      <motion.div
        className="max-w-6xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side: Text and Title */}
        <motion.div variants={fadeInUp} className="flex flex-col items-start text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black font-sans bg-clip-text">
            What is Bitcoin Mining?
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed max-w-lg">
            Bitcoin mining is the mechanism through which Bitcoin transactions are verified and added to the blockchain. It serves three main purposes:
          </p>
          <ul className="list-disc list-inside text-black space-y-4 mt-4">
            <motion.li variants={fadeInUp} className="text-lg">
              <span className="font-medium">Transaction Validation</span> – Miners confirm the legitimacy of transactions.
            </motion.li>
            <motion.li variants={fadeInUp} className="text-lg" transition={{ delay: 0.3 }}>
              <span className="font-medium">Network Security</span> – Mining helps secure the network against attacks.
            </motion.li>
            <motion.li variants={fadeInUp} className="text-lg" transition={{ delay: 0.6 }}>
              <span className="font-medium">Bitcoin Issuance</span> – New bitcoins are introduced into circulation as mining rewards.
            </motion.li>
          </ul>
          <motion.div
            variants={fadeInUp}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8"
          >
            <Button variant="default" size="lg" className="group">
              Learn More
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Images */}
        <motion.div
          variants={fadeInUp}
          className="relative flex flex-col gap-8"
          whileHover="hover"
        >
          {/* Bitcoin Pickaxe Image */}
          <motion.div
            variants={cardHover}
            className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-black/30 backdrop-blur-md"
          >
            <Image
              src={bitcoinPickaxeImage}
              alt="Bitcoin Pickaxe Illustration"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Mining Facility Image */}
          <motion.div
            variants={cardHover}
            className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-black/30 backdrop-blur-md"
          >
            <Image
              src={miningFacilityImage}
              alt="Mining Facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BitcoinMiningInfo;