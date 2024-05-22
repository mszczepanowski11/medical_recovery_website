import BlogPost from '@/app/organisms/BlogPost/BlogPost';
import metadata from '@/app/utils/SEO';
import { webpageUrl } from '@/app/utils/constans';
import {
  fetchBlogPostContent,
  fetchNewestsBlogPosts,
} from '@/app/utils/fetchData';
import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params: { blogSlug, locale },
}: {
  params: { blogSlug: string; locale: 'en' | 'pl' | 'de' };
}): Promise<Metadata> {
  const blogPostContent = await fetchBlogPostContent(blogSlug);

  const noRobots = {
    robots: {
      index: false,
      follow: true,
    },
  };

  if (!blogPostContent?.blogPost) {
    return {
      title: '404 - Mental Recovery',
      ...noRobots,
    };
  }
  const { title, short_description, tags, author, date } =
    blogPostContent?.blogPost || {};

  const titleItem = `${title[`title_${locale}`]}${author}`;
  const descriptionItem = short_description
    ? short_description[locale]
    : metadata[locale].description;
  const keywordsItem = tags
    ? `${tags?.map((item: any) => item[locale]).join(', ')}, ${metadata[locale].keywords}`
    : `${metadata[locale].keywords}`;
  const urlItem = `${webpageUrl}/${locale}/blog/${blogSlug}`;

  return {
    ...(metadata[locale] || {}),
    title: titleItem,
    description: descriptionItem,
    keywords: keywordsItem,
    alternates: {
      canonical: urlItem,
    },
    authors: { name: author },
    openGraph: {
      ...(metadata[locale].openGraph || {}),
      title: titleItem,
      description: descriptionItem,
      url: urlItem,
      type: 'article',
      authors: author,
      publishedTime: date,
      tags: tags[`tags_${locale}`],
    },
    twitter: {
      ...(metadata[locale].twitter || {}),
      title: titleItem,
      description: descriptionItem,
      creator: author,
      site: urlItem,
    },
  };
}

export default async function Home({
  params,
}: {
  params: { locale: 'en' | 'pl' | 'de'; blogSlug: string };
}) {
  const locale = useLocale();
  const messagesItem = await import(`../../../../messages/${locale}`);
  const blogPostContent = await fetchBlogPostContent(params.blogSlug);

  if (!blogPostContent?.blogPost) {
    return notFound();
  }
  const newestBlogPostsList = await fetchNewestsBlogPosts(params.blogSlug);

  return (
    <>
      <main>
        <BlogPost
          blogPostContent={blogPostContent.blogPost}
          monthsTo={messagesItem?.utils?.months_to}
          locale={params.locale}
          newestBlogPostsList={newestBlogPostsList?.blogPosts}
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
