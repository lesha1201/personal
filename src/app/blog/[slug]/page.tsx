import { allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';

import { MDXContent, PageHeading, Section } from '@/components';
import { getMetadata } from '@/metadata';

type PageProps = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams(): PageProps['params'][] {
  return allPosts.map(post => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const post = allPosts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return getMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
  });
}

export default function BlogPost({ params }: PageProps) {
  const post = allPosts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <Section className="m-auto max-w-3xl gap-4 pb-3 pt-9 sm:pb-5">
        <PageHeading>{post.title}</PageHeading>
        <time
          suppressHydrationWarning
          dateTime={post.date}
          className="text-sm text-base-text-weak"
        >
          {dayjs(post.date).format('MMMM D, YYYY')}
        </time>
      </Section>

      <Section className="m-auto block max-w-3xl">
        <MDXContent code={post.body.code} />
      </Section>
    </article>
  );
}
