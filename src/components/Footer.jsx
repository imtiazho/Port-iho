import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact" 
      className="relative w-full bg-[#090909] text-[#D6C8B0] pt-28 pb-12 px-6 lg:px-24 overflow-hidden"
    >
      <SectionIndicator sectionNumber="09" showSocials={false} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* Section Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
            CONNECT
          </span>
        </motion.div>

        {/* 3 Column Grid for Social Links & Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Social Column 1 */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            {socials.column1.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="group flex items-center gap-2 font-display text-2xl lg:text-3xl font-bold text-[#D6C8B0] hover:text-[#FF5035] transition-colors"
              >
                <span className="text-[#FF5035] text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↖
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Social Column 2 */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            {socials.column2.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="group flex items-center gap-2 font-display text-2xl lg:text-3xl font-bold text-[#D6C8B0] hover:text-[#FF5035] transition-colors"
              >
                <span className="text-[#FF5035] text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↖
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Contact Details & Orange Circle */}
          <div className="md:col-span-5 flex flex-col sm:flex-row items-start justify-between gap-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs text-[#8C8375] font-mono uppercase block mb-1">
                  Email
                </span>
                <a
                  href={`mailto:${socials.contact.email}`}
                  className="text-sm sm:text-base font-semibold text-[#D6C8B0] hover:text-[#FF5035] transition-colors"
                >
                  {socials.contact.email}
                </a>
              </div>

              <div>
                <span className="text-xs text-[#8C8375] font-mono uppercase block mb-1">
                  Phone
                </span>
                <a
                  href={`tel:${socials.contact.phone}`}
                  className="text-sm sm:text-base font-semibold text-[#D6C8B0] hover:text-[#FF5035] transition-colors"
                >
                  {socials.contact.phone}
                </a>
              </div>
            </div>

            {/* Solid Orange Circle Graphic */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF5035] shadow-[0_0_40px_rgba(255,80,53,0.4)] flex-shrink-0" />
          </div>

          {/* Vertical Back To Top Button on Far Right */}
          <div className="md:col-span-1 flex justify-end items-center h-full">
            <button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-[#8C8375] hover:text-[#FF5035] uppercase transition-colors"
            >
              <span className="rotate-90 origin-center whitespace-nowrap">
                BACK TO TOP
              </span>
              <div className="w-[1px] h-12 bg-[rgba(214,200,176,0.2)] group-hover:bg-[#FF5035] transition-colors mt-6" />
            </button>
          </div>

        </div>

        {/* Bottom Line Copyright */}
        <div className="pt-12 border-t border-[rgba(214,200,176,0.12)] flex justify-between items-center text-xs text-[#8C8375]">
          <span>© 2026 Minh Pham. All rights reserved.</span>
          <span className="font-mono text-[10px] uppercase text-[#8C8375]">Design & Experience Portfolio</span>
        </div>

      </div>
    </footer>
  );
}
