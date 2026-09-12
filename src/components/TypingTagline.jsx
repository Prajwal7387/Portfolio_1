import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ['Developer', 'Problem Solver', 'Builder'];

export default function TypingTagline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center gap-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[currentIndex]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
          style={{ color: 'var(--color-accent)' }}
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="inline-block w-[2px] h-[1.1em] bg-accent"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
    </span>
  );
}
