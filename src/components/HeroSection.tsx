
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-worldclock-darkblue to-worldclock-blue text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">The World Clock — Worldwide</h2>
        <p className="text-xl mb-8">Find current time, weather, sun, moon, and much more...</p>
        
        <div className="max-w-md mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input 
            type="text" 
            placeholder="Search for city or place..." 
            className="pl-10 py-6 bg-white text-black rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
