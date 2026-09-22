import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Normalize pathname (remove trailing slash unless it's just '/')
  const normalizedPath = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;

  const gonePaths = [

    '/wp-admin',
    '/wp-includes/js/wp-emoji-release.min.js',
    '/daily-task-management-app',
    '/wp-content/uploads/2025/12/Neologicx_Enterprise_Solutions_Portfolio-1.pdf',
  ];

  if (gonePaths.includes(normalizedPath)) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  // Handle all WordPress specific paths (since the site is no longer on WordPress)
  // This covers /wp-content/*, /wp-admin/*, /wp-includes/*, etc.
  if (
    normalizedPath.startsWith('/wp-') || 
    normalizedPath.includes('wp-content') ||
    normalizedPath.includes('wp-admin') ||
    normalizedPath.includes('wp-includes')
  ) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all paths except Next.js internals and static files
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
