/* eslint-disable @typescript-eslint/naming-convention */
import SpecialistPage from '@/app/organisms/SpecialistPage/SpecialistPage';
import metadata from '@/app/utils/SEO';
import { webpageUrl } from '@/app/utils/constans';
import { fetchSpecialistPage } from '@/app/utils/fetchData';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { specialistSlug, locale },
}: {
  params: { specialistSlug: string; locale: 'en' | 'pl' | 'de' };
}): Promise<Metadata> {
  const specialistContent = await fetchSpecialistPage(specialistSlug);
  const { name_surname, title, short_description, tags } =
    specialistContent?.specialist || {};

  const titleItem = `${name_surname}${title && title[`title_${locale}`] ? ` - ${title[`title_${locale}`]}` : metadata[locale].title}`;
  const descriptionItem = short_description
    ? short_description[locale]
    : metadata[locale].description;
  const keywordsItem = `${tags[`tags_${locale}`]}, ${metadata[locale].keywords}`;
  const urlItem = `${webpageUrl}/${locale}/specialists/${specialistSlug}`;

  return {
    ...(metadata[locale] || {}),
    title: titleItem,
    description: descriptionItem,
    keywords: keywordsItem,
    alternates: {
      canonical: urlItem,
    },
    openGraph: {
      ...(metadata[locale].openGraph || {}),
      title: titleItem,
      description: descriptionItem,
      url: urlItem,
    },
    twitter: {
      ...(metadata[locale].twitter || {}),
      title: titleItem,
      description: descriptionItem,
      site: urlItem,
    },
  };
}

export default async function Home({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de'; specialistSlug: string };
}) {
  const specialistContent = await fetchSpecialistPage(params.specialistSlug);

  return (
    <>
      <main>
        <SpecialistPage
          specialistContent={specialistContent.specialist}
          locale={params.locale}
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
