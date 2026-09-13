import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quote = "As long as there is a problem to solve, there are infinite ways to build a solution.";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hold for 4.5 seconds to allow the stagger and the 1 second hold before exiting
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

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
    <AnimatePresence>
      {isLoading && (
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

          <motion.div 
            className="max-w-6xl text-center relative z-10"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1 
              className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {quote.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="inline-block"
                  style={{
                    color: char === ' ' ? 'transparent' : 'var(--color-fg)',
                    textShadow: '0px 0px 20px rgba(255,255,255,0.15)'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
