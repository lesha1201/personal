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

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: { type: 'string', required: true },
    cover: { type: 'string', required: true },
    stack: { type: 'list', of: { type: 'string' }, required: false },
    github: { type: 'string', required: false },
    demo: { type: 'string', required: false },
    pinned: { type: 'boolean', required: false },
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
  documentTypes: [Post, Project],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { keepBackground: false }]],
  },
});
