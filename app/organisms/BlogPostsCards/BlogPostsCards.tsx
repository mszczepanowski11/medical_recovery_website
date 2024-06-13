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
  }[];
  monthsTo: { [key: string]: string };
  locale: 'en' | 'pl' | 'de';
  customTitle?: string;
  hideMoreBtn?: boolean;
  maxWidth?: string;
  customGap?: string;
  noDesc?: boolean;
  paddingTopSection?: string;
  paddingTopSectionSm?: string;
  paddingBottomSection?: string;
  paddingBottomSectionSm?: string;
};

const BlogPostsCards: FC<BlogPostsCardsProps> = function ({
  blogPosts,
  monthsTo,
  locale,
  customTitle,
  hideMoreBtn,
  maxWidth,
  customGap,
  noDesc,
  paddingTopSection,
  paddingTopSectionSm,
  paddingBottomSection,
  paddingBottomSectionSm,
}) {
  const tBlogPosts = useTranslations('blog_posts_home_page');

  const renderBlogPostsCards = useMemo(
    () =>
      blogPosts.map((blogPost, index, arr) => (
        <BlogPostCard
          key={blogPost.slug}
          {...blogPost}
          monthsTo={monthsTo}
          locale={locale}
          customGap={customGap}
          noDesc={noDesc}
          style={{
            width: arr.length > 1 ? undefined : '100%',
            maxWidth: arr.length > 1 ? undefined : '100%',
          }}
          styleMd={{
            minWidth: 'calc(320px - 2rem) !important',
            flexGrow: 1,
            maxWidth: 'calc(50% - 1rem) !important',
          }}
          styleSm={{ flexGrow: 1, maxWidth: 'none !important' }}
        />
      )),
    [blogPosts, monthsTo, locale, customGap, noDesc],
  );

  if (!blogPosts || blogPosts.length < 1) return null;

  return (
    <BlogPostsCardsWrapper>
      <GridContainer
        $gridCols={1}
        $gridColsSm={1}
        $padding={paddingTopSection || '8rem 1rem 0 1rem'}
        $paddingSm={paddingTopSectionSm || '2rem 1rem 0 1rem'}
        $maxWidth={maxWidth}
      >
        <GridItem>
          <Flex
            $justifyContent="space-between"
            $alignItems="center"
            $flexWrap="wrap"
            $rowGap="1rem"
            $columnGap="2rem"
            $styleSm={{ justifyContent: 'center', flexDirection: 'column' }}
          >
            <Text
              variant="h2"
              noMargin
              style={{ width: '100%', textAlign: 'center' }}
              styleSm={{ textAlign: 'center' }}
            >
              {customTitle || tBlogPosts('title')}
            </Text>
            {/* {!hideMoreBtn && (
              <Button href={`/${locale}/blog`} color="transparent">
                <Text noMargin fontWeight={500}>
                  {tBlogPosts('show_more_btn')}
                </Text>
              </Button>
            )} */}
          </Flex>
        </GridItem>
      </GridContainer>
      <GridContainer
        $gridCols={1}
        $gridColsSm={1}
        $padding={paddingBottomSection || '1.5rem 1rem 6rem 1rem'}
        $paddingSm={paddingBottomSectionSm || '1.5rem 1rem 2rem 1rem'}
        $maxWidth={maxWidth}
      >
        <GridItem>
          <Flex
            $gap={customGap || '1.6rem'}
            $flexWrap="wrap"
            $justifyContent="space-between"
          >
            {renderBlogPostsCards}
          </Flex>
        </GridItem>
      </GridContainer>
    </BlogPostsCardsWrapper>
  );
};

export default React.memo(BlogPostsCards);
