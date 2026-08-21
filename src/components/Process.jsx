import React from "react";
import { motion } from "framer-motion";
import SectionIndicator from "./SectionIndicator";

const processSteps = [
  {
    num: "01",
    code: "01 / ARCHITECTURE",
    title: "Architecture & System Design",
    description:
      "Requirement analysis, tech stack selection, database schema design, and RESTful/GraphQL API architecture planning.",
  },
  {
    num: "02",
    code: "02 / UI_UX_PROTOTYPING",
    title: "UI/UX & Prototyping",
    description:
      "Crafting modern, responsive UI layouts with interactive micro-interactions, motion design, and design system alignment.",
  },
  {
    num: "03",
    code: "03 / FULLSTACK_ENGINEERING",
    title: "Full-Stack Development",
    description:
      "Clean, scalable, and modular implementation using modern frontend frameworks, Node.js backend, and database integration.",
  },
  {
    num: "04",
    code: "04 / TESTING_&_AUDIT",
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive security audits, performance optimization, cross-browser compatibility checks, and bug fixes.",
  },
  {
    num: "05",
    code: "05 / DEPLOYMENT_&_DEVOPS",
    title: "Deployment & CI/CD",
    description:
      "Automated CI/CD pipeline setup, cloud server deployment, SSL configuration, and production launch.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] py-20 sm:py-28 px-4 sm:px-8 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)] selection:bg-[#FF5035] selection:text-black"
    >
      {/* Side Rail Section Indicator */}
      <SectionIndicator sectionNumber="05" showSocials={true} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#D6C8B0]/15 rounded-full w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF5035] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#FF5035] uppercase font-bold">
              [ PROCESS ]
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#D6C8B0] uppercase"
          >
            DELIVERY<span className="text-[#FF5035]"> PIPELINE</span>
          </motion.h2>
        </div>

        {/* DESKTOP LAYOUT (>1024px / lg): Horizontal Timeline with Alternating Top/Bottom Cards */}
        <div className="hidden lg:block relative w-full">
          {/* Static Active Orange Glowing Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[#FF5035] shadow-[0_0_12px_rgba(255,80,53,0.6)] z-10" />

          {/* 5-Column Grid with Alternating Cards */}
          <div className="grid grid-cols-5 gap-6 relative z-20 items-center min-h-[440px]">
            {processSteps.map((step, idx) => {
              const isAbove = idx % 2 === 0; // Steps 1, 3, 5 ABOVE line; Steps 2, 4 BELOW line

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: isAbove ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col items-center relative h-full justify-between"
                >
                  {/* TOP CONTAINER: Card if isAbove, else Empty Spacer */}
                  <div className="w-full flex flex-col justify-end pb-8 h-[200px]">
                    {isAbove && (
                      <div className="group bg-[#111111]/80 border border-[#D6C8B0]/15 p-6 rounded-2xl backdrop-blur-md hover:border-[#FF5035]/60 hover:shadow-[0_0_25px_rgba(255,80,53,0.2)] transition-all duration-300 flex flex-col space-y-2">
                        <span className="font-mono text-xs text-[#FF5035] font-bold tracking-wider">
                          {step.code}
                        </span>
                        <h3 className="font-mono text-sm font-bold text-white uppercase group-hover:text-[#FF5035] transition-colors leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs text-[#8C8375] font-sans leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CENTER CIRCULAR STEP BADGE (Rendered over the line) */}
                  <div className="relative z-30 my-auto">
                    <div className="w-12 h-12 rounded-full border-2 border-[#FF5035] bg-[#090909] text-[#FF5035] font-mono text-base font-bold flex items-center justify-center shadow-[0_0_15px_rgba(255,80,53,0.5)] hover:scale-110 hover:bg-[#FF5035] hover:text-black transition-all duration-300 cursor-default">
                      {step.num}
                    </div>
                  </div>

                  {/* BOTTOM CONTAINER: Card if !isAbove, else Empty Spacer */}
                  <div className="w-full flex flex-col justify-start pt-8 h-[200px]">
                    {!isAbove && (
                      <div className="group bg-[#111111]/80 border border-[#D6C8B0]/15 p-6 rounded-2xl backdrop-blur-md hover:border-[#FF5035]/60 hover:shadow-[0_0_25px_rgba(255,80,53,0.2)] transition-all duration-300 flex flex-col space-y-2">
                        <span className="font-mono text-xs text-[#FF5035] font-bold tracking-wider">
                          {step.code}
                        </span>
                        <h3 className="font-mono text-sm font-bold text-white uppercase group-hover:text-[#FF5035] transition-colors leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs text-[#8C8375] font-sans leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (<1024px / lg:hidden): Vertical Progress Line with Cards on Right */}
        <div className="lg:hidden relative pl-16 space-y-10">
          {/* Static Active Orange Glowing Vertical Line */}
          <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-[#FF5035] shadow-[0_0_12px_rgba(255,80,53,0.6)] z-10" />

          {processSteps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Vertical Circular Step Badge */}
              <div className="absolute left-[-4.0rem] top-3 z-20 w-11 h-11 rounded-full border-2 border-[#FF5035] bg-[#090909] text-[#FF5035] font-mono text-sm font-bold flex items-center justify-center shadow-[0_0_12px_rgba(255,80,53,0.5)]">
                {step.num}
              </div>

              {/* Compact Card Container */}
              <div className="bg-[#111111]/80 border border-[#D6C8B0]/15 p-6 rounded-2xl backdrop-blur-md hover:border-[#FF5035]/60 transition-all duration-300 shadow-xl space-y-2">
                <span className="font-mono text-xs text-[#FF5035] font-bold tracking-wider block">
                  {step.code}
                </span>
                <h3 className="font-mono text-base font-bold text-white uppercase leading-snug group-hover:text-[#FF5035] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8C8375] font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
