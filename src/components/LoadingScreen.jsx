import { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quote = "As long as there is a problem to solve, there are infinite ways to build a solution.";

export default function LoadingScreen() {
  // 'counter' -> 'quote' -> 'done'
  const [phase, setPhase] = useState('counter');

  useEffect(() => {
    if (phase === 'counter') {
      const timer = setTimeout(() => {
        setPhase('quote');
      }, 2200);
      return () => clearTimeout(timer);
    } else if (phase === 'quote') {
      const timer = setTimeout(() => {
        setPhase('done');
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useLayoutEffect(() => {
    if (phase !== 'done') {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      // Wait for exit animation to complete before restoring scroll
      const timer = setTimeout(() => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }, 1000);
      return () => clearTimeout(timer);
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6 md:p-12 overflow-hidden"
          style={{ backgroundColor: 'var(--color-bg)' }}
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
          }}
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[120px] opacity-20 pointer-events-none"
            style={{ backgroundColor: 'var(--color-accent)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {phase === 'counter' && (
            <motion.div
              className="absolute bottom-0 left-0 h-[3px]"
              style={{ backgroundColor: 'var(--color-accent)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              exit={{ opacity: 0 }}
            />
          )}

          <AnimatePresence mode="wait">
            {phase === 'counter' && <Counter key="counter" />}
            {phase === 'quote' && <Quote key="quote" />}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const steps = 60;
    const increment = 100 / steps;
    const intervalTime = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setCount(100);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center gap-4 relative z-10"
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      <motion.span
        className="text-7xl md:text-9xl font-bold tracking-tighter"
        style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--color-fg)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {count}
      </motion.span>
      <motion.span
        className="text-label-sm tracking-widest"
        style={{ color: 'var(--color-fg-muted)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        LOADING
      </motion.span>
    </motion.div>
  );
}

function Quote() {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      filter: 'blur(10px)',
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)', scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      className="max-w-6xl text-center relative z-10"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 
        className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tight tracking-tight flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {quote.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-flex whitespace-nowrap">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={child}
                className="inline-block"
                style={{
                  color: 'var(--color-fg)',
                  textShadow: '0px 0px 20px rgba(255,255,255,0.15)'
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </h1>
      
      {/* Glowing underline accent */}
      <motion.div
        className="mt-10 md:mt-16 mx-auto h-[2px] rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
          boxShadow: '0 0 15px var(--color-accent-dim)'
        }}
        initial={{ width: '0%', opacity: 0 }}
        animate={{ width: '40%', opacity: 1 }}
        transition={{ delay: 2.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
