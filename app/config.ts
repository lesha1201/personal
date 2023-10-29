import dayjs from 'dayjs';

import eightBaseLogo from '@/public/images/8base-logo.jpg';
import datarocketsLogo from '@/public/images/datarockets-logo.jpg';
import profilesLogo from '@/public/images/profiles-logo.jpg';

export const FULL_NAME = 'Alexey Ryabov';

export const EMAIL = 'ryabovlesha@gmail.com';

export const CAREER_START_DATE = '2018-10-01T00:00';

export const EXPERIENCE_YEARS = Math.round(
  dayjs().diff(CAREER_START_DATE, 'year', true),
);

export const WORK_EXPERIENCE = [
  {
    position: 'Full Stack Engineer',
    company: 'datarockets',
    image: datarocketsLogo,
    startDate: '2020-11-01T00:00',
    endDate: null,
    description:
      'At datarockets, I had an opportunity to be a team lead and an enginnering manager of one team. As a team lead, I was closely connected with the client, planed the work for the near future, estimated it, ensured that everything works well. As EM, I was responsible for making sure that everyone on the team is happy, building a growth plan for engineers. I also had experience of being a technical interviewer in the hiring team. As an engineer, I had a chance to work with many different stacks (frontend, backend, desktop app, debian packages, etc.). I successfully implemented UI Kit and redesign of a web app.',
  },
  {
    position: 'Frontend Engineer',
    company: '8base',
    image: eightBaseLogo,
    startDate: '2019-04-01T00:00',
    endDate: '2020-06-01T00:00',
    description:
      '8base is a GraphQL Backend-as-a-Service. I was responsible for developing projects using their platform. I was modeling relational database schemas, creating API using 8base and implementing interfaces by designs.',
  },
  {
    position: 'Frontend Engineer',
    company: 'Profiles',
    image: profilesLogo,
    startDate: '2018-10-01T00:00',
    endDate: '2019-02-01T00:00',
    description:
      'Profiles is a service for specialists from different domains. Users can easily find some specialists and the specialists can engage users. I was responsible for developing frontend of Profiles.',
  },
];

export const DESCRIPTION = `Software engineer mainly focused on frontend with about ${EXPERIENCE_YEARS} years of experience who always pays attention to details and thinks about the end users of a product.`;

export const GITHUB_USERNAME = 'lesha1201';
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const TELEGRAM_USERNAME = 'lesha1201';
export const TELEGRAM_URL = `https://t.me/${TELEGRAM_USERNAME}`;

export const STACK = [
  'TypeScript',
  'Next.js',
  'React',
  'CSS-in-JS',
  'Tailwind',
  'vanilla-extract',
  'Node.js',
  'Elixir',
  'Phoenix',
  'GraphQL',
  'SQL',
  'Docker',
  'Git',
  'Jest',
  'Playwright',
];

export const INTERESTS = [
  'Gaming',
  'Guitar',
  'Foreign languages',
  'Digital art',
  'Traveling',
];

export const TIME_ZONE = 'UTC+3';
