// TODO: remove 'use client' and move tags to a separate component because
//       they use some client-side code.
'use client';

import React from 'react';

import { Chip, ChipLabel, Link } from '@/lib/ui';

export type WritingPreviewProps = {
  date: string;
  excerpt: string;
  tags: string[];
};

export function WritingPreview({ date, excerpt, tags }: WritingPreviewProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      <div className="text-neutral-400 whitespace-nowrap text-sm leading-7">
        {date}
      </div>
      <div className="flex flex-col gap-3">
        <Link href="#" className="text-base sm:text-lg">
          {excerpt}
        </Link>
        <div className="flex gap-4">
          {tags.map(tag => (
            <Chip as="button" key={tag} onClick={() => alert(tag)}>
              <ChipLabel>{tag}</ChipLabel>
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}
