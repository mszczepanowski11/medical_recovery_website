import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import { languages } from '../i18n/settings';
import StyledComponentsRegistry from '../lib/registry';
import deMetadata from '../i18n/locales/de/metadata';
import enMetadata from '../i18n/locales/en/metadata';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params }: any) {
  console.log('params124', params);
  switch (params.lng) {
    case 'en':
      return enMetadata;
    case 'de':
      return deMetadata;
    default:
      return enMetadata;
  }
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
