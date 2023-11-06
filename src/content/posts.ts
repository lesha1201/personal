import { allPosts, Post } from 'contentlayer/generated';
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
    R.groupBy(x => new Date(x.date).getUTCFullYear()),
  );
}

export type GetPostsOptions = {
  limit?: number;
};

export function getPosts({ limit = Infinity }: GetPostsOptions = {}) {
  return R.pipe(
    allPosts,
    R.filter(x => !x.hidden),
    sortPostsByDate,
    R.take(limit),
  );
}
