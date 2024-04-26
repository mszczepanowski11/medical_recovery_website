/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import BlogPostCard from '@/app/molecules/BlogPostCard/BlogPostCard';
import BlogPostPageFilters from '@/app/molecules/BlogPostPageFilters/BlogPostPageFilters';
import { SortValues } from '@/app/atoms/Sort/Sort.variables';
import { makeTagsArrayFromString } from '@/app/utils/utils';
import Button from '@/app/atoms/Button/Button';
import {
  BlogPostCardsWrapper,
  BlogPostsPageWrapper,
} from './BlogPostsPage.styles';

type BlogPost = {
  title: string;
  short_description: string;
  slug: string;
  date: string;
  reading_time?: number;
  image: {
    url: string;
  };
  tags: { tags_en: string; tags_pl: string; tags_de: string };
};

type BlogPostsPageProps = {
  blogPosts: BlogPost[];
  monthsTo: { [key: string]: string };
  locale: 'en' | 'pl' | 'de';
};

const BlogPostsPage: FC<BlogPostsPageProps> = function ({
  blogPosts,
  monthsTo,
  locale,
}) {
  const t = useTranslations('blog_page');

  const [filters, setFilters] = useState<{
    search: string;
    sort: keyof typeof SortValues | undefined;
    filter: string[];
  }>({ search: '', sort: 'date_asc', filter: [] });

  useEffect(() => {
    console.log('filters', filters);
  }, [filters]);

  const filterFunc = useCallback(
    (blogPost: BlogPost) => {
      if (
        filters.search.length > 0 &&
        !blogPost.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !blogPost.short_description
          .toLowerCase()
          .includes(filters.search.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.filter?.length > 0 &&
        !makeTagsArrayFromString(blogPost.tags[`tags_${locale}`])?.some((tag) =>
          filters.filter?.includes(tag.trim()),
        )
      ) {
        return false;
      }
      return true;
    },
    [filters.filter, filters.search, locale],
  );

  const sortFunc = useCallback(
    (a: any, b: any) => {
      switch (filters.sort) {
        case SortValues.date_asc:
          return new Date(b.date).getTime() - new Date(a.date).getTime();

        case SortValues.date_desc:
          return new Date(a.date).getTime() - new Date(b.date).getTime();

        case SortValues.popular_asc:
          return (a.order || 997997997) && (b.order || 997997997);
        default:
          return 1;
      }
    },
    [filters.sort],
  );

  const renderBlogPostsCards = useMemo(
    () =>
      blogPosts
        ?.filter(filterFunc)
        ?.sort(sortFunc)
        ?.map((blogPost) => (
          <BlogPostCard
            key={blogPost.slug}
            {...blogPost}
            monthsTo={monthsTo}
            locale={locale}
          />
        )),
    [blogPosts, filterFunc, locale, monthsTo, sortFunc],
  );

  const blogPostsTags = useMemo(
    () => [
      ...(new Set(
        blogPosts
          ?.map((blogPost) =>
            blogPost?.tags[`tags_${locale}`].split(', ').flat(),
          )
          .flat() || [],
      ) || []),
    ],
    [blogPosts, locale],
  );

  return (
    <BlogPostsPageWrapper>
      <GridContainer
        $bg={Colors.background_tags}
        $padding="2rem 1rem"
        $maxWidth="1100px"
      >
        <GridItem $colStart={1} $colEnd={5}>
          <Text variant="h1" noMargin fontSize="3rem">
            {t('title')}
          </Text>
        </GridItem>
      </GridContainer>
      <GridContainer
        $maxWidth="1100px"
        $gap="2rem"
        style={{ overflow: 'visible', clipPath: 'none' }}
      >
        <GridItem $colStart={1} $colEnd={2}>
          <BlogPostPageFilters
            checkboxFilters={blogPostsTags}
            filters={filters}
            setFilters={setFilters}
          />
        </GridItem>
        <GridItem $colStart={2} $colEnd={5}>
          <BlogPostCardsWrapper $gap="1.5rem" $flexWrap="wrap">
            {renderBlogPostsCards.length < 1 ? (
              <Flex
                $flexDirection="column"
                $alignItems="center"
                $padding="2.5rem"
                $rowGap="1rem"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                  backgroundColor: '#fafafa',
                  borderRadius: '1rem',
                }}
              >
                <Text variant="h3">{t('no_articles')}</Text>
                <Button
                  color="transparent"
                  iconRight={false}
                  onClick={() =>
                    setFilters({ search: '', sort: undefined, filter: [] })
                  }
                >
                  <Text noMargin fontWeight={500}>
                    {t('clear_filters')}
                  </Text>
                </Button>
              </Flex>
            ) : (
              renderBlogPostsCards
            )}
          </BlogPostCardsWrapper>
        </GridItem>
      </GridContainer>
    </BlogPostsPageWrapper>
  );
};

export default React.memo(BlogPostsPage);
