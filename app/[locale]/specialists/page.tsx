import { useLocale } from 'next-intl';
import OurSpecialist from '@/app/organisms/OurSpecialist/OurSpecialist';
import metadata from '@/app/utils/SEO';
import { webpageUrl } from '@/app/utils/constans';
import { shuffleArray } from '@/app/utils/utils';
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

  const specialistsList: any = await fetchSpecialistsDataHomePage();
  const specialistsListShuffled = await shuffleArray(
    specialistsList.specialists,
  );

  return (
    <>
      <main>
        <OurSpecialist
          locale={params.locale}
          specialistsList={specialistsListShuffled}
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
