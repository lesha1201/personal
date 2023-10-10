import React from 'react';

import { Box, createAsComponent, tclsx } from '@/lib/ui';

export type PropertyValueProps = {};

export const PropertyValue = createAsComponent<'div', PropertyValueProps>(
  function PropertyValue({ children, className, ...rest }, ref) {
    return (
      <Box
        ref={ref}
        className={tclsx(
          'truncate whitespace-normal text-base font-semibold',
          className,
        )}
        {...rest}
      >
        {children}
      </Box>
    );
  },
);
