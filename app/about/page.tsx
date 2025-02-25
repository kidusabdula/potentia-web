"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Shield,
  Settings,
  DollarSign,
  Users,
  BarChart,
  FileText,
  Globe,
  Rocket,
  Zap,
  MapPin,
  Award,
} from "lucide-react";

// Expanded features array with more detail
const features = [
  {
    title: "Bitcoin Mining Operations",
    description:
      "Harnessing cutting-edge ASICs to power one of the world&apos;s largest Bitcoin mining networks, delivering unparalleled hashrates and profitability.",
    icon: Briefcase,
  },
  {
    title: "Security & Compliance",
    description:
      "Fortifying our infrastructure with state-of-the-art cybersecurity and adhering to global compliance standards for secure operations.",
    icon: Shield,
  },
  {
    title: "Automation Excellence",
    description:
      "Streamlining workflows with advanced automation, from task assignment to real-time grid support adjustments.",
    icon: Settings,
  },
  {
    title: "Financial Innovation",
    description:
      "Offering audit-ready financial tools tailored for crypto mining, budgeting, and revenue optimization.",
    icon: DollarSign,
  },
  {
    title: "Team Empowerment",
    description:
      "Unifying our global workforce with seamless HR systems, fostering collaboration and innovation across continents.",
    icon: Users,
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leveraging real-time analytics and comprehensive reporting to drive strategic decisions and operational efficiency.",
    icon: BarChart,
  },
  {
    title: "Documentation Hub",
    description:
      "Centralizing all operational, technical, and compliance documents in a secure, accessible platform.",
    icon: FileText,
  },
  {
    title: "Global Reach",
    description:
      "Expanding our footprint across 5+ countries, optimizing mining and HPC solutions for diverse markets.",
    icon: Globe,
  },
];

// Animation variants
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
          About Potentia
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl text-center text-lg md:text-xl text-zinc-300 leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          At Potentia, we&apos;re not just mining Bitcoin—we&apos;re pioneering
          a revolution in digital transformation, high-performance computing,
          and sustainable energy solutions. Discover our journey, technology,
          and global impact.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* <button className="px-8 py-3 bg-zinc-800/50 border border-zinc-700 text-white rounded-full hover:bg-zinc-700/50 transition-all duration-300">
            Explore Our Story
          </button> */}
        </motion.div>
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
              Leverage Bitcoin mining as a powerful catalyst for economic
              empowerment, driving financial inclusion, fostering technological
              advancement, and creating new opportunities for businesses and
              individuals across Africa. By harnessing cutting-edge blockchain
              technology, Bitcoin mining can stimulate infrastructure growth,
              improve energy utilization, and promote investment in sustainable
              power solutions. This innovation has the potential to transform
              the continent’s digital economy, unlocking unprecedented access to
              decentralized finance while supporting long-term economic
              resilience and technological progress.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              We envision a future where Bitcoin mining serves as a driving
              force for economic transformation, bridging the gap between
              financial accessibility and technological innovation across
              Africa. By integrating blockchain-powered solutions with scalable
              infrastructure, we aim to create sustainable growth opportunities
              that empower businesses, entrepreneurs, and entire industries. Our
              mission extends beyond mining; we seek to revolutionize digital
              finance, enhance energy efficiency, and foster strategic
              investments in renewable power sources. As we push the boundaries
              of decentralized technology, we are committed to shaping a
              resilient and inclusive economy, paving the way for a new era of
              prosperity and innovation.
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
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Our Journey
          </motion.h2>
          <div className="space-y-12">
            <motion.div variants={fadeInUp} className="flex items-start gap-6">
              <Rocket size={32} className="text-white flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">
                  2018 - Founding Vision
                </h3>
                <p className="text-zinc-700 mt-2">
                  Potentia was born from a vision to merge cryptocurrency mining
                  with sustainable energy, starting with a small pilot facility
                  in Texas.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-6">
              <Zap size={32} className="text-white flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">
                  2020 - Grid Integration
                </h3>
                <p className="text-zinc-700 mt-2">
                  We pioneered grid support by integrating mining operations
                  with renewable energy sources, expanding to Iceland and
                  Canada.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-6">
              <MapPin size={32} className="text-white flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">
                  2023 - Global Footprint
                </h3>
                <p className="text-zinc-700 mt-2">
                  Achieved a presence in 5+ countries, scaling to 530 MW of
                  mining power and supporting over 100,000 miners worldwide.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-6">
              <Award size={32} className="text-white flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">
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
      </motion.section>
      {/* Team Section */}
      {/* <motion.section
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
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Luft",
                role: "CEO & Founder",
                img: "/person1.jpg",
              },
              { name: "John Chain", role: "CTO", img: "/person2.jpg" },
              { name: "John Appleseed", role: "COO", img: "/person3.jpg" },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                className="bg-zinc-800/50 p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <div className="w-48 h-48 mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={192} // Consistent width in pixels (w-48 = 12rem = 192px at default scaling)
                    height={192} // Consistent height in pixels
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-zinc-300 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="mt-12 text-zinc-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Our leadership team brings decades of expertise in blockchain,
            energy, and technology innovation, driving Potentia&apos;s global
            success.
          </motion.p>
        </div>
      </motion.section> */}
      {/* Global Impact */}{" "}
      <motion.section
        className=" h-[150vh] py-14 px-6 bg-white text-black"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-4">Economic Growth</h3>
              <p className="text-zinc-700 mb-4">
                By powering over 200,000 companies, Potentia fuels economic
                growth through decentralized finance and job creation in tech
                hubs worldwide. Our operations have generated thousands of
                direct and indirect jobs, from engineers maintaining
                cutting-edge mining rigs to developers building financial tools
                for the crypto economy.
              </p>
              <p className="text-zinc-700">
                We&apos;ve also catalyzed local economies by partnering with
                small businesses in regions like Texas, Iceland, and Kazakhstan,
                providing them with access to affordable energy solutions and
                blockchain-based revenue streams. In 2024 alone, our initiatives
                contributed an estimated $1.2 billion to global GDP through
                mining rewards and tech innovation.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
              <p className="text-zinc-700 mb-4">
                Our grid support initiatives reduce energy waste by consuming
                surplus renewables, contributing to a greener planet across 5+
                countries. By strategically locating mining facilities near
                hydroelectric, wind, and solar plants, we&apos;ve diverted over
                1.5 terawatt-hours of excess energy from being wasted,
                equivalent to powering 150,000 homes annually.
              </p>
              <p className="text-zinc-700">
                Potentia&apos;s commitment to carbon-neutral operations has
                earned us partnerships with environmental organizations, and our
                2025 goal is to offset 100% of our operational emissions through
                reforestation and renewable energy credits, setting a new
                standard for sustainability in the blockchain industry.
              </p>
            </motion.div>
            {/* <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-4">
                Technological Advancement
              </h3>
              <p className="text-zinc-700 mb-4">
                Potentia drives the future of high-performance computing (HPC)
                by repurposing mining hardware for scientific research and AI
                development. Our facilities have supported breakthroughs in
                climate modeling and medical simulations, processing over 10
                petabytes of data for global research institutions in 2024.
              </p>
              <p className="text-zinc-700">
                Through open-source collaborations, we&apos;ve released tools
                like the &quot;Potentia Compute Framework,&quot; enabling
                developers worldwide to harness our infrastructure for
                decentralized computing projects, democratizing access to
                powerful technology.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-4">
                Community Empowerment
              </h3>
              <p className="text-zinc-700 mb-4">
                Beyond profits, Potentia invests in the communities where we
                operate. Our &quot;Miners for Education&quot; program has funded
                STEM scholarships for over 5,000 students in underserved
                regions, while our energy surplus sharing has provided free
                electricity to rural schools and clinics.
              </p>
              <p className="text-zinc-700">
                In partnership with local governments, we&apos;ve launched
                blockchain literacy campaigns, training over 50,000 individuals
                in 2024 alone to participate in the digital economy, fostering
                financial inclusion and technological empowerment on a global
                scale.
              </p>
            </motion.div> */}
          </div>
          {/* Summary Stats */}
          <motion.div className="mt-12 text-center" variants={fadeInUp}>
            <p className="text-zinc-700 text-lg italic">
              From economic vitality to environmental stewardship,
              Potentia&apos;s impact spans continents, with 530 MW of mining
              power, 200,000+ supported businesses, and a vision for a
              decentralized, sustainable future.
            </p>
          </motion.div>
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
          Join the Potentia Revolution
        </h2>
        <p className="text-zinc-300 max-w-2xl mx-auto mb-10">
          Ready to explore how Potentia can transform your business with
          innovative mining and HPC solutions? Let&apos;s connect.
        </p>
        <motion.button
          className="px-8 py-3 bg-zinc-800/50 border border-zinc-700 text-white rounded-full hover:bg-zinc-700/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.section>
    </div>
  );
};

export default About;
