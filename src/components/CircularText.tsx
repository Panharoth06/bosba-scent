'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from 'motion/react';
import { ArrowUpCircle } from 'lucide-react';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from,
  to: from + 360,
  ease: 'linear' as const,
  duration,
  type: 'tween' as const,
  repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300
  }
});

const handleScrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = ''
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 cursor-pointer" onClick={handleScrollTop}>
      <motion.div
        className={`absolute inset-0 rounded-full font-medium text-primary text-center origin-center bg-white ring-8 ring-white ${className}`}
        style={{ rotate: rotation }}
        initial={{ rotate: 0 }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          const factor = Math.PI / letters.length;
          const x = factor * i;
          const y = factor * i;
          const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

          return (
            <span
              key={i}
              className="absolute text-sm inline-block inset-0 font-light font-serif tracking-wider leading-0 md:leading-1.5 transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
              style={{ transform, WebkitTransform: transform }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <ArrowUpCircle className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
      </div>
    </div>
  );
};

export default CircularText;