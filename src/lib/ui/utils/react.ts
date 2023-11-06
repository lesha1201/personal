import React, { ForwardRefRenderFunction } from 'react';

import {
  As,
  AsProps,
  ExtractRefElement,
  ForwardRefComponentWithAs,
} from '../types';

/**
 * React.forwardRef with typed `as` prop.
 */
export function createAsComponent<
  Component extends As = As,
  BaseProps = {},
  Props = AsProps<Component, BaseProps>,
  RefElement = Props extends { ref?: infer R } ? ExtractRefElement<R> : never,
>(render: ForwardRefRenderFunction<RefElement, Props>) {
  return React.forwardRef<RefElement, Props>(
    render,
  ) as unknown as ForwardRefComponentWithAs<BaseProps, Component>;
}
