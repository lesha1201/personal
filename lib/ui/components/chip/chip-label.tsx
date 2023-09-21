import { tv } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const chipLabel = tv({
  base: 'truncate text-sm',
});

/*-- Main --*/

export interface ChipLabelProps {}

export const ChipLabel = createAsComponent<'span', ChipLabelProps>(
  function ChipLabel({ as = 'span', children, className, ...rest }, ref) {
    const cn = tclsx(chipLabel(), className);

    return (
      <Box ref={ref} as={as} className={cn} {...rest}>
        {children}
      </Box>
    );
  },
);
