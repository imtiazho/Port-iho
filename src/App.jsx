import React, { useState } from 'react';
import CursorFollower from './components/CursorFollower';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import History from './components/History';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import ProjectsShowcase from './components/ProjectsShowcase';
import Motto from './components/Motto';
import Footer from './components/Footer';

export default function App() {
  const [cursorState, setCursorState] = useState('default');

  return (
    <div className="min-h-screen bg-[#090909] text-[#D6C8B0] relative selection:bg-[#FF5035] selection:text-black font-sans">
      {/* Custom Interactive Cursor Follower */}
      <CursorFollower cursorState={cursorState} />

      <main className="relative w-full overflow-hidden">
        {/* <Hero setCursorState={setCursorState} /> */}
        <Hero setCursorState={setCursorState} />
        <Services />
        <Experience />
        <History />
        <Clients />
        <Testimonials />
        <ProjectsShowcase setCursorState={setCursorState} />
        <Motto />
      </main>

      {/* Main Single Page Experience */}

      {/* Footer / Contact */}
      <Footer />
    </div>
  );
}
