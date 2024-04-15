import { useLocale } from 'next-intl';
import Header from '../organisms/Header/Header';
import Hero from '../organisms/Hero/Hero';
import WeHelp from '../organisms/WeHelp/WeHelp';
import OurSpecialist from '../organisms/OurSpecialist/OurSpecialist';
import {
  fetchFAQQuestions,
  fetchSpecialistsData,
  fetchTestimonialsData,
} from '../utils/fetchData';
import Testimonials from '../organisms/Testimonials/Testimonials';
import FAQ from '../organisms/FAQ/FAQ';

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

  const specialistsList = await fetchSpecialistsData();
  const testimonialsList = await fetchTestimonialsData();
  const faqQuestionsList = await fetchFAQQuestions();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WeHelp cards={messagesItem.we_help.cards} />
        <OurSpecialist
          locale={params.locale}
          specialistsList={specialistsList}
        />
        <Testimonials testimonialsList={testimonialsList?.testimonials} />
        <FAQ questions={faqQuestionsList?.faqs} />
      </main>
    </>
  );
}
