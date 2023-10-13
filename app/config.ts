import dayjs from 'dayjs';

export const FULL_NAME = 'Alexey Ryabov';

export const EMAIL = 'ryabovlesha@gmail.com';

export const CAREER_START_DATE = '2018-10-01';

export const EXPERIENCE_YEARS = Math.round(
  dayjs().diff(CAREER_START_DATE, 'year', true),
);

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
