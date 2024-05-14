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
    tags: { tags_en: string; tags_pl: string; tags_de: string };
    content: {
      content_en: {
        raw: any;
      };
      content_pl: {
        raw: any;
      };
      content_de: {
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
      answer: { en: string; pl: string; de: string };
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
    tags: { tags_en: string; tags_pl: string; tags_de: string };
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
        <GridItem $colStart={1} $colEnd={2} $padding="1rem 0 4.5rem 0">
          <BlogPostLinks content={blogPostContent?.content} locale={locale} />
        </GridItem>
        <GridItem $colStart={2} $colEnd={6} $padding="0 0 3rem 0">
          <BlogPostContent
            blogPostContent={blogPostContent}
            monthsTo={monthsTo}
            locale={locale}
          />
        </GridItem>
        <GridItem $colStart={1} $colEnd={6} $rowStart={2} $rowEnd={3}>
          <FAQ
            questions={blogPostContent?.faq}
            locale={locale}
            customTitle={t('title_blog_post_faq')}
          />
        </GridItem>
        <GridItem $colStart={1} $colEnd={6} $rowStart={3} $rowEnd={4}>
          <BlogPostsCards
            blogPosts={newestBlogPostsList}
            locale={locale}
            monthsTo={monthsTo}
            hideMoreBtn
            customTitle={t('newest_posts_title')}
            maxWidth="calc(700px + 2rem)"
            customGap="1.5rem"
            noDesc
            paddingTopSection="4rem 1rem 1.5rem 1rem"
            paddingBottomSection="0 1rem 4rem 1rem"
          />
        </GridItem>
        <GridItem $colStart={1} $colEnd={6} $rowStart={4} $rowEnd={5}>
          <Contact
            locale={locale}
            noMiddleSection
            rightImageStyle={{ minWidth: 200, width: '18%' }}
            padding="4rem 0 "
          />
        </GridItem>
      </GridContainer>
    </BlogPostWrapper>
  );
};

export default React.memo(BlogPost);
