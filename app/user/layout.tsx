import { userSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/user'>) {
  return (
    <DocsLayout tree={userSource.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
