import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference py-6 px-6 md:px-12 flex items-center justify-between border-b border-[rgba(214,200,176,0.08)] bg-[#090909]/80 backdrop-blur-md">
      {/* Brand / Logo */}
      <a 
        href="#hero" 
        onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
        className="flex items-center gap-3 group"
      >
        <div className="w-8 h-8 rounded border border-[rgba(214,200,176,0.3)] bg-black flex items-center justify-center text-[#D6C8B0] font-bold text-xs group-hover:border-[#FF5035] transition-colors">
          M
        </div>
        <span className="text-xs font-semibold tracking-[0.25em] text-[#D6C8B0] uppercase group-hover:text-white transition-colors">
          MINH PHAM
        </span>
      </a>

      {/* Right Navigation */}
      <nav className="flex items-center gap-6 md:gap-10">
        <a
          href="#services"
          onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
          className="text-[11px] font-medium tracking-[0.2em] text-[#8C8375] hover:text-[#D6C8B0] uppercase transition-colors hidden sm:block"
        >
          ABOUT
        </a>
        <a
          href="#projects"
          onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          className="text-[11px] font-medium tracking-[0.2em] text-[#8C8375] hover:text-[#D6C8B0] uppercase transition-colors hidden sm:block"
        >
          WORK
        </a>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          className="text-[11px] font-medium tracking-[0.2em] text-[#8C8375] hover:text-[#D6C8B0] uppercase transition-colors hidden sm:block"
        >
          CONTACT
        </a>

        {/* LET'S TALK Button */}
        <motion.button
          onClick={() => scrollToSection('contact')}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 px-4 py-2 text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-[#D6C8B0] uppercase border border-[rgba(214,200,176,0.25)] rounded-full bg-[#090909] hover:border-[#FF5035] hover:text-white transition-all group shadow-lg"
        >
          <span>LET'S TALK</span>
          <motion.span 
            className="w-2 h-2 rounded-full bg-[#FF5035] inline-block"
            whileHover={{ scale: 1.4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.button>
      </nav>
    </header>
  );
}
