import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import { portfolioData } from '../data/portfolioData';

export default function Process() {
  const { processSteps } = portfolioData;

  return (
    <section 
      id="process" 
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-20 sm:py-28 px-4 sm:px-8 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="03" showSocials={true} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="lg:hidden text-xs font-bold text-[#FF5035] font-mono tracking-widest">
              PROCESS
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
              ENGINEERING ROADMAP
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#D6C8B0]"
          >
            How I turn complex visions into <span className="text-[#FF5035]">award-winning</span> products
          </motion.h2>
        </div>

        {/* 5-Step Process Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group relative bg-[#0B0B0B] border border-[rgba(214,200,176,0.12)] p-5 rounded-lg flex flex-col justify-between hover:border-[#FF5035]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-[#FF5035]">
                    {step.step}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgba(214,200,176,0.3)] group-hover:bg-[#FF5035] transition-colors" />
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#FF5035] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8C8375] leading-relaxed mb-6 font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(214,200,176,0.1)]">
                <span className="text-[10px] font-mono text-[#D6C8B0]/70 uppercase tracking-wider block">
                  Deliverable:
                </span>
                <span className="text-xs font-semibold text-[#D6C8B0] block truncate">
                  {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
