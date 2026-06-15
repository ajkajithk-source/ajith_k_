import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Project } from '../types';

interface CustomCursorProps {
  hoveredProject: Project | null;
  isActive: boolean;
}

export default function CustomCursor({ hoveredProject, isActive }: CustomCursorProps) {
  const [isPointer, setIsPointer] = useState(false);
  const [tilt, setTilt] = useState(0);

  // Motion values for physical custom cursor coordinates
  const mouseX = useMotionValue(-150);
  const mouseY = useMotionValue(-150);

  // Spring settings for delayed, fluid parallax follow action
  // Image spring features a slightly heavier inertial lag
  const imageSpringConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const pointSpringConfig = { damping: 20, stiffness: 300, mass: 0.2 };

  const cursorImageX = useSpring(mouseX, imageSpringConfig);
  const cursorImageY = useSpring(mouseY, imageSpringConfig);

  const cursorPointX = useSpring(mouseX, pointSpringConfig);
  const cursorPointY = useSpring(mouseY, pointSpringConfig);

  useEffect(() => {
    // Only enable cursor animations on high-precision fine pointers (desktops)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointer(mediaQuery.matches);

    const onMediaChange = (e: MediaQueryListEvent) => {
      setIsPointer(e.matches);
    };
    mediaQuery.addEventListener('change', onMediaChange);

    let lastX = 0;
    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Inertial rotational tilt physics based on cursor speed
      const deltaX = e.clientX - lastX;
      setTilt(Math.min(Math.max(deltaX * 0.18, -15), 15));
      lastX = e.clientX;

      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        setTilt(0);
      });
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      mediaQuery.removeEventListener('change', onMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, [mouseX, mouseY]);

  if (!isPointer || !isActive) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      id="custom-cursor-layer"
    >
      {/* 1. Dynamic Hover-Reveal Project Image */}
      <motion.div
        style={{
          x: cursorImageX,
          y: cursorImageY,
          translateX: '-50%',
          translateY: '-50%',
          rotate: tilt,
        }}
        className="absolute left-0 top-0 will-change-transform"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: hoveredProject ? 1 : 0,
            opacity: hoveredProject ? 1 : 0,
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
          }}
          className="relative h-[220px] w-[310px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-zinc-900"
          id="reveal-frame"
        >
          {hoveredProject && (
            <div className="relative h-full w-full">
              {/* Image */}
              <img
                src={hoveredProject.image}
                alt={hoveredProject.title}
                className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 brightness-[95%]"
                referrerPolicy="no-referrer"
                id={`cursor-image-${hoveredProject.id}`}
              />
              {/* Dynamic tag overlay inside the floating reveal card */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <span className="font-mono text-[10px] tracking-widest text-[#ff5a36] uppercase">
                  {hoveredProject.category}
                </span>
                <h4 className="font-sans text-sm font-semibold text-white tracking-tight mt-0.5">
                  {hoveredProject.title}
                </h4>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* 2. Micro Dot / Interactive Hover Badge */}
      <motion.div
        style={{
          x: cursorPointX,
          y: cursorPointY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute left-0 top-0 flex items-center justify-center rounded-full will-change-transform"
      >
        <motion.div
          animate={{
            width: hoveredProject ? 90 : 12,
            height: hoveredProject ? 90 : 12,
            backgroundColor: hoveredProject ? 'rgba(255, 90, 54, 0.92)' : 'rgba(255, 255, 255, 0.8)',
            border: hoveredProject ? '1px solid rgba(255, 255, 255, 0.2)' : '0px solid transparent',
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="flex items-center justify-center overflow-hidden rounded-full font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-[1px]"
          id="cursor-dot"
        >
          {hoveredProject && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              className="text-white drop-shadow-sm select-none"
            >
              View
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
