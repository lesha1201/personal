import { ClassNameValue, twJoin, twMerge } from 'tailwind-merge';

export function tclsx(...inputs: ClassNameValue[]) {
  return twMerge(twJoin(...inputs));
}
