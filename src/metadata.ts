import { Metadata } from 'next';

import ogImage from '~/public/meta/og-image.png';

export type GetMetadataInput = Omit<
  Metadata,
  'title' | 'description' | 'openGraph'
> & {
  title: NonNullable<Metadata['title']>;
  description: NonNullable<Metadata['description']>;
  image?: NonNullable<Metadata['openGraph']>['images'];
};

const DEFAULT_METADATA: Partial<GetMetadataInput> = {
  image: { url: ogImage.src, width: 1200, height: 630 },
};

export function getMetadata(data: GetMetadataInput): Metadata {
  const { title, description, image, ...rest } = data;

  return {
    ...rest,
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: image || DEFAULT_METADATA.image,
    },
  };
}
