import { motion } from 'framer-motion';
import SectionReveal, { RevealItem } from './SectionReveal';
import { personal } from '../data/personal';

const stats = [
  { label: 'CPI', value: personal.cpi },
  { label: 'FOCUS', value: personal.focus },
  { label: 'INTEREST', value: personal.interest },
  { label: 'STATUS', value: personal.status },
];

export default function About() {
  return (
    <section id="about" className="section-padding section-gap">
      <SectionReveal>
        <span className="text-label text-accent mb-6 block">( 01 )</span>
      </SectionReveal>

      <SectionReveal>
        <h2 className="text-display-xl mb-12 md:mb-20">{personal.aboutHeading}</h2>
      </SectionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        {/* Left: Photo + About Text */}
        <SectionReveal>
          <div className="flex flex-col gap-10">
            {/* Profile Photo */}
            <motion.div
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shrink-0"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/profile.jpg"
                alt={personal.name.full}
                className="w-full h-full object-cover object-top"
              />
              {/* Accent border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 0 2px var(--color-accent), 0 0 40px rgba(205, 255, 80, 0.15)',
                }}
              />
            </motion.div>

            <p className="text-body-xl !text-fg-muted leading-relaxed">
              {personal.aboutText}
            </p>
          </div>
        </SectionReveal>

        {/* Right: Stats */}
        <SectionReveal stagger>
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {stats.map((stat) => (
              <RevealItem key={stat.label}>
                <div className="border-t border-border pt-4">
                  <span className="text-label-sm block mb-2">{stat.label}</span>
                  <span
                    className="font-display text-2xl md:text-3xl font-bold tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </span>
                </div>
              </RevealItem>
            ))}
          </div>
        </SectionReveal>
      </div>

      <div className="divider mt-20" />
    </section>
  );
}
