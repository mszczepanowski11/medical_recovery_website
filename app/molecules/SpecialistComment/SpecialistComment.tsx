/* eslint-disable no-plusplus */

'use client';

import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils

// Components
import Text from '@/app/atoms/Text/Text';
import Image from 'next/image';
import { Flex } from '@/app/utils/GlobalStyles';
import Link from 'next/link';
import { YMDToDMStringY } from '@/app/utils/utils';
import { SpecialistCommentWrapper } from './SpecialistComment.styles';

type SpecialistCommentProps = {
  name_surname: string;
  comment: {
    en?: string;
    pl?: string;
    de?: string;
  };
  source: {
    en?: string;
    pl?: string;
    de?: string;
  };
  date?: string;
  stars?: number;
  url?: string;
  locale: 'en' | 'pl' | 'de';
  monthsTo: any;
};

const SpecialistComment: FC<SpecialistCommentProps> = function ({
  name_surname,
  comment,
  source,
  date,
  stars,
  url,
  locale,
  monthsTo,
}) {
  const t = useTranslations('specialist_page');

  const renderStars = useMemo(() => {
    if (!stars) return null;
    const starsList = [];
    for (let i = 0; i < 5; i++) {
      starsList.push(
        <Image
          key={i}
          src={`/img/${stars >= i + 1 ? 'full-star' : 'empty-star'}.svg`}
          alt={`${stars >= i + 1 ? 'full-star' : 'empty-star'}`}
          width={14}
          height={14}
        />,
      );
    }
    return <Flex>{starsList}</Flex>;
  }, [stars]);

  const renderSource = useMemo(
    () =>
      url ? (
        <Link href={url || ''} target="_blank">
          <Text noMargin psmall color="text_secondary">
            {t('source_label')}: {source[locale]}
          </Text>
        </Link>
      ) : (
        <Text noMargin psmall color="text_secondary">
          {t('source_label')}: {source[locale]}
        </Text>
      ),
    [locale, source, t, url],
  );

  return (
    <SpecialistCommentWrapper>
      <Flex $alignItems="center" $gap="1rem">
        {!!name_surname && (
          <Text variant="h3" fontSize="1.2rem" noMargin fontWeight={400}>
            {name_surname}
          </Text>
        )}
        {renderStars}
      </Flex>
      {!!date && (
        <Text noMargin fontSize="0.7rem" color="text_secondary">
          {YMDToDMStringY(date, monthsTo)}
        </Text>
      )}
      <Text psmall noMargin>
        {comment[locale]}
      </Text>
      {!!source[locale] && renderSource}
    </SpecialistCommentWrapper>
  );
};

export default React.memo(SpecialistComment);
