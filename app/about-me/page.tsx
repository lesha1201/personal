import { Metadata } from 'next';
import Image from 'next/image';
import NextLink from 'next/link';

import { Button, Chip, ChipGroup, ChipLabel, Link, tclsx } from '@/lib/ui';
import profilePortrait from '@/public/images/profile-portrait.jpg';
import {
  DetailsGroup,
  DetailsGroupTitle,
  PageHeading,
  ProjectGrid,
  ProjectPreview,
  Property,
  PropertyLabel,
  PropertyValue,
  Section,
  SectionHeading,
} from '../components';
import {
  EMAIL,
  EXPERIENCE_YEARS,
  GITHUB_URL,
  GITHUB_USERNAME,
  INTERESTS,
  STACK,
  TELEGRAM_URL,
  TELEGRAM_USERNAME,
  TIME_ZONE,
} from '../config';
import { getPinnedProjects } from '../content';
import css from './page.module.css';

const PROJECTS_PREVIEWS_COUNT = 2;

const title = 'About';

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function AboutMe() {
  const projects = getPinnedProjects({ limit: PROJECTS_PREVIEWS_COUNT });

  return (
    <>
      <Section className="gap-4 pb-3 pt-9 sm:pb-5">
        <PageHeading>About Me</PageHeading>
      </Section>

      <Section>
        <div className={tclsx(css.profileGrid, 'gap-8 md:gap-y-6 lg:gap-x-10')}>
          <div className={tclsx(css.profileGridTitle, 'text-3xl lg:text-4xl')}>
            Hi, I&apos;m Alex and I&apos;m a Software&nbsp;Engineer.
          </div>

          <div
            className={tclsx(
              css.profileGridImage,
              'mx-auto aspect-square w-64 lg:w-72',
            )}
          >
            <Image
              className="rounded-xl"
              src={profilePortrait}
              alt="Profile portrait"
              width={350}
              height={350}
              quality={90}
              placeholder="blur"
            />
          </div>

          <p
            className={tclsx(
              css.profileGridDescription,
              'text-base text-base-text-weak sm:text-lg',
            )}
          >
            I&apos;m a software engineer mainly focused on frontend with about{' '}
            {EXPERIENCE_YEARS} years of experience. In my work, I always pay
            attention to details and think about the end users of a product. I
            care about performance, accessibility, UI/UX, maintainability and
            scalability. I&apos;m passionate about open-source so in my free
            time I spend time learning different open-source projects and
            contributing to them. Engaging in open-source projects allows me to
            learn new practices, technologies, and patterns, continuously
            expanding and enhancing my own skills.
          </p>
        </div>
      </Section>

      <Section className="gap-9">
        <SectionHeading>Details</SectionHeading>

        <div className="flex flex-col gap-7 sm:flex-row sm:gap-9 md:gap-11">
          <div className="flex w-full shrink-0 flex-col gap-5 rounded-xl border border-base-border p-5 sm:w-72 sm:gap-6 sm:p-6 md:w-80">
            <Property>
              <PropertyLabel>Experience</PropertyLabel>
              <PropertyValue>{EXPERIENCE_YEARS} years</PropertyValue>
            </Property>

            <Property>
              <PropertyLabel>Time zone</PropertyLabel>
              <PropertyValue>{TIME_ZONE}</PropertyValue>
            </Property>

            <Property>
              <PropertyLabel>Email</PropertyLabel>
              <PropertyValue
                as={Link}
                href={`mailto:${EMAIL}`}
                variant="underline"
              >
                {EMAIL}
              </PropertyValue>
            </Property>

            <Property>
              <PropertyLabel>GitHub</PropertyLabel>
              <PropertyValue
                as={Link}
                href={GITHUB_URL}
                target="_blank"
                variant="underline"
              >
                {GITHUB_USERNAME}
              </PropertyValue>
            </Property>

            <Property>
              <PropertyLabel>Telegram</PropertyLabel>
              <PropertyValue
                as={Link}
                href={TELEGRAM_URL}
                target="_blank"
                variant="underline"
              >
                {TELEGRAM_USERNAME}
              </PropertyValue>
            </Property>
          </div>

          <div className="flex flex-col gap-7 sm:gap-9 md:gap-11">
            <DetailsGroup>
              <DetailsGroupTitle>Stack</DetailsGroupTitle>
              <ChipGroup>
                {STACK.map(item => (
                  <Chip key={item}>
                    <ChipLabel>{item}</ChipLabel>
                  </Chip>
                ))}
              </ChipGroup>
            </DetailsGroup>

            <DetailsGroup>
              <DetailsGroupTitle>Interests</DetailsGroupTitle>
              <ChipGroup>
                {INTERESTS.map(item => (
                  <Chip key={item}>
                    <ChipLabel>{item}</ChipLabel>
                  </Chip>
                ))}
              </ChipGroup>
            </DetailsGroup>
          </div>
        </div>
      </Section>

      <Section className="gap-9">
        <SectionHeading>Projects</SectionHeading>

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

        <Button as={NextLink} href="/projects" variant="outlined">
          View all
        </Button>
      </Section>
    </>
  );
}
