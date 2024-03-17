import Image, { ImageProps } from 'next/image';
import NextLink from 'next/link';

export type ProjectPreviewProps = {
  url: string;
  title: string;
  excerpt: string;
  coverImage: ImageProps['src'];
};

export function ProjectPreview({
  url,
  title,
  excerpt,
  coverImage,
}: ProjectPreviewProps) {
  return (
    <NextLink
      href={url}
      className="group basis-1/2 rounded-xl border border-base-border"
    >
      <div className="bg-neutral-300 relative rounded-t-[inherit] pt-[56.4706%]">
        <Image
          className="absolute inset-0 rounded-[inherit] object-cover grayscale transition-all group-hover:grayscale-0"
          src={coverImage}
          sizes="31.25rem"
          quality={80}
          fill
          alt={`Cover image of ${title}`}
        />
      </div>

      <div className="p-5 pb-6">
        <div className="mb-3 text-lg font-bold">{title}</div>
        <p className="text-base-text-weak">{excerpt}</p>
      </div>
    </NextLink>
  );
}
