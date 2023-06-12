import dayjs from 'dayjs';

export const FULL_NAME = 'Alexey Ryabov';

export const EMAIL = 'ryabovlesha@gmail.com';

export const CAREER_START_DATE = '2018-10-01';

export const EXPERIENCE_YEARS = Math.round(
  dayjs().diff(CAREER_START_DATE, 'year', true),
);

export const GITHUB_URL = 'https://github.com/lesha1201';
