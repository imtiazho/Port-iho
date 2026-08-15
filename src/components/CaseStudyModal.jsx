import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-[#090909] border border-[rgba(214,200,176,0.2)] rounded-xl p-6 sm:p-10 text-[#D6C8B0] shadow-[0_0_60px_rgba(0,0,0,0.9)] my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[rgba(214,200,176,0.2)] flex items-center justify-center text-[#D6C8B0] hover:border-[#FF5035] hover:text-[#FF5035] transition-colors"
            title="Close Case Study"
          >
            ✕
          </button>

          {/* Header Info */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#FF5035] uppercase tracking-widest font-bold">
                {project.category} • {project.year}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              {project.title}
            </h2>
          </div>

          {/* Banner Image */}
          <div className="w-full h-56 sm:h-80 rounded-lg overflow-hidden mb-8 border border-[rgba(214,200,176,0.1)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-110"
            />
          </div>

          {/* Key Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 sm:p-6 bg-[#0B0B0B] border border-[rgba(214,200,176,0.12)] rounded-lg mb-8">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-xs text-[#8C8375] font-mono uppercase block">
                    {metric.label}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FF5035]">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Details Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            <div className="md:col-span-8 space-y-6">
              <div>
                <h3 className="text-xs font-mono text-[#8C8375] uppercase tracking-widest mb-2">
                  01. Overview
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-[#D6C8B0]">
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono text-[#8C8375] uppercase tracking-widest mb-2">
                  02. The Challenge
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#8C8375]">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono text-[#8C8375] uppercase tracking-widest mb-2">
                  03. Engineering Solution
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#8C8375]">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack & External Action Links Sidebar */}
            <div className="md:col-span-4 space-y-6 pt-4 md:pt-0 md:border-l md:border-[rgba(214,200,176,0.12)] md:pl-6">
              <div>
                <h3 className="text-xs font-mono text-[#8C8375] uppercase tracking-widest mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-[#D6C8B0] border border-[rgba(214,200,176,0.15)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 text-xs font-bold font-mono uppercase tracking-wider text-black bg-[#FF5035] rounded-lg hover:bg-white transition-colors"
                  >
                    <span>LAUNCH LIVE DEMO</span>
                    <span>↗</span>
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 text-xs font-bold font-mono uppercase tracking-wider text-[#D6C8B0] border border-[rgba(214,200,176,0.25)] rounded-lg hover:border-[#FF5035] hover:text-white transition-colors"
                  >
                    <span>VIEW GITHUB REPO</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
