import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import StyledComponentsRegistry from '../utils/registry';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
