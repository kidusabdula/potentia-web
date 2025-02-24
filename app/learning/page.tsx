"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming ShadCN Button component

const Learn = () => {
  // State to track which accordion is open
  const [openSection, setOpenSection] = useState<number | null>(null);

  // Toggle function for accordions
  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Animation variants for accordion content
  const contentVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Animation variants for section fade-in
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-zinc-900/20 backdrop-blur-xl py-24 lg:py-32 text-white">
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-800/80 pointer-events-none" />

      {/* Header */}
      <motion.div
        className="container text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="scroll-m-20 text-4xl font-light tracking-tight lg:text-5xl font-sans">
          Learn About Bitcoin Mining
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-300">
          Discover the technology, economics, and energy behind Bitcoin mining—unlocking the backbone of decentralized finance.
        </p>
      </motion.div>

      {/* Accordion Sections */}
      <div className="container mt-12 space-y-6">
        {/* Section 1: What is Bitcoin Mining? */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div
            className="bg-zinc-900/30 backdrop-blur-md rounded-lg border border-zinc-800/50 hover:border-zinc-700/50 cursor-pointer p-6"
            onClick={() => toggleSection(1)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">What is Bitcoin Mining?</h2>
              <span className="text-zinc-400">{openSection === 1 ? "−" : "+"}</span>
            </div>
            <AnimatePresence>
              {openSection === 1 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-4 text-zinc-300"
                >
                  <p>
                    Bitcoin mining is the process of validating transactions on the Bitcoin network and securing its blockchain. Miners use powerful computers to solve complex mathematical puzzles, known as proof-of-work (PoW), to add new blocks of transactions to the chain. In return, they earn newly minted Bitcoin (block rewards) and transaction fees.
                  </p>
                  <p className="mt-2">
                    This decentralized system ensures no single entity controls the network, making it censorship-resistant and trustless. Mining keeps Bitcoin secure by making it computationally expensive to alter past transactions, requiring enormous energy and hardware resources.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 2: How Does Bitcoin Mining Work? */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div
            className="bg-zinc-900/30 backdrop-blur-md rounded-lg border border-zinc-800/50 hover:border-zinc-700/50 cursor-pointer p-6"
            onClick={() => toggleSection(2)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">How Does Bitcoin Mining Work?</h2>
              <span className="text-zinc-400">{openSection === 2 ? "−" : "+"}</span>
            </div>
            <AnimatePresence>
              {openSection === 2 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-4 text-zinc-300"
                >
                  <p>
                    Bitcoin mining involves several key steps:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>Transaction Collection:</strong> Miners gather unconfirmed transactions from the network’s mempool into a candidate block.
                    </li>
                    <li>
                      <strong>Hashing:</strong> Miners use the SHA-256 algorithm to hash the block’s data (including a nonce—a random number they adjust) repeatedly until the hash meets a specific difficulty target set by the network.
                    </li>
                    <li>
                      <strong>Difficulty Adjustment:</strong> The network adjusts the difficulty every 2,016 blocks (~2 weeks) to maintain an average block time of 10 minutes.
                    </li>
                    <li>
                      <strong>Block Addition:</strong> Once a valid hash is found, the block is broadcast to the network, verified by other nodes, and added to the blockchain.
                    </li>
                    <li>
                      <strong>Reward:</strong> The successful miner receives the block reward (currently 3.125 BTC as of 2025, post-halving) plus transaction fees.
                    </li>
                  </ul>
                  <p className="mt-2">
                    This process requires significant computational power, often provided by specialized hardware like ASICs (Application-Specific Integrated Circuits).
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 3: Mining Hardware */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div
            className="bg-zinc-900/30 backdrop-blur-md rounded-lg border border-zinc-800/50 hover:border-zinc-700/50 cursor-pointer p-6"
            onClick={() => toggleSection(3)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Mining Hardware</h2>
              <span className="text-zinc-400">{openSection === 3 ? "−" : "+"}</span>
            </div>
            <AnimatePresence>
              {openSection === 3 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-4 text-zinc-300"
                >
                  <p>
                    Bitcoin mining has evolved from simple CPUs to highly specialized equipment:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>CPUs (2009):</strong> Early miners used standard computer processors, but these were quickly outpaced.
                    </li>
                    <li>
                      <strong>GPUs (2010):</strong> Graphics cards offered more power, enabling miners to process multiple hashes simultaneously.
                    </li>
                    <li>
                      <strong>FPGAs (2011):</strong> Field-Programmable Gate Arrays improved efficiency over GPUs but were still transitional.
                    </li>
                    <li>
                      <strong>ASICs (2013-Present):</strong> Application-Specific Integrated Circuits are custom-built for SHA-256 hashing, delivering unparalleled speed and energy efficiency. Modern miners like the Bitmain Antminer S19 dominate the industry.
                    </li>
                  </ul>
                  <p className="mt-2">
                    At Potentia, we leverage cutting-edge ASIC technology in our facilities to maximize hashrate while optimizing energy use—pushing the boundaries of high-performance computing.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 4: Energy Consumption */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div
            className="bg-zinc-900/30 backdrop-blur-md rounded-lg border border-zinc-800/50 hover:border-zinc-700/50 cursor-pointer p-6"
            onClick={() => toggleSection(4)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Energy Consumption</h2>
              <span className="text-zinc-400">{openSection === 4 ? "−" : "+"}</span>
            </div>
            <AnimatePresence>
              {openSection === 4 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-4 text-zinc-300"
                >
                  <p>
                    Bitcoin mining is energy-intensive due to the computational demands of proof-of-work. Estimates suggest the network consumes over 100 terawatt-hours (TWh) annually as of 2025—comparable to the energy use of a mid-sized country.
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>Energy Sources:</strong> Miners often seek cheap electricity, with many operations using renewable sources like hydro, solar, or wind (e.g., in regions like Iceland or Texas).
                    </li>
                    <li>
                      <strong>Sustainability:</strong> Critics highlight environmental concerns, but proponents argue mining can stabilize grids by consuming excess renewable energy that would otherwise go unused.
                    </li>
                    <li>
                      <strong>Potentia’s Approach:</strong> We integrate grid support into our mining operations, using surplus energy to reduce waste while powering our high-efficiency facilities.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Energy efficiency is key—modern ASICs achieve hashrates of 100+ TH/s while consuming ~3,000 watts, a vast improvement over older tech.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 5: Economics of Mining */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div
            className="bg-zinc-900/30 backdrop-blur-md rounded-lg border border-zinc-800/50 hover:border-zinc-700/50 cursor-pointer p-6"
            onClick={() => toggleSection(5)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Economics of Mining</h2>
              <span className="text-zinc-400">{openSection === 5 ? "−" : "+"}</span>
            </div>
            <AnimatePresence>
              {openSection === 5 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-4 text-zinc-300"
                >
                  <p>
                    Mining profitability depends on several factors:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>Bitcoin Price:</strong> Higher BTC prices increase revenue per block mined.
                    </li>
                    <li>
                      <strong>Block Reward:</strong> Reduced by halving events every ~4 years (e.g., from 6.25 BTC in 2020 to 3.125 BTC in 2024), pushing miners to rely more on fees.
                    </li>
                    <li>
                      <strong>Electricity Costs:</strong> A major expense—miners aim for rates below $0.05/kWh to stay competitive.
                    </li>
                    <li>
                      <strong>Hashrate & Difficulty:</strong> As more miners join, difficulty rises, requiring more power to earn rewards.
                    </li>
                    <li>
                      <strong>Hardware Costs:</strong> ASICs range from $2,000-$10,000 each, with lifespan and efficiency impacting ROI.
                    </li>
                  </ul>
                  <p className="mt-2">
                    At Potentia, we optimize these variables with strategic facility locations and advanced tech, ensuring sustainable profitability for our operations and partners.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 6: Mining Pools */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div
            className="bg-zinc-900/30 backdrop-blur-md rounded-lg border border-zinc-800/50 hover:border-zinc-700/50 cursor-pointer p-6"
            onClick={() => toggleSection(6)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Mining Pools</h2>
              <span className="text-zinc-400">{openSection === 6 ? "−" : "+"}</span>
            </div>
            <AnimatePresence>
              {openSection === 6 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-4 text-zinc-300"
                >
                  <p>
                    Solo mining is rare due to high difficulty—most miners join pools to combine hashrate and share rewards:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>How Pools Work:</strong> Miners contribute computing power to a pool, which finds blocks collectively. Rewards are split based on contributed hashrate.
                    </li>
                    <li>
                      <strong>Popular Pools:</strong> Examples include F2Pool, AntPool, and Slush Pool, controlling significant portions of the network’s hashrate.
                    </li>
                    <li>
                      <strong>Pros:</strong> More consistent payouts compared to solo mining’s all-or-nothing approach.
                    </li>
                    <li>
                      <strong>Cons:</strong> Pool fees (1-3%) reduce individual profits, and centralization risks emerge if a few pools dominate.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Potentia collaborates with top-tier pools to ensure our miners benefit from stable returns while advancing decentralized principles.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 7: Challenges & Future */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div
            className="bg-zinc-900/30 backdrop-blur-md rounded-lg border border-zinc-800/50 hover:border-zinc-700/50 cursor-pointer p-6"
            onClick={() => toggleSection(7)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Challenges & Future of Mining</h2>
              <span className="text-zinc-400">{openSection === 7 ? "−" : "+"}</span>
            </div>
            <AnimatePresence>
              {openSection === 7 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-4 text-zinc-300"
                >
                  <p>
                    Bitcoin mining faces evolving challenges and opportunities:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>Scalability:</strong> As difficulty rises, only large-scale operations with cheap energy remain viable.
                    </li>
                    <li>
                      <strong>Regulation:</strong> Governments may impose restrictions on energy use or crypto activities, affecting profitability.
                    </li>
                    <li>
                      <strong>Halvings:</strong> Future reward reductions (e.g., 1.5625 BTC in 2028) will shift reliance to transaction fees, requiring higher network usage.
                    </li>
                    <li>
                      <strong>Innovation:</strong> Advances in hardware efficiency and renewable energy integration could reshape the industry.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Looking ahead, Potentia is pioneering sustainable mining solutions, leveraging our expertise in HPC and grid support to future-proof the ecosystem.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        className="container mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-zinc-300 mb-6">
          Ready to dive into Bitcoin mining with cutting-edge technology?
        </p>
        <Button variant="ghost" size="lg">
          Get Started
        </Button>
      </motion.div>
    </section>
  );
};

export default Learn;