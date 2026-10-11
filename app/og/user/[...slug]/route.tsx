import { userSource } from '@/lib/source';
import { notFound } from 'next/navigation';
import { generateOGImage } from 'fumadocs-ui/og';
import { appName, getUserPageImageUrl } from '@/lib/shared';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/og/user/[...slug]'>) {
  const { slug } = await params;
  const page = userSource.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: appName,
  });
}

export function generateStaticParams() {
  return userSource.getPages().map((page) => ({
    lang: page.locale,
    slug: getUserPageImageUrl(page).segments,
  }));
}
