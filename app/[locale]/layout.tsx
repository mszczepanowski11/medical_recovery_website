/* eslint-disable @typescript-eslint/naming-convention */
import { Instrument_Sans } from 'next/font/google';
import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { defaultLocale, locales } from '@/i18n';
import StyledComponentsRegistry from '../utils/registry';
import GlobalStyles from '../utils/GlobalStyles';
import metadata from '../utils/SEO';

const instrument_sans = Instrument_Sans({ subsets: ['latin'] });

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

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: (typeof locales)[number] };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>{/* <meta property="fb:app_id" content="" /> */}</head>
      <body className={instrument_sans.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata[`schema${locale}`]),
          }}
        />
      </body>
    </html>
  );
}
