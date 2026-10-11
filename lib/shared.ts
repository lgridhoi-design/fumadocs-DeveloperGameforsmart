import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Memory-Quizez Tutorial';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const userRoute = '/user';
export const userImageRoute = '/og/user';
export const userContentRoute = '/llms.mdx/user';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'gameforsmart',
  repo: 'gameforsmart-tutorial',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);
const getUserContentUrl = createGetUrl(userContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

export function getUserPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getUserContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);
const getUserImageUrl = createGetUrl(userImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}

export function getUserPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getUserImageUrl(segments, page.locale) };
}
