import { NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { docsContentRoute, docsRoute, userContentRoute, userRoute } from '@/lib/shared';

const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `${docsContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `${docsRoute}{/*path}.md`,
  `${docsContentRoute}{/*path}/content.md`,
);

const { rewrite: rewriteUserDocs } = rewritePath(
  `${userRoute}{/*path}`,
  `${userContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteUserSuffix } = rewritePath(
  `${userRoute}{/*path}.md`,
  `${userContentRoute}{/*path}/content.md`,
);

export default function proxy(request: NextRequest) {
  const result = rewriteSuffix(request.nextUrl.pathname);
  if (result) {
    return NextResponse.rewrite(new URL(result, request.nextUrl));
  }

  const userResult = rewriteUserSuffix(request.nextUrl.pathname);
  if (userResult) {
    return NextResponse.rewrite(new URL(userResult, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const result = rewriteDocs(request.nextUrl.pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl), {
        // this URL has two representations, selected by `Accept`
        headers: { Vary: 'Accept' },
      });
    }

    const userResult = rewriteUserDocs(request.nextUrl.pathname);

    if (userResult) {
      return NextResponse.rewrite(new URL(userResult, request.nextUrl), {
        headers: { Vary: 'Accept' },
      });
    }
  }

  return NextResponse.next();
}
