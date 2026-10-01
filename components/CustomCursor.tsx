'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Setări de mișcare fluidă (spring physics)
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Afișează cursorul doar pe dispozitive cu mouse (non-touch)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Mărește cercul când trece peste elemente interactive
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div aria-hidden="true">
      {/* Cercul exterior Neon Green care urmărește cursorul */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? '#cfff5e' : '#cfff5e',
          backgroundColor: isHovered
            ? 'rgba(207, 255, 94, 0.1)'
            : 'transparent',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.2 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#cfff5e] pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(207,255,94,0.3)] hidden md:block"
      />

      {/* Punctul central */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#cfff5e] rounded-full pointer-events-none z-10000 -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </div>
  );
}
