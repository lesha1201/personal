import { allProjects } from 'contentlayer/generated';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { MDXContent, PageHeading, Section } from '@/components';
import { Button, Chip, ChipGroup, ChipLabel } from '@/lib/ui';
import { getMetadata } from '@/metadata';

type PageProps = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams(): PageProps['params'][] {
  return allProjects.map(project => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const project = allProjects.find(project => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return getMetadata({ title: project.title, description: project.excerpt });
}

export default function Project({ params }: PageProps) {
  const project = allProjects.find(project => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <Section className="gap-4 pb-3 pt-9 sm:pb-5">
        <PageHeading>{project.title}</PageHeading>
      </Section>

      <div className="mb-10 mt-5 flex flex-col items-start gap-7">
        <div className="relative w-full pt-[56.4706%]">
          <Image
            className="rounded-lg object-cover"
            src={project.cover}
            sizes="60rem"
            quality={85}
            fill
            alt={`Cover image of ${project.title}`}
          />
        </div>

        <div className="flex w-full flex-wrap items-center justify-between gap-7">
          {project.stack && project.stack.length > 0 && (
            <div>
              <div className="mb-3 text-sm text-base-text-weak">
                Technologies
              </div>
              <ChipGroup>
                {project.stack.map(item => (
                  <Chip key={item}>
                    <ChipLabel>{item}</ChipLabel>
                  </Chip>
                ))}
              </ChipGroup>
            </div>
          )}

          <div className="flex gap-6">
            {project.github && (
              <Button
                as="a"
                target="_blank"
                href={project.github}
                variant="outlined"
              >
                GitHub
              </Button>
            )}
            {project.demo && (
              <Button
                as="a"
                target="_blank"
                href={project.demo}
                variant="filled"
              >
                Demo
              </Button>
            )}
          </div>
        </div>
      </div>

      <div>
        <MDXContent code={project.body.code} />
      </div>
    </article>
  );
}
