
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WorldClock from '@/components/WorldClock';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <WorldClock />
    </div>
  );
};

export default Index;
