'use client';

import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils

// Components
import { Flex } from '@/app/utils/GlobalStyles';
import Image from 'next/image';
import Text from '@/app/atoms/Text/Text';
import Tag from '@/app/atoms/Tag/Tag';
import Button from '@/app/atoms/Button/Button';
import { makeTagsArrayFromString } from '@/app/utils/utils';
import { SpecialistCardWrapper } from './SpecialistCard.styles';

type SpecialistCardProps = {
  name: string;
  title: {
    title_en: string;
    title_pl: string;
    title_de: string;
  };
  description: {
    description_en: string;
    description_pl: string;
    description_de: string;
  };
  tags: { tags_en: string; tags_pl: string; tags_de: string };
  languages: ('pl' | 'en' | 'de')[];
  profileImage: { url: string };
  locale: 'en' | 'pl' | 'de';
};

const SpecialistCard: FC<SpecialistCardProps> = function ({
  name,
  title,
  description,
  tags,
  languages,
  profileImage,
  locale,
}) {
  const tCta = useTranslations('cta');

  const renderLanguages = useMemo(
    () =>
      languages?.map((lang) => (
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
    () =>
      makeTagsArrayFromString(tags[`tags_${locale}`])?.map((tag) => (
        <Tag key={tag} tag={tag} />
      )),
    [tags, locale],
  );

  return (
    <SpecialistCardWrapper
      $flexDirection="column"
      $gap="1rem"
      $alignItems="flex-start"
    >
      <Flex $gap="0.75rem" style={{ width: '100%' }}>
        <Flex
          style={{
            width: 52,
            height: 52,
            position: 'relative',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {!!profileImage?.url && (
            <Image
              src={profileImage?.url || ''}
              alt={name}
              width={52}
              height={52}
            />
          )}
        </Flex>
        <Flex
          $flexDirection="column"
          $justifyContent="space-between"
          style={{ width: '100%' }}
        >
          <Flex
            $columnGap="1rem"
            $rowGap="0.3rem"
            $justifyContent="space-between"
            $flexWrap="wrap"
            $marginBottom="0.4rem"
          >
            <Text variant="h4" noMargin noWrap style={{ flexGrow: 5 }}>
              {name}
            </Text>
            <Flex $gap="0.4rem">{renderLanguages}</Flex>
          </Flex>
          <Text
            color="text_secondary"
            noMargin
            style={{ marginBottom: '0.2rem' }}
          >
            {title[`title_${locale}`]}
          </Text>
        </Flex>
      </Flex>
      <Flex $flexWrap="wrap" $gap="0.25rem">
        {renderTags}
      </Flex>
      <Text color="text_secondary">{description[`description_${locale}`]}</Text>
      <Flex style={{ flexGrow: 1 }} $alignItems="flex-end">
        <Button>
          <Text noMargin fontSize="1.25rem" fontWeight={500}>
            {tCta('check_terms')}
          </Text>
        </Button>
      </Flex>
    </SpecialistCardWrapper>
  );
};

export default React.memo(SpecialistCard);
