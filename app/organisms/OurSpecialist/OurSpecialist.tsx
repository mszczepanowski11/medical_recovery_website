/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { FC, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import {
  collectAllTagsFromSpecialist,
  specialistLangFilterFunc,
  specialistTagsFilterFunc,
} from '@/app/utils/utils';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import SpecialistCard from '@/app/molecules/SpecialistCard/SpecialistCard';
import Text from '@/app/atoms/Text/Text';
import TagFilter from '@/app/molecules/TagFilter/TagFilter';
import SpecialistsLangFilter from '@/app/molecules/SpecialistsLangFilter/SpecialistsLangFilter';
import Button from '@/app/atoms/Button/Button';
import {
  OurSpecialistWrapper,
  SpecialistCardsWrapper,
} from './OurSpecialist.styles';

type OurSpecialistProps = {
  locale: 'en' | 'pl' | 'de';
  specialistsList: any;
  customTitle?: string;
  filterLangs?: { id: string; name: string }[];
  customPadding?: string;
  customPaddingMb?: string;
  customPaddingSm?: string;
};

const OurSpecialist: FC<OurSpecialistProps> = function ({
  locale,
  specialistsList,
  customTitle,
  filterLangs,
  customPadding,
  customPaddingSm,
  customPaddingMb,
}) {
  const t = useTranslations('our_specialists');
  const [specialist] = useState(specialistsList);
  const [filteredTags, setFilteredTags] = useState([]);
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);

  const renderSpecialist = useMemo(
    () =>
      specialist
        ?.filter((spec: any) => spec.languages.includes(locale))
        ?.filter((spec: any) =>
          specialistTagsFilterFunc(
            spec.tags?.map((item: any) => (item ? item[locale] : item)),
            filteredTags,
          ),
        )
        ?.filter((spec: any) =>
          filterLangs
            ? specialistLangFilterFunc(selectedLangs, spec.languages)
            : true,
        )
        ?.map((spec: any) => {
          return (
            <SpecialistCard
              locale={locale}
              key={`${spec.name_surname}-${spec.title}`}
              name={spec.name_surname}
              title={spec.title}
              short_description={spec.short_description}
              languages={spec.languages}
              tags={spec.tags}
              profile_image={spec.profile_image}
              specSlug={spec.specialist_page_slug}
              calendar={spec.calendar}
            />
          );
        }),
    [specialist, locale, filteredTags, filterLangs, selectedLangs],
  );

  const filterTags = useMemo(
    () =>
      collectAllTagsFromSpecialist(
        specialist?.map((psycho: any) =>
          psycho.tags?.map((item: any) => (item ? item[locale] : item)),
        ) || [],
      ),
    [locale, specialist],
  );

  return (
    <OurSpecialistWrapper>
      <GridContainer
        $gridCols={9}
        $gridColsMb={9}
        $gridColsSm={1}
        $padding={customPadding || `8rem 1rem ${filterLangs ? 2 : 3}rem 1rem`}
        $paddingMb={
          customPaddingMb || `0rem 1rem ${filterLangs ? 2 : 2}rem 1rem`
        }
        $paddingSm={
          customPaddingSm || `0rem 1rem ${filterLangs ? 2 : 2}rem 1rem`
        }
        style={{ overflow: 'visible', clipPath: 'none' }}
      >
        <GridItem
          $colStart={1}
          $colEnd={filterLangs ? 3 : 10}
          $colStartMb={1}
          $colEndMb={filterLangs ? 3 : 10}
          $styleMd={{ paddingBottom: '2rem' }}
        >
          <Flex $justifyContent="space-between" $flexWrap="wrap" $rowGap="1rem">
            <Text
              variant={filterLangs ? 'h1' : 'h2'}
              fontSize="2.4rem"
              fontSizeSm="2.4rem"
              noMargin
              styleSm={{ textAlign: customTitle ? 'left' : 'center' }}
            >
              {customTitle || t('title')}
            </Text>
            {!filterLangs && (
              <Button
                href={`/${locale}/specialists`}
                color="transparent"
                classNameWrapper="our-specialist-more-btn"
              >
                <Text noMargin fontWeight={500} noWrap>
                  {t('show_more_specialists')}
                </Text>
              </Button>
            )}
            {!!filterLangs && (
              <SpecialistsLangFilter
                langs={filterLangs}
                selectedLangs={selectedLangs}
                setSelectedLangs={setSelectedLangs}
                className="our-specialist-filter-sm"
              />
            )}
          </Flex>
        </GridItem>
        {!!filterLangs && (
          <GridItem
            $colStart={3}
            $colEnd={10}
            $colStartMb={7}
            $colEndMb={10}
            $rowStartMb={1}
            $rowEndMb={2}
            $rowStartSm={2}
            $rowEndSm={3}
            className="our-specialist-filter-wide"
          >
            <Flex
              $alignItems="center"
              style={{ height: '100%' }}
              $styleMd={{
                height: '100%',
                justifyContent: 'flex-end',
                paddingRight: '2rem',
              }}
            >
              <SpecialistsLangFilter
                langs={filterLangs}
                selectedLangs={selectedLangs}
                setSelectedLangs={setSelectedLangs}
              />
            </Flex>
          </GridItem>
        )}
      </GridContainer>
      <GridContainer
        $padding="0 1rem 4rem 1rem"
        $paddingMb={`0rem 1rem ${filterLangs ? 4 : 0}rem 1rem`}
        $gridCols={9}
        $gridColsMb={9}
        $gridColsSm={1}
      >
        <GridItem
          $colStart={1}
          $colEnd={3}
          $rowStartSm={1}
          $rowEndSm={2}
          $paddingSm="0 0 0.2rem 0"
          $colStartMb={1}
          $colEndMb={4}
          $colStartSm={1}
          $colEndSm={2}
        >
          <TagFilter
            tags={filterTags}
            filteredTags={filteredTags}
            setFilteredTags={setFilteredTags}
          />
        </GridItem>
        <GridItem
          $colStart={3}
          $colEnd={10}
          $rowStartSm={2}
          $rowEndSm={3}
          $colStartMb={4}
          $colEndMb={10}
          $colStartSm={1}
          $colEndSm={2}
        >
          <SpecialistCardsWrapper $gap="2rem" $flexWrap="wrap">
            {renderSpecialist}
          </SpecialistCardsWrapper>
        </GridItem>
      </GridContainer>
    </OurSpecialistWrapper>
  );
};

export default React.memo(OurSpecialist);
