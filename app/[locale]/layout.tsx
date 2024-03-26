import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '@/i18n';
import StyledComponentsRegistry from '../utils/registry';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import metadata from '../utils/SEO';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params || {};

  switch (locale) {
    case 'en':
      return metadata.en;
    default:
      return metadata.en;
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
      <body className={inter.className}>
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
