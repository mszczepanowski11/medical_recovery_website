/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React, { FC, useCallback, useMemo, useState } from 'react';
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
  title: {
    title_en: string;
    title_pl: string;
    title_de: string;
  };
  short_description: {
    en: string;
    pl: string;
    de: string;
  };
  slug: string;
  date: string;
  reading_time?: number;
  image: {
    url: string;
  };
  tags: { en: string; pl: string; de: string }[];
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

  const filterFunc = useCallback(
    (blogPost: BlogPost) => {
      const blogPostIncludesShortDesc = blogPost.short_description
        ? !blogPost.short_description[locale]
            .toLowerCase()
            .includes(filters.search.toLowerCase())
        : true;
      if (
        filters.search.length > 0 &&
        !blogPost.title[`title_${locale}`]
          .toLowerCase()
          .includes(filters.search.toLowerCase()) &&
        blogPostIncludesShortDesc
      ) {
        return false;
      }
      if (
        filters.filter?.length > 0 &&
        !blogPost.tags?.some((tag) =>
          tag && tag[locale]
            ? filters.filter?.includes(tag[locale].trim())
            : false,
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
            styleMd={{
              minWidth: '300px !important',
              flexGrow: 1,
              maxWidth: 'none !important',
            }}
          />
        )),
    [blogPosts, filterFunc, locale, monthsTo, sortFunc],
  );

  const blogPostsTags = useMemo(
    () => [
      ...(new Set(
        blogPosts
          ?.map((blogPost) =>
            blogPost?.tags?.map((item: any) => item[locale]).flat(),
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
        $gridColsSm={1}
        $maxWidth="1100px"
        $gap="2rem"
        $paddingSm="2rem 1rem 4rem 1rem"
        style={{ overflow: 'visible', clipPath: 'none' }}
      >
        <GridItem $colStart={1} $colEnd={2} $rowStartSm={1} $rowEndSm={2}>
          <BlogPostPageFilters
            checkboxFilters={blogPostsTags}
            filters={filters}
            setFilters={setFilters}
          />
        </GridItem>
        <GridItem
          $colStart={2}
          $colEnd={5}
          $colStartSm={1}
          $colEndSm={2}
          $rowStartSm={2}
          $rowEndSm={3}
        >
          <BlogPostCardsWrapper $gap="1.5rem" $flexWrap="wrap">
            {renderBlogPostsCards.length < 1 ? (
              <Flex
                $flexDirection="column"
                $alignItems="center"
                $padding="2.5rem"
                $rowGap="1rem"
                className="blog-post-page-no-articles"
                style={{
                  width: '100%',
                  backgroundColor: '#fafafa',
                  borderRadius: '1rem',
                }}
              >
                <Text variant="h3" textAlign="center">
                  {t('no_articles')}
                </Text>
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
