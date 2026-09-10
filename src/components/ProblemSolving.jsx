import { ArrowUpRight } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function ProblemSolving() {
  return (
    <section className="section-padding section-gap">
      <SectionReveal>
        <span className="text-label text-accent mb-6 block">( 05 )</span>
      </SectionReveal>

      <SectionReveal>
        <h2 className="text-display-xl mb-12 md:mb-16">
          PROBLEM<br />SOLVING
        </h2>
      </SectionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <SectionReveal>
          <p className="text-body-xl !text-fg-muted leading-relaxed">
            Regularly practicing Data Structures and Algorithms and solving
            programming problems to strengthen problem-solving skills.
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="border-t border-border pt-8">
            <span className="text-label-sm block mb-4">PLATFORM</span>
            <h3
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              LEETCODE
            </h3>
            <a
              href="https://leetcode.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-label !text-accent hover:gap-5 transition-all duration-400"
            >
              VIEW PROFILE
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </SectionReveal>
      </div>

      <div className="divider mt-20" />
    </section>
  );
}
