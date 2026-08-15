import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InteractivePlayground() {
  const [accentColor, setAccentColor] = useState('#FF5035');
  const [glowIntensity, setGlowIntensity] = useState(80);
  const [motionPreset, setMotionPreset] = useState('normal');

  const colorOptions = [
    { name: 'Signature Orange', hex: '#FF5035' },
    { name: 'Cyber Cyan', hex: '#00E5FF' },
    { name: 'Electric Gold', hex: '#FFD700' },
    { name: 'Neon Crimson', hex: '#FF0055' },
  ];

  const handleColorChange = (hex) => {
    setAccentColor(hex);
    document.documentElement.style.setProperty('--accent-orange', hex);
  };

  return (
    <section className="relative w-full bg-[#0B0B0B] text-[#D6C8B0] py-16 sm:py-24 px-4 sm:px-8 lg:px-24 border-b border-[rgba(214,200,176,0.12)] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Info Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF5035] uppercase tracking-widest">
            <span>● LIVE PLAYGROUND</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Customize the Interactive Interface Live
          </h2>
          <p className="text-sm sm:text-base text-[#8C8375] leading-relaxed">
            Experiment with UI theme parameters, accent colors, and glow states in real-time. Experience how custom design systems adapt dynamically.
          </p>
        </div>

        {/* Control Panel Card */}
        <div className="lg:col-span-6 bg-[#090909] border border-[rgba(214,200,176,0.2)] p-6 sm:p-8 rounded-xl shadow-2xl space-y-6">
          {/* Accent Color Selection */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-[#8C8375] block mb-3">
              Select Accent Theme Color:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {colorOptions.map((opt) => (
                <button
                  key={opt.hex}
                  onClick={() => handleColorChange(opt.hex)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold transition-all ${accentColor === opt.hex
                      ? 'border-white text-white bg-white/10 shadow-lg'
                      : 'border-[rgba(214,200,176,0.15)] text-[#8C8375] hover:text-white'
                    }`}
                >
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: opt.hex }} />
                  <span className="truncate">{opt.name.split(' ')[1] || opt.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Glow Intensity Slider */}
          <div>
            <div className="flex justify-between items-center mb-2 text-xs font-mono uppercase text-[#8C8375]">
              <span>Glow & Bloom Intensity:</span>
              <span className="text-[#D6C8B0] font-bold">{glowIntensity}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={glowIntensity}
              onChange={(e) => setGlowIntensity(e.target.value)}
              className="w-full h-1.5 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer accent-[#FF5035]"
            />
          </div>

          {/* Interactive Preview Element */}
          <div className="pt-4 border-t border-[rgba(214,200,176,0.1)] flex items-center justify-between">
            <span className="text-xs font-mono text-[#8C8375]">Live Component Output:</span>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="px-4 py-2 rounded-full border text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2"
              style={{
                borderColor: accentColor,
                color: accentColor,
                boxShadow: `0 0 ${glowIntensity / 3}px ${accentColor}`,
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
              Active Dynamic Token
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
