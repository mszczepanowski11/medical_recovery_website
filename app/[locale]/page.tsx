import { useLocale } from 'next-intl';
import Hero from '../organisms/Hero/Hero';
import WeHelp from '../organisms/WeHelp/WeHelp';
import OurSpecialist from '../organisms/OurSpecialist/OurSpecialist';
import {
  fetchBlogPostsHomePage,
  fetchFAQQuestionsHomePage,
  fetchSpecialistsDataHomePage,
  fetchTestimonialsDataHomePage,
} from '../utils/fetchData';
import Testimonials from '../organisms/Testimonials/Testimonials';
import FAQ from '../organisms/FAQ/FAQ';
import BlogPostsCards from '../organisms/BlogPostsCards/BlogPostsCards';
import Contact from '../organisms/Contact/Contact';

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
  const messagesItem = await import(`../../messages/${locale}`);

  const specialistsList = await fetchSpecialistsDataHomePage();
  const testimonialsList = await fetchTestimonialsDataHomePage();
  const faqQuestionsList = await fetchFAQQuestionsHomePage();
  const blogPostsList = await fetchBlogPostsHomePage();

  return (
    <main>
      <Hero />
      <WeHelp cards={messagesItem.we_help.cards} />
      <OurSpecialist locale={params.locale} specialistsList={specialistsList} />
      <Testimonials testimonialsList={testimonialsList?.testimonials} />
      <BlogPostsCards
        blogPosts={blogPostsList?.blogPosts?.slice(0, 3)}
        monthsTo={messagesItem?.utils?.months_to}
        locale={params.locale}
      />
      <FAQ questions={faqQuestionsList?.faqs} locale={params.locale} />
      <Contact />
    </main>
  );
}
