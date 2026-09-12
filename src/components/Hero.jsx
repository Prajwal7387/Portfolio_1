import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { personal } from '../data/personal';

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yMeta = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse parallax
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };

  const letterVariants = {
    hidden: { y: 120, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.6 + i * 0.04,
      },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between section-padding overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Top Metadata Bar */}
      <motion.div
        className="flex items-center justify-between pt-24 md:pt-28"
        style={{ y: yMeta, opacity }}
      >
        <motion.span
          className="text-label"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.2}
        >
          {personal.field.toUpperCase()}
        </motion.span>
        <motion.span
          className="text-label hidden sm:block"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.3}
        >
          © {personal.year}
        </motion.span>
        <motion.span
          className="text-label"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.4}
        >
          {personal.roleShort.toUpperCase()}
        </motion.span>
      </motion.div>

      {/* Main Typography */}
      <motion.div
        className="flex-1 flex flex-col justify-center py-12 md:py-20"
        style={{ y: yText, opacity }}
      >
        {/* First Name */}
        <div className="overflow-hidden">
          <motion.h1 className="text-display-hero flex" style={{ x: smoothMouseX }} data-cursor="hover">
            {personal.name.first.split('').map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Last Name */}
        <div className="overflow-hidden mt-[-0.05em]">
          <motion.h1
            className="text-display-hero flex"
            style={{
              x: useTransform(smoothMouseX, (v) => -v * 0.5),
              color: 'transparent',
              WebkitTextStroke: '2px var(--color-fg)',
            }}
            data-cursor="hover"
          >
            {personal.name.last.split('').map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={i + personal.name.first.length}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.div
          className="mt-8 md:mt-12 max-w-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.6}
        >
          <p className="text-label mb-3">{personal.tagline}</p>
          <p className="text-body-lg !text-fg-muted">{personal.intro}</p>
        </motion.div>
      </motion.div>

      {/* Bottom: Scroll Indicator */}
      <motion.div
        className="flex items-center justify-center pb-8"
        style={{ opacity }}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2.0}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-fg-subtle"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-label-sm">SCROLL</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>

      {/* Background Accent Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)',
        }}
      />
    </section>
  );
}
