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
                  <a
                    href="https://academy.binance.com/en/articles/how-to-mine-cryptocurrency?utm_campaign=googleadsxacademy&utm_source=googleadwords_int&utm_medium=cpc&ref=WMNC7PBZ&gad_source=1&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6rvWgZyVBcfWo-YyhIhr_t0A1y-ML34RY-On9r1QhrJ_OxywZ7HKBoCr1kQAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <Button
                    variant="outline"
                    className="mt-4 text-black"
                    size="sm"
                  >
                    Explore More
                  </Button>
                  </a>
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
                      <strong>Transaction Compilation:</strong> Miners collect
                      pending transactions into a block from the mempool.
                    </li>
                    <li>
                      <strong>Cryptographic Hashing:</strong> Using SHA-256, miners
                      tweak a nonce until the block&apos;s hash meets the
                      network&apos;s difficulty—a cryptographic race.
                    </li>
                    <li>
                      <strong>Difficulty Adjustment:</strong> Adjusted every 2,016
                      blocks, it keeps block times at 10 minutes as hashrate
                      fluctuates.
                    </li>
                    <li>
                      <strong>Block Validation and Consensus:</strong> A winning hash gets
                      broadcast, verified, and cemented into the blockchain.
                    </li>
                    <li>
                      <strong>Incentive Mechanism:</strong> Miners earn 3.125 BTC (as
                      of 2025) per block, plus fees—your ticket to the crypto
                      economy.
                    </li>
                  </ul>
                  <p className="mt-4">
                    It&apos;s a high-stakes game powered by ASICs, and
                    Potentia&apos;s facilities are built to win it efficiently.
                  </p>
                  <a
                    href="https://academy.binance.com/en/articles/how-to-mine-cryptocurrency?utm_campaign=googleadsxacademy&utm_source=googleadwords_int&utm_medium=cpc&ref=WMNC7PBZ&gad_source=1&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA6rvWgZyVBcfWo-YyhIhr_t0A1y-ML34RY-On9r1QhrJ_OxywZ7HKBoCr1kQAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="mt-4 text-black"
                      size="sm"
                    >
                      Dive Deeper
                    </Button>
                  </a>
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
        {/* Uncomment if you want to restore this section */}
        {/* <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
          Ready to harness Bitcoin mining's power with Potentia's
          cutting-edge solutions?
        </p>
        <Button
          variant="default"
          size="lg"
          className="group relative overflow-hidden bg-white text-black"
        >
          <span className="relative z-10">Get Started `{"->"}` </span>
          <span className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button> */}
      </motion.div>
    </section>
  );
};

export default Learn;