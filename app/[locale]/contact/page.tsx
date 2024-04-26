// import { useLocale } from 'next-intl';
// import {
//   fetchBlogPostsHomePage,
//   fetchFAQQuestionsHomePage,
//   fetchSpecialistsDataHomePage,
//   fetchTestimonialsDataHomePage,
// } from '../../utils/fetchData';

import ContactPage from '@/app/organisms/ContactPage/ContactPage';

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

export default async function Home(
  {
    // params,
  }: {
    params: { locale: 'en' | 'pl' | 'de' };
  },
) {
  // const locale = useLocale();
  // const messagesItem = await import(`../../../messages/${locale}`);

  // const specialistsList = await fetchSpecialistsDataHomePage();
  // const testimonialsList = await fetchTestimonialsDataHomePage();
  // const faqQuestionsList = await fetchFAQQuestionsHomePage();
  // const blogPostsList = await fetchBlogPostsHomePage();

  return (
    <main>
      <ContactPage />
    </main>
  );
}
