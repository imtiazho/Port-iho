import React from "react";
import { motion } from "framer-motion";
import SectionIndicator from "./SectionIndicator";

const skillCategories = [
  {
    title: "FRONTEND & 3D",
    icon: "⚡",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Three.js",
      "TanStack Query",
      "Framer Motion",
    ],
  },
  {
    title: "BACKEND & APIS",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Auth & RBAC",
      "Stripe Integration",
      "Cache Architecture",
    ],
  },
  {
    title: "DATABASE & TOOLS",
    icon: "🛠️",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "Git & GitHub",
      "Firebase",
      // "Docker",
    ],
  },
  {
    title: "CORE COMPETENCIES",
    icon: "🚀",
    skills: [
      "Data Structures & Algorithms",
      "Query & Indexing Optimization",
      "Clean Modular Architecture",
      "Responsive UI/UX",
    ],
  },
];

const corePrinciples = [
  "[Clean Code & Modular Architecture]",
  "[RESTful APIs & Cache Optimization]",
  "[Interactive 3D / R3F Interfaces]",
];

export default function SkillsShowcase() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] py-14 sm:py-28 px-4 sm:px-8 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)] selection:bg-[#FF5035] selection:text-black"
    >
      {/* Side Rail Section Indicator */}
      <SectionIndicator sectionNumber="04" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#111111] border border-[#D6C8B0]/15 rounded-full w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF5035] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#FF5035] uppercase font-bold">
              [ TECHNICAL CAPABILITIES ]
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#D6C8B0] uppercase leading-tight max-w-4xl"
          >
            SCALABLE & {" "}
            <span className="text-[#FF5035]">HIGH-PERFORMANCE</span>
          </motion.h2>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Philosophy & Core Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col justify-between space-y-8 bg-[#0B0B0B] border border-[#D6C8B0]/10 p-6 sm:p-8 rounded-xl shadow-xl"
          >
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase text-[#8C8375] tracking-widest font-bold">
                ENGINEERING PHILOSOPHY
              </h3>
              <p className="text-base text-[#A39784] font-normal leading-relaxed">
                Specializing in full-stack MERN development, efficient state
                management, and optimized RESTful API architectures.
              </p>
              <p className="text-sm text-[#8C8375] font-normal leading-relaxed">
                Crafting responsive, high-performance web applications with
                immersive 3D UI interactions, clean database indexing, and
                modular codebase logic.
              </p>
            </div>

            {/* Core Principles Pill List */}
            <div className="space-y-3 pt-4 border-t border-[rgba(214,200,176,0.1)]">
              <span className="text-[11px] font-mono uppercase text-[#FF5035] tracking-wider block font-bold">
                Core Architectural Pillars:
              </span>
              <div className="flex flex-col gap-2.5">
                {corePrinciples.map((pillar) => (
                  <span
                    key={pillar}
                    className="text-xs sm:text-sm font-mono text-[#D6C8B0] bg-[#161616] border border-[#D6C8B0]/15 px-3 py-2 rounded-lg hover:border-[#FF5035]/60 hover:text-[#FF5035] transition-all duration-300 cursor-default"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Categorized Tech Stack Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group border border-[#D6C8B0]/10 bg-[#111]/80 hover:border-[#FF5035]/40 rounded-xl p-6 backdrop-blur-sm shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(214,200,176,0.1)]">
                    <h3 className="font-mono text-sm sm:text-base font-bold text-white tracking-wider group-hover:text-[#FF5035] transition-colors">
                      {cat.title}
                    </h3>
                    <span className="text-lg">{cat.icon}</span>
                  </div>

                  {/* Skill Badge Grid */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono text-[#D6C8B0] bg-[#1a1a1a] border border-[#D6C8B0]/15 px-3 py-1.5 rounded-md hover:border-[#FF5035]/60 hover:text-[#FF5035] hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                      >
                        [{skill}]
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
