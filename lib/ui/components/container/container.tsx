import { tv } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const container = tv({
  base: 'mx-auto w-full max-w-5xl px-4 sm:px-8',
});

/*-- Main --*/

export interface ContainerProps {}

export const Container = createAsComponent<'div', ContainerProps>(
  function Container({ as = 'div', children, className, ...rest }, ref) {
    const cn = tclsx(container(), className);

    return (
      <Box ref={ref} as={as} className={cn} {...rest}>
        {children}
      </Box>
    );
  },
);
