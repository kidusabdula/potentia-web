'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ComingSoon = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="h-screen bg-black text-white text-center px-4 max-w[1400px] mx-auto">
      <div className="justify-start relative w-44 h-44 lg:w-64 lg:h-64">
        <Image
          src="/logo.jpg" // Path to the image
          alt="logo image"
          layout='fill'// Adjusted height for responsiveness
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl mt-20 md:text-7xl font-bold tracking-wide uppercase font-cursive"
      >
        Coming Soon
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-lg mt-4 text-gray-200"
      >
        We're working on something amazing. Stay tuned!
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="mt-8 text-gray-300 text-sm"
      >
        &copy; {new Date().getFullYear()} potentia. All rights reserved.
      </motion.p>
    </div>
  );
};

export default ComingSoon;