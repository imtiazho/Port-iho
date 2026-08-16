import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionIndicator from './SectionIndicator';

const servicesData = [
  {
    id: '01',
    number: '01',
    title: 'FULL-STACK WEB DEVELOPMENT',
    subtitle: 'MERN Stack, Scalable Architecture, REST APIs',
    description:
      'Architecting end-to-end full-stack web applications built for high performance, reliability, and enterprise scale. From bulletproof database schemas and secure REST APIs to responsive, modern frontend interfaces.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Tailwind CSS'],
  },
  {
    id: '02',
    number: '02',
    title: 'SAAS & PRODUCT ENGINEERING',
    subtitle: 'Dashboards, Auth, Stripe Payment, State Management',
    description:
      'Engineering feature-rich SaaS products with secure multi-tenant authentication, real-time analytical dashboards, and robust state management. Seamless integration with Stripe payments, webhooks, and recurring billing systems.',
    techStack: ['React', 'Next.js', 'Stripe', 'Zustand / Redux', 'OAuth', 'PostgreSQL'],
  },
  {
    id: '03',
    number: '03',
    title: 'INTERACTIVE FRONTEND & 3D',
    subtitle: 'React, Three.js, Framer Motion, Micro-interactions',
    description:
      'Elevating web applications with dynamic WebGL 3D scenes, custom shaders, and butter-smooth micro-animations. Transforming static interface flows into tactile interactive journeys that captivate user attention.',
    techStack: ['React', 'Three.js', 'React Three Fiber', 'Framer Motion', 'WebGL', 'GSAP'],
  },
  {
    id: '04',
    number: '04',
    title: 'PERFORMANCE & CODE OPTIMIZATION',
    subtitle: 'SEO, Web Vitals, Database Query Tuning',
    description:
      'Auditing and optimizing web applications to achieve 95+ Core Web Vitals and sub-second load times. Eliminating rendering bottlenecks, tuning database query execution, and maximizing search engine visibility.',
    techStack: ['Lighthouse', 'Web Vitals', 'SEO', 'Redis', 'Query Tuning', 'Bundle Optimization'],
  },
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] py-12 md:py-24 px-6 md:px-16 overflow-x-hidden border-b border-[#D6C8B0]/15 selection:bg-[#FF5035] selection:text-black"
    >
      {/* Side Rail Section Indicator */}
      <SectionIndicator sectionNumber="02" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* 2-Column Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Section Branding & Agency Subheading */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Monospace Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#111111] border border-[#D6C8B0]/15 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#FF5035] animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-[#FF5035] uppercase font-bold">
                  [ SERVICES ]
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#D6C8B0] uppercase md:leading-[0.95] mb-4 md:mb-6">
                WHAT I <br />
                <span className="text-[#FF5035]">DO.</span>
              </h2>

              <p className="text-[#A39784] text-base sm:text-lg font-normal leading-relaxed mb-8">
                Delivering high-impact full-stack web applications, scalable SaaS product architectures, and immersive interactive web experiences engineered to convert.
              </p>
            </motion.div>

            {/* Quick Agency Metrics / Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 bg-[#111111]/80 border border-[#D6C8B0]/10 rounded-xl backdrop-blur-sm hidden sm:flex flex-col gap-2 shadow-2xl"
            >
              <div className="flex justify-between items-center text-xs font-mono text-[#8C8375] uppercase">
                <span>Core Capabilities</span>
                <span className="text-[#FF5035]">4 Disciplines</span>
              </div>
              <div className="text-sm font-semibold text-[#D6C8B0]">
                Full-Lifecycle Software Engineering & Interactive UI
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sleek Interactive Accordion List */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#D6C8B0]/15 border-t border-b border-[#D6C8B0]/15">
            {servicesData.map((service, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group transition-colors duration-300 hover:bg-[#111111] rounded-lg overflow-hidden"
                >
                  {/* Service Row Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left py-6 sm:py-8 px-3 sm:px-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 w-full">
                      {/* Monospace Number Tag */}
                      <span className="text-xl sm:text-2xl font-bold font-mono text-[#FF5035] shrink-0">
                        {service.number}
                      </span>

                      <div className="flex flex-col gap-1 w-full">
                        {/* Title */}
                        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#D6C8B0] group-hover:text-[#FF5035] transition-colors duration-300 uppercase leading-snug">
                          {service.title}
                        </h3>

                        {/* Subtitle / Short Summary */}
                        <span className="text-xs sm:text-sm font-mono text-[#8C8375] tracking-wide mt-1">
                          {service.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Animated Arrow / Status Icon */}
                    <div className="shrink-0 pt-1">
                      <div className="w-10 h-10 rounded-full border border-[#D6C8B0]/20 flex items-center justify-center text-[#D6C8B0] group-hover:border-[#FF5035] group-hover:bg-[#FF5035] group-hover:text-black transition-all duration-300">
                        <motion.span
                          animate={{ rotate: isExpanded ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-lg font-bold inline-block"
                        >
                          ↗
                        </motion.span>
                      </div>
                    </div>
                  </button>

                  {/* Expandable Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-2 px-3 sm:px-6 sm:pl-16 text-[#D6C8B0]/90">
                          {/* 2-Sentence Description */}
                          <p className="text-base sm:text-lg text-[#A39784] font-normal leading-relaxed mb-6">
                            {service.description}
                          </p>

                          {/* Tech Stack Tags */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono text-[#8C8375] uppercase mr-2 tracking-wider">
                              Tech Stack:
                            </span>
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs sm:text-sm font-mono text-[#D6C8B0] bg-[#1a1a1a] hover:bg-[#FF5035] hover:text-black border border-[#D6C8B0]/20 px-3 py-1 rounded-md transition-all duration-200 cursor-default"
                              >
                                [{tech}]
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
