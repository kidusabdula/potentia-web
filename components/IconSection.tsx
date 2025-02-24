"use client";
import { motion } from "framer-motion";
import {
  BrainCogIcon,
  PackageIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";

const IconSection = () => {
  return (
    <>
      <div className="bg-white text-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center m-10 p-10 mt-10"
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Complete Your Profile
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
            Let&apos;s get your account set up. Follow these steps to get
            started with our platform.
          </p>
        </motion.div>

        <div className="container py-24 lg:py-8 p-10">
          <div className="max-w-4xl mx-auto">
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
              {[
                [
                  {
                    icon: BrainCogIcon,
                    title: "Creative minds",
                    text: "We choose our teams carefully. Our people are the secret to great work.",
                  },
                  {
                    icon: PackageIcon,
                    title: "Effortless updates",
                    text: "Benefit from automatic updates to all boards any time you need to make a change to your website.",
                  },
                  {
                    icon: ZapIcon,
                    title: "Strong empathy",
                    text: "We&apos;ve user tested our own process by shipping over 1k products for clients.",
                  },
                ],
                [
                  {
                    icon: TrophyIcon,
                    title: "Conquer the best",
                    text: "We stay lean and help your product do one thing well.",
                  },
                  {
                    icon: UsersIcon,
                    title: "Designing for people",
                    text: "We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.",
                  },
                  {
                    icon: ThumbsUpIcon,
                    title: "Simple and affordable",
                    text: "From boarding passes to movie tickets, there&apos;s pretty much nothing you can&apos;t do.",
                  },
                ],
              ].map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-6 lg:space-y-10">
                  {column.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="flex"
                    >
                      <item.icon className="flex-shrink-0 mt-2 h-8 w-8" />
                      <div className="ms-5 sm:ms-8">
                        <h3 className="text-base sm:text-lg font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-black">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconSection;
