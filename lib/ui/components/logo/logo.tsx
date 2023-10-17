import { tv } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const logo = tv({
  base: 'text-base font-bold text-primary-text',
});

/*-- Main --*/

export type LogoProps = {};

export const Logo = createAsComponent<'div', LogoProps>(function Logo(
  { className, ...rest },
  ref,
) {
  const cn = tclsx(logo(), className);

  return (
    <Box ref={ref} className={cn} {...rest}>
      aryabov
    </Box>
  );
});
