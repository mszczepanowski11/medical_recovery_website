import { useLocale } from 'next-intl';
import OurSpecialist from '@/app/organisms/OurSpecialist/OurSpecialist';
import metadata from '@/app/utils/SEO';
import { webpageUrl } from '@/app/utils/constans';
import { fetchSpecialistsDataHomePage } from '../../utils/fetchData';

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
      url: `${webpageUrl}/${locale}/specialists`,
    },
    twitter: {
      ...(metadata[locale].twitter || {}),
      site: `${webpageUrl}/${locale}/specialists`,
    },
  };
}

export default async function Home({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  const locale = useLocale();
  const messagesItem = await import(`../../../messages/${locale}`);

  const specialistsList = await fetchSpecialistsDataHomePage();

  return (
    <main>
      <OurSpecialist
        locale={params.locale}
        specialistsList={specialistsList}
        customTitle={messagesItem?.specialists_page?.title}
        filterLangs={Object.keys(messagesItem?.utils?.languages || {}).map(
          (key: string) => ({
            id: key,
            name: messagesItem.utils.languages[key],
          }),
        )}
        customPadding="4rem 1rem"
        customPaddingSm="2.5rem 1rem 1rem 1rem"
        customPaddingMb="2rem 1rem 1rem 1rem"
      />
    </main>
  );
}
