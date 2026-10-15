import { llms, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docsContentRoute, docsImageRoute, docsRoute, userRoute } from './shared';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import type { Root, Folder } from 'fumadocs-core/page-tree';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

const userDocs = defineDocs({
  dir: 'content/user',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute, 
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const userSource = loader({
  baseUrl: userRoute,
  source: userDocs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

/**
 * Combined page tree: sidebar menampilkan dua grup collapsible
 * 'Developer' (docs) dan 'User' (user docs) sekaligus.
 */
export function getCombinedPageTree(): Root {
  const docsTree = source.getPageTree();
  const userTree = userSource.getPageTree();

  const developerFolder: Folder = {
    type: 'folder',
    name: 'Sisi Developer',
    defaultOpen: false,
    collapsible: true,
    children: docsTree.children,
  };

  const userFolder: Folder = {
    type: 'folder',
    name: 'Sisi User',
    defaultOpen: false,
    collapsible: true,
    children: userTree.children,
  };

  return {
    name: '',
    children: [userFolder, developerFolder],
  };
}

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});

export const userLlms = llms(userSource, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});
