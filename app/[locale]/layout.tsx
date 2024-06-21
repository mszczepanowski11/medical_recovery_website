/* eslint-disable @typescript-eslint/naming-convention */
import { Metadata } from 'next';
import { defaultLocale, locales } from '@/i18n';
import metadata from '../utils/SEO';
import Header from '../organisms/Header/Header';
import Footer from '../organisms/Footer/Footer';
import ToastProvider from '../utils/ToastProvider';
import { Links } from '../utils/Links/Links';

export async function generateMetadata({
  params,
}: {
  params: { locale: (typeof locales)[number] };
}): Promise<Metadata> {
  const { locale } = params || {};

  switch (locale) {
    case 'en':
      return metadata.en;
    case 'pl':
      return metadata.pl;
    case 'de':
      return metadata.de;
    default:
      return metadata[defaultLocale];
  }
}

export default function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: (typeof locales)[number] };
}>) {
  return (
    <>
      <Header locale={locale} />
      <Links locale={locale} />
      <ToastProvider>{children}</ToastProvider>
      <Footer locale={locale} />
    </>
  );
}
