import React from 'react';

export type PropertyProps = React.ComponentPropsWithoutRef<'div'>;

export function Property({ children, ...rest }: PropertyProps) {
  return <div {...rest}>{children}</div>;
}
