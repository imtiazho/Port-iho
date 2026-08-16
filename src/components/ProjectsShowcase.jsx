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
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-14 sm:py-28 px-4 sm:px-8 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)] selection:bg-[#FF5035] selection:text-black"
    >
      {/* Side Rail Section Indicator */}
      <SectionIndicator sectionNumber="03"/>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col space-y-10 sm:space-y-14">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#D6C8B0]/15 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FF5035] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#FF5035] uppercase font-bold">
                [ FEATURED WORK ]
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-5xl font-extrabold tracking-tight text-[#D6C8B0] uppercase">
              SELECTED <span className="text-[#FF5035]">PROJECT SHOWCASE</span>
            </h2>
          </motion.div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono tracking-wider rounded-full border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FF5035] text-black font-bold border-[#FF5035] shadow-[0_0_15px_rgba(255,80,53,0.4)]'
                    : 'bg-[#0B0B0B] text-[#8C8375] border-[rgba(214,200,176,0.15)] hover:text-white hover:border-[#D6C8B0]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase 2-Column Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setCursorState && setCursorState('projectHover')}
              onMouseLeave={() => setCursorState && setCursorState('default')}
              className="group relative bg-[#111111]/80 border border-[#D6C8B0]/15 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-[#FF5035]/60 hover:shadow-[0_0_30px_rgba(255,80,53,0.15)] flex flex-col justify-between"
            >
              {/* Top Image Container with Fixed Aspect Ratio & Smooth Hover Zoom */}
              <div 
                onClick={() => onSelectProject && onSelectProject(project)}
                className="relative w-full aspect-video h-64 sm:h-72 overflow-hidden bg-black cursor-pointer group/img"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out group-hover:grayscale-0"
                />
                
                {/* Dynamic Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Floating Top Right Case Study Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject && onSelectProject(project);
                    }}
                    className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#D6C8B0] hover:text-[#FF5035] hover:border-[#FF5035] transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>CASE STUDY</span>
                    <span>↗</span>
                  </button>
                </div>

                {/* Floating Bottom Left Monospace Index Tag */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-black/90 border border-white/10 text-xs font-mono text-[#FF5035] font-bold">
                    {project.id}
                  </span>
                  <span className="text-xs font-mono text-[#D6C8B0]/80 uppercase">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Body & Content Section */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 flex-1">
                <div className="space-y-3">
                  {/* Category & Index Header */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#8C8375] uppercase tracking-wider">
                    <span>{project.id} / {project.category}</span>
                    <span className="text-[#FF5035] font-bold font-mono">FEATURED PLATFORM</span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onSelectProject && onSelectProject(project)}
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#D6C8B0] group-hover:text-[#FF5035] transition-colors duration-300 uppercase cursor-pointer leading-tight"
                  >
                    {project.title}
                  </h3>

                  {/* 2-Sentence Value Proposition */}
                  <p className="text-sm sm:text-base text-[#A39784] font-normal leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-4 pt-2">
                  {/* <div className="flex flex-wrap items-center gap-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-[#D6C8B0] bg-[#1a1a1a] border border-[#D6C8B0]/15 px-3 py-1 rounded-md hover:border-[#FF5035]/50 hover:text-[#FF5035] transition-colors cursor-default"
                      >
                        [{tech}]
                      </span>
                    ))}
                  </div> */}

                  {/* Dual Action Buttons Bar */}
                  <div className="pt-4 border-t border-[rgba(214,200,176,0.12)] flex flex-wrap items-center justify-between gap-3">
                    {/* Left: Dual Action CTAs */}
                    <div className="flex items-center gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 text-xs font-mono font-bold tracking-wider text-black bg-[#FF5035] rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(255,80,53,0.4)] flex items-center gap-1.5"
                        >
                          <span>LIVE DEMO</span>
                          <span>↗</span>
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 text-xs font-mono tracking-wider text-[#D6C8B0] bg-[#090909] border border-[rgba(214,200,176,0.25)] rounded-full hover:border-[#FF5035] hover:text-[#FF5035] transition-all duration-300 flex items-center gap-1.5"
                        >
                          <span>SOURCE CODE</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>

                    {/* Right: Deep Dive Case Study Arrow Button */}
                    <button
                      type="button"
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="w-10 h-10 rounded-full border border-[rgba(214,200,176,0.25)] flex items-center justify-center text-[#D6C8B0] group-hover:border-[#FF5035] group-hover:bg-[#FF5035] group-hover:text-black transition-all cursor-pointer"
                      title="Inspect Case Study"
                    >
                      <span className="text-sm font-bold transform group-hover:rotate-45 transition-transform duration-300">↗</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
