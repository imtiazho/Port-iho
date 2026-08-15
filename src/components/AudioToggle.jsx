import React from 'react';
import { motion } from 'framer-motion';
import { playFuturisticClick } from '../utils/sound';

export default function AudioToggle({ soundEnabled, setSoundEnabled }) {
  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    playFuturisticClick(true, nextState ? 'toggleOn' : 'toggleOff');
  };

  return (
    <motion.button
      onClick={toggleSound}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#D6C8B0] uppercase border border-[rgba(214,200,176,0.25)] rounded-full bg-[#090909]/90 backdrop-blur-md hover:border-[#FF5035] transition-all group"
      title={soundEnabled ? "Mute UI Sound Feedback" : "Enable UI Sound Feedback"}
    >
      <span className="relative flex h-2 w-2">
        {soundEnabled && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5035] opacity-75" />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${soundEnabled ? 'bg-[#FF5035]' : 'bg-[#8C8375]'}`} />
      </span>
      <span className="text-[10px] font-mono">{soundEnabled ? 'SOUND ON' : 'SOUND OFF'}</span>
    </motion.button>
  );
}
