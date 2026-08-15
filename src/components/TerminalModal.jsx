import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Minh Pham CLI v2.4.0 — Type "help" to list available commands.' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
  • help      - Display available terminal commands
  • about     - Learn about Minh Pham & design philosophy
  • projects  - List featured 3D & web app case studies
  • process   - Show 5-step engineering & design roadmap
  • contact   - Get direct email & phone contact details
  • motto     - Display design motto
  • clear     - Clear terminal screen history`,
        });
        break;
      case 'about':
        newHistory.push({
          type: 'output',
          text: `MINH PHAM — Web Product Designer & Interactive Engineer
Focusing on producing good & impactful digital experiences through 3D, motion, and clean code since 2009.`,
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'output',
          text: `FEATURED PROJECTS:
  01. ZAPSHIFT    [Web App]      - Real-time logistics dispatch platform (+140% speed)
  02. EDUMANAGE   [Web App]      - Academic SaaS grading & analytics suite
  03. SMARTDEALS  [Mobile App]   - AI geotargeted shopping aggregator (210% conv)
  04. NEBULA      [3D Motion]    - WebGL liquid glass physics (60 FPS)
  05. VOLT        [Branding]     - EV performance hardware identity`,
        });
        break;
      case 'process':
        newHistory.push({
          type: 'output',
          text: `ENGINEERING ROADMAP:
  01. Research     -> Deconstruct product requirements & user psychology
  02. Interactive  -> High-fidelity 3D & WebGL interaction prototypes
  03. Clean Code   -> Modular React, design tokens & strict state management
  04. Optimization -> Sub-10ms response times & 60 FPS performance
  05. Ship         -> Seamless global delivery & continuous CI/CD`,
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `DIRECT CONTACT:
  Email: minhpham.design@gmail.com
  Phone: +84 345 134 287
  Location: Remote / Global`,
        });
        break;
      case 'motto':
        newHistory.push({
          type: 'output',
          text: `MY MOTTO: "GOOD DESIGN IS HONEST" — Dieter Rams`,
        });
        break;
      case 'clear':
        setHistory([{ type: 'system', text: 'Terminal screen cleared. Type "help" for commands.' }]);
        setInput('');
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#090909] border border-[rgba(214,200,176,0.25)] rounded-lg shadow-[0_0_50px_rgba(255,80,53,0.15)] overflow-hidden font-mono text-sm"
          >
            {/* Terminal Top Bar */}
            <div className="bg-[#111111] px-4 py-3 border-b border-[rgba(214,200,176,0.12)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-[#8C8375]">minhpham@terminal:~</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#8C8375] hidden sm:inline">ESC to exit</span>
                <button
                  onClick={onClose}
                  className="text-xs text-[#8C8375] hover:text-[#FF5035] transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 h-80 sm:h-96 overflow-y-auto space-y-3 bg-[#050505] text-[#D6C8B0]">
              {history.map((item, idx) => (
                <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                  {item.type === 'user' && (
                    <span className="text-[#FF5035] font-bold">{item.text}</span>
                  )}
                  {item.type === 'system' && (
                    <span className="text-emerald-400/90">{item.text}</span>
                  )}
                  {item.type === 'output' && (
                    <span className="text-[#D6C8B0]/90">{item.text}</span>
                  )}
                  {item.type === 'error' && (
                    <span className="text-red-400">{item.text}</span>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input Line */}
            <div className="px-4 py-3 bg-[#090909] border-t border-[rgba(214,200,176,0.12)] flex items-center gap-2">
              <span className="text-[#FF5035] font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type command (e.g. help, projects, process)..."
                className="w-full bg-transparent text-[#D6C8B0] focus:outline-none placeholder-[#8C8375]/50 font-mono text-sm"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
