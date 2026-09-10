import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, GitBranch, ExternalLink, Code2 } from 'lucide-react';
import SectionReveal, { RevealItem } from './SectionReveal';
import { socialLinks } from '../data/socialLinks';

const iconMap = {
  Mail,
  GitBranch,
  ExternalLink,
  Code2,
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-gap relative min-h-screen flex flex-col justify-center">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] rounded-full pointer-events-none opacity-[0.03]"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 60%)',
        }}
      />

      <SectionReveal>
        <span className="text-label text-accent mb-6 block">( 07 )</span>
      </SectionReveal>

      <SectionReveal>
        <h2 className="text-display-xl md:text-display-hero mb-8 md:mb-12 max-w-[16ch]">
          LET&apos;S BUILD<br />SOMETHING.
        </h2>
      </SectionReveal>

      <SectionReveal>
        <p className="text-body-xl !text-fg-muted max-w-2xl mb-16 md:mb-24">
          Looking forward to new projects, opportunities and collaborations.
        </p>
      </SectionReveal>

      <SectionReveal stagger>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <RevealItem key={link.label}>
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 border border-border rounded-lg hover:border-accent transition-all duration-500"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-4">
                    {Icon && <Icon size={20} className="text-fg-muted group-hover:text-accent transition-colors duration-300" />}
                    <span className="text-label !text-fg group-hover:!text-accent transition-colors duration-300">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-fg-subtle group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.a>
              </RevealItem>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}
