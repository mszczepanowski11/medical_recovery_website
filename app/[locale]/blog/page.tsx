import BlogPostsPage from '@/app/organisms/BlogPostsPage/BlogPostsPage';
import { fetchBlogPostsHomePage } from '@/app/utils/fetchData';
import { useLocale } from 'next-intl';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: 'en' | 'pl' | 'de' };
}) {
  console.log('rewqr', locale);

  return {
    alternates: {
      canonical: `/blog`,
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
