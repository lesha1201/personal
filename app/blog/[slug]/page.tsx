import { allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';

import { MDXContent, PageHeading, Section } from '@/app/components';

type PageProps = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post._raw.flattenedPath.split('/').at(-1),
  }));
}

export function generateMetadata({ params }: PageProps) {
  const post = allPosts.find(post =>
    post._raw.flattenedPath.endsWith(params.slug),
  );

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = allPosts.find(post =>
    post._raw.flattenedPath.endsWith(params.slug),
  );

  if (!post) {
    notFound();
  }

  return (
    <article>
      <Section className="gap-4 pb-3 pt-9 sm:pb-5">
        <PageHeading>{post.title}</PageHeading>
        <time dateTime={post.date} className="text-sm">
          {dayjs(post.date).format('MMMM D, YYYY')}
        </time>
      </Section>

      <Section className="block">
        <MDXContent code={post.body.code} />
      </Section>
    </article>
  );
}
