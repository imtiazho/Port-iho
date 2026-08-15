import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsShowcase({ setCursorState, onSelectProject }) {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web App', '3D Motion', 'Mobile App', 'Branding'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section 
      id="projects" 
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-16 sm:py-28 px-4 sm:px-8 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="07" showSocials={true} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col space-y-8 sm:space-y-12">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="lg:hidden text-xs font-bold text-[#FF5035] font-mono tracking-widest">
              07
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#8C8375] uppercase">
              PROJECTS SHOWCASE
            </span>
          </motion.div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider rounded-full border transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FF5035] text-black font-bold border-[#FF5035]'
                    : 'bg-[#0B0B0B] text-[#8C8375] border-[rgba(214,200,176,0.15)] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              onClick={() => onSelectProject && onSelectProject(project)}
              onMouseEnter={() => setCursorState && setCursorState('projectHover')}
              onMouseLeave={() => setCursorState && setCursorState('default')}
              className="group relative bg-[#0B0B0B] border border-[rgba(214,200,176,0.12)] p-3.5 sm:p-4 rounded-lg flex flex-col justify-between overflow-hidden cursor-pointer hover:border-[#FF5035]/50 transition-all hover:-translate-y-1 shadow-lg"
            >
              {/* Project Card Image Container */}
              <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden rounded bg-black mb-3 sm:mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-110 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#D6C8B0]">
                  CASE STUDY
                </div>
              </div>

              {/* Card Footer: Project Info & Arrow Button */}
              <div className="flex items-end justify-between pt-1 sm:pt-2">
                <div className="space-y-0.5 sm:space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#FF5035] block font-bold">
                    {project.id}
                  </span>
                  <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#FF5035] transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-[11px] sm:text-xs text-[#8C8375] block font-sans">
                    {project.category}
                  </span>
                </div>

                {/* Small Circular Arrow Action */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[rgba(214,200,176,0.25)] flex items-center justify-center text-[#D6C8B0] group-hover:border-[#FF5035] group-hover:bg-[#FF5035] group-hover:text-black transition-all">
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
