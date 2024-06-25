import { locales } from '@/i18n';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import { GoogleTagManager } from '@next/third-parties/google';
import { Instrument_Sans } from 'next/font/google';
import { cookies } from 'next/headers';
import StyledComponentsRegistry from './utils/registry';
import GlobalStyles from './utils/GlobalStyles';
import CookiePopup from './molecules/CookiePopup/CookiePopup';
import GoogleRecaptchaProviderWrapper from './organisms/GoogleRecaptchaProviderWrapper/GoogleRecaptchaProviderWrapper';

const instrument_sans = Instrument_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: (typeof locales)[number] };
}>) {
  const locale: any = useLocale();
  const messages = useMessages();

  const cookiePopup = cookies().get('cookie_policy_closed');

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={instrument_sans.className}>
        <GoogleRecaptchaProviderWrapper>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <StyledComponentsRegistry>
              <GlobalStyles />
              {children}
              <CookiePopup locale={locale} cookiePopup={cookiePopup} />
            </StyledComponentsRegistry>
          </NextIntlClientProvider>
        </GoogleRecaptchaProviderWrapper>
        <GoogleTagManager gtmId="GTM-MHQ2QJSB" />
      </body>
    </html>
  );
}
