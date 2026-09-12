import SectionReveal, { RevealItem } from './SectionReveal';

const activities = [
  {
    category: 'HACKATHONS',
    items: [
      'Participated in PU Code Hackathon with the Cultiv8 project',
      'Developed solutions for Smart India Hackathon 2026 (SIH1465)',
    ],
  },
  {
    category: 'CERTIFICATIONS',
    items: [
      'AI-related training/internship – Corizo',
      'Python certification – IBM',
      'JavaScript & HTML/CSS certifications',
      'AWS / Cloud-related learning and participation certificates',
    ],
  },
  {
    category: 'TECHNICAL EVENTS & CODING',
    items: [
      'Active participant in coding and technical events',
      'Solving programming and DSA problems on LeetCode',
      'Participated in AWS/cloud-focused technical events and student communities',
    ],
  },
];

export default function Activities() {
  return (
    <section className="section-padding section-gap">
      <SectionReveal>
        <span className="text-label text-accent mb-6 block">( 06 )</span>
      </SectionReveal>

      <SectionReveal>
        <h2 className="text-display-xl mb-16 md:mb-24">
          ACTIVITIES &<br />ACHIEVEMENTS
        </h2>
      </SectionReveal>

      <SectionReveal stagger>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {activities.map((activity) => (
            <RevealItem key={activity.category}>
              <div className="border-t border-border pt-6">
                <span className="text-label mb-4 block">{activity.category}</span>
                <ul className="space-y-2">
                  {activity.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-body-lg !text-fg-muted flex items-start gap-2"
                    >
                      <span className="text-accent mt-2 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </div>
      </SectionReveal>

      <div className="divider mt-20" />
    </section>
  );
}
