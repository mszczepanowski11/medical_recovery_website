import ContactPage from '@/app/organisms/ContactPage/ContactPage';
import metadata from '@/app/utils/SEO';
import { webpageUrl } from '@/app/utils/constans';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  return {
    alternates: {
      canonical: `/specialists`,
    },
    openGraph: {
      ...(metadata[locale].openGraph || {}),
      title: `${metadata[locale].title}`,
      url: `${webpageUrl}/${locale}/contact`,
    },
    twitter: {
      ...(metadata[locale].twitter || {}),
      site: `${webpageUrl}/${locale}/contact`,
    },
  };
}

export default async function Home() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}
