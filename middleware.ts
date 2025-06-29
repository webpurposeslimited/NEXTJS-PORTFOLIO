import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the existing response
  const response = NextResponse.next();

  // Set Content Security Policy headers
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel-insights.com https://*.hotjar.com https://*.hotjar.io;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https://*.hotjar.com https://*.hotjar.io blob: https://res.cloudinary.com;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://*.vercel-insights.com https://api.emailjs.com https://*.hotjar.com https://*.hotjar.io wss://*.hotjar.com;
    frame-src 'self' https://*.hotjar.com https://*.hotjar.io;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
    block-all-mixed-content;
  `.replace(/\s{2,}/g, ' ').trim();

  // Add security headers
  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

// Match all request paths except for the ones starting with:
// - api (API routes)
// - _next/static (static files)
// - favicon.ico (favicon file)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
};
