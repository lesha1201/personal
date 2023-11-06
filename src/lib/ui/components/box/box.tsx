import React from 'react';

import { createAsComponent } from '../../utils/react';

export interface BoxProps {}

export const Box = createAsComponent<'div', BoxProps>(function Box(
  { as: Component = 'div', ...rest },
  ref,
) {
  return <Component ref={ref} {...rest} />;
});
