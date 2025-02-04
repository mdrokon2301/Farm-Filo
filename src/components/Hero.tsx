import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Image Background with overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            srcSet="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2000"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200"
            media="(min-width: 768px)"
          />
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
            alt="Agricultural field at sunset"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A4C2C]/90 via-transparent to-[#807F10]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <span className="inline-block bg-[#7DA408]/70 text-[#fff] text-lg font-semibold mb-4 tracking-wider px-4 py-1 rounded-full backdrop-blur-sm">
          Welcome to FarmFilo
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Innovating Agriculture,<br />
          <span className="bg-gradient-to-r from-[#fff] to-[#9ac178] text-transparent bg-clip-text">
            Sustaining Tomorrow 
          </span>
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your agricultural practices with cutting-edge technology and sustainable solutions
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#7DA408] text-white px-8 py-3 rounded-lg hover:bg-[#807F10] transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl">
            Discover More
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
            Request Demo
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#7DA408] rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-[#7DA408] rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </div>
  );
}