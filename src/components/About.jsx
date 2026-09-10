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
        <SectionReveal>
          <p className="text-body-xl !text-fg-muted leading-relaxed">
            {personal.aboutText}
          </p>
        </SectionReveal>

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
