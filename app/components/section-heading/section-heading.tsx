import React from 'react';

import { tclsx } from '@/lib/ui';

export type SectionHeadingProps = React.ComponentPropsWithoutRef<'h2'>;

export function SectionHeading({
  className,
  children,
  ...rest
}: SectionHeadingProps) {
  return (
    <h2 className={tclsx('text-2xl font-bold', className)} {...rest}>
      {children}
    </h2>
  );
}
