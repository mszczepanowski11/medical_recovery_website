import PrivacyPolicyContent from '@/app/organisms/PrivacyPolicyContent/PrivacyPolicyContent';

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
  return (
    <main>
      <PrivacyPolicyContent />
    </main>
  );
}
