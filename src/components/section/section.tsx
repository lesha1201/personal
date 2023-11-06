import React from 'react';

import { tclsx } from '@/lib/ui';

export type SectionProps = React.ComponentPropsWithoutRef<'div'>;

export function Section({ className, children, ...rest }: SectionProps) {
  return (
    <div
      className={tclsx('flex flex-col items-start py-6 sm:py-8', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
