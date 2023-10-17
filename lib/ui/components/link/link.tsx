import { tv, VariantProps } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const link = tv({
  base: 'focus-outline rounded text-primary-text hover:underline',
  variants: {
    variant: {
      underline: 'underline',
    },
  },
});

type LinkVariants = VariantProps<typeof link>;

/*-- Main --*/

export interface LinkProps extends LinkVariants {}

export const Link = createAsComponent<'a', LinkProps>(function Link(
  { as = 'a', children, className, variant, ...rest },
  ref,
) {
  const cn = tclsx(link({ variant }), className);

  return (
    <Box ref={ref} as={as} className={cn} {...rest}>
      {children}
    </Box>
  );
});
