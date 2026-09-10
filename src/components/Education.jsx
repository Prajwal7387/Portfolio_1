import SectionReveal, { RevealItem } from './SectionReveal';
import { personal } from '../data/personal';

export default function Education() {
  return (
    <section id="education" className="section-padding section-gap">
      <SectionReveal>
        <span className="text-label text-accent mb-6 block">( 04 )</span>
      </SectionReveal>

      <SectionReveal>
        <h2 className="text-display-xl mb-16 md:mb-24">EDUCATION</h2>
      </SectionReveal>

      <SectionReveal stagger>
        <div className="max-w-3xl">
          <RevealItem>
            <div className="border-t border-border pt-8 pb-12">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-bold tracking-tight mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {personal.degree.toUpperCase()}
                  </h3>
                  <p className="text-body-lg !text-fg-muted">{personal.university}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className="text-label-sm px-3 py-1 border border-accent !text-accent rounded-full">
                    {personal.degreeStatus.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <div className="border-t border-border pt-4">
                  <span className="text-label-sm block mb-2">CPI</span>
                  <span
                    className="text-3xl md:text-4xl font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
                  >
                    {personal.cpi}
                  </span>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-label-sm block mb-2">FIELD</span>
                  <span
                    className="text-lg md:text-xl font-medium"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {personal.field}
                  </span>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-label-sm block mb-2">YEAR</span>
                  <span
                    className="text-lg md:text-xl font-medium"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {personal.year}
                  </span>
                </div>
              </div>
            </div>
          </RevealItem>
        </div>
      </SectionReveal>

      <div className="divider mt-8" />
    </section>
  );
}
