import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AudioToggle from './AudioToggle';

export default function Navbar({ onOpenTerminal, onOpenBooking, soundEnabled, setSoundEnabled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-5 px-4 sm:px-8 lg:px-12 flex items-center justify-between border-b border-[rgba(214,200,176,0.08)] bg-[#090909]/90 backdrop-blur-md">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded border border-[rgba(214,200,176,0.3)] bg-black flex items-center justify-center text-[#D6C8B0] font-bold text-xs group-hover:border-[#FF5035] transition-colors">
            M
          </div>
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#D6C8B0] uppercase group-hover:text-white transition-colors">
            MINH PHAM
          </span>
        </a>

        {/* Desktop Navigation & Actions */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            className="text-[11px] font-medium tracking-[0.2em] text-[#8C8375] hover:text-[#D6C8B0] uppercase transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#process"
            onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}
            className="text-[11px] font-medium tracking-[0.2em] text-[#8C8375] hover:text-[#D6C8B0] uppercase transition-colors"
          >
            PROCESS
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className="text-[11px] font-medium tracking-[0.2em] text-[#8C8375] hover:text-[#D6C8B0] uppercase transition-colors"
          >
            WORK
          </a>
          <a
            href="#github-stats"
            onClick={(e) => { e.preventDefault(); scrollToSection('github-stats'); }}
            className="text-[11px] font-medium tracking-[0.2em] text-[#8C8375] hover:text-[#D6C8B0] uppercase transition-colors"
          >
            STATS
          </a>

          {/* Book Call Button */}
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-[10px] font-bold font-mono tracking-[0.15em] text-black bg-[#FF5035] rounded-full hover:bg-white transition-colors uppercase"
          >
            BOOK CALL
          </button>

          {/* Terminal Shortcut Button */}
          <button
            onClick={onOpenTerminal}
            className="px-2.5 py-1.5 text-[10px] font-mono rounded-full bg-white/5 border border-[rgba(214,200,176,0.2)] text-[#8C8375] hover:text-[#FF5035] hover:border-[#FF5035] transition-all flex items-center gap-1.5"
            title="Open Command Line Terminal (Ctrl + K)"
          >
            <span>⌘K</span>
            <span className="text-[9px] uppercase font-sans">CLI</span>
          </button>

          {/* Sound Audio Toggle */}
          <AudioToggle soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-2.5 py-1 text-[10px] font-bold font-mono text-black bg-[#FF5035] rounded-full uppercase"
          >
            BOOK
          </button>

          <AudioToggle soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

          <button
            onClick={onOpenTerminal}
            className="px-2 py-1 text-[10px] font-mono rounded bg-white/5 border border-[rgba(214,200,176,0.2)] text-[#8C8375]"
          >
            ⌘K
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#D6C8B0] focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[#D6C8B0] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-[#D6C8B0] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-[#D6C8B0] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#090909]/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 px-8 pb-12 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 text-center">
              <a
                href="#hero"
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                className="text-xl font-bold font-display tracking-[0.2em] text-[#D6C8B0] hover:text-[#FF5035] uppercase"
              >
                HOME
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                className="text-xl font-bold font-display tracking-[0.2em] text-[#D6C8B0] hover:text-[#FF5035] uppercase"
              >
                ABOUT
              </a>
              <a
                href="#process"
                onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}
                className="text-xl font-bold font-display tracking-[0.2em] text-[#D6C8B0] hover:text-[#FF5035] uppercase"
              >
                PROCESS
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                className="text-xl font-bold font-display tracking-[0.2em] text-[#D6C8B0] hover:text-[#FF5035] uppercase"
              >
                WORK
              </a>
              <a
                href="#github-stats"
                onClick={(e) => { e.preventDefault(); scrollToSection('github-stats'); }}
                className="text-xl font-bold font-display tracking-[0.2em] text-[#D6C8B0] hover:text-[#FF5035] uppercase"
              >
                STATS
              </a>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="mt-4 flex items-center gap-3 px-6 py-3 text-xs font-bold tracking-[0.2em] text-black bg-[#FF5035] rounded-full uppercase"
              >
                <span>BOOK A 15-MIN CALL</span>
                <span>📅</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
