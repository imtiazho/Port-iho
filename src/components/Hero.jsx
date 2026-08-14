import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ setCursorState }) {
  const { hero } = portfolioData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center pt-22 pb-16 px-6 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="01" showSocials={true} showScrollRight={true} />

      {/* Background Cinematic Monochrome Portrait of Minh */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30 sm:opacity-40 lg:opacity-55">
        <div className="relative w-full max-w-4xl h-[85%] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80"
            alt="Minh Pham Portrait"
            className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-75 portrait-blend"
          />
          {/* Radial & Linear Vignette to seamlessly blend into #090909 */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#090909]/60 to-[#090909]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]" />
        </div>
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left/Center Massive Typography */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-3"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
              {hero.name}
            </span>
          </motion.div>

          {/* Oversized Headline with Interactive Hover */}
          <div 
            className="select-none cursor-pointer"
            onMouseEnter={() => setCursorState('heroHover')}
            onMouseLeave={() => setCursorState('default')}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hero-headline text-[17vw] sm:text-[13vw] lg:text-[7.8rem] xl:text-[8.8rem] font-extrabold tracking-[-0.055em] leading-[0.86] text-[#D6C8B0] uppercase"
            >
              <div className="hover:text-black transition-colors duration-200">{hero.titleLine1}</div>
              <div className="text-[#FF5035] hover:text-black transition-colors duration-200">{hero.titleLine2}</div>
              <div className="text-[#FF5035] hover:text-black transition-colors duration-200">{hero.titleLine3}</div>
              <div className="hover:text-black transition-colors duration-200">{hero.titleLine4}</div>
              <div className="hover:text-black transition-colors duration-200">{hero.titleLine5}</div>
            </motion.h1>
          </div>
        </div>

        {/* Right Info Column & Orange Circle Accent */}
        <div className="lg:col-span-4 flex flex-col items-start justify-between h-full pt-6 lg:pt-20">
          {/* Orange Circle Graphic Accent (Matching Reference Top Right) */}
          <div className="hidden lg:flex w-full justify-end mb-12">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5, type: 'spring' }}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FF5035] shadow-[0_0_40px_rgba(255,80,53,0.3)]" 
            />
          </div>

          {/* Description Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 max-w-sm"
          >
            <p className="text-end sm:text-lg text-[#D6C8B0] leading-relaxed font-normal">
              I'm a <span className="text-[#FF5035] font-semibold underline decoration-[#FF5035]/40 underline-offset-4">designer</span> - web product designer focus on producing good & impactful experiences.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
