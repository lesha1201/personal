import { Post } from 'contentlayer/generated';
import * as R from 'remeda';

export function sortPostsByDate(
  posts: Post[],
  direction: 'asc' | 'desc' = 'desc',
) {
  return R.sortBy(posts, [x => new Date(x.date), direction]);
}

export function groupPostsByYear(posts: Post[]) {
  return R.pipe(
    posts,
    sortPostsByDate,
    R.groupBy(x => new Date(x.date).getUTCFullYear()),
  );
}
