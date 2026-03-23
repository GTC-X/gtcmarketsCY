import { getDictionary } from '@/i18n/request';
import { locales } from '@/i18n/config';
import { notFound } from 'next/navigation';
import { LocaleProvider } from './LocaleProvider';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ToastProvider } from '@/components/ToastProvider';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.title ?? 'GTC FX',
    description: meta.description ?? 'Trading & Finance',
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();

  const dict = await getDictionary(locale);
  const nav = dict.nav || {};

  return (
    <LocaleProvider>
      <Header locale={locale} nav={nav} />
      <main className="mx-auto w-full">{children}</main>
      <Footer />
      <ToastProvider />
    </LocaleProvider>
  );
}
