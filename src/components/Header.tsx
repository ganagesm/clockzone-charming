import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-worldclock-darkblue to-worldclock-blue text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">WorldClock</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-blue-100 transition">World Clock</a>
            <a href="#" className="text-white hover:text-blue-100 transition">Time Zones</a>
            <Button className="bg-blue-600 hover:bg-blue-700">Join</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation (Smooth Slide-in Menu) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-16 left-0 w-full bg-white text-blue-900 shadow-md p-4 flex flex-col space-y-3 md:hidden"
            >
              <a href="#" className="hover:text-blue-600 transition-all">World Clock</a>
              <a href="#" className="hover:text-blue-600 transition-all">Time Zones</a>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">Join</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
