import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import { portfolioData } from '../data/portfolioData';

export default function Motto() {
  const { motto } = portfolioData;

  return (
    <section 
      id="motto" 
      className="relative min-h-[85vh] w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-28 px-6 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="08" showSocials={true} />

      {/* Dark Background Figure Masking */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-25 pointer-events-none">
        <div className="relative w-full max-w-3xl h-[80%]">
          <img
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
            alt="Motto Background Art"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50 portrait-blend"
          />
          <div className="absolute inset-0 bg-radial from-transparent via-[#090909]/70 to-[#090909]" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-8">
        
        {/* Section Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
            MY MOTTO
          </span>
        </motion.div>

        {/* Enormous Editorial Statement */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hero-headline text-[13vw] sm:text-[10vw] lg:text-[7rem] xl:text-[8rem] font-extrabold tracking-[-0.055em] leading-[0.86] text-[#D6C8B0] uppercase max-w-5xl"
        >
          {motto.quote}
        </motion.h2>

        {/* Attribution & Floating Orange Dot */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4 pt-4"
        >
          <span className="text-xs sm:text-sm text-[#8C8375] font-sans tracking-widest uppercase">
            {motto.author}
          </span>
          <div className="w-3 h-3 rounded-full bg-[#FF5035] shadow-[0_0_15px_rgba(255,80,53,0.8)]" />
        </motion.div>

      </div>
    </section>
  );
}
