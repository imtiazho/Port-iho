import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import Glove3D from './Glove3D';
import { portfolioData } from '../data/portfolioData';

export default function Clients() {
  const { clients } = portfolioData;
  const [activeClient, setActiveClient] = useState(clients[3]); // Default Royal Caribbean or Ford

  return (
    <section 
      id="clients" 
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-24 px-6 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="05" showSocials={true} />

      {/* 3D Rotating Glove Canvas in Background */}
      <Glove3D />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Subtitle, Innovative text, Button & Dynamic Hover Review */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
              CLIENTS
            </span>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#D6C8B0] leading-snug max-w-lg">
              I worked with some of the most <span className="text-[#FF5035]">innovative</span> industry leaders to help build their top-notch products
            </h2>

            <motion.button
              whileHover={{ scale: 1.03, x: 2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-5 py-2.5 text-xs font-bold tracking-[0.2em] text-[#D6C8B0] uppercase border border-[rgba(214,200,176,0.25)] rounded-full bg-[#090909] hover:border-[#FF5035] hover:text-white transition-all group"
            >
              <span>ALL CLIENTS</span>
              <span className="w-2 h-2 rounded-full bg-[#FF5035] group-hover:scale-125 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Dynamic Testimonial Card Triggered by Hovering Right Client Names */}
          <div className="pt-6 min-h-[160px] border-t border-[rgba(214,200,176,0.1)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                <p className="text-base sm:text-lg italic text-[#D6C8B0] font-light leading-relaxed">
                  {activeClient.quote}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#FF5035] uppercase tracking-wider">
                    — {activeClient.author}
                  </span>
                  <span className="text-xs text-[#8C8375]">
                    {activeClient.role}, {activeClient.company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Giant Client Names Stack with Signature Orange Banner */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start lg:items-end">
          <div className="flex flex-col space-y-2 select-none w-full lg:w-auto">
            {clients.map((client) => {
              const isRoyal = client.id === 'royal-caribbean';
              const isSelected = activeClient.id === client.id;

              if (isRoyal) {
                return (
                  <motion.div
                    key={client.id}
                    onMouseEnter={() => setActiveClient(client)}
                    className="relative my-2 py-2 px-4 sm:px-6 bg-[#FF5035] text-black w-full rounded flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer group shadow-[0_0_30px_rgba(255,80,53,0.4)]"
                  >
                    <span className="hero-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase text-black">
                      {client.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-black/90 max-w-xs mt-1 sm:mt-0 font-sans">
                      {client.highlightStrip}
                    </span>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={client.id}
                  onMouseEnter={() => setActiveClient(client)}
                  whileHover={{ x: 6 }}
                  className="cursor-pointer transition-colors"
                >
                  <span 
                    className={`hero-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase transition-colors duration-200 ${
                      isSelected ? 'text-[#FF5035]' : 'text-[#D6C8B0]/80 hover:text-white'
                    }`}
                  >
                    {client.name}
                  </span>
                </motion.div>
              );
            })}
            <div className="text-2xl text-[#8C8375] font-mono tracking-widest pt-2">...</div>
          </div>
        </div>

      </div>
    </section>
  );
}
