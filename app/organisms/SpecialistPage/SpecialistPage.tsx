/* eslint-disable @typescript-eslint/naming-convention */

'use client';

import React, { FC, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors, headerHeight, headerHeightSm } from '@/app/utils/constans';
import useWindowSize from '@/app/utils/useWindowSize';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Image from 'next/image';
import Text from '@/app/atoms/Text/Text';
import { makeTagsArrayFromString } from '@/app/utils/utils';
import Tag from '@/app/atoms/Tag/Tag';
import Button from '@/app/atoms/Button/Button';
import Tabs from '@/app/atoms/Tabs/Tabs';
import {
  ServicesList,
  ServicesListItem,
  SpecialistPageWrapper,
} from './SpecialistPage.styles';

type SpecialistPageProps = {
  specialistContent: {
    name_surname: string;
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
    tags: { tags_en: string; tags_pl: string; tags_de: string };
    languages: ('pl' | 'en' | 'de')[];
    profile_image: { url: string; alt: string; caption: string; title: string };
    calendar: string;
    price: { price_eur: number | string; price_pln: number | string };
    therapy_long_min: string | number;
    description: {
      description_en: string;
      description_pl: string;
      description_de: string;
    };
    services: {
      en: string;
      pl: string;
      de: string;
    };
    experience: { en: string; pl: string; de: string };
    education: { en: string; pl: string; de: string };
  };
  locale: 'en' | 'pl' | 'de';
};

const SpecialistPage: FC<SpecialistPageProps> = function ({
  specialistContent,
  locale,
}) {
  const t = useTranslations('specialist_page');
  const tCta = useTranslations('cta');
  const tUtils = useTranslations('utils');
  const tCurr = useTranslations('utils.currency');
  const { isMobile } = useWindowSize();
  console.log('specialistContent', specialistContent);

  const [activeTab, setActiveTab] = useState(null);

  const {
    profile_image,
    short_description,
    name_surname,
    title,
    tags,
    calendar,
    price,
    languages,
    description,
    services,
    experience,
    education,
  } = specialistContent || {};

  const shortDescriptionLocalized = useMemo(
    () => short_description[`short_description_${locale}`],
    [locale, short_description],
  );
  const descriptionLocalized = useMemo(
    () => description[`description_${locale}`],
    [locale, description],
  );
  const titleLocalized = useMemo(
    () => title[`title_${locale}`],
    [locale, title],
  );
  const renderTags = useMemo(
    () =>
      makeTagsArrayFromString(tags[`tags_${locale}`])?.map((tag) => (
        <Tag key={tag} tag={tag} />
      )),
    [tags, locale],
  );
  const renderLanguages = useMemo(
    () =>
      languages?.map((lang) => (
        <Image
          key={lang}
          src={`/img/${lang}.svg`}
          alt={lang}
          width={32}
          height={24}
        />
      )),
    [languages],
  );
  const tabs = useMemo(
    () => [
      {
        id: 0,
        label: t('services_label'),
        content: (
          <ServicesList>
            {makeTagsArrayFromString(services[locale])?.map((service) => (
              <ServicesListItem key={service}>
                <Text noMargin color="text_secondary">
                  {service}
                </Text>
              </ServicesListItem>
            ))}
          </ServicesList>
        ),
      },
      {
        id: 1,
        label: t('experience_label'),
        content: (
          <Text noMargin color="text_secondary">
            {experience[locale]}
          </Text>
        ),
      },
      {
        id: 2,
        label: t('education_label'),
        content: (
          <Text noMargin color="text_secondary">
            {education[locale]}
          </Text>
        ),
      },
      {
        id: 3,
        label: t('publication_label'),
        content: (
          <Text noMargin color="text_secondary">
            {education[locale]}
          </Text>
        ),
      },
    ],
    [education, experience, locale, services, t],
  );

  const activeTabItem = useMemo(
    () => tabs.find((item) => item.id === activeTab),
    [activeTab, tabs],
  );

  return (
    <SpecialistPageWrapper>
      <GridContainer
        $gridCols={7}
        $gap="2rem"
        style={{ overflow: 'visible', clipPath: 'none' }}
      >
        <GridItem $colStart={1} $colEnd={3} style={{ position: 'relative' }}>
          <Flex
            $flexDirection="column"
            $rowGap="1.5rem"
            style={{
              position: 'sticky',
              top: `calc(2rem + ${isMobile ? headerHeightSm : headerHeight}px)`,
            }}
          >
            <Flex
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: 1,
              }}
            >
              <Image
                src={profile_image?.url || ''}
                alt={profile_image?.alt || ''}
                fill
                style={{ borderRadius: '50%' }}
              />
            </Flex>
            <Flex $gap="0.5rem">
              <Image
                src="/img/quote-icon.svg"
                alt="quote"
                width={20}
                height={20}
                style={{ marginTop: '0.15rem' }}
              />
              <Text noMargin psmall color="text_secondary">
                {shortDescriptionLocalized}
              </Text>
            </Flex>
            <Button href={calendar}>
              <Text noMargin fontSize="1rem" fontWeight={500} noWrap>
                {tCta('therapy_individual')}{' '}
                {`${price?.price_pln}${tCurr('pln')}`}
              </Text>
            </Button>
          </Flex>
        </GridItem>
        <GridItem $colStart={3} $colEnd={8}>
          <Flex $flexDirection="column" $rowGap="1.5rem">
            <Flex $alignItems="center" $columnGap="1.3rem">
              <Text variant="h1" fontSize="2.625rem" noMargin>
                {name_surname}
              </Text>
              <Flex $gap="0.4rem">{renderLanguages}</Flex>
            </Flex>
            <Flex
              $flexWrap="wrap"
              $gap="0.25rem"
              style={{
                paddingBottom: '1.5rem',
                borderBottom: `1px solid ${Colors.border}`,
              }}
            >
              {renderTags}
            </Flex>
            <Flex>
              <Flex $flexDirection="column" $rowGap="0.75rem">
                a
              </Flex>
            </Flex>
            <Text color="text_secondary">{descriptionLocalized}</Text>
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
              <Flex $flexDirection="column" $rowGap="1rem">
                <Text variant="h2" fontSize="2rem" noMargin>
                  {activeTabItem?.label}
                </Text>
                {activeTabItem?.content}
              </Flex>
            </Tabs>
          </Flex>
        </GridItem>
      </GridContainer>
    </SpecialistPageWrapper>
  );
};

export default React.memo(SpecialistPage);
