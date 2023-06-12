import React from 'react';

export type WritingGroupTitleProps = {
  children: React.ReactNode;
};

export function WritingGroupTitle({ children }: WritingGroupTitleProps) {
  return <div className="text-lg font-bold">{children}</div>;
}
