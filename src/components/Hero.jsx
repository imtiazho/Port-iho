import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import AvailabilityBadge from './AvailabilityBadge';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ setCursorState }) {
  const { hero } = portfolioData;

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] flex flex-col justify-center sm:pt-12 pb-16 px-4 sm:px-8 lg:px-20 xl:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="01" showScrollRight={true} />

      {/* Background Cinematic Monochrome Portrait */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30 sm:opacity-40 lg:opacity-50">
        <div className="relative w-full max-w-5xl h-[90%] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80"
            alt="Cinematic Portrait"
            className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-75 portrait-blend"
          />
          {/* Radial & Linear Vignette Overlay */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#090909]/70 to-[#090909]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]" />
        </div>
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center my-auto pt-6">
        
        {/* Availability & Location Badge for Mobile/Tablet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="lg:hidden text-xs font-bold text-[#FF5035] font-mono tracking-widest">
            01
          </span>
          <AvailabilityBadge text={hero.availability} size="small" />
          <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-[#8C8375] uppercase">
            • {hero.location}
          </span>
        </motion.div>

        {/* Massive Ultra-Bold Headline */}
        <div 
          className="select-none cursor-pointer w-full"
          onMouseEnter={() => setCursorState && setCursorState('heroHover')}
          onMouseLeave={() => setCursorState && setCursorState('default')}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hero-headline text-[12vw] lg:text-[7.5rem] font-extrabold tracking-[-0.055em] leading-[0.88] uppercase break-normal whitespace-nowrap sm:whitespace-normal"
          >
            {/* Line 1: "I BUILD" (#D6C8B0) */}
            <div className="text-[#D6C8B0] hover:text-white transition-colors duration-200">
              {hero.titleLine1}
            </div>
            {/* Line 2: "DIGITAL" (#FF5035) */}
            <div className="text-[#FF5035] hover:text-white transition-colors duration-200">
              {hero.titleLine2}
            </div>
            {/* Line 3: "PRODUCTS" (#FF5035) */}
            <div className="text-[#FF5035] hover:text-white transition-colors duration-200">
              {hero.titleLine3}
            </div>
            {/* Line 4: "THAT WORK." (#D6C8B0) */}
            <div className="text-[#D6C8B0] hover:text-white transition-colors duration-200">
              {hero.titleLine4}
            </div>
          </motion.h1>
        </div>

        {/* Professional Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-10 max-w-3xl"
        >
          <p className="text-base sm:text-md lg:text-xl text-[#D6C8B0]/95 font-normal leading-relaxed tracking-wide">
            {hero.description}
          </p>
        </motion.div>

        {/* Numbered Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 pt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#D6C8B0]"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#FF5035] font-mono text-sm sm:text-base">01</span>
            <span className="hover:text-[#FF5035] transition-colors">PRODUCT ENGINEERING</span>
          </div>
          <span className="text-[#8C8375]/40 hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="text-[#FF5035] font-mono text-sm sm:text-base">02</span>
            <span className="hover:text-[#FF5035] transition-colors">FULL-STACK DEVELOPMENT</span>
          </div>
          <span className="text-[#8C8375]/40 hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="text-[#FF5035] font-mono text-sm sm:text-base">03</span>
            <span className="hover:text-[#FF5035] transition-colors">DIGITAL EXPERIENCES</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
