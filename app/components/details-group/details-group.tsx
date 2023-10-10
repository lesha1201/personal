import React from 'react';

export type DetailsGroupProps = {
  children: React.ReactNode;
};

export function DetailsGroup({ children }: DetailsGroupProps) {
  return <div className="flex flex-col gap-6">{children}</div>;
}
