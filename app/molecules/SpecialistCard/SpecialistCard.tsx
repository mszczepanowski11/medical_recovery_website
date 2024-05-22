'use client';

import React, { FC, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import Image from 'next/image';
import Text from '@/app/atoms/Text/Text';
import Tag from '@/app/atoms/Tag/Tag';
import Button from '@/app/atoms/Button/Button';
import { LANG_SORT_ORDER, makeTagsArrayFromString } from '@/app/utils/utils';
import Link from 'next/link';
import { SpecialistCardWrapper } from './SpecialistCard.styles';

type SpecialistCardProps = {
  name: string;
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
  tags: { en: string; pl: string; de: string }[];
  calendar: string;
  specSlug: string;
  languages: ('pl' | 'en' | 'de')[];
  profile_image: { url: string };
  locale: 'en' | 'pl' | 'de';
};

const SpecialistCard: FC<SpecialistCardProps> = function ({
  name,
  title,
  short_description,
  tags,
  specSlug,
  languages,
  profile_image,
  locale,
  calendar,
}) {
  const tCta = useTranslations('cta');

  const renderLanguages = useMemo(
    () =>
      languages
        ?.sort((a, b) => {
          return LANG_SORT_ORDER.indexOf(a) - LANG_SORT_ORDER.indexOf(b);
        })
        .map((lang) => (
          <Image
            key={lang}
            src={`/img/${lang}.svg`}
            alt={lang}
            width={27}
            height={20}
          />
        )),
    [languages],
  );

  const renderTags = useMemo(
    () => tags?.map((tag) => <Tag key={tag[locale]} tag={tag[locale]} />),
    [tags, locale],
  );

  const subpageSlug = useMemo(
    () => `/${locale}/specialists/${specSlug}`,
    [specSlug, locale],
  );

  return (
    <SpecialistCardWrapper
      $flexDirection="column"
      $gap="1rem"
      $alignItems="flex-start"
    >
      <Flex $gap="0.75rem" style={{ width: '100%' }}>
        <Link href={subpageSlug}>
          <Flex
            style={{
              width: 52,
              height: 52,
              position: 'relative',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
            }}
            className="specialists-card-image"
          >
            {!!profile_image?.url && (
              <Image
                src={profile_image?.url || ''}
                alt={name}
                width={52}
                height={52}
              />
            )}
          </Flex>
        </Link>
        <Flex
          $flexDirection="column"
          $justifyContent={
            title[`title_${locale}`] ? 'space-between' : 'center'
          }
          style={{ width: '100%' }}
        >
          <Flex
            $columnGap="1rem"
            $rowGap="0.3rem"
            $justifyContent="space-between"
            $flexWrap="wrap"
            $marginBottom="0.4rem"
          >
            <Link href={subpageSlug}>
              <Text
                variant="h4"
                noMargin
                noWrap
                style={{ flexGrow: 5 }}
                className="specialist-card-name"
              >
                {name}
              </Text>
            </Link>
            <Flex $gap="0.4rem">{renderLanguages}</Flex>
          </Flex>
          {title[`title_${locale}`] && (
            <Text
              color="text_secondary"
              noMargin
              style={{ marginBottom: '0.2rem' }}
            >
              {title[`title_${locale}`]}
            </Text>
          )}
        </Flex>
      </Flex>
      <Flex $flexWrap="wrap" $gap="0.25rem">
        {renderTags}
      </Flex>
      {!!short_description && (
        <Text color="text_secondary">{short_description[locale]}</Text>
      )}
      <Flex style={{ width: '100%', flexGrow: 1, alignItems: 'flex-end' }}>
        <Flex
          style={{ width: '100%' }}
          $alignItems="flex-end"
          $gap="1rem"
          $justifyContent="space-between"
          $flexWrap="wrap"
        >
          <Button
            target="_blank"
            href={calendar}
            classNameWrapper="specialist-card-buttons-wrapper"
            style={{ width: '100%' }}
            iconRight={false}
            color="transparent"
          >
            <Text noMargin fontSize="1.1rem" fontWeight={500} noWrap>
              {tCta('arrange')}
            </Text>
          </Button>
          <Button
            href={subpageSlug}
            classNameWrapper="specialist-card-buttons-wrapper"
            style={{ width: '100%' }}
            iconRight={false}
          >
            <Text noMargin fontSize="1.1rem" fontWeight={500} noWrap>
              {tCta('check_more')}
            </Text>
          </Button>
        </Flex>
      </Flex>
    </SpecialistCardWrapper>
  );
};

export default React.memo(SpecialistCard);
