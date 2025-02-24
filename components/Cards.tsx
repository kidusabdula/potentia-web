"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

const cardData = [
  {
    image: "/artboardw.png",
    quote:
      "I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme. I can guarantee I'll be a return customer.",
    name: "Nicole Grazioso",
    position: "Director Payments & Risk | HubSpot",
    companyLogo: "/artboardw.png", // Optional: Add company logo
    rating: 5,
  },
  {
    image: "/artboardw.png",
    quote:
      "With Acme, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience.",
    name: "Josh Tyson",
    position: "Product Manager | Capsule",
    companyLogo: "/artboardw.png",
    rating: 4,
  },
  {
    image: "/artboardw.png",
    quote:
      "After two years with this theme through multiple updates, I'm impressed by the consistency and effort. It's a game-changer for our operations.",
    name: "Luisa Martinez",
    position: "Senior Director of Operations | Fitbit",
    companyLogo: "/artboardw.png",
    rating: 5,
  },
  {
    image: "/artboardw.png",
    quote:
      "The integration of advanced analytics and seamless design has transformed how we approach our projects. Truly exceptional work!",
    name: "Evan Patel",
    position: "CTO | Nebula Labs",
    companyLogo: "/artboardw.png",
    rating: 5,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

export default function Cards() {
  return (
    <section className="w-full py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl font-sans">
          Voices of Innovation
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-400">
          Hear from industry leaders who trust us to power their digital transformation.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="flex justify-center"
          >
            <Card className="w-full max-w-[350px] flex flex-col bg-zinc-900/80 backdrop-blur-md border border-zinc-800/50 hover:border-zinc-700 shadow-xl rounded-xl overflow-hidden">
              <CardHeader className="flex items-center space-x-4 p-6">
                <Image
                  src={card.image}
                  alt={`${card.name}'s avatar`}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{card.name}</h3>
                  <p className="text-sm text-zinc-400">{card.position}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <p className="text-base text-zinc-300 italic">
                &quot;{card.quote}&quot;
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                {card.companyLogo && (
                  <Image
                    src={card.companyLogo}
                    alt={`${card.position.split(" | ")[1]} logo`}
                    width={60}
                    height={20}
                    className="object-contain opacity-70"
                  />
                )}
                <div className="flex space-x-1">
                  {Array.from({ length: card.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.574 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}