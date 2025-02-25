"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Learn = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-zinc-900/20 backdrop-blur-xl pt-40 pb-24 lg:pt-48 lg:pb-32 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-zinc-800/80 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10"
        style={{ background: "url('/noise.png') repeat" }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center px-6 lg:px-12"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight font-sans bg-gradient-to-r from-white to-zinc-100 bg-clip-text">
          Master Bitcoin Mining
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
          Unlock the secrets of Bitcoin mining—explore the tech, economics, and
          energy driving the future of decentralized finance with
          Potentia&apos;s expertise.
        </p>
      </motion.div>

      {/* Accordion Sections */}
      <div className="max-w-4xl mx-auto mt-16 space-y-8 px-6 lg:px-12">
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
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                What is Bitcoin Mining?
              </h2>
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
                    Bitcoin mining is the heartbeat of the world&apos;s first
                    decentralized cryptocurrency. Miners use cutting-edge
                    hardware to validate transactions and secure the Bitcoin
                    blockchain through a process called proof-of-work (PoW). By
                    solving intricate mathematical puzzles, they add new blocks
                    of transactions, earning freshly minted Bitcoin and fees as
                    rewards.
                  </p>
                  <p className="mt-4">
                    This system eliminates central control, ensuring Bitcoin
                    remains trustless and resistant to censorship. The
                    computational intensity makes tampering with the blockchain
                    prohibitively expensive, safeguarding its integrity. At
                    Potentia, we harness this process to pioneer digital
                    transformation.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-black"
                    size="sm"
                  >
                    Explore More
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

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
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                How Does It Work?
              </h2>
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
                  <p>Bitcoin mining is a multi-step marvel of technology:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-3">
                    <li>
                      <strong>Transaction Gathering:</strong> Miners collect
                      pending transactions into a block from the mempool.
                    </li>
                    <li>
                      <strong>Hashing Magic:</strong> Using SHA-256, miners
                      tweak a nonce until the block&apos;s hash meets the
                      network&apos;s difficulty—a cryptographic race.
                    </li>
                    <li>
                      <strong>Dynamic Difficulty:</strong> Adjusted every 2,016
                      blocks, it keeps block times at 10 minutes as hashrate
                      fluctuates.
                    </li>
                    <li>
                      <strong>Block Validation:</strong> A winning hash gets
                      broadcast, verified, and cemented into the blockchain.
                    </li>
                    <li>
                      <strong>Reward System:</strong> Miners earn 3.125 BTC (as
                      of 2025) per block, plus fees—your ticket to the crypto
                      economy.
                    </li>
                  </ul>
                  <p className="mt-4">
                    It&apos;s a high-stakes game powered by ASICs, and
                    Potentia&apos;s facilities are built to win it efficiently.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-black"
                    size="sm"
                  >
                    Dive Deeper
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

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
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Mining Hardware Evolution
              </h2>
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
                    From humble beginnings to industrial powerhouses, mining
                    hardware has transformed:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-3">
                    <li>
                      <strong>CPUs (2009):</strong> Satoshi&apos;s era—basic PCs
                      mined Bitcoin, but they couldn&apos;t keep up.
                    </li>
                    <li>
                      <strong>GPUs (2010):</strong> Graphics cards brought
                      parallel processing, boosting hashrates dramatically.
                    </li>
                    <li>
                      <strong>FPGAs (2011):</strong> A stepping stone—more
                      efficient but soon overshadowed.
                    </li>
                    <li>
                      <strong>ASICs (2013-Now):</strong> Purpose-built for
                      SHA-256, today&apos;s giants like the Antminer S19 deliver
                      100+ TH/s. Potentia runs the latest to stay ahead.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Our high-performance computing approach optimizes every
                    watt, turning raw power into profit.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-black"
                    size="sm"
                  >
                    See the Tech
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

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
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Energy & Sustainability
              </h2>
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
                    Mining&apos;s energy appetite is massive—over 100 TWh yearly
                    in 2025—but it&apos;s also an opportunity:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-3">
                    <li>
                      <strong>Power Sources:</strong> From hydro in Iceland to
                      solar in Texas, miners tap renewables for cost and eco
                      benefits.
                    </li>
                    <li>
                      <strong>Grid Harmony:</strong> Mining absorbs surplus
                      energy, stabilizing grids and reducing waste—a win for
                      sustainability.
                    </li>
                    <li>
                      <strong>Potentia&apos;s Edge:</strong> We fuse grid
                      support with mining, powering our facilities with
                      efficiency and purpose.
                    </li>
                  </ul>
                  <p className="mt-4">
                    With ASICs hitting 100+ TH/s at ~3kW, we&apos;re redefining
                    energy use in the crypto age.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-black"
                    size="sm"
                  >
                    Learn Our Strategy
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

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
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Mining Economics
              </h2>
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
                  <p>Profitability in mining hinges on a delicate balance:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-3">
                    <li>
                      <strong>BTC Price:</strong> Soaring prices amplify block
                      rewards—your revenue lifeline.
                    </li>
                    <li>
                      <strong>Halving Impact:</strong> From 6.25 BTC (2020) to
                      3.125 BTC (2024), rewards shrink, but fees rise with
                      adoption.
                    </li>
                    <li>
                      <strong>Energy Costs:</strong> Below $0.05/kWh is the
                      sweet spot—Potentia secures the best rates.
                    </li>
                    <li>
                      <strong>Difficulty Curve:</strong> More miners, higher
                      difficulty—only the efficient thrive.
                    </li>
                    <li>
                      <strong>Hardware Investment:</strong> $2k-$10k per ASIC,
                      but longevity and power matter most.
                    </li>
                  </ul>
                  <p className="mt-4">
                    We optimize every factor, turning mining into a profitable
                    venture for our partners.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-black"
                    size="sm"
                  >
                    Calculate Your ROI
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div
            className="bg-zinc-900/40 backdrop-blur-lg rounded-xl border border-zinc-800/60 hover:border-zinc-700/60 cursor-pointer p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => toggleSection(6)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Mining Pools Unveiled
              </h2>
              <motion.span
                className="text-zinc-400 text-2xl"
                animate={{ rotate: openSection === 6 ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {openSection === 6 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-6 text-zinc-300 leading-relaxed"
                >
                  <p>
                    Solo mining&apos;s a long shot—pools are the smart play:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-3">
                    <li>
                      <strong>Teamwork Wins:</strong> Pool hashrate, share
                      rewards—steady income over luck.
                    </li>
                    <li>
                      <strong>Big Players:</strong> F2Pool, AntPool, Slush
                      Pool—giants we align with.
                    </li>
                    <li>
                      <strong>Upsides:</strong> Predictable payouts beat
                      solo&apos;s feast-or-famine.
                    </li>
                    <li>
                      <strong>Trade-offs:</strong> 1-3% fees and centralization
                      risks—worth watching.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Potentia partners with elite pools, balancing profit and
                    decentralization.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-black"
                    size="sm"
                  >
                    Join a Pool
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div
            className="bg-zinc-900/40 backdrop-blur-lg rounded-xl border border-zinc-800/60 hover:border-zinc-700/60 cursor-pointer p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => toggleSection(7)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Challenges & The Road Ahead
              </h2>
              <motion.span
                className="text-zinc-400 text-2xl"
                animate={{ rotate: openSection === 7 ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {openSection === 7 && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-6 text-zinc-300 leading-relaxed"
                >
                  <p>Mining&apos;s future is full of hurdles and promise:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-3">
                    <li>
                      <strong>Scale Matters:</strong> Rising difficulty favors
                      big ops—Potentia&apos;s ready.
                    </li>
                    <li>
                      <strong>Regulatory Winds:</strong> Energy laws could shift
                      the game—we adapt fast.
                    </li>
                    <li>
                      <strong>Halving Horizon:</strong> 1.5625 BTC in 2028 means
                      fees take center stage.
                    </li>
                    <li>
                      <strong>Next-Gen Tech:</strong> Smarter ASICs and
                      renewables are our future.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Potentia&apos;s HPC and grid innovations ensure mining
                    thrives sustainably—join us on the frontier.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-black"
                    size="sm"
                  >
                    Shape the Future
                  </Button>
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
          Ready to harness Bitcoin mining&apos;s power with Potentia&apos;s
          cutting-edge solutions?
        </p>
        <Button
          variant="default"
          size="lg"
          className="group relative overflow-hidden bg-white text-black"
        >
          <span className="relative z-10">Get Started `{"->"}` </span>
          <span className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Learn;
