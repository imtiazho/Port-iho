import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import Services3D from './Services3D';
import { portfolioData } from '../data/portfolioData';

export default function Services() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-24 px-6 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="02" showSocials={true} />

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Left Column: WHAT I DO + Massive Typographic Stack */}
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
              WHAT I DO
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-headline text-[15vw] sm:text-[11vw] lg:text-[6.5rem] xl:text-[7.5rem] font-extrabold tracking-[-0.055em] leading-[0.86] text-[#D6C8B0] uppercase"
          >
            <div className="hover:bg-[#FF5035] hover:text-white py-2 duration-300">3D</div>
            <div className="hover:bg-[#FF5035] hover:text-white py-2 duration-300">VISUAL</div>
            <div className="hover:bg-[#FF5035] hover:text-white py-2 duration-300">MOTION</div>
            <div className="hover:bg-[#FF5035] hover:text-white py-2 duration-300">
              PRODU<span className="text-[rgba(214,200,176,0.25)] hover:text-white">CT</span>
            </div>
            <div className="hover:bg-[#FF5035] hover:text-white py-2 duration-300">
              TUTO<span className="text-[rgba(214,200,176,0.25)] hover:text-white duration-300">RIAL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
