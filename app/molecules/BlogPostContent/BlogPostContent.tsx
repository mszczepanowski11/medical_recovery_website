/* eslint-disable @typescript-eslint/naming-convention */

'use client';

import React, { FC, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { astToHtmlString } from '@graphcms/rich-text-html-renderer';

// Utils

// Components
import Text from '@/app/atoms/Text/Text';
import { Flex } from '@/app/utils/GlobalStyles';
import Image from 'next/image';
import { YMDToDMStringY, addSizesToImgUrl } from '@/app/utils/utils';
import { Instrument_Sans } from 'next/font/google';
import Tag from '@/app/atoms/Tag/Tag';
import {
  BlogPostContentWrapper,
  ContentWrapper,
} from './BlogPostContent.styles';
import BlogPostLinks from '../BlogPostLinks/BlogPostLinks';

const instrument_sans = Instrument_Sans({ subsets: ['latin'] });

type BlogPostContentProps = {
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
  };
  monthsTo: { [key: string]: string };
  locale: 'en' | 'pl' | 'de';
};

const BlogPostContent: FC<BlogPostContentProps> = function ({
  blogPostContent,
  monthsTo,
  locale,
}) {
  const tBlogPosts = useTranslations('blog_posts_home_page');

  const { title, slug, date, reading_time, image, tags, author, content } =
    blogPostContent || {};

  const titleLocalized = useMemo(
    () => (title ? title[`title_${locale}`] : null),
    [title, locale],
  );

  const contentLocalized = useMemo(
    () => (content ? content[locale] : null),
    [content, locale],
  );

  const renderTagsLocalized = useMemo(
    () =>
      tags
        ?.filter((tag) => tag[locale] && tag[locale] !== '')
        .map((tag) => <Tag key={tag[locale]} tag={tag[locale]} />),
    [tags, locale],
  );

  const renderReadingTime = useMemo(() => {
    switch (reading_time) {
      case 1:
        return tBlogPosts('reading_time_1');
      case 2:
        return tBlogPosts('reading_time_2');
      case 3:
        return tBlogPosts('reading_time_2');
      case 4:
        return tBlogPosts('reading_time_2');
      default:
        return tBlogPosts('reading_time_5');
    }
  }, [reading_time, tBlogPosts]);

  const jsonContent = useMemo(
    () =>
      astToHtmlString({
        content: contentLocalized?.raw,
        renderers: {
          h2: (props) => {
            const { children } = props || {};
            const childrenTrim = children
              ?.replace('<b>', '')
              .replace('</b>', '');

            return `<h2 id="${childrenTrim}">${childrenTrim}</h2>`;
          },
          a: (props: any) => {
            const { href, children, title: linkTitle } = props || {};

            return `<a href="${href}" title="${linkTitle}" target="_blank">${children}</a>`;
          },
          p: (props) => {
            const { children } = props || {};

            if (!children || children === '') return '';
            return `<p>${children}</p>`;
          },
          img: (props: any) => {
            const { src, height, width, handle } = props || {};

            const maxSizesStyle =
              width || height
                ? `style="${width ? `width: 100%; ` : ''}${`max-height: ${400}px; `}object-fit: cover;"`
                : '';
            const mdSrc = addSizesToImgUrl(src, handle, width, height, 750);
            const smallSrc = addSizesToImgUrl(src, handle, width, height, 550);
            const mobileSrc = addSizesToImgUrl(src, handle, width, height, 350);
            return `
            <figure>
              <picture>
                ${
                  !!mobileSrc &&
                  `<source media="(max-width: 400px)" srcset="${mobileSrc}" />`
                }
                ${
                  !!smallSrc &&
                  `<source media="(max-width: 600px)" srcset="${smallSrc}" />`
                }
                ${
                  !!mdSrc &&
                  `<source media="(max-width: 800px)" srcset="${mdSrc}" />`
                }
                <img src="${src}" alt="blog" ${maxSizesStyle}  />
              </picture>
            </figure>`;
          },
        },
      }),
    [contentLocalized],
  );

  return (
    <BlogPostContentWrapper $flexDirection="column" $rowGap="1.2rem">
      <Text
        variant="h1"
        style={{ fontSize: '2.625rem' }}
        styleSm={{ fontSize: '2rem' }}
        noMargin
      >
        {titleLocalized}
      </Text>
      <Flex
        $columnGap="0.5rem"
        $rowGap="0.5rem"
        $alignItems="center"
        $flexWrap="wrap"
        $padding="0.25rem 0"
      >
        <Flex $columnGap="0.5rem" $alignItems="center">
          <Image
            src="/img/author-icon.svg"
            alt="calendar"
            width={18}
            height={18}
            style={{ marginBottom: '0.075rem' }}
          />
          <Text
            noMargin
            psmall
            color="text_secondary"
            fontWeight={500}
            styleSm={{ fontSize: '0.9rem' }}
          >
            {author}
          </Text>
        </Flex>
        <Text noMargin psmall color="text_secondary" fontWeight={500}>
          •
        </Text>
        <Flex $columnGap="0.5rem" $alignItems="center">
          <Image
            src="/img/calendar-icon.svg"
            alt="calendar"
            width={18}
            height={18}
            style={{ marginBottom: '0.075rem' }}
          />
          <Text
            noMargin
            psmall
            color="text_secondary"
            fontWeight={500}
            styleSm={{ fontSize: '0.9rem' }}
          >
            {YMDToDMStringY(date, monthsTo)}
          </Text>
        </Flex>

        {(!!reading_time || reading_time === 0) && (
          <>
            <Text
              noMargin
              psmall
              color="text_secondary"
              fontWeight={500}
              styleSm={{ fontSize: '0.9rem' }}
            >
              •
            </Text>
            <Flex $columnGap="0.5rem" $alignItems="center">
              <Image
                src="/img/clock-icon.svg"
                alt="calendar"
                width={18}
                height={18}
                style={{ marginBottom: '0.05rem' }}
              />
              <Text
                noMargin
                psmall
                color="text_secondary"
                fontWeight={500}
                styleSm={{ fontSize: '0.9rem' }}
              >
                {reading_time} {renderReadingTime}
              </Text>
            </Flex>
          </>
        )}
      </Flex>
      {!!renderTagsLocalized && renderTagsLocalized.length > 0 && (
        <Flex $flexWrap="wrap" $gap="0.25rem">
          {renderTagsLocalized}
        </Flex>
      )}
      <BlogPostLinks
        content={blogPostContent?.content}
        locale={locale}
        className="blog-post-content-links"
      />
      {!!image?.url && (
        <Flex
          $margin="1.3rem 0"
          style={{
            position: 'relative',
            aspectRatio: 5 / 2,
            borderRadius: '2rem',
            overflow: 'hidden',
          }}
        >
          <Image
            src={image?.url || ''}
            alt={titleLocalized || ''}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Flex>
      )}

      <ContentWrapper
        className={instrument_sans.className}
        dangerouslySetInnerHTML={{
          __html: jsonContent,
        }}
      />
    </BlogPostContentWrapper>
  );
};

export default React.memo(BlogPostContent);
