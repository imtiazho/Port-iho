import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower({ cursorState }) {
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for raw cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Direct fast spring for the central inner dot
  const innerSpringConfig = { damping: 28, stiffness: 450 };
  const innerX = useSpring(cursorX, innerSpringConfig);
  const innerY = useSpring(cursorY, innerSpringConfig);

  // Organic lagging spring for the outer glowing ring
  const outerSpringConfig = { damping: 20, stiffness: 180, mass: 0.5 };
  const outerX = useSpring(cursorX, outerSpringConfig);
  const outerY = useSpring(cursorY, outerSpringConfig);

  useEffect(() => {
    // Check if pointer is coarse (touch device)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    // Move cursor event handler
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Detect mouse leaving/entering window viewport
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Global event delegation for interactive element hover scaling
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest &&
        target.closest(
          'a, button, input, textarea, select, .cursor-pointer, .magnetic-parent, [role="button"]'
        )
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.closest &&
        target.closest(
          'a, button, input, textarea, select, .cursor-pointer, .magnetic-parent, [role="button"]'
        )
      ) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch) return null;

  const isHeroHover = cursorState === 'heroHover';
  const isProjectHover = cursorState === 'projectHover';

  // Determine outer ring scale & background based on hover states
  let outerScale = 1;
  let outerBg = 'transparent';
  let outerBorder = 'rgba(255, 80, 53, 0.6)';
  let outerShadow = 'none';

  if (isHeroHover) {
    outerScale = 4.5;
    outerBg = 'rgba(255, 80, 53, 0.85)';
    outerBorder = '#FF5035';
    outerShadow = '0 0 50px rgba(255, 80, 53, 0.5)';
  } else if (isProjectHover) {
    outerScale = 2.8;
    outerBg = 'rgba(255, 80, 53, 0.9)';
    outerBorder = '#FF5035';
    outerShadow = '0 0 30px rgba(255, 80, 53, 0.4)';
  } else if (isHovered) {
    outerScale = 2.2;
    outerBg = 'rgba(255, 80, 53, 0.15)';
    outerBorder = '#FF5035';
    outerShadow = '0 0 20px rgba(255, 80, 53, 0.35)';
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Outer Glowing Ring (Lags organically behind mouse) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none flex items-center justify-center"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: outerBorder,
          backgroundColor: outerBg,
          boxShadow: outerShadow,
        }}
        animate={{
          scale: outerScale,
        }}
        transition={{
          type: 'spring',
          damping: 22,
          stiffness: 300,
        }}
      >
        {isProjectHover && (
          <span className="text-white text-xs font-bold font-mono">↗</span>
        )}
      </motion.div>

      {/* Inner Central Dot (Follows mouse immediately) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#FF5035] pointer-events-none shadow-[0_0_8px_#FF5035]"
        style={{
          x: innerX,
          y: innerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered || isHeroHover || isProjectHover ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
