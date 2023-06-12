import React from 'react';

export type PageHeadingProps = React.ComponentPropsWithoutRef<'h1'>;

export function PageHeading({ children, ...rest }: PageHeadingProps) {
  return (
    <h1 {...rest} className="text-4xl">
      {children}
    </h1>
  );
}
