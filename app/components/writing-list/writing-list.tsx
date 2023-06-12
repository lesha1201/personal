import React from 'react';

export type WritingListProps = {
  children: React.ReactNode;
};

export function WritingList({ children }: WritingListProps) {
  return <div className="flex flex-col gap-6">{children}</div>;
}
