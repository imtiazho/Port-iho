import React from 'react';

export default function Navbar({ onOpenTerminal }) {
  return (
    <div className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50 pointer-events-auto">
      <button
        onClick={onOpenTerminal}
        className="bg-[#111] border border-[#D6C8B0]/20 rounded-full px-4 py-2 text-xs font-mono text-[#D6C8B0] hover:border-[#FF5035] hover:text-white transition-all backdrop-blur-md shadow-lg flex items-center gap-2 group cursor-pointer"
        title="Open Terminal CLI (Ctrl + K)"
      >
        <span className="font-semibold text-[11px] tracking-wider">Ctrl + K</span>
        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#FF5035]">CLI</span>
      </button>
    </div>
  );
}

