import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section 
      id="experience" 
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-24 px-6 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="03" showSocials={true} showScrollRight={true} />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: EXPERIENCE Subtitle + Editorial Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
              {experience.title}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#D6C8B0]"
          >
            {experience.textBefore}
            <span className="text-[#FF5035]">{experience.highlight}</span>
            {experience.textAfter}
          </motion.h2>
        </div>

        {/* Right Column: Dark Hooded Portrait Blending into Background */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80"
              alt="Minh Experience Portrait"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-50 portrait-blend"
            />
            {/* Soft vignette gradients to fade frame edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-transparent to-[#090909]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
