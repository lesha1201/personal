import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';

/* Documents/Models */

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: post => post._raw.flattenedPath,
    },
  },
}));

/* Source */

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { keepBackground: false }]],
  },
});
