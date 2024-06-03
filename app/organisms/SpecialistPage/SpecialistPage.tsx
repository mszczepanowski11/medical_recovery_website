/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/naming-convention */

'use client';

import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

// Utils
import { Colors, headerHeight, headerHeightSm } from '@/app/utils/constans';
import useWindowSize from '@/app/utils/useWindowSize';
import useScrollTo from '@/app/utils/useScrollTo';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { LANG_SORT_ORDER } from '@/app/utils/utils';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Image from 'next/image';
import Text from '@/app/atoms/Text/Text';
import Tag from '@/app/atoms/Tag/Tag';
import Button from '@/app/atoms/Button/Button';
import Tabs from '@/app/atoms/Tabs/Tabs';
import SpecialistComment from '@/app/molecules/SpecialistComment/SpecialistComment';
import {
  SpecialistDataItem,
  SpecialistDataList,
  ServicesList,
  ServicesListItem,
  SpecialistPageWrapper,
} from './SpecialistPage.styles';

type SpecialistPageProps = {
  specialistContent: {
    specialist_page_slug: string;
    name_surname: string;
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
    languages: ('pl' | 'en' | 'de')[];
    profile_image: { url: string; alt: string; caption: string; title: string };
    calendar: string;
    cheapest_price: { en: string; pl: string; de: string };
    therapy_long_min: string | number;
    description: {
      en: string;
      pl: string;
      de: string;
    };
    services: {
      service_name: {
        en: string;
        pl: string;
        de: string;
      };
      service_url: {
        en: string;
        pl: string;
        de: string;
      };
    }[];
    experience: { en: string; pl: string; de: string };
    education: { en: string; pl: string; de: string };
    locals: {
      localization: { en: string; pl: string; de: string };
      description: { en: string; pl: string; de: string };
    }[];
    therapy_types: {
      en: string;
      pl: string;
      de: string;
    }[];
    comments?: {
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
    }[];
  };
  locale: 'en' | 'pl' | 'de';
  specialistHadLang?: boolean;
  monthsTo?: any;
};

const SpecialistPage: FC<SpecialistPageProps> = function ({
  specialistContent,
  locale,
  specialistHadLang,
  monthsTo,
}) {
  const t = useTranslations('specialist_page');
  const tCta = useTranslations('cta');
  const tUtils = useTranslations('utils');
  const router = useRouter();
  const pathname = usePathname();
  const { isMobile, isLaptop } = useWindowSize();
  const { scrollTo } = useScrollTo();

  const {
    specialist_page_slug,
    profile_image,
    short_description,
    name_surname,
    tags,
    calendar,
    cheapest_price,
    languages,
    description,
    services,
    experience,
    education,
    locals,
    therapy_types,
    comments,
  } = specialistContent || {};

  const hasComments = useMemo(
    () => comments?.some((comment) => !!comment.comment[locale]),
    [comments, locale],
  );
  const commentsLocalized = useMemo(
    () => comments?.filter((comment) => comment.comment[locale]),
    [comments, locale],
  );
  const renderComments = useMemo(
    () =>
      commentsLocalized?.map((comment) => (
        <SpecialistComment
          key={comment.name_surname}
          {...comment}
          locale={locale}
          monthsTo={monthsTo}
        />
      )),
    [commentsLocalized, locale, monthsTo],
  );
  const shortDescriptionLocalized = useMemo(
    () => (short_description ? short_description[locale] : ''),
    [locale, short_description],
  );
  const descriptionLocalized = useMemo(
    () => (description ? description[locale] : ''),
    [locale, description],
  );
  const renderTags = useMemo(
    () => tags?.map((tag) => <Tag key={tag[locale]} tag={tag[locale]} />),
    [tags, locale],
  );
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
            width={32}
            height={24}
          />
        )),
    [languages],
  );
  const renderLocals = useMemo(
    () =>
      locals?.map((item) => (
        <SpecialistDataItem key={item.localization[locale]}>
          <Text noMargin fontWeight={500}>
            {item.localization[locale]}
          </Text>
          {item.description && item.description[locale] && (
            <Text noMargin color="text_secondary">
              {item.description[locale]}
            </Text>
          )}
        </SpecialistDataItem>
      )),
    [locale, locals],
  );
  const renderTherapyTypes = useMemo(
    () =>
      therapy_types?.map((item) => (
        <SpecialistDataItem key={item[locale]}>
          <Text noMargin fontWeight={500}>
            {item[locale]}
          </Text>
        </SpecialistDataItem>
      )),
    [locale, therapy_types],
  );
  const tabs = useMemo(
    () => [
      {
        active: true,
        id: 0,
        label: t('services_label'),
        onClick: () =>
          scrollTo('services_label', {
            offset: -(isMobile ? headerHeightSm : headerHeight) - 50,
          }),
      },
      {
        active: true,
        id: 1,
        label: t('experience_label'),
        onClick: () =>
          scrollTo('experience_label', {
            offset: -(isMobile ? headerHeightSm : headerHeight) - 50,
          }),
      },
      {
        active: true,
        id: 2,
        label: t('education_label'),
        onClick: () =>
          scrollTo('education_label', {
            offset: -(isMobile ? headerHeightSm : headerHeight) - 50,
          }),
      },
      {
        active: hasComments,
        id: 3,
        label: t('opinions_label'),
        onClick: () =>
          scrollTo('opinions_label', {
            offset: -(isMobile ? headerHeightSm : headerHeight) - 50,
          }),
      },
    ],
    [isMobile, scrollTo, t, hasComments],
  );

  const handleLangChange = useCallback(
    (newLocale: typeof locale) => {
      const oldLocale = locale;
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

      router.replace(pathname.replace(`/${oldLocale}`, `/${newLocale}`), {
        scroll: false,
      });
      router.refresh();
    },
    [locale, pathname, router],
  );

  useEffect(() => {
    window.SPECIALIST_CALENDAR_URL = calendar;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!specialistHadLang) {
    return (
      <SpecialistPageWrapper style={{ height: '100%' }}>
        <GridContainer
          $gridCols={1}
          $gridColsSm={1}
          $gap="2rem"
          $rowGapSm="0.5rem"
          style={{ overflow: 'visible', clipPath: 'none', flexGrow: 1 }}
        >
          <GridItem>
            <Flex $flexDirection="column" $alignItems="center" $gap="1rem">
              <Text variant="h1" fontSize="1.6rem" fontSizeSm="1.6rem">
                {t('no_lang_specialist_alert', { name: name_surname })}
              </Text>
              <Text style={{ marginBottom: '3rem' }}>
                {t('find_another_langs')}
              </Text>
              {languages?.map((lang: 'pl' | 'en' | 'de') => (
                <Button key={lang} onClick={() => handleLangChange(lang)}>
                  <Text
                    noMargin
                    fontSize="1rem"
                    fontWeight={500}
                    style={{ whiteSpace: 'nowrap' }}
                    styleMd={{ whiteSpace: 'wrap' }}
                  >
                    {tUtils(`languages.${lang}`)}
                  </Text>
                </Button>
              ))}
            </Flex>
          </GridItem>
        </GridContainer>
      </SpecialistPageWrapper>
    );
  }

  return (
    <SpecialistPageWrapper>
      <GridContainer
        $gridCols={7}
        $gridColsSm={1}
        $gap="2rem"
        $rowGapSm="0.5rem"
        style={{ overflow: 'visible', clipPath: 'none' }}
      >
        <GridItem
          $colStart={1}
          $colEnd={3}
          $colStartSm={1}
          $colEndSm={2}
          $rowStartSm={1}
          $rowEndSm={2}
          style={{ position: 'relative' }}
        >
          <Flex
            $flexDirection="column"
            $rowGap="1.5rem"
            style={{
              position: 'sticky',
              top: `calc(2rem + ${isMobile ? headerHeightSm : headerHeight}px)`,
            }}
          >
            <Flex $alignItems="center" $gap="1rem" $style={{ width: '100%' }}>
              <Flex
                $style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1',
                }}
                $styleSm={{ width: '3rem', height: '3rem' }}
              >
                <Image
                  src={profile_image?.url || ''}
                  alt={profile_image?.alt || ''}
                  fill
                  style={{ borderRadius: '50%' }}
                />
              </Flex>
              {isMobile && <Flex $gap="0.4rem">{renderLanguages}</Flex>}
            </Flex>
            {isMobile && (
              <Flex>
                <Text
                  variant="h1"
                  fontSize="2.625rem"
                  styleMd={{ fontSize: '2rem' }}
                  noMargin
                >
                  {name_surname}
                </Text>
              </Flex>
            )}
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
            <Button
              target="_blank"
              href={calendar}
              iconRight={isLaptop ? false : faAngleRight}
            >
              <Text
                noMargin
                fontSize="1rem"
                fontWeight={500}
                style={{ whiteSpace: 'nowrap' }}
                styleMd={{ whiteSpace: 'wrap' }}
              >
                {tCta('book_visit')}{' '}
                {(!isLaptop || isMobile) &&
                  `( ${tCta('book_visit_from_label')} ${cheapest_price[locale]} )`}
              </Text>
            </Button>
          </Flex>
        </GridItem>
        <GridItem
          $colStart={3}
          $colEnd={8}
          $colStartSm={1}
          $colEndSm={2}
          $rowStartSm={2}
          $rowEndSm={3}
        >
          <Flex $flexDirection="column" $rowGap="1.5rem">
            <Flex $alignItems="center" $columnGap="1.3rem">
              {!isMobile && (
                <Text variant="h1" fontSize="2.625rem" noMargin>
                  {name_surname}
                </Text>
              )}
              {!isMobile && <Flex $gap="0.4rem">{renderLanguages}</Flex>}
            </Flex>
            <Flex
              $flexWrap="wrap"
              $gap="0.25rem"
              $style={{
                paddingBottom: '1.5rem',
                borderBottom: `1px solid ${Colors.border}`,
                maxWidth: 500,
              }}
            >
              {renderTags}
            </Flex>

            <Flex
              $columnGap="2rem"
              $rowGap="1.5rem"
              $flexWrap="wrap"
              $style={{
                paddingBottom: '1rem',
                borderBottom: `1px solid ${Colors.border}`,
              }}
            >
              {locals?.length > 0 && (
                <Flex
                  $flexDirection="column"
                  $rowGap="0.75rem"
                  $style={{ flexBasis: 'calc(50% - 1rem)' }}
                >
                  <Text noMargin fontWeight={500}>
                    {t('localization_label')}
                  </Text>
                  <SpecialistDataList
                    as="ul"
                    style={{
                      margin: 0,
                      padding: '0 0 0 1rem',
                    }}
                  >
                    {renderLocals}
                  </SpecialistDataList>
                </Flex>
              )}
              {therapy_types?.length > 0 && (
                <Flex
                  $flexDirection="column"
                  $rowGap="0.75rem"
                  $style={{ flexBasis: 'calc(50% - 1rem)' }}
                >
                  <Text noMargin fontWeight={500}>
                    {t('therapy_type_label')}
                  </Text>
                  <SpecialistDataList
                    as="ul"
                    style={{
                      margin: 0,
                      padding: '0 0 0 1rem',
                    }}
                  >
                    {renderTherapyTypes}
                  </SpecialistDataList>
                </Flex>
              )}
            </Flex>

            <Text color="text_secondary">{descriptionLocalized}</Text>
            <Tabs
              tabs={tabs}
              activeTab={null}
              setActiveTab={() => {}}
              tabsStyle={{
                position: 'sticky',
                top: isMobile ? headerHeightSm : headerHeight,
                paddingTop: '0.5rem',
                backgroundColor: Colors.background_background_white,
                zIndex: 2,
              }}
            >
              <Flex $flexDirection="column" $rowGap="2.2rem">
                {!!services && services.length > 0 && (
                  <Flex
                    $flexDirection="column"
                    $rowGap="1rem"
                    id="services_label"
                  >
                    <Text variant="h2" fontSize="2rem" noMargin>
                      {t('services_label')}
                    </Text>
                    <ServicesList>
                      {services?.map(({ service_name, service_url }, index) => (
                        <ServicesListItem
                          key={`${service_url[locale]}-${index}`}
                        >
                          <a href={service_url[locale]} target="_blank">
                            <Text
                              noMargin
                              color="text_secondary"
                              className="specialist-page-service-link"
                            >
                              {service_name[locale]}
                            </Text>
                          </a>
                        </ServicesListItem>
                      ))}
                    </ServicesList>
                  </Flex>
                )}
                {!!experience && !!experience[locale] && (
                  <Flex
                    $flexDirection="column"
                    $rowGap="1rem"
                    id="experience_label"
                  >
                    <Text variant="h2" fontSize="2rem" noMargin>
                      {t('experience_label')}
                    </Text>
                    <Text noMargin color="text_secondary">
                      {experience[locale]}
                    </Text>
                  </Flex>
                )}
                {!!education && !!education[locale] && (
                  <Flex
                    $flexDirection="column"
                    $rowGap="1rem"
                    id="education_label"
                  >
                    <Text variant="h2" fontSize="2rem" noMargin>
                      {t('education_label')}
                    </Text>
                    <Text noMargin color="text_secondary">
                      {education[locale]}
                    </Text>
                  </Flex>
                )}
                {hasComments && (
                  <Flex
                    $flexDirection="column"
                    $rowGap="1rem"
                    id="opinions_label"
                  >
                    <Text
                      variant="h2"
                      fontSize="2rem"
                      noMargin
                      style={{ marginBottom: '1rem' }}
                    >
                      {t('opinions_label')}
                    </Text>
                    {renderComments}
                  </Flex>
                )}
              </Flex>
            </Tabs>
          </Flex>
          {isMobile && (
            <Flex $style={{ marginTop: '2.5rem' }}>
              <Button
                target="_blank"
                href={calendar}
                iconRight={isLaptop ? false : faAngleRight}
              >
                <Text
                  noMargin
                  fontSize="1rem"
                  fontWeight={500}
                  style={{ whiteSpace: 'nowrap' }}
                  styleMd={{ whiteSpace: 'wrap' }}
                >
                  {tCta('check_terms')}{' '}
                  {(!isLaptop || isMobile) &&
                    `( ${tCta('book_visit_from_label')} ${cheapest_price ? cheapest_price[locale] : undefined} )`}
                </Text>
              </Button>
            </Flex>
          )}
        </GridItem>
      </GridContainer>
    </SpecialistPageWrapper>
  );
};

export default React.memo(SpecialistPage);
