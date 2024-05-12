import AboutUsHero from '@/app/organisms/AboutUsHero/AboutUsHero';
import AboutUsIdea from '@/app/organisms/AboutUsIdea/AboutUsIdea';
import AboutUsIntro from '@/app/organisms/AboutUsIntro/AboutUsIntro';
import Contact from '@/app/organisms/Contact/Contact';
import OfferHero from '@/app/organisms/OfferHero/OfferHero';
import metadata from '@/app/utils/SEO';
import { webpageUrl } from '@/app/utils/constans';
import { useLocale } from 'next-intl';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  return {
    alternates: {
      canonical: `/about-us`,
    },
    openGraph: {
      ...(metadata[locale].openGraph || {}),
      title: `${metadata[locale].title}`,
      url: `${webpageUrl}/${locale}/about-us`,
    },
    twitter: {
      ...(metadata[locale].twitter || {}),
      site: `${webpageUrl}/${locale}/about-us`,
    },
  };
}

export default async function AboutUs({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  const locale = useLocale();
  const messagesItem = await import(`../../../messages/${locale}`);

  return (
    <>
      <main>
        <OfferHero locale={params.locale} />
      </main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(metadata[`schema${params.locale}`]),
        }}
      />
    </>
  );
}
