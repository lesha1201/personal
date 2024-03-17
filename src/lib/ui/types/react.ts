import React from 'react';

import { Prefer } from './utils';

export type ExtractRefElement<T> =
  T extends React.RefObject<infer E> ? E : never;

export type As = React.ElementType;

/**
 * Adds props `as` and `css` from styled component.
 */
export type PropsWithAs<Props, Component extends As = As> = Prefer<
  {
    as?: Component;
  },
  Props
>;

/**
 * Adds `as` prop and merges `Props` with props from As `Component`.
 */
export type AsProps<Component extends As = As, Props = {}> = Prefer<
  PropsWithAs<Props, Component>,
  React.ComponentPropsWithRef<Component>
>;

export interface ComponentWithAs<Props = {}, Component extends As = As>
  extends React.ExoticComponent<Props> {
  <AsComponent extends As = Component>(
    props: Prefer<
      PropsWithAs<Props, AsComponent>,
      React.ComponentProps<AsComponent>
    >,
  ): React.ReactElement | null;
}

export interface ForwardRefComponentWithAs<
  Props = {},
  Component extends As = As,
> extends React.ForwardRefExoticComponent<AsProps<Component, Props>> {
  <AsComponent extends As = Component>(
    props: AsProps<AsComponent, Props>,
  ): React.ReactElement | null;
}
