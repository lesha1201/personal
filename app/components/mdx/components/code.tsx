import React from 'react';

import { tclsx } from '@/lib/ui';
import css from './code.module.css';

export type CodeProps = React.HTMLAttributes<HTMLPreElement>;

export function Code({ className, ...rest }: CodeProps) {
  return <pre className={tclsx(css.pre, className)} {...rest} />;
}
