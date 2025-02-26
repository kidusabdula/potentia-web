"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Award,
  Bitcoin,
  HandCoins,
  Handshake,
  BatteryCharging,
  BookOpen,
  Blocks,
  Cpu,
  Shrub
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Bitcoin Mining Excellence",
    description:
      "potentia ensures top-tier performance with state-of-the-art ASIC miners, optimized infrastructure, and cost-effective, sustainable energy solutions.",
    icon: Bitcoin,
  },
  {
    title: "Economic Empowerment",
    description:
      "We drive financial inclusion by making Bitcoin mining accessible, fostering new economic opportunities in emerging markets.",
    icon: HandCoins,
  },
  {
    title: "Global Reach & Strategic Partnerships",
    description:
      "Our international presence and collaborations help shape forward-thinking Bitcoin mining policies while delivering unparalleled value to investors.",
    icon: Handshake,
  },
  {
    title: "Sustainable Energy Integration",
    description:
      "By utilizing renewable energy sources and energy-efficient mining practices, we contribute to a greener, more sustainable mining industry.",
    icon: BatteryCharging,
  },
  {
    title: "Education & Thought Leadership",
    description:
      " We empower individuals and institutions with knowledge, providing insights on Bitcoin mining, digital finance, and emerging opportunities in the space.",
    icon: BookOpen,
  },
  {
    title: "Seamless Mining & Hosting Solutions ",
    description:
      "From setup to maintenance, potentia offers a hassle-free mining experience, ensuring maximum uptime, security, and efficiency.",
    icon: Blocks,
  },
  {
    title: "Driving Digital Transformation ",
    description:
      "By bridging the gap between traditional finance and decentralized digital assets, we accelerate the adoption of Bitcoin and blockchain technologies.",
    icon: Cpu,
  },
  {
    title: "Financial Growth & Sovereignty",
    description:
      "We enable investors, miners, and institutions to gain Bitcoin exposure securely, fostering wealth generation and financial independence.",
    icon: Shrub
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const About = () => {
  return (
    <div className="bg-zinc-500 text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-40 pb-20 bg-gradient-to-b from-zinc-900/80 to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent font-sans"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          About Us
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl text-center text-lg md:text-xl text-zinc-300 leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          We&apos;re not just mining Bitcoin—we&apos;re shaping the future of
          sustainable and profitable Bitcoin mining. By leveraging advanced
          technology, renewable energy, and global partnerships, we drive
          economic growth and make mining more accessible. Explore our vision,
          impact, and the opportunities ahead.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        ></motion.div>
      </motion.section>
      {/* Mission & Vision */}
      <motion.section
        className="py-20 px-6 bg-black"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Our mission is to leverage Bitcoin mining as a catalyst for
              economic empowerment, infrastructure growth, and energy innovation
              on a global scale. Through sustainable mining solutions,
              cutting-edge technology, and strategic partnerships, we make
              Bitcoin mining more accessible, efficient, and impactful.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Our vision is to be the global leader in sustainable Bitcoin
              mining, driving financial sovereignty, economic growth, and
              technological innovation. We aim to create a future where Bitcoin
              mining is not only profitable but also a force for positive
              change—powering economies, advancing renewable energy adoption,
              and shaping the digital financial landscape.
            </p>
          </motion.div>
        </div>
      </motion.section>
      {/* Features Showcase */}
      <motion.section
        className="py-20 px-6 bg-zinc-900"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12"
            variants={fadeInUp}
          >
            What We Bring to the Table
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                custom={index}
                className="bg-gradient-to-br from-black via-black/90 to-black/70 backdrop-blur-xl p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <feature.icon size={48} className="text-white mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* History Timeline */}
      <motion.section
        className="py-20 px-6 bg-white text-black"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900"
            variants={fadeInUp}
          >
            potentia Story
          </motion.h2>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-zinc-900 to-zinc-500 z-0" />
            <div className="space-y-16">
              <motion.div
                variants={fadeInUp}
                className="relative flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center z-10">
                  <Globe size={32} className="text-white" />
                </div>
                <div className="bg-zinc-50 p-6 rounded-lg shadow-md w-full md:w-[45%] md:mr-auto border border-zinc-200">
                  <h3 className="text-xl font-semibold text-zinc-900">
                    2025 - Bitcoin Mining in Africa
                  </h3>
                  <p className="text-zinc-700 mt-2">
                    CEO Robert Luft discussed Bitcoin mining’s potential in
                    Africa on Voice of America, highlighting our efforts to
                    expand sustainable mining and economic empowerment in the
                    region.{" "}
                    <Link
                      href="https://www.voaafrica.com/africa-54"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-blue-600 hover:underline">
                        Watch on VOA Africa
                      </span>
                    </Link>
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center z-10">
                  <Award size={32} className="text-white" />
                </div>
                <div className="bg-zinc-50 p-6 rounded-lg shadow-md w-full md:w-[45%] md:ml-auto border border-zinc-200">
                  <h3 className="text-xl font-semibold text-zinc-900">
                    2025 - Industry Leader
                  </h3>
                  <p className="text-zinc-700 mt-2">
                    Recognized as a top innovator in Bitcoin mining and HPC,
                    powering 200,000+ companies with sustainable tech solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Global Impact */}
      <motion.section
        className="py-14 px-6 bg-white text-black"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Global Impact
          </motion.h2>
          <motion.p
            className="text-zinc-700 text-lg leading-relaxed max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            We are driving a global shift in Bitcoin mining by fostering economic growth and energy innovation. Through our strategic international partnerships, we help shape Bitcoin mining policies, making the industry more accessible and sustainable. Our operations empower emerging markets by creating jobs, enhancing local infrastructure, and supporting renewable energy initiatives. By prioritizing efficiency, transparency, and responsible mining practices, potentia is not just contributing to the Bitcoin network—we are shaping a future where digital assets drive real-world progress and economic empowerment on a global scale.
          </motion.p>
        </div>
      </motion.section>
      {/* CTA */}
      <motion.section
        className="py-20 px-6 bg-zinc-900 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Build Now
        </h2>
        <p className="text-zinc-300 max-w-2xl mx-auto mb-10">
          Ready to explore how Potentia can transform your business with
          innovative mining and HPC solutions? Let&apos;s connect.
        </p>
        <Link href="/contact" passHref>
          <Button
            variant="default"
            size="lg"
            className="px-8 py-3 bg-zinc-800/50 border border-zinc-700 text-white rounded-full hover:bg-zinc-700/50 transition-all duration-300"
          >
            Contact Us
          </Button>
        </Link>
      </motion.section>
    </div>
  );
};

export default About;