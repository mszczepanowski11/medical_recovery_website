import { useLocale } from 'next-intl';
import OurSpecialist from '@/app/organisms/OurSpecialist/OurSpecialist';
import { fetchSpecialistsDataHomePage } from '../../utils/fetchData';

// export async function generateMetadata({ params: { postId } }) {
//   const post = await getPostByName(`${postId}.mdx`); // deduped!

//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     };
//   }

//   const { meta } = post;

//   return {
//     title: meta.title,
//     description: meta.description,
//     keywords: [...meta.tags],
//     alternates: {
//       canonical: `/posts/${meta.id}`,
//     },
//   };
// }

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
