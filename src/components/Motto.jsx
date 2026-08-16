import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import Glove3D from './Glove3D';
import { portfolioData } from '../data/portfolioData';

export default function Motto() {
  const { motto } = portfolioData;

  return (
    <section
      id="motto"
      className="relative overflow-hidden min-h-[70vh] w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-20 sm:py-28 px-6 lg:px-24 border-b border-[rgba(214,200,176,0.12)] selection:bg-[#FF5035] selection:text-black"
    >
      <SectionIndicator sectionNumber="07" />

      {/* 3D Interactive Glove / Globe Canvas in Background */}
      <Glove3D />

      {/* Foreground Motto Typography */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-8 pointer-events-auto">

        {/* Section Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111]/80 border border-[#D6C8B0]/15 rounded-full backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5035] animate-pulse" />
          <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-[#FF5035] uppercase">
            [ 07 / PHILOSOPHY ]
          </span>
        </motion.div>

        {/* Enormous Editorial Statement */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hero-headline text-[13vw] sm:text-[10vw] lg:text-[7rem] xl:text-[8rem] font-extrabold tracking-[-0.055em] leading-[0.86] text-[#D6C8B0] uppercase max-w-5xl drop-shadow-2xl"
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
          <span className="text-xs sm:text-sm text-[#8C8375] font-mono tracking-widest uppercase">
            — {motto.author}
          </span>
          <div className="w-3 h-3 rounded-full bg-[#FF5035] shadow-[0_0_15px_rgba(255,80,53,0.8)]" />
        </motion.div>

      </div>
    </section>
  );
}
