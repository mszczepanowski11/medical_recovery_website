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
      canonical: `/contact`,
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

export default async function Contact({
  params: { locale },
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  return (
    <>
      <main>
        <ContactPage />
      </main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(metadata[`schema${locale}`]),
        }}
      />
    </>
  );
}
