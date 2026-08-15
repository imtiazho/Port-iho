import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import LocalStatus from './LocalStatus';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact" 
      className="relative w-full bg-[#090909] text-[#D6C8B0] pt-16 sm:pt-28 pb-12 px-4 sm:px-8 lg:px-24 overflow-hidden"
    >
      <SectionIndicator sectionNumber="09" showSocials={false} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col space-y-12 sm:space-y-16">
        
        {/* Section Subtitle & Local Status Clock */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="lg:hidden text-xs font-bold text-[#FF5035] font-mono tracking-widest">
              09
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
              CONNECT
            </span>
          </motion.div>

          <LocalStatus variant="compact" />
        </div>

        {/* Responsive Grid for Social Links & Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Social Column 1 */}
          <div className="md:col-span-3 flex flex-col space-y-3 sm:space-y-4">
            {socials.column1.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="group flex items-center gap-2 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#D6C8B0] hover:text-[#FF5035] transition-colors"
              >
                <span className="text-[#FF5035] text-xs sm:text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↖
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Social Column 2 */}
          <div className="md:col-span-3 flex flex-col space-y-3 sm:space-y-4">
            {socials.column2.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="group flex items-center gap-2 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#D6C8B0] hover:text-[#FF5035] transition-colors"
              >
                <span className="text-[#FF5035] text-xs sm:text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↖
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Contact Details & Orange Circle */}
          <div className="sm:col-span-2 md:col-span-5 flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <span className="text-xs text-[#8C8375] font-mono uppercase block mb-1">
                  Email
                </span>
                <a
                  href={`mailto:${socials.contact.email}`}
                  className="text-sm sm:text-base font-semibold text-[#D6C8B0] hover:text-[#FF5035] transition-colors break-all sm:break-normal"
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
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#FF5035] shadow-[0_0_40px_rgba(255,80,53,0.4)] flex-shrink-0" />
          </div>

          {/* Back To Top Button */}
          <div className="md:col-span-1 flex justify-start md:justify-end items-center pt-4 md:pt-0">
            <button
              onClick={scrollToTop}
              className="group flex items-center md:flex-col gap-3 text-[10px] font-bold tracking-[0.3em] text-[#8C8375] hover:text-[#FF5035] uppercase transition-colors"
            >
              <span className="md:rotate-90 origin-center whitespace-nowrap">
                BACK TO TOP ↗
              </span>
              <div className="hidden md:block w-[1px] h-12 bg-[rgba(214,200,176,0.2)] group-hover:bg-[#FF5035] transition-colors mt-6" />
            </button>
          </div>

        </div>

        {/* Bottom Line Copyright */}
        <div className="pt-8 sm:pt-12 border-t border-[rgba(214,200,176,0.12)] flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#8C8375]">
          <span>© 2026 Minh Pham. All rights reserved.</span>
          <span className="font-mono text-[10px] uppercase text-[#8C8375]">Design & Experience Portfolio</span>
        </div>

      </div>
    </footer>
  );
}
