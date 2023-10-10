import { tv } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const chipGroup = tv({
  base: 'flex flex-wrap gap-3',
});

/*-- Main --*/

export interface ChipGroupProps {}

export const ChipGroup = createAsComponent<'div', ChipGroupProps>(
  function ChipGroup({ children, className, ...rest }, ref) {
    const cn = tclsx(chipGroup(), className);

    return (
      <Box ref={ref} className={cn} {...rest}>
        {children}
      </Box>
    );
  },
);
