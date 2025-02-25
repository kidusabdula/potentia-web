"use client"; 
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card";
  import Image from 'next/image';


const cardData = [
    {
        image: "/Artboardw.png", 
        quote: "I'm absolutely floored by the level of care and attention to detail the team at HS have put into this theme and for one can guarantee that I will be a return customer.",
        name: "Nicole Grazioso",
        position: "Director Payments & Risk | HubSpot"
    },
    {
        image: "/Artboardw.png", 
        quote: "With Acme, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience.",
        name: "Josh Tyson",
        position: "Product Manager | Capsule"
    },
    {
        image: "/Artboardw.png", 
        quote: "In September, I will be using this theme for 2 years. I through multiple updates and changes and I'm very glad to see the consistency and effort made by the team.",
        name: "Luisa",
        position: "Senior Director of Operations | Fitbit"
    },
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
           initial={{ opacity: 0, y: 20 }} 
           whileInView={{ opacity: 1, y: 0 }} 
      

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
  