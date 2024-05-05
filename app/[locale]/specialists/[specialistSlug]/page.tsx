/* eslint-disable @typescript-eslint/naming-convention */
import SpecialistPage from '@/app/organisms/SpecialistPage/SpecialistPage';
import metadata from '@/app/utils/SEO';
import { webpageUrl } from '@/app/utils/constans';
import { fetchSpecialistPage } from '@/app/utils/fetchData';
import { Metadata } from 'next';
import { useLocale } from 'next-intl';

export async function generateMetadata({
  params: { specialistSlug, locale },
}: {
  params: { specialistSlug: string; locale: 'en' | 'pl' | 'de' };
}): Promise<Metadata> {
  const specialistContent = await fetchSpecialistPage(specialistSlug);
  console.log('specialistContent', specialistContent);
  const { name_surname, title, short_description, tags } =
    specialistContent?.specialist || {};

  const titleItem = `${name_surname}${title && title[`title_${locale}`] ? ` - ${title[`title_${locale}`]}` : ''}`;
  const descriptionItem = short_description[`short_description_${locale}`];
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
    },
  };
}

export default async function Home({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de'; specialistSlug: string };
}) {
  const locale = useLocale();
  const messagesItem = await import(`../../../../messages/${locale}`);
  const specialistContent = await fetchSpecialistPage(params.specialistSlug);

  return (
    <main>
      <SpecialistPage
        specialistContent={specialistContent.specialist}
        locale={params.locale}
      />
    </main>
  );
}
