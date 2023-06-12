import { tv, VariantProps } from 'tailwind-variants';

import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { Box } from '../box';

/*-- Styles --*/

const button = tv({
  base: 'inline-flex items-center justify-center select-none whitespace-nowrap font-bold text-base bg-white text-black focus-outline px-5 py-4 transition leading-none border rounded border-transparent',
  variants: {
    variant: {
      filled: '',
      outlined: '',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
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
        'bg-primary-surface text-primary-surface-text-strong hover:bg-transparent hover:text-primary-text hover:border-primary-border',
    },
    {
      variant: 'outlined',
      color: 'primary',
      class:
        'bg-transparent border-base-border text-primary-text hover:border-primary-border',
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
