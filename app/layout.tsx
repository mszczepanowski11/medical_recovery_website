import { locales } from '@/i18n';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { GoogleTagManager } from '@next/third-parties/google';
import { Instrument_Sans } from 'next/font/google';
import StyledComponentsRegistry from './utils/registry';
import GlobalStyles from './utils/GlobalStyles';

const instrument_sans = Instrument_Sans({ subsets: ['latin'] });

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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={instrument_sans.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
        <GoogleTagManager gtmId="GTM-MHQ2QJSB" />
      </body>
    </html>
  );
}
