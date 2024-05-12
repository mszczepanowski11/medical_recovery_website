import BlogPostsCards from '@/app/organisms/BlogPostsCards/BlogPostsCards';
import Contact from '@/app/organisms/Contact/Contact';
import OfferHero from '@/app/organisms/OfferHero/OfferHero';
import OfferIntroBottom from '@/app/organisms/OfferIntroBottom/OfferIntroBottom';
import OfferIntroTop from '@/app/organisms/OfferIntroTop/OfferIntroTop';
import metadata from '@/app/utils/SEO';
import { webpageUrl } from '@/app/utils/constans';
import { fetchBlogPostsHomePage } from '@/app/utils/fetchData';
import { useLocale } from 'next-intl';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  return {
    alternates: {
      canonical: `/about-us`,
    },
    openGraph: {
      ...(metadata[locale].openGraph || {}),
      title: `${metadata[locale].title}`,
      url: `${webpageUrl}/${locale}/about-us`,
    },
    twitter: {
      ...(metadata[locale].twitter || {}),
      site: `${webpageUrl}/${locale}/about-us`,
    },
  };
}

export default async function Offer({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  const locale = useLocale();
  const messagesItem = await import(`../../../messages/${locale}`);

  const blogPostsList = await fetchBlogPostsHomePage();

  return (
    <>
      <main>
        <OfferHero locale={params.locale} />
        <OfferIntroTop
          locale={params.locale}
          items={messagesItem?.offer_page?.intro_top?.items}
        />
        <OfferIntroBottom
          locale={params.locale}
          items={messagesItem?.offer_page?.intro_bottom?.items}
        />
        <BlogPostsCards
          blogPosts={blogPostsList?.blogPosts}
          monthsTo={messagesItem?.utils?.months_to}
          locale={params.locale}
          paddingTopSectionSm="4rem 1rem 0 1rem"
        />
        <Contact
          noMiddleSection
          rightImageStyle={{ minWidth: 200, width: '18%' }}
          rightImageStyleSm={{ width: '100%' }}
          padding="4rem 1rem"
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
