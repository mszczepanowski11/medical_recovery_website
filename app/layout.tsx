import { locales } from '@/i18n';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import { GoogleTagManager } from '@next/third-parties/google';
import { Instrument_Sans } from 'next/font/google';
import { cookies } from 'next/headers';
import StyledComponentsRegistry from './utils/registry';
import GlobalStyles from './utils/GlobalStyles';
import GoogleRecaptchaProviderWrapper from './organisms/GoogleRecaptchaProviderWrapper/GoogleRecaptchaProviderWrapper';
import { FacebookPixelEvents } from './utils/PixelEvents';
import ConsentMode from './molecules/ConsentMode/ConsentMode';

const instrument_sans = Instrument_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: (typeof locales)[number] };
}>) {
  const locale: any = useLocale();
  const messages: any = useMessages();
  console.log('messages', messages?.cookie_policy);

  const cookiePopup = cookies().get('cookie_consent_mode');

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
              <ConsentMode
                locale={locale}
                consentMode={!!cookiePopup}
                cookieTypes={messages?.cookie_policy?.cookie_types_list}
              />
            </StyledComponentsRegistry>
          </NextIntlClientProvider>
        </GoogleRecaptchaProviderWrapper>
        <GoogleTagManager gtmId="GTM-MHQ2QJSB" />
        <FacebookPixelEvents />
      </body>
    </html>
  );
}
