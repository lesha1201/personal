import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import * as R from 'remeda';

import {
  PageHeading,
  Section,
  WritingGroup,
  WritingGroupTitle,
  WritingList,
  WritingPreview,
} from '../components';
import { groupPostsByYear } from '../content';

const title = 'Blog';
const description = 'A collection of my written experience and thoughts.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function Blog() {
  const postsByYear = R.pipe(allPosts, groupPostsByYear, R.toPairs);

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
                  key={post.url}
                  url={post.url}
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
