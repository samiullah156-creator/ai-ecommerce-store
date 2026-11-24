import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-aura-charcoal/90 to-aura-charcoal/30 md:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start z-10">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <span className="inline-block px-4 py-1 bg-aura-blue/20 text-aura-blue text-sm font-semibold rounded-full border border-aura-blue/30 backdrop-blur-sm">
            New Collection 2024
          </span>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-blue to-cyan-400">
              Tech is Here.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Discover cutting-edge gadgets and lifestyle electronics designed to elevate your everyday experience.
          </p>
          
          <div className="pt-4">
            <button className="group bg-aura-blue hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center space-x-2 transform hover:scale-105">
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;