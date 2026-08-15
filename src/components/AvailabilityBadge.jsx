import React from 'react';
import { motion } from 'framer-motion';

export default function AvailabilityBadge({ text = "AVAILABLE FOR HIRE 2026", size = "normal" }) {
  const isSmall = size === "small";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B0B0B] border border-[rgba(214,200,176,0.2)] shadow-lg backdrop-blur-sm ${
        isSmall ? 'text-[10px]' : 'text-xs'
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5035] opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5035] shadow-[0_0_8px_#FF5035]" />
      </span>
      <span className="font-mono font-semibold tracking-widest text-[#D6C8B0] uppercase">
        {text}
      </span>
    </motion.div>
  );
}
