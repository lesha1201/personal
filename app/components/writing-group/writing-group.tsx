import React from 'react';

export type WritingGroupProps = {
  children: React.ReactNode;
};

export function WritingGroup({ children }: WritingGroupProps) {
  return <div className="flex flex-col gap-7">{children}</div>;
}
