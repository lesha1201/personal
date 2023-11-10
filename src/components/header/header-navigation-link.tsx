import React from 'react';

import { createAsComponent, Link, LinkProps } from '@/lib/ui';

export type HeaderNavigationLinkProps = LinkProps;

export const HeaderNavigationLink = createAsComponent<
  'a',
  HeaderNavigationLinkProps
>(function HeaderNavigationLink({ as = 'a', children, ...rest }, ref) {
  return (
    <Link
      ref={ref}
      as={as}
      {...rest}
      className="text-sm text-base-text-weak hover:text-base-text-strong sm:text-base"
    >
      {children}
    </Link>
  );
});
