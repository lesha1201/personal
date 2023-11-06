export const to = {
  home: () => '/',
  aboutMe: () => '/about-me',
  blog: () => '/blog',
  blogPost: (slug: string) => `/blog/${slug}`,
  projects: () => '/projects',
  project: (slug: string) => `/projects/${slug}`,
};
