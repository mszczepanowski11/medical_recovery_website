'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import BlogPostContent from '@/app/molecules/BlogPostContent/BlogPostContent';
import BlogPostLinks from '@/app/molecules/BlogPostLinks/BlogPostLinks';
import { BlogPostWrapper } from './BlogPost.styles';
import FAQ from '../FAQ/FAQ';
import BlogPostsCards from '../BlogPostsCards/BlogPostsCards';
import Contact from '../Contact/Contact';

type BlogPostProps = {
  blogPostContent: {
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
    content: {
      en: {
        raw: any;
      };
      pl: {
        raw: any;
      };
      de: {
        raw: any;
      };
    };
    author: string;
    faq: {
      question: {
        en: string;
        pl: string;
        de: string;
      };
      answer: {
        en: {
          raw: any;
        };
        pl: {
          raw: any;
        };
        de: {
          raw: any;
        };
      };
    }[];
  };
  newestBlogPostsList: {
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
};

const BlogPost: FC<BlogPostProps> = function ({
  blogPostContent,
  monthsTo,
  locale,
  newestBlogPostsList,
}) {
  const t = useTranslations('blog_page');

  return (
    <BlogPostWrapper>
      <GridContainer
        $gridCols={5}
        $padding="4rem 1rem 0 1rem"
        style={{ overflow: 'visible', clipPath: 'none' }}
      >
        <GridItem
          $colStart={1}
          $colEnd={2}
          $padding="1rem 0 4.5rem 0"
          $styleSm={{ display: 'none' }}
        >
          <BlogPostLinks content={blogPostContent?.content} locale={locale} />
        </GridItem>
        <GridItem
          $colStart={2}
          $colEnd={6}
          $colStartSm={1}
          $colEndSm={3}
          $rowStartSm={1}
          $rowEndSm={2}
          $padding="0 0 3rem 0"
        >
          <BlogPostContent
            blogPostContent={blogPostContent}
            monthsTo={monthsTo}
            locale={locale}
          />
        </GridItem>
        <GridItem
          $colStart={1}
          $colEnd={6}
          $rowStart={2}
          $rowEnd={3}
          $colStartSm={1}
          $colEndSm={3}
          $rowStartSm={2}
          $rowEndSm={3}
        >
          <FAQ
            questions={blogPostContent?.faq}
            locale={locale}
            customTitle={t('title_blog_post_faq')}
            paddingTopSectionSm="4rem 0 0 0"
            paddingBottomSectionSm="2rem 0 4rem 0"
          />
        </GridItem>
        <GridItem
          $colStart={1}
          $colEnd={6}
          $rowStart={3}
          $rowEnd={4}
          $colStartSm={1}
          $colEndSm={3}
          $rowStartSm={3}
          $rowEndSm={4}
        >
          <BlogPostsCards
            blogPosts={newestBlogPostsList}
            locale={locale}
            monthsTo={monthsTo}
            hideMoreBtn
            customTitle={t('newest_posts_title')}
            maxWidth="calc(700px + 2rem)"
            customGap="1.5rem"
            noDesc
            paddingTopSection="4rem 0 1.5rem 0"
            paddingBottomSection="0 0 4rem 0"
            paddingTopSectionSm="2.5rem 0 1.5rem 0"
            paddingBottomSectionSm="0 0 4rem 0"
          />
        </GridItem>
        <GridItem
          $colStart={1}
          $colEnd={6}
          $colStartSm={1}
          $colEndSm={3}
          $rowStart={4}
          $rowEnd={5}
          $rowStartSm={4}
          $rowEndSm={5}
        >
          <Contact
            locale={locale}
            noMiddleSection
            rightImageStyle={{ minWidth: 200, width: '18%' }}
            padding="4rem 0"
          />
        </GridItem>
      </GridContainer>
    </BlogPostWrapper>
  );
};

export default React.memo(BlogPost);
