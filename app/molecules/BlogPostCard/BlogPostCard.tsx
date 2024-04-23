'use client';

import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils

// Components
import Image from 'next/image';
import { Flex } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Link from 'next/link';
import { YMDToDMStringY } from '@/app/utils/utils';
import { BlogPostCardWrapper } from './BlogPostCard.styles';

type BlogPostCardProps = {
  title: string;
  short_description: string;
  slug: string;
  date: string;
  reading_time?: number;
  image: {
    url: string;
  };
  monthsTo: { [key: string]: string };
};

const BlogPostCard: FC<BlogPostCardProps> = function ({
  title,
  short_description,
  slug,
  date,
  reading_time,
  image,
  monthsTo,
}) {
  const t = useTranslations('blog_posts_home_page');

  const href = useMemo(() => `/blog/${slug}`, [slug]);

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
    <BlogPostCardWrapper>
      <Link href={href}>
        <Flex
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: 1.8,
          }}
        >
          <Image
            src={image?.url}
            alt={title}
            fill
            style={{ borderRadius: '0.5rem' }}
          />
        </Flex>
      </Link>
      <Flex $columnGap="0.5rem" $alignItems="center">
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
      <Link href={href}>
        <Text variant="h4" noMargin className="blog-post-link">
          {title}
        </Text>
      </Link>
      <Text color="text_secondary" noMargin>
        {short_description}
      </Text>
    </BlogPostCardWrapper>
  );
};

export default React.memo(BlogPostCard);
