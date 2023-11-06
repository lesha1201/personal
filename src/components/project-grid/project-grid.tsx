import React from 'react';

export type ProjectGridProps = {
  children: React.ReactNode;
};

export function ProjectGrid({ children }: ProjectGridProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">{children}</div>
  );
}
