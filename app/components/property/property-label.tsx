import React from 'react';

import { tclsx } from '@/lib/ui';

export type PropertyLabelProps = React.ComponentPropsWithoutRef<'div'>;

export function PropertyLabel({
  children,
  className,
  ...rest
}: PropertyLabelProps) {
  return (
    <div
      className={tclsx('mb-1 truncate text-sm text-base-text-weak', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
