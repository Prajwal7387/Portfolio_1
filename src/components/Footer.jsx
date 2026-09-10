import { personal } from '../data/personal';

export default function Footer() {
  return (
    <footer className="section-padding py-12 border-t border-border">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p
            className="text-lg font-bold tracking-tight mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {personal.name.full.toUpperCase()}
          </p>
          <p className="text-label-sm">
            {personal.field.toUpperCase()} — {personal.roleShort.toUpperCase()}
          </p>
        </div>

        <p className="text-label-sm">
          &copy; {personal.year} {personal.name.full}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
