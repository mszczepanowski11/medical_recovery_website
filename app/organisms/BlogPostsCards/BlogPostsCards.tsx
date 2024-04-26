/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import BlogPostCard from '@/app/molecules/BlogPostCard/BlogPostCard';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import { BlogPostsCardsWrapper } from './BlogPostsCards.styles';

type BlogPostsCardsProps = {
  blogPosts: {
    title: string;
    short_description: string;
    slug: string;
    date: string;
    reading_time?: number;
    image: {
      url: string;
    };
    tags: { tags_en: string; tags_pl: string; tags_de: string };
  }[];
  monthsTo: { [key: string]: string };
  locale: 'en' | 'pl' | 'de';
};

const BlogPostsCards: FC<BlogPostsCardsProps> = function ({
  blogPosts,
  monthsTo,
  locale,
}) {
  const tBlogPosts = useTranslations('blog_posts_home_page');

  const renderBlogPostsCards = useMemo(
    () =>
      blogPosts.map((blogPost) => (
        <BlogPostCard
          key={blogPost.slug}
          {...blogPost}
          monthsTo={monthsTo}
          locale={locale}
        />
      )),
    [blogPosts, monthsTo, locale],
  );

  return (
    <BlogPostsCardsWrapper>
      <GridContainer $gridCols={1} $gridColsSm={1} $padding="8rem 1rem 0 1rem">
        <GridItem>
          <Flex $justifyContent="space-between" $alignItems="center">
            <Text variant="h2" noMargin>
              {tBlogPosts('title')}
            </Text>
            <Button href="blog" color="transparent">
              <Text noMargin fontWeight={500}>
                {tBlogPosts('show_more_btn')}
              </Text>
            </Button>
          </Flex>
        </GridItem>
      </GridContainer>
      <GridContainer $gridCols={1} $padding="1.5rem 1rem 8rem 1rem">
        <GridItem>
          <Flex $gap="3rem" $flexWrap="wrap" $justifyContent="space-between">
            {renderBlogPostsCards}
          </Flex>
        </GridItem>
      </GridContainer>
    </BlogPostsCardsWrapper>
  );
};

export default React.memo(BlogPostsCards);
