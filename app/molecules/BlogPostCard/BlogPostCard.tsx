'use client';

import React, { CSSProperties, FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils

// Components
import Image from 'next/image';
import { Flex } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Link from 'next/link';
import { YMDToDMStringY, makeTagsArrayFromString } from '@/app/utils/utils';
import Tag from '@/app/atoms/Tag/Tag';
import { BlogPostCardWrapper } from './BlogPostCard.styles';

type BlogPostCardProps = {
  title: {
    title_en: string;
    title_pl: string;
    title_de: string;
  };
  short_description: {
    short_description_en: string;
    short_description_pl: string;
    short_description_de: string;
  };
  slug: string;
  date: string;
  reading_time?: number;
  image: {
    url: string;
  };
  tags: { tags_en: string; tags_pl: string; tags_de: string };
  monthsTo: { [key: string]: string };
  locale: 'en' | 'pl' | 'de';
  customGap?: string;
  noDesc?: boolean;
  style?: CSSProperties;
  styleMd?: CSSProperties;
  styleSm?: CSSProperties;
};

const BlogPostCard: FC<BlogPostCardProps> = function ({
  title,
  short_description,
  slug,
  date,
  reading_time,
  image,
  tags,
  monthsTo,
  locale,
  customGap,
  noDesc,
  style,
  styleMd,
  styleSm,
}) {
  const t = useTranslations('blog_posts_home_page');

  const href = useMemo(() => `/blog/${slug}`, [slug]);
  const titleLocalized = useMemo(
    () => (title ? title[`title_${locale}`] : null),
    [title, locale],
  );
  const shortDescriptionLocalized = useMemo(
    () =>
      short_description
        ? short_description[`short_description_${locale}`]
        : null,
    [short_description, locale],
  );

  const renderTagsLocalized = useMemo(
    () =>
      makeTagsArrayFromString(tags[`tags_${locale}`])?.map((tag) => (
        <Tag key={tag} tag={tag} />
      )),
    [tags, locale],
  );

  const renderReadingTime = useMemo(() => {
    switch (reading_time) {
      case 1:
        return t('reading_time_1');
      case 2:
        return t('reading_time_2');
      case 3:
        return t('reading_time_2');
      case 4:
        return t('reading_time_2');
      default:
        return t('reading_time_5');
    }
  }, [reading_time, t]);

  return (
    <BlogPostCardWrapper
      $customGap={customGap}
      style={style}
      $styleMd={styleMd}
      $styleSm={styleSm}
    >
      <Link href={href} prefetch>
        <Flex
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: 1.8,
          }}
          $styleMd={{ maxHeight: '200px' }}
        >
          <Image
            src={image?.url}
            alt={titleLocalized || ''}
            fill
            style={{ borderRadius: '0.5rem', objectFit: 'cover' }}
          />
        </Flex>
      </Link>
      <Flex
        $columnGap="0.5rem"
        $rowGap="0.5rem"
        $alignItems="center"
        $flexWrap="wrap"
      >
        <Flex $columnGap="0.5rem" $alignItems="center">
          <Image
            src="/img/calendar-icon.svg"
            alt="calendar"
            width={18}
            height={18}
            style={{ marginBottom: '0.075rem' }}
          />
          <Text noMargin psmall color="text_secondary" fontWeight={500}>
            {YMDToDMStringY(date, monthsTo)}
          </Text>
        </Flex>
        <Text noMargin psmall color="text_secondary" fontWeight={500}>
          •
        </Text>
        {(!!reading_time || reading_time === 0) && (
          <Flex $columnGap="0.5rem" $alignItems="center">
            <Image
              src="/img/clock-icon.svg"
              alt="calendar"
              width={18}
              height={18}
              style={{ marginBottom: '0.05rem' }}
            />
            <Text noMargin psmall color="text_secondary" fontWeight={500}>
              {reading_time} {renderReadingTime}
            </Text>
          </Flex>
        )}
      </Flex>
      {!!renderTagsLocalized && renderTagsLocalized.length > 1 && (
        <Flex $flexWrap="wrap" $gap="0.25rem">
          {renderTagsLocalized}
        </Flex>
      )}
      {!!titleLocalized && (
        <Link href={href} prefetch>
          <Text variant="h4" noMargin className="blog-post-link">
            {titleLocalized}
          </Text>
        </Link>
      )}
      {!!shortDescriptionLocalized && !noDesc && (
        <Text color="text_secondary" noMargin>
          {shortDescriptionLocalized}
        </Text>
      )}
    </BlogPostCardWrapper>
  );
};

export default React.memo(BlogPostCard);
