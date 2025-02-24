import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Sample images and video (assuming they’re in the public folder)
const bitcoinMiningImage = "/MiningPic.jpg";
const cloudMiningImage = "/CloudMining.jpg";
const StoreImage = "/StoreImage.jpg";
const globeVideo = "/Videos/GlobeVideo.mp4";

const MiningSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white grid place-items-center p-6">
      <motion.div
        className="w-full rounded-lg shadow-lg p-4 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Video */}
        <video
          src={globeVideo}
          autoPlay
          loop
          muted
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 object-cover z-0 rounded-full"
        />

        {/* Overlay to ensure content readability */}
        <div className="relative z-10 bg-black bg-opacity-50 rounded-lg p-4">
          {/* Title */}
          <h1 className="text-4xl font-bold text-white text-center mb-20 font-fira">
            MINING SOLUTIONS
          </h1>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
            {/* Left Column: Stats */}
            <div className="flex flex-col items-center text-center space-y-1 h-full justify-between">
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                100,000+
              </motion.div>
              <p className="text-sm text-white">Total Miners</p>

              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                530 MW
              </motion.div>
              <p className="text-sm text-white">Globally</p>

              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                5+
              </motion.div>
              <p className="text-sm text-white">Countries</p>
            </div>

            {/* Center Column: Empty (video is now background) */}
            <div className="flex flex-col items-center"></div>

            {/* Right Column: Service Cards */}
            <div className="space-y-2 h-full flex flex-col justify-between">
              {/* Bitcoin Mining Card */}
              <motion.div
                className="bg-zinc-900 rounded-lg p-2 shadow-md border border-zinc-800"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={bitcoinMiningImage}
                  alt="Bitcoin Mining"
                  width={150}
                  height={48}
                  className="w-full h-12 object-cover rounded-t-lg"
                />
                <h3 className="text-md font-semibold mt-1 text-white">BITCOIN MINING</h3>
                <p className="text-white text-xs mt-1">
                  Phoenix Group is one of the top five Bitcoin Miners in the world, with operations across the USA, Canada, CIS, and the UAE.
                </p>
                <a
                  href="#"
                  className="text-white hover:underline mt-1 inline-block text-xs"
                >
                  Explore More >
                </a>
              </motion.div>

              {/* Cloud Mining & Hosting Card */}
              <motion.div
                className="bg-zinc-900 rounded-lg p-2 shadow-md border border-zinc-800"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={cloudMiningImage}
                  alt="Cloud Mining & Hosting"
                  width={150}
                  height={48}
                  className="w-full h-12 object-cover rounded-t-lg"
                />
                <h3 className="text-md font-semibold mt-1 text-white">CLOUD MINING & HOSTING</h3>
                <p className="text-white text-xs mt-1">
                  As a leading force in the world of mining, Phoenix Digital Mining, powered by Phoenix Group.
                </p>
                <a
                  href="#"
                  className="text-white hover:underline mt-1 inline-block text-xs"
                >
                  Explore More >
                </a>
              </motion.div>

              {/* Phoenix Store Card */}
              <motion.div
                className="bg-zinc-900 rounded-lg p-2 shadow-md border border-zinc-800"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src={StoreImage}
                  alt="Phoenix Store"
                  width={150}
                  height={48}
                  className="w-full h-12 object-cover rounded-t-lg"
                />
                <h3 className="text-md font-semibold mt-1 text-white">PHOENIX STORE</h3>
                <p className="text-white text-xs mt-1">
                  Centrally located in Dubai, is the premier distributor of WhatsMiner products, renowned for their cutting-edge design.
                </p>
                <a
                  href="#"
                  className="text-white hover:underline mt-1 inline-block text-xs"
                >
                  Explore More >
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MiningSolutions;