import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { Link, tclsx } from '@/lib/ui';
import { Code } from './components/code';
import { Image } from './components/image';
import { InlineCode } from './components/inline-code';

/*-- MDX Components --*/

const components: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={tclsx(
        'mt-12 text-2xl font-bold first:mt-0 sm:text-3xl',
        className,
      )}
      {...props}
    />
  ),

  h3: ({ className, ...props }) => (
    <h3
      className={tclsx(
        'mt-12 text-xl font-bold first:mt-0 sm:text-2xl',
        className,
      )}
      {...props}
    />
  ),

  h4: ({ className, ...props }) => (
    <h4
      className={tclsx(
        'mt-12 text-lg font-bold first:mt-0 sm:text-xl',
        className,
      )}
      {...props}
    />
  ),

  h5: ({ className, ...props }) => (
    <h5
      className={tclsx(
        'mt-12 text-base font-bold first:mt-0 sm:text-lg',
        className,
      )}
      {...props}
    />
  ),

  h6: ({ className, ...props }) => (
    <h6
      className={tclsx(
        'mt-12 text-base font-bold text-base-text-subtle first:mt-0 sm:text-lg',
        className,
      )}
      {...props}
    />
  ),

  p: ({ className, ...props }) => (
    <p
      className={tclsx(
        'mt-[1.65em] text-base/relaxed text-base-text-weak first:mt-0 sm:text-lg/relaxed',
        className,
      )}
      {...props}
    />
  ),

  strong: ({ className, ...props }) => (
    <strong
      className={tclsx('font-semibold text-base-text-light', className)}
      {...props}
    />
  ),

  em: ({ className, ...props }) => (
    <em
      className={tclsx('font-medium text-base-text-light', className)}
      {...props}
    />
  ),

  ul: ({ className, ...props }) => (
    <ul
      className={tclsx(
        'my-[1.65em] list-inside list-disc text-base text-base-text-weak marker:text-base-text-strong sm:text-lg',
        className,
      )}
      {...props}
    />
  ),

  ol: ({ className, ...props }) => (
    <ol
      className={tclsx(
        'my-[1.65em] list-inside list-decimal text-base text-base-text-weak marker:text-base-text-strong sm:text-lg',
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
      className={tclsx(
        'mt-[1.65em] border-l-2 pl-4 italic first:mt-0',
        className,
      )}
      {...props}
    />
  ),

  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <Link variant="underline" {...props} />
  ),

  pre: Code,

  code: InlineCode,

  Image,
};

/*-- Main --*/

export type MDXContentProps = {
  code: string;
};

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
