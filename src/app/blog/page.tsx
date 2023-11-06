import * as R from 'remeda';

import {
  PageHeading,
  Section,
  WritingGroup,
  WritingGroupTitle,
  WritingList,
  WritingPreview,
} from '@/components';
import { getPosts, groupPostsByYear } from '@/content';
import { getMetadata } from '@/metadata';
import { to } from '@/routing';

export const metadata = getMetadata({
  title: 'Blog',
  description: 'A collection of my written experience and thoughts.',
});

export default function Blog() {
  const postsByYear = R.pipe(
    getPosts(),
    groupPostsByYear,
    R.toPairs,
    R.sortBy([([year]) => Number.parseInt(year), 'desc']),
  );

  return (
    <>
      <Section className="gap-4 pb-3 pt-9 sm:pb-5">
        <PageHeading>Blog</PageHeading>
      </Section>

      <Section className="gap-9">
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
      </Section>
    </>
  );
}
