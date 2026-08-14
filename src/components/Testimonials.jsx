import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import SectionIndicator from './SectionIndicator';
import { portfolioData } from '../data/portfolioData';

export default function Testimonials() {
  const { testimonials } = portfolioData;
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Map scroll progress (0 to 1) to active testimonial index (0, 1, 2)
  const indexTransform = useTransform(scrollYProgress, [0, 0.45, 0.85], [0, 1, 2]);

  useEffect(() => {
    const unsubscribe = indexTransform.on("change", (latest) => {
      const roundIndex = Math.min(Math.max(Math.round(latest), 0), testimonials.length - 1);
      setActiveIndex(roundIndex);
    });
    return () => unsubscribe();
  }, [indexTransform, testimonials.length]);

  const activeItem = testimonials[activeIndex];

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative min-h-screen w-full bg-[#090909] text-[#D6C8B0] flex items-center justify-center py-28 px-6 lg:px-24 overflow-hidden border-b border-[rgba(214,200,176,0.12)]"
    >
      <SectionIndicator sectionNumber="06" showSocials={true} />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Giant Orange Quote, Review Text & Author Details */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="text-5xl font-serif text-[#FF5035] leading-none">“</span>
          </motion.div>

          <div className="min-h-[200px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#D6C8B0] leading-[1.15]">
                  {activeItem.quote}
                </h3>

                <div className="space-y-1 pt-2">
                  <div className="text-base sm:text-lg font-bold text-white">
                    {activeItem.author}
                  </div>
                  <div className="text-xs sm:text-sm text-[#8C8375]">
                    {activeItem.role}
                  </div>
                  <div className="text-xs text-[#FF5035] font-mono uppercase tracking-wider">
                    {activeItem.company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Scroll-Driven Vertical Stack of Circular Client Avatar Portraits */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-6">
          <div className="flex flex-col items-center gap-6">
            {testimonials.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative rounded-full cursor-pointer overflow-hidden transition-all duration-500 ${
                    isActive 
                      ? 'w-20 h-20 sm:w-24 sm:h-24 border-2 border-[#FF5035] shadow-[0_0_25px_rgba(255,80,53,0.5)] scale-110' 
                      : 'w-14 h-14 sm:w-16 sm:h-16 border border-[rgba(214,200,176,0.15)] opacity-40 hover:opacity-80'
                  }`}
                  style={{
                    filter: isActive ? 'brightness(1) contrast(1.1)' : 'brightness(0.2) contrast(1.3)',
                  }}
                >
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Floating Orange Circle Graphic */}
          <div className="w-4 h-4 rounded-full bg-[#FF5035] shadow-[0_0_15px_rgba(255,80,53,0.8)] mt-4 hidden lg:block" />
        </div>

      </div>
    </section>
  );
}
