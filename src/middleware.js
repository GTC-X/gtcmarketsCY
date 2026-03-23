import { NextResponse } from 'next/server';
import { defaultLocale } from '@/i18n/config';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const localePrefix = `/${defaultLocale}`;

  // Hide locale prefix from users if it is accessed directly.
  if (pathname === localePrefix || pathname.startsWith(`${localePrefix}/`)) {
    const strippedPath = pathname.slice(localePrefix.length) || '/';
    const url = request.nextUrl.clone();
    url.pathname = strippedPath;
    return NextResponse.redirect(url);
  }

  // Internally map clean URLs to locale-based app routes.
  const url = request.nextUrl.clone();
  url.pathname = `${localePrefix}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
