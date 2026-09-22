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

  const goneHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>410 - Page Gone | Neologicx</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    body {
      font-family: 'Inter', -apple-system, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background-color: #ffffff;
      color: #092147;
      text-align: center;
      padding: 20px;
    }
    h1 {
      font-size: 8rem;
      font-weight: 700;
      margin: 0;
      line-height: 1;
      color: #092147;
    }
    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin: 10px 0 20px;
    }
    p {
      font-size: 1.1rem;
      color: #556987;
      max-width: 500px;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    .btn-group {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 28px;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s;
    }
    .btn-primary {
      background-color: #092147;
      color: #ffffff;
      border: 1px solid #092147;
    }
    .btn-primary:hover {
      background-color: #0d326b;
    }
    .btn-outline {
      background-color: transparent;
      color: #092147;
      border: 1px solid #e5e7eb;
    }
    .btn-outline:hover {
      background-color: #f9fafb;
    }
  </style>
</head>
<body>
  <h1>410</h1>
  <h2>Oops! Page Gone</h2>
  <p>The page you are looking for has been permanently removed, had its name changed, or is no longer available.</p>
  <div class="btn-group">
    <a href="/" class="btn btn-primary">Back to Home</a>
    <a href="/contact" class="btn btn-outline">Contact Support</a>
  </div>
</body>
</html>
`;

  function getGoneResponse() {
    return new NextResponse(goneHtml, { 
      status: 410, 
      statusText: 'Gone',
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }

  if (gonePaths.includes(normalizedPath)) {
    return getGoneResponse();
  }

  // Handle all WordPress specific paths (since the site is no longer on WordPress)
  // This covers /wp-content/*, /wp-admin/*, /wp-includes/*, etc.
  if (
    normalizedPath.startsWith('/wp-') || 
    normalizedPath.includes('wp-content') ||
    normalizedPath.includes('wp-admin') ||
    normalizedPath.includes('wp-includes')
  ) {
    return getGoneResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all paths except Next.js internals and static files
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
