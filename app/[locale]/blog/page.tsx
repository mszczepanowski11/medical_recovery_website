import BlogPostsPage from '@/app/organisms/BlogPostsPage/BlogPostsPage';
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
      canonical: `/blog`,
    },
    openGraph: {
      ...(metadata[locale].openGraph || {}),
      title: `${metadata[locale].title}`,
      url: `${webpageUrl}/${locale}/blog`,
    },
    twitter: {
      ...(metadata[locale].twitter || {}),
      site: `${webpageUrl}/${locale}/blog`,
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
  const blogPostsList = await fetchBlogPostsHomePage();

  return (
    <main>
      <BlogPostsPage
        blogPosts={blogPostsList?.blogPosts}
        monthsTo={messagesItem?.utils?.months_to}
        locale={params.locale}
      />
    </main>
  );
}
