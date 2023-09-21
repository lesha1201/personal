import { allProjects, Project } from 'contentlayer/generated';
import * as R from 'remeda';

export function sortProjectsByDate(
  projects: Project[],
  direction: 'asc' | 'desc' = 'desc',
) {
  return R.sortBy(projects, [x => new Date(x.date), direction]);
}

export type GetProjectsOptions = {
  limit?: number;
  filter?: (x: Project) => boolean;
};

export function getProjects({
  limit = Infinity,
  filter,
}: GetProjectsOptions = {}) {
  return R.pipe(
    allProjects,
    filter ? R.filter(filter) : R.identity,
    sortProjectsByDate,
    R.take(limit),
  );
}

export type GetPinnedProjectsOptions = Omit<GetProjectsOptions, 'filter'>;

export function getPinnedProjects(options?: GetPinnedProjectsOptions) {
  return getProjects({ ...options, filter: x => x.pinned === true });
}
