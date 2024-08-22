import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE =
  /\.(png|jpg|jpeg|svg|css|js|json|html|txt|woff|woff2|ttf|eot)$/i;

const localePathMap = {
  en: {
    contact: '/contact',
    support: '/support',
    fireplaceDiffuser: '/fireplace-diffuser',
  },
  sk: {
    contact: '/kontakt',
    support: '/podpora',
    fireplaceDiffuser: '/krbovy-difuzor',
  },
  cs: {
    contact: '/kontakt',
    support: '/podpora',
    fireplaceDiffuser: '/krbovy-difuzor',
  },
  de: {
    contact: '/kontakt',
    support: '/support',
    fireplaceDiffuser: '/kamin-difuzor',
  },
  pl: {
    contact: '/kontakt',
    support: '/wsparcie',
    fireplaceDiffuser: '/dyfuzor-kominkowy',
  },
  hu: {
    contact: '/kapcsolat',
    support: '/rolunk',
    fireplaceDiffuser: '/kandallo-difuzor',
  },
  ja: {
    contact: '/contact',
    support: '/support',
    fireplaceDiffuser: '/fireplace-diffuser',
  },
};

export function middleware(request: NextRequest) {
  const { pathname, locale } = request.nextUrl;

  if (
    pathname.startsWith('/_next') || // exclude Next.js internals
    pathname.includes('.json') ||
    pathname.includes('/api') || // exclude API routes
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }

  console.log(pathname);
  console.log(locale);

  // Find the default paths for the current locale
  // @ts-ignore
  const defaultLocalePaths = localePathMap[locale] || {};

  // Redirect to the appropriate locale-specific path for contact
  if (pathname === '/contact' && locale !== 'en' && locale !== 'ja') {
    const a = new URL(`/${locale}${defaultLocalePaths.contact}`, request.url);
    console.log(a);
    return NextResponse.redirect(
      new URL(`/${locale}${defaultLocalePaths.contact}`, request.url)
    );
  }

  // Redirect to the appropriate locale-specific path for about-us
  if (
    pathname === '/support' &&
    locale !== 'en' &&
    locale !== 'ja' &&
    locale !== 'de'
  ) {
    const a = new URL(`/${locale}${defaultLocalePaths.support}`, request.url);
    console.log(a);
    return NextResponse.redirect(
      new URL(`/${locale}${defaultLocalePaths.support}`, request.url)
    );
  }

  // Redirect to the appropriate locale-specific path for about-us
  if (
    pathname === '/fireplace-diffuser' &&
    locale !== 'en' &&
    locale !== 'ja'
  ) {
    return NextResponse.redirect(
      new URL(`/${locale}${defaultLocalePaths.fireplaceDiffuser}`, request.url)
    );
  }
  console.log('here');
  // Redirect to the default path if the locale-specific path is accessed
  // for (const [loc, paths] of Object.entries(localePathMap)) {
  //   if (locale !== loc) {
  //     if (pathname === `/${loc}${paths.contact}`) {
  //       return NextResponse.redirect(
  //         new URL(defaultLocalePaths.contact, request.url)
  //       );
  //     }
  //     if (pathname === `/${loc}${paths.support}`) {
  //       return NextResponse.redirect(
  //         new URL(defaultLocalePaths.support, request.url)
  //       );
  //     }
  //   }
  // }

  return NextResponse.next();
}
