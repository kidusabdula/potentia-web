"use client"
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  ThumbsUpIcon,
} from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Change the function name to AboutComponent
export default function AboutComponent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="w-full py-24 lg:py-32 p-20 bg-white text-black"
    >
      <motion.div className="grid md:grid-cols-2 gap-12" variants={fadeUpVariant}>
        <motion.div className="lg:w-3/4" variants={fadeUpVariant}>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            About us
          </h2>
          <p className="mt-3 text-muted-foreground">
            We help businesses bring ideas to life in the digital world, by
            designing and implementing the technology tools that they need to
            win.
          </p>
          <p className="mt-5">
            <a
              className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4"
              href="#"
            >
              Read More
              <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
            </a>
          </p>
        </motion.div>

        <div className="space-y-6 lg:space-y-10">
          {[  
            { icon: <BookOpenIcon className="w-5 h-5" />, title: "Industry-leading documentation", desc: "Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time." },
            { icon: <MessagesSquareIcon className="w-5 h-5" />, title: "Developer community support", desc: "We actively contribute to open-source projects—giving back to the community through development, patches, and sponsorships." },
            { icon: <ThumbsUpIcon className="w-5 h-5" />, title: "Simple and affordable", desc: "From boarding passes to movie tickets, there&apos;s pretty much nothing you can&apos;t do." },
          ].map((block, index) => (
            <motion.div key={index} className="flex" variants={fadeUpVariant} whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                {block.icon}
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">{block.title}</h3>
                <p className="mt-1 text-muted-foreground">{block.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}