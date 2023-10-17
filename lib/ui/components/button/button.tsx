import { tv, VariantProps } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const button = tv({
  base: 'focus-outline inline-flex select-none items-center justify-center whitespace-nowrap rounded border border-transparent bg-white px-5 py-4 text-base font-bold leading-none text-black transition',
  variants: {
    variant: {
      filled: '',
      outlined: '',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
    },
    color: {
      primary: '',
    },
    width: {
      auto: 'w-auto',
      full: 'w-full',
    },
  },
  compoundVariants: [
    {
      variant: 'filled',
      color: 'primary',
      class:
        'bg-primary-surface text-primary-surface-text-strong hover:border-primary-border hover:bg-transparent hover:text-primary-text',
    },
    {
      variant: 'outlined',
      color: 'primary',
      class:
        'border-base-border bg-transparent text-primary-text hover:border-primary-border',
    },
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'primary',
  },
});

type ButtonVariants = VariantProps<typeof button>;

/*-- Main --*/

export interface ButtonProps extends ButtonVariants {}

export const Button = createAsComponent<'button', ButtonProps>(function Button(
  {
    as = 'button',
    children,
    className,
    color,
    width,
    variant,
    disabled,
    tabIndex,
    ...rest
  },
  ref,
) {
  const cn = tclsx(
    button({
      color,
      width,
      variant,
      disabled,
    }),
    className,
  );

  return (
    <Box
      ref={ref}
      as={as}
      className={cn}
      disabled={disabled}
      tabIndex={disabled ? -1 : tabIndex}
      {...rest}
    >
      {children}
    </Box>
  );
});
