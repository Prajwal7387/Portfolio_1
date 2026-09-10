import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="relative mb-12 md:mb-24"
      style={{ scale }}
    >
      <SectionReveal>
        <div className="group relative rounded-2xl overflow-hidden bg-bg-elevated border border-border transition-all duration-700 hover:border-border-strong">
          {/* Project Number - Decorative */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
            <span
              className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none opacity-[0.06]"
              style={{
                fontFamily: 'var(--font-display)',
                color: project.accent,
              }}
            >
              {project.number}
            </span>
          </div>

          {/* Visual Area */}
          <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
            <motion.div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                y: yImage,
                background: project.gradient,
              }}
            >
              {/* Abstract animated shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 md:w-72 md:h-72 rounded-full opacity-20 blur-3xl"
                  style={{ backgroundColor: project.accent }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute w-32 h-32 md:w-56 md:h-56 rounded-full opacity-10 blur-2xl"
                  style={{ backgroundColor: project.accent }}
                  animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, 40, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />
              </div>

              {/* Grid lines decoration */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.04]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id={`grid-${project.id}`} width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
              </svg>
            </motion.div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/60 transition-all duration-500 flex items-center justify-center">
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-4"
              >
                <span
                  className="text-display-md"
                  style={{ color: project.accent }}
                >
                  VIEW
                </span>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
              <div>
                <span className="text-label-sm block mb-3">PROJECT {project.number}</span>
                <h3
                  className="text-display-lg transition-transform duration-500 group-hover:translate-x-2"
                  style={{ color: project.accent }}
                >
                  {project.title}
                </h3>
              </div>
            </div>

            <p className="text-body-lg !text-fg-muted max-w-2xl mb-8">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-label-sm px-3 py-1.5 border border-border rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  backgroundColor: project.accent,
                }}
              >
                VIEW PROJECT <ArrowUpRight size={14} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GITHUB <GitBranch size={14} />
              </a>
            </div>
          </div>
        </div>
      </SectionReveal>
    </motion.div>
  );
}
