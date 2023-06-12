import Image, { ImageProps } from 'next/image';
import React from 'react';

export type ProjectPreviewProps = {
  title: string;
  excerpt: string;
  coverImage: ImageProps['src'];
};

export function ProjectPreview({
  title,
  excerpt,
  coverImage,
}: ProjectPreviewProps) {
  return (
    <div className="group basis-1/2 rounded-xl border border-base-border">
      <div className="bg-neutral-300 relative rounded-t-[inherit] pt-[56.4706%]">
        <Image
          className="absolute inset-0 rounded-[inherit] grayscale group-hover:grayscale-0"
          src={coverImage}
          alt={`Cover image of ${title}`}
        />
      </div>

      <div className="p-5 pb-6">
        <div className="mb-3 text-lg font-bold">{title}</div>
        <p className="text-base-text-weak">{excerpt}</p>
      </div>
    </div>
  );
}
