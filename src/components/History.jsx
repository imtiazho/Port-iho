import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import { portfolioData } from '../data/portfolioData';

export default function History() {
  const { history } = portfolioData;

  return (
    <section 
      id="history" 
      className="relative min-h-[80vh] w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-24 px-6 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="04" showSocials={true} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
            HISTORY
          </span>
        </motion.div>

        {/* Minimal Timeline Rows */}
        <div className="w-full border-t border-[rgba(214,200,176,0.15)] flex flex-col">
          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative py-8 sm:py-10 border-b border-[rgba(214,200,176,0.15)] grid grid-cols-12 gap-4 items-center transition-colors hover:bg-white/[0.02]"
            >
              {/* Year Column */}
              <div className="col-span-3 sm:col-span-2">
                <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#D6C8B0] group-hover:text-white transition-colors">
                  {item.year}
                </span>
              </div>

              {/* Role & Company Column */}
              <div className="col-span-8 sm:col-span-8 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <span className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-[#D6C8B0]">
                  {item.role}
                </span>
                <span className="text-xs sm:text-sm text-[#8C8375] font-sans font-light">
                  {item.company}
                </span>
              </div>

              {/* Active Indicator Orange Dot */}
              <div className="col-span-1 sm:col-span-2 flex justify-end items-center">
                {item.active && (
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-3 h-3 rounded-full bg-[#FF5035] shadow-[0_0_12px_rgba(255,80,53,0.8)]"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
