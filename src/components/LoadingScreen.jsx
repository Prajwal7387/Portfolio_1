import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-bg)' }}
          exit={{
            clipPath: 'inset(0 0 100% 0)',
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        >
          {/* Counter */}
          <Counter />

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px]"
            style={{ backgroundColor: 'var(--color-accent)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
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
      className="flex flex-col items-center gap-4"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
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
