import BlogPost from '@/app/organisms/BlogPost/BlogPost';
import {
  fetchBlogPostContent,
  fetchNewestsBlogPosts,
} from '@/app/utils/fetchData';
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
  params: { locale: 'en' | 'pl' | 'de'; blogSlug: string };
}) {
  const locale = useLocale();
  const messagesItem = await import(`../../../../messages/${locale}`);
  const blogPostContent = await fetchBlogPostContent(params.blogSlug);
  const newestBlogPostsList = await fetchNewestsBlogPosts(params.blogSlug);

  return (
    <main>
      <BlogPost
        blogPostContent={blogPostContent.blogPost}
        monthsTo={messagesItem?.utils?.months_to}
        locale={params.locale}
        newestBlogPostsList={newestBlogPostsList?.blogPosts}
      />
    </main>
  );
}
