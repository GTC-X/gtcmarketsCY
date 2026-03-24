'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { LanguageSwitcher } from '@/app/[locale]/LanguageSwitcher';

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function isActivePath(pathname, href) {
  if (!pathname) return false;
  if (href.includes('#')) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({ locale, nav }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () => [
      { label: nav?.home ?? 'Home', href: `/${locale}` },
      { label: nav?.about ?? 'About Us', href: `/${locale}/about` },
      { label: nav?.services ?? 'Our Services', href: `/${locale}/services` },
      { label: nav?.careers ?? 'Careers', href: `/${locale}/careers` },
      { label: nav?.contact ?? 'Contact', href: `/${locale}/contact` },
    ],
    [locale, nav],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex gtc-container gap-4 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white">
            G
          </span>
          <div className="leading-tight">
            <p className="text-xs font-semibold tracking-tight text-gray-900 sm:text-sm">GTC FX</p>
            <p className="text-[10px] font-medium text-gray-500 sm:text-[11px]">Brokerage Growth</p>
          </div>
        </Link>

        <nav className="ms-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {items.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  'rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm',
                  active ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                ].join(' ')}
              >
                {item.label}
              </Link>
            );
          })}
          </nav>

        <div className="ms-auto flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm transition hover:bg-gray-50"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="grid gap-2">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-4 py-2.5 text-xs font-medium text-gray-800 transition hover:bg-gray-100 sm:py-3 sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

