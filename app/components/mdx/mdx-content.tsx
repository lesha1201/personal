import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { Link, tclsx } from '@/lib/ui';
import { Code } from './components/code';
import { InlineCode } from './components/inline-code';

/*-- MDX Components --*/

const components: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={tclsx('mb-8 mt-8 text-2xl font-bold', className)}
      {...props}
    />
  ),

  h3: ({ className, ...props }) => (
    <h3
      className={tclsx('mb-8 mt-8 text-xl font-bold', className)}
      {...props}
    />
  ),

  p: ({ className, ...props }) => (
    <p
      className={tclsx(
        'mt-6 text-base text-base-text-weak sm:text-lg',
        className,
      )}
      {...props}
    />
  ),

  // TODO: use a color from the design system
  strong: ({ className, ...props }) => (
    <strong
      className={tclsx('font-semibold text-[#e5e5e5]', className)}
      {...props}
    />
  ),

  em: ({ className, ...props }) => (
    <em className={tclsx('font-medium text-[#e5e5e5]', className)} {...props} />
  ),

  ul: ({ className, ...props }) => (
    <ul
      className={tclsx(
        'my-6 list-inside list-disc text-base text-base-text-weak marker:text-base-text-strong sm:text-lg',
        className,
      )}
      {...props}
    />
  ),

  ol: ({ className, ...props }) => (
    <ol
      className={tclsx(
        'my-6 list-inside list-decimal text-base text-base-text-weak marker:text-base-text-strong sm:text-lg',
        className,
      )}
      {...props}
    />
  ),

  li: ({ className, ...props }) => (
    <li className={tclsx('mt-2 text-base-text-weak', className)} {...props} />
  ),

  blockquote: ({ className, ...props }) => (
    <blockquote
      className={tclsx('mt-6 border-l-2 pl-4 italic', className)}
      {...props}
    />
  ),

  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <Link variant="underline" {...props} />
  ),

  pre: Code,

  code: InlineCode,
};

/*-- Main --*/

export type MDXContentProps = {
  code: string;
};

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
