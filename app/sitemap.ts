import { MetadataRoute } from 'next';
import { fetchBlogPostsSlug, fetchSpecialistsSlug } from './utils/fetchData';
import { ChangeFrequencyType, regularPages } from './utils/utils';

const locales = ['en', 'pl', 'de'] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { NEXT_PUBLIC_BASE_URL } = process?.env || {};
  const blogPostsPages = await fetchBlogPostsSlug();
  const specialistsPages = await fetchSpecialistsSlug();

  const dateNow = new Date();
  const renderRegularPagesSitemap: MetadataRoute.Sitemap = regularPages
    ?.map(
      (page: {
        url: string;
        priority: number;
        changeFrequency: ChangeFrequencyType;
      }) =>
        locales?.map((localeItem) => ({
          url: `${NEXT_PUBLIC_BASE_URL}/${localeItem}${page.url}`,
          lastModified: dateNow,
          priority: page.priority,
          changeFrequency: page.changeFrequency,
        })),
    )
    .flat();

  const renderBlogPostsPages: MetadataRoute.Sitemap = blogPostsPages?.blogPosts
    ?.map((page: { slug: string }) =>
      locales?.map((localeItem) => ({
        url: `${NEXT_PUBLIC_BASE_URL}/${localeItem}/blog/${page.slug}`,
        lastModified: dateNow,
        priority: 0.9,
        changeFrequency: 'monthly' as const,
      })),
    )
    .flat();

  const renderSpecialistsPages: MetadataRoute.Sitemap =
    specialistsPages?.specialists
      ?.map((page: { specialist_page_slug: string }) =>
        locales?.map((localeItem) => ({
          url: `${NEXT_PUBLIC_BASE_URL}/${localeItem}/specialists/${page.specialist_page_slug}`,
          lastModified: dateNow,
          priority: 0.9,
          changeFrequency: 'monthly' as const,
        })),
      )
      .flat();

  return [
    ...(renderRegularPagesSitemap || []),
    ...(renderBlogPostsPages || []),
    ...(renderSpecialistsPages || []),
  ];
}
