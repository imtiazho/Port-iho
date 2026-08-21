import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CursorFollower from './components/CursorFollower';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import SkillsShowcase from './components/SkillsShowcase';
import Process from './components/Process';
import GitHubStats from './components/GitHubStats';
import Motto from './components/Motto';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import CaseStudyModal from './components/CaseStudyModal';
import BookingModal from './components/BookingModal';
import { playFuturisticClick } from './utils/sound';

export default function App() {
  const [cursorState, setCursorState] = useState('default');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Global Ctrl + K / Cmd + K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
        playFuturisticClick(soundEnabled, 'click');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [soundEnabled]);

  // Global UI Click Audio Listener when Sound is ON
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('button, a, [role="button"], .cursor-pointer');
      if (target) {
        playFuturisticClick(soundEnabled, 'click');
      }
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [soundEnabled]);

  return (
    <div className="min-h-screen bg-[#090909] text-[#D6C8B0] relative selection:bg-[#FF5035] selection:text-black font-sans">
      {/* Custom Interactive Cursor Follower */}
      <CursorFollower cursorState={cursorState} />

      {/* Global Terminal Command Palette Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Deep-Dive Project Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Direct Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* Header / Fixed Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Single Page High-Converting Experience */}
      <main className="relative w-full overflow-hidden">
        {/* 01 / HERO */}
        <div className="w-full max-w-full overflow-hidden relative z-10">
          <Hero setCursorState={setCursorState} />
        </div>

        {/* 02 / SERVICES */}
        <div className="w-full max-w-full overflow-hidden relative z-10">
          <ServicesSection />
        </div>

        {/* 03 / FEATURED PROJECTS (MOVED UP FOR IMMEDIATE PROOF OF WORK) */}
        <div className="w-full max-w-full overflow-hidden relative z-10">
          <ProjectsShowcase
            setCursorState={setCursorState}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        </div>

        {/* 04 / TECHNICAL CAPABILITIES */}
        <div className="w-full max-w-full overflow-hidden relative z-10">
          <SkillsShowcase />
        </div>

        {/* 05 / PROCESS */}
        <div className="w-full max-w-full overflow-hidden relative z-10">
          <Process />
        </div>

        {/* 06 / ACTIVITY */}
        <div className="w-full max-w-full overflow-hidden relative z-10">
          <GitHubStats />
        </div>

        {/* 07 / PHILOSOPHY (CONTAINS Glove3D BACKGROUND) */}
        <div className="w-full max-w-full overflow-hidden relative z-10">
          <Motto />
        </div>

        {/* 08 / CONTACT */}
        <div className="w-full max-w-full overflow-hidden relative z-10">
          <ContactSection />
        </div>
      </main>

      {/* 09 / SYSTEM - Terminal Footer */}
      <div className="w-full max-w-full overflow-hidden relative z-10">
        <Footer />
      </div>
    </div>
  );
}
