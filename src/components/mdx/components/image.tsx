import NextImage, { ImageProps as NextImageProps } from 'next/image';
import React from 'react';

export type ImageProps = NextImageProps & {
  caption?: React.ReactNode;
};

export function Image({ caption, ...rest }: ImageProps) {
  return (
    <figure className="relative my-[1.65em] first:mt-0">
      <NextImage className="rounded-lg" sizes="(max-width: 48rem) 100vw, 48rem" {...rest} />
      {caption && (
        <figcaption className="mt-2 text-xs text-base-text-subtle">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
