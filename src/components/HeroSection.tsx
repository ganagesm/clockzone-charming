import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-worldclock-darkblue to-worldclock-blue text-white py-16 overflow-hidden">
      {/* Background World Map (Simple Abstract Lines) */}
      <motion.div
        className="absolute inset-0 w-full h-full opacity-20"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 100"
          className="w-full h-full"
        >
          <path
            d="M10,50 C20,20 40,10 60,30 C80,50 100,70 120,50 C140,30 160,40 180,60 C200,80 220,50 240,30"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4"
            className="animate-dash"
          />
        </svg>
      </motion.div>

      {/* Pulsing Gradient Animation */}
      <motion.div
        className="absolute inset-0 bg-blue-500 opacity-20"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-yellow-400 rounded-full"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Sun & Moon Animation */}
      <motion.div
        className="absolute top-10 right-20 text-yellow-400"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <Sun size={50} />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-20 text-gray-300"
        animate={{ rotate: [0, -360] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <Moon size={40} />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
        >
          The World Clock — Worldwide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl mb-8 text-gray-200 drop-shadow-md"
        >
          Find current time, weather, sun, moon, and much more...
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
