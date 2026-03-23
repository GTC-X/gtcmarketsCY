'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function isActive(pathname, href) {
  if (!pathname) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NewSubNav({ locale }) {
  const pathname = usePathname();
  const base = `/${locale}/new`;

  const nav = [
    { label: 'Home', href: base },
    { label: 'About Us', href: `${base}/about` },
    { label: 'Our Services', href: `${base}/services` },
    { label: 'Careers', href: `${base}/careers` },
    { label: 'Contact', href: `${base}/contact` },
  ];

  return (
    <div className="sticky top-[72px] z-40 -mx-6 border-b border-gtc-border bg-white/90 px-6 py-4 shadow-sm backdrop-blur-md sm:-mx-8 sm:px-8">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 sm:justify-start" aria-label="Section navigation">
        {nav.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                'rounded-full px-3 py-2 text-xs font-semibold transition-all duration-200 sm:px-5 sm:py-2.5 sm:text-sm',
                active
                  ? 'bg-gtc-primary text-white shadow-gtc'
                  : 'text-slate-600 hover:bg-gtc-surface hover:text-slate-900',
              ].join(' ')}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

