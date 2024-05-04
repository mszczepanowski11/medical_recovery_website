import React from 'react';
import RenderLinks from './RenderLinks';
import { fetchBlogPostsSlug, fetchSpecialistsSlug } from '../fetchData';
import { regularPages } from '../utils';

export async function Links({ locale }: { locale: 'en' | 'pl' | 'de' }) {
  const blogPostsPages = await fetchBlogPostsSlug();
  const specialistsPages = await fetchSpecialistsSlug();
  const blogPagesLinks = blogPostsPages?.blogPosts?.map((item) => ({
    href: `/${locale}/blog/${item.slug}`,
    children: item.title[`title_${locale}`],
  }));
  const specialistsPagesLinks = specialistsPages?.specialists
    ?.filter((item) => item.languages.includes(locale))
    .map((item) => ({
      href: `/${locale}/specialists/${item.specialist_page_slug}`,
      children: `${item.name_surname} - ${item.title[`title_${locale}`]}`,
    }));
  const regularPagesLinks = regularPages.map((item) => ({
    href: `/${locale}${item.url}`,
    children: item.name[locale],
  }));

  return (
    <RenderLinks
      links={[
        ...(blogPagesLinks || []),
        ...(specialistsPagesLinks || []),
        ...(regularPagesLinks || []),
      ]}
    />
  );
}
