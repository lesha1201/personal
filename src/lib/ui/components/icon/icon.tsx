import { tv, VariantProps } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const icon = tv({
  base: 'inline-flex h-[1em] w-[1em] shrink-0',
  variants: {
    size: {
      md: 'text-2xl',
    },
  },
});

type IconVariants = VariantProps<typeof icon>;

/*-- Main --*/

export interface IconProps extends IconVariants {}

export const Icon = createAsComponent<'span', IconProps>(function Icon(
  { as = 'span', className, children, size, ...rest },
  ref,
) {
  const cn = tclsx(icon({ size }), className);

  return (
    <Box ref={ref} as={as} className={cn} {...rest}>
      {children}
    </Box>
  );
});
