import SectionReveal, { RevealItem } from './SectionReveal';

// PLACEHOLDER — replace with actual achievements and activities
const activities = [
  {
    category: 'HACKATHONS',
    items: ['Participated in hackathon events — details to be added'],
  },
  {
    category: 'TECHNICAL EVENTS',
    items: ['Attended and participated in technical workshops and events'],
  },
  {
    category: 'CERTIFICATIONS',
    items: ['Certifications to be added'],
  },
  {
    category: 'COLLEGE ACTIVITIES',
    items: ['Active participation in college technical and extracurricular activities'],
  },
  {
    category: 'CODING PRACTICE',
    items: ['Regular problem solving on coding platforms', 'Data Structures & Algorithms practice'],
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
