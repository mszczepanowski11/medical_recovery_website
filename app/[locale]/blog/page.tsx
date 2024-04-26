import BlogPostsPage from '@/app/organisms/BlogPostsPage/BlogPostsPage';
import { fetchBlogPostsHomePage } from '@/app/utils/fetchData';
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
