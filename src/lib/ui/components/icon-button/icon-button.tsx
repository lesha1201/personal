import { tv, VariantProps } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const iconButton = tv({
  base: 'inline-flex select-none items-center justify-center rounded p-2 text-base transition hover:bg-base-text-strong/[0.08]',
  variants: {
    /**
     * Specifies how `padding` should behave.
     * - `outer` - adds a negative `margin` to imitate padding outside. Useful
     *             when you want button to have a padding to improve
     *             accessability but don't want it to affect a layout.
     * - `inner` - a default behavior of padding.
     */
    paddingMode: {
      outer: '-m-2',
      inner: '',
    },
  },
});

type IconButtonVariants = VariantProps<typeof iconButton>;

/*-- Main --*/

export interface IconButtonProps extends IconButtonVariants {}

export const IconButton = createAsComponent<'button', IconButtonProps>(
  function IconButton(
    { as = 'button', children, className, paddingMode, ...rest },
    ref,
  ) {
    const cn = tclsx(iconButton({ paddingMode }), className);

    return (
      <Box ref={ref} as={as} className={cn} {...rest}>
        {children}
      </Box>
    );
  },
);
