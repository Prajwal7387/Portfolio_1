import { motion } from 'framer-motion';
import SectionReveal, { RevealItem } from './SectionReveal';
import { skillGroups } from '../data/skills';

function SkillRow({ skill, index }) {
  return (
    <motion.div
      className="group flex items-center gap-4 py-3 md:py-4 border-b border-border cursor-default"
      whileHover={{ x: 16 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="text-label-sm !text-fg-subtle w-8 shrink-0">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span
        className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {skill}
      </span>
      <motion.div
        className="ml-auto w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  );
}

export default function Skills() {
  let globalIndex = 0;

  return (
    <section id="skills" className="section-padding section-gap">
      <SectionReveal>
        <span className="text-label text-accent mb-6 block">( 03 )</span>
      </SectionReveal>

      <SectionReveal>
        <h2 className="text-display-xl mb-16 md:mb-24">WHAT I<br />WORK WITH</h2>
      </SectionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {skillGroups.map((group) => (
          <SectionReveal key={group.category} stagger>
            <div>
              <span className="text-label mb-6 block">{group.category}</span>
              <div>
                {group.skills.map((skill) => {
                  const idx = globalIndex++;
                  return (
                    <RevealItem key={skill}>
                      <SkillRow skill={skill} index={idx} />
                    </RevealItem>
                  );
                })}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      <div className="divider mt-20" />
    </section>
  );
}
