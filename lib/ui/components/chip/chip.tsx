import { tv } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const chip = tv({
  base: 'bg-base-surface text-base-surface-text-weak inline-flex items-center rounded-sm px-2 py-1 text-sm sm:text-base transition select-none hover:text-base-surface-text-strong',
});

/*-- Main --*/

export interface ChipProps {}

// TODO: think about naming
export const Chip = createAsComponent<'div', ChipProps>(function Chip(
  { children, className, ...rest },
  ref,
) {
  const cn = tclsx(chip(), className);

  return (
    <Box ref={ref} className={cn} {...rest}>
      {children}
    </Box>
  );
});
