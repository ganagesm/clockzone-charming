
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-worldclock-darkblue to-worldclock-blue text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white">WorldClock</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-blue-100 transition">World Clock</a>
            <a href="#" className="text-white hover:text-blue-100 transition">Time Zones</a>
            <Button className="bg-blue-600 hover:bg-blue-700">Join</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
