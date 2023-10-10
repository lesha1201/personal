import React from 'react';

export type DetailsGroupTitleProps = {
  children: React.ReactNode;
};

export function DetailsGroupTitle({ children }: DetailsGroupTitleProps) {
  return <div className="text-lg font-bold">{children}</div>;
}
