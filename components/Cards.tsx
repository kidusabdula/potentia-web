"use client"; // Add this at the top if you're using Next.js App Router
import { motion } from 'framer-motion';
// import dynamic from 'next/dynamic';
// const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: true });
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";
  import Image from 'next/image';


const cardData = [
    {
        image: "/Artboardw.png", // Replace with your image path
        quote: "I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer.",
        name: "Nicole Grazioso",
        position: "Director Payments & Risk | HubSpot"
    },
    {
        image: "/Artboardw.png", // Replace with your image path
        quote: "With Acme, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience.",
        name: "Josh Tyson",
        position: "Product Manager | Capsule"
    },
    {
        image: "/Artboardw.png", // Replace with your image path
        quote: "In September, I will be using this theme for 2 years. I through multiple updates and changes and I'm very glad to see the consistency and effort made by the team.",
        name: "Luisa",
        position: "Senior Director of Operations | Fitbit"
    },
    // Add more card data as needed
];

  export default function Cards() {
    return (
      <>
        {/* Testimonials */}
        <div className="w-full py-24 lg:py-32 m-15 pl-10 bg-white text-black" >
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cardData.map((card, index) => (
           <motion.div
           key={index}
           initial={{ opacity: 0, y: 20 }} // Starts invisible & slightly lower
           whileInView={{ opacity: 1, y: 0 }} // Animates when in view
       // Smooth spring animation

         >
           <Card className="h-[340px] w-[375px] flex flex-col bg-gradient-to-br from-black via-black/90 to-black/50 backdrop-blur-xl shadow-lg transition-all duration-500 ease-in-out group hover:bg-gradient-to-tl">
             <CardHeader className="flex justify-left overflow-hidden">
               <Image 
                 src={card.image} 
                 alt={card.name} 
                 width={70} 
                 height={30} 
                 className="h-[30px] w-[70px]" 
               />
             </CardHeader>
             <CardContent className="flex-grow">
               <p className="text-base md:text-xl text-white text-ellipsis overflow-hidden">
                 <em>{card.quote}</em>
               </p>
             </CardContent>
             <CardFooter className="flex flex-col items-start">
               <h3 className="text-sm font-semibold sm:text-base text-white">
                 {card.name}
               </h3>
               <p className="text-sm text-white">{card.position}</p>
             </CardFooter>
           </Card>
         </motion.div>
                  ))}
          </div>
          {/* End Grid */}
        </div>
        {/* End Testimonials */}
      </>
    );
  }
  