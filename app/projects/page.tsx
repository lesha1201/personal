import {
  PageHeading,
  ProjectGrid,
  ProjectPreview,
  Section,
} from '../components';
import { getProjects } from '../content';
import { getMetadata } from '../metadata';

export const metadata = getMetadata({
  title: 'Projects',
  description: "A list of side-projects I've worked on.",
});

export default function Projects() {
  const projects = getProjects();

  return (
    <>
      <Section className="flex gap-4 pb-3 pt-9 sm:pb-5">
        <PageHeading>Projects</PageHeading>
      </Section>

      <Section>
        <ProjectGrid>
          {projects.map(project => (
            <ProjectPreview
              key={project.url}
              url={project.url}
              title={project.title}
              excerpt={project.excerpt}
              coverImage={project.cover}
            />
          ))}
        </ProjectGrid>
      </Section>
    </>
  );
}
