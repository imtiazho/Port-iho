import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower({ cursorState }) {
  const [isTouch, setIsTouch] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for organic movement
  const springConfig = { damping: 28, stiffness: 350 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  // Determine size & styling based on global cursorState ('default', 'heroHover', 'projectHover')
  const isHeroHover = cursorState === 'heroHover';
  const isProjectHover = cursorState === 'projectHover';

  const size = isHeroHover ? 140 : isProjectHover ? 60 : 12;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9] rounded-full flex items-center justify-center mix-blend-normal"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        width: size,
        height: size,
        backgroundColor: isHeroHover ? '#FF5035' : isProjectHover ? 'rgba(255, 80, 53, 0.9)' : '#FF5035',
        boxShadow: isHeroHover ? '0 0 50px rgba(255, 80, 53, 0.4)' : 'none',
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      {isProjectHover && (
        <span className="text-white text-xs font-bold font-mono">↗</span>
      )}
    </motion.div>
  );
}
