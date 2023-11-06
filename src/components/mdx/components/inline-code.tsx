import React from 'react';

import { tclsx } from '@/lib/ui';
import css from './inline-code.module.css';

export type InlineCodeProps = React.HTMLAttributes<HTMLElement>;

export function InlineCode({ className, ...rest }: InlineCodeProps) {
  return <code className={tclsx(css.code, className)} {...rest} />;
}
