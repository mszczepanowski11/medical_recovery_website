import BlogPost from '@/app/organisms/BlogPost/BlogPost';
import SpecialistPage from '@/app/organisms/SpecialistPage/SpecialistPage';
import { fetchSpecialistPage } from '@/app/utils/fetchData';
import { useLocale } from 'next-intl';

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
