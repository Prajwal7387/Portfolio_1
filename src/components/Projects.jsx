import SectionReveal from './SectionReveal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-gap">
      <SectionReveal>
        <span className="text-label text-accent mb-6 block">( 02 )</span>
      </SectionReveal>

      <SectionReveal>
        <h2 className="text-display-xl mb-16 md:mb-24">
          SELECTED<br />PROJECTS
        </h2>
      </SectionReveal>

      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="divider mt-8" />
    </section>
  );
}
