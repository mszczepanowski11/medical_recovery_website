import { MetadataRoute } from 'next';
import { fetchBlogPostsSlug, fetchSpecialistsSlug } from './utils/fetchData';

type ChangeFrequencyType =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

const locales = ['en', 'pl', 'de'] as const;
const regularPages: {
  url: string;
  priority: number;
  changeFrequency: ChangeFrequencyType;
}[] = [
  { url: '', priority: 1, changeFrequency: 'weekly' },
  { url: '/about-us', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/offer', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/specialists', priority: 1, changeFrequency: 'weekly' },
  { url: '/blog', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/contact', priority: 0.7, changeFrequency: 'never' },
  { url: '/privacy-policy', priority: 0.3, changeFrequency: 'never' },
  { url: '/statute', priority: 0.3, changeFrequency: 'never' },
];

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
