import { MetadataRoute } from 'next';
import * as R from 'remeda';

import { SITE_URL } from '../config';
import { getPosts, getProjects } from '../content';
import { to } from '../routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const postRoutes = getPosts().map(post => ({
    url: `${SITE_URL}${to.blogPost(post.slug)}`,
    lastModified: post.date,
  }));

  const projectRoutes = getProjects().map(project => ({
    url: `${SITE_URL}${to.project(project.slug)}`,
  }));

  const restRoutes = R.pipe(
    to,
    R.omit(['blogPost', 'project']),
    R.toPairs,
    R.map(([, route]) => ({
      url: `${SITE_URL}${route()}`,
    })),
  );

  return [...restRoutes, ...projectRoutes, ...postRoutes];
}
