import NextLink from 'next/link';
import * as R from 'remeda';

import { Button, Link } from '@/lib/ui';
import {
  PageHeading,
  ProjectGrid,
  ProjectPreview,
  Section,
  SectionHeading,
  WritingGroup,
  WritingGroupTitle,
  WritingList,
  WritingPreview,
} from './components';
import { EMAIL, EXPERIENCE_YEARS, FULL_NAME } from './config';
import { getPinnedProjects, getPosts, groupPostsByYear } from './content';
import { to } from './routing';

const POSTS_PREVIEWS_COUNT = 3;
const PROJECTS_PREVIEWS_COUNT = 2;

export default function Home() {
  const postsByYear = R.pipe(
    getPosts({ limit: POSTS_PREVIEWS_COUNT }),
    groupPostsByYear,
    R.toPairs,
    R.sortBy([([year]) => Number.parseInt(year), 'desc']),
  );

  const projects = getPinnedProjects({ limit: PROJECTS_PREVIEWS_COUNT });

  return (
    <>
      <Section className="pb-3 pt-9 sm:pb-5">
        <PageHeading>{FULL_NAME}</PageHeading>
      </Section>

      <Section className="gap-7">
        <p className="text-base text-base-text-weak sm:text-lg">
          I&apos;m a software engineer mainly focused on frontend with about{' '}
          {EXPERIENCE_YEARS} years of experience. In my work, I always pay
          attention to details and think about the end users of a product. I
          care about performance, accessibility, UI/UX, maintainability and
          scalability.
        </p>

        <Button as={NextLink} href={to.aboutMe()}>
          About me
        </Button>
      </Section>

      <Section className="gap-9">
        <SectionHeading>Writing</SectionHeading>

        {postsByYear.map(([year, posts]) => (
          <WritingGroup key={year}>
            <WritingGroupTitle>{year}</WritingGroupTitle>

            <WritingList>
              {posts.map(post => (
                <WritingPreview
                  key={post.slug}
                  url={to.blogPost(post.slug)}
                  date={post.date}
                  title={post.title}
                />
              ))}
            </WritingList>
          </WritingGroup>
        ))}

        <Button as={NextLink} href={to.blog()} variant="outlined">
          Read all
        </Button>
      </Section>

      <Section className="gap-9">
        <SectionHeading>Projects</SectionHeading>

        <ProjectGrid>
          {projects.map(project => (
            <ProjectPreview
              key={project.slug}
              url={to.project(project.slug)}
              title={project.title}
              excerpt={project.excerpt}
              coverImage={project.cover}
            />
          ))}
        </ProjectGrid>

        <Button as={NextLink} href={to.projects()} variant="outlined">
          View all
        </Button>
      </Section>

      <Section className="gap-9">
        <SectionHeading>Connect</SectionHeading>

        <p className="text-base-text-weak">
          Email me at{' '}
          <Link href={`mailto:${EMAIL}`} variant="underline">
            {EMAIL}
          </Link>
        </p>
      </Section>
    </>
  );
}
