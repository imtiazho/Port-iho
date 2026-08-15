import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CursorFollower from './components/CursorFollower';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import History from './components/History';
import Process from './components/Process';
import InteractivePlayground from './components/InteractivePlayground';
import GitHubStats from './components/GitHubStats';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import ProjectsShowcase from './components/ProjectsShowcase';
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

      {/* Direct Cal.com / Calendly Booking Modal */}
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
        <Hero setCursorState={setCursorState} />
        <Services />
        <Experience />
        <History />
        <Process />
        <InteractivePlayground />
        <GitHubStats />
        <Clients />
        <Testimonials />
        <ProjectsShowcase
          setCursorState={setCursorState}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <Motto />
        <ContactSection onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* Footer / Contact Info */}
      <Footer />
    </div>
  );
}
