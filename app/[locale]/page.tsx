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
import metadata from '../utils/SEO';

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
    <>
      <main>
        <Hero />
        <WeHelp cards={messagesItem.we_help.cards} />
        <OurSpecialist
          locale={params.locale}
          specialistsList={specialistsList}
        />
        <Testimonials testimonialsList={testimonialsList?.testimonials} />
        <BlogPostsCards
          blogPosts={blogPostsList?.blogPosts}
          monthsTo={messagesItem?.utils?.months_to}
          locale={params.locale}
          paddingTopSectionSm="4rem 1rem 0 1rem"
        />
        <FAQ questions={faqQuestionsList?.faqs} locale={params.locale} />
        <Contact />
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
