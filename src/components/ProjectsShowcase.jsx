import React from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsShowcase({ setCursorState }) {
  const { projects } = portfolioData;

  return (
    <section 
      id="projects" 
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-28 px-6 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="07" showSocials={true} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
              PROJECTS SHOWCASE
            </span>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.03, x: 2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-5 py-2.5 text-xs font-bold tracking-[0.2em] text-[#D6C8B0] uppercase border border-[rgba(214,200,176,0.25)] rounded-full bg-[#090909] hover:border-[#FF5035] hover:text-white transition-all group"
          >
            <span>VIEW ALL PROJECTS</span>
            <span className="w-2 h-2 rounded-full bg-[#FF5035] group-hover:scale-125 transition-transform" />
          </motion.button>
        </div>

        {/* 4 Project Showcase Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onMouseEnter={() => setCursorState && setCursorState('projectHover')}
              onMouseLeave={() => setCursorState && setCursorState('default')}
              className="group relative bg-[#0B0B0B] border border-[rgba(214,200,176,0.12)] p-4 rounded flex flex-col justify-between overflow-hidden cursor-pointer hover:border-[#FF5035]/50 transition-colors shadow-lg"
            >
              {/* Project Card Image Container */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded bg-black mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-110 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>

              {/* Card Footer: Project Info & Arrow Button */}
              <div className="flex items-end justify-between pt-2">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#FF5035] block">
                    {project.id}
                  </span>
                  <h4 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[#FF5035] transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs text-[#8C8375] block font-sans">
                    {project.category}
                  </span>
                </div>

                {/* Small Circular Arrow Action */}
                <div className="w-8 h-8 rounded-full border border-[rgba(214,200,176,0.25)] flex items-center justify-center text-[#D6C8B0] group-hover:border-[#FF5035] group-hover:bg-[#FF5035] group-hover:text-black transition-all">
                  <span className="text-xs font-bold transform group-hover:rotate-45 transition-transform duration-300">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
