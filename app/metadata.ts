import { Metadata } from 'next';

import ogImage from './og-image.png';

export type GetMetadataInput = {
  title: NonNullable<Metadata['title']>;
  description: NonNullable<Metadata['description']>;
  image?: NonNullable<Metadata['openGraph']>['images'];
};

const DEFAULT_METADATA: Partial<GetMetadataInput> = {
  image: { url: ogImage.src, width: 1200, height: 630 },
};

export function getMetadata(data: GetMetadataInput): Metadata {
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    ),
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.image || DEFAULT_METADATA.image,
    },
  };
}
