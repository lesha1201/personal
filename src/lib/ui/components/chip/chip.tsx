import { tv } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const chip = tv({
  base: 'inline-flex select-none items-center rounded-sm bg-base-surface px-2 py-1 text-sm text-base-surface-text-weak transition hover:text-base-surface-text-strong sm:text-base',
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
