"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const FAQPage = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-zinc-900/20 backdrop-blur-xl pt-40 pb-24 lg:pt-48 lg:pb-32 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-zinc-800/80 pointer-events-none" />
      <div className="absolute inset-0 opacity-10" style={{ background: "url('/noise.png') repeat" }} />

      <motion.div
        className="max-w-4xl mx-auto text-center px-6 lg:px-12"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight font-sans bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
          Get answers about Potentia’s groundbreaking work in Bitcoin mining, HPC, and grid support—everything you need to know is here.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto mt-16 space-y-8 px-6 lg:px-12">
        {/* Other sections unchanged, skipping for brevity */}
        
        {/* Section 1: About Potentia */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div
            className="bg-zinc-900/40 backdrop-blur-lg rounded-xl border border-zinc-800/60 hover:border-zinc-700/60 cursor-pointer p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => toggleSection(1)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">About Potentia</h2>
              <motion.span
                className="text-zinc-400 text-2xl"
                animate={{ rotate: openSection === 1 ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {openSection === 1 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-6 text-zinc-300 leading-relaxed"
                >
                  <p>
                    Potentia is a trailblazer in the digital transformation space, leveraging Bitcoin mining, high-performance computing (HPC), and grid support to redefine technology’s future. Founded with a vision to harness computational power for decentralized finance and sustainable energy, we operate state-of-the-art facilities worldwide.
                  </p>
                  <p className="mt-4">
                    Our mission is to pioneer innovative solutions that empower individuals and businesses to thrive in the crypto ecosystem while supporting global energy grids. From cutting-edge ASIC miners to advanced HPC services, Potentia is your partner in the next era of technology.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 text-black">
                    Explore Our Story
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 2: Bitcoin Mining */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div
            className="bg-zinc-900/40 backdrop-blur-lg rounded-xl border border-zinc-800/60 hover:border-zinc-700/60 cursor-pointer p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => toggleSection(2)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Bitcoin Mining</h2>
              <motion.span
                className="text-zinc-400 text-2xl"
                animate={{ rotate: openSection === 2 ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {openSection === 2 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-6 text-zinc-300 leading-relaxed"
                >
                  <p>
                    Bitcoin mining is the process of validating transactions and securing the Bitcoin blockchain using proof-of-work (PoW). Miners solve complex cryptographic puzzles with powerful hardware, earning block rewards (currently 3.125 BTC as of 2025) and transaction fees.
                  </p>
                  <p className="mt-4">
                    Potentia uses advanced ASIC miners (e.g., Bitmain Antminer S19) in our facilities, offering individuals and institutions a seamless way to join the Bitcoin network. Our efficient energy management ensures maximum profitability, whether you’re a beginner or a seasoned miner.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button variant="outline" size="sm">
                      Calculate Your ROI
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 3: High-Performance Computing (HPC) */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div
            className="bg-zinc-900/40 backdrop-blur-lg rounded-xl border border-zinc-800/60 hover:border-zinc-700/60 cursor-pointer p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => toggleSection(3)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">High-Performance Computing</h2>
              <motion.span
                className="text-zinc-400 text-2xl"
                animate={{ rotate: openSection === 3 ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {openSection === 3 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-6 text-zinc-300 leading-relaxed"
                >
                  <p>
                    Potentia’s HPC services go beyond mining, offering advanced data processing, simulations, and AI training capabilities. Our infrastructure supports complex computations, making us a leader in both crypto and computational innovation.
                  </p>
                  <p className="mt-4">
                    By integrating HPC with our mining operations, we optimize resource use—running simulations during low mining demand and scaling mining during peak Bitcoin profitability. This dual-purpose approach delivers unmatched efficiency for our clients.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 text-black">
                    Discover HPC Services
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 4: Grid Support */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div
            className="bg-zinc-900/40 backdrop-blur-lg rounded-xl border border-zinc-800/60 hover:border-zinc-700/60 cursor-pointer p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => toggleSection(4)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Grid Support</h2>
              <motion.span
                className="text-zinc-400 text-2xl"
                animate={{ rotate: openSection === 4 ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {openSection === 4 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-6 text-zinc-300 leading-relaxed"
                >
                  <p>
                    Potentia’s mining operations double as a grid support system. By leveraging flexible load management, we consume surplus energy during off-peak hours, reducing waste and stabilizing power grids in regions like Texas and Iceland.
                  </p>
                  <p className="mt-4">
                    This innovative approach not only lowers our operational costs but also supports renewable energy adoption. Our facilities can scale energy use based on grid needs, making us a key player in sustainable tech solutions.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Learn Our Strategy
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 5: Resources and Downloads */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div
            className="bg-zinc-900/40 backdrop-blur-lg rounded-xl border border-zinc-800/60 hover:border-zinc-700/60 cursor-pointer p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => toggleSection(5)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Resources & Downloads</h2>
              <motion.span
                className="text-zinc-400 text-2xl"
                animate={{ rotate: openSection === 5 ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {openSection === 5 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-6 text-zinc-300 leading-relaxed"
                >
                  <p>
                    Dive deeper into Potentia’s world with our curated resources. Whether you’re new to Bitcoin mining or an industry expert, these materials provide insights into our operations, technology, and vision.
                  </p>
                  <p className="mt-4">
                    Download our mock white paper and user guide to explore technical details and get started with Potentia’s services. These resources are designed to empower you with knowledge and actionable steps.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="/whitepaper.pdf"
                      download
                      className="inline-flex items-center justify-center px-4 py-2 border border-zinc-700 text-sm font-medium rounded-md text-white bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors duration-300"
                    >
                      Terms & Agreements
                    </a>
                    <a
                      href="/guide.pdf"
                      download
                      className="inline-flex items-center justify-center px-4 py-2 border border-zinc-700 text-sm font-medium rounded-md text-white bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors duration-300"
                    >
                      User Guide
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto mt-16 text-center px-6 lg:px-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
          Have more questions or ready to join Potentia’s mission? Reach out today.
        </p>
        <Button
          variant="default"
          size="lg"
          className="group relative overflow-hidden"
        >
          <span className="relative z-10">Contact Us</span>
          <span className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </motion.div>
    </section>
  );
};

export default FAQPage;