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
  customPaddingSm?: string;
};

const OurSpecialist: FC<OurSpecialistProps> = function ({
  locale,
  specialistsList,
  customTitle,
  filterLangs,
  customPadding,
  customPaddingSm,
}) {
  const t = useTranslations('our_specialists');
  const [specialist] = useState(specialistsList.specialists);
  const [filteredTags, setFilteredTags] = useState([]);
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);

  const renderSpecialist = useMemo(
    () =>
      specialist
        ?.filter((spec: any) =>
          specialistTagsFilterFunc(spec.tags[`tags_${locale}`], filteredTags),
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
              description={spec.short_description}
              languages={spec.languages}
              tags={spec.tags}
              profile_image={spec.profile_image}
              specSlug={spec.specialist_page_slug}
            />
          );
        }),
    [specialist, locale, filteredTags, filterLangs, selectedLangs],
  );

  const filterTags = useMemo(
    () =>
      collectAllTagsFromSpecialist(
        specialist?.map((psycho: any) => psycho.tags[`tags_${locale}`]) || [],
      ),
    [locale, specialist],
  );

  return (
    <OurSpecialistWrapper>
      <GridContainer
        $padding={customPadding || `8rem 1rem ${filterLangs ? 2 : 3}rem 1rem`}
        $paddingSm={
          customPaddingSm || `4rem 1rem ${filterLangs ? 2 : 3}rem 1rem`
        }
        style={{ overflow: 'visible', clipPath: 'none' }}
      >
        <GridItem $colStart={1} $colEnd={filterLangs ? 2 : 5}>
          <Flex $justifyContent="space-between">
            <Text variant="h2" noMargin>
              {customTitle || t('title')}
            </Text>
            {!filterLangs && (
              <Button href="/specialists" color="transparent">
                <Text noMargin fontWeight={500}>
                  {t('show_more_specialists')}
                </Text>
              </Button>
            )}
          </Flex>
        </GridItem>
        {!!filterLangs && (
          <GridItem $rowStartSm={2} $rowEndSm={3}>
            <SpecialistsLangFilter
              langs={filterLangs}
              selectedLangs={selectedLangs}
              setSelectedLangs={setSelectedLangs}
            />
          </GridItem>
        )}
      </GridContainer>
      <GridContainer $padding="0 1rem 4rem 1rem" $gridColsSm={1}>
        <GridItem $rowStartSm={1} $rowEndSm={2} $paddingSm="0 0 2rem 0">
          <TagFilter
            tags={filterTags}
            filteredTags={filteredTags}
            setFilteredTags={setFilteredTags}
          />
        </GridItem>
        <GridItem $colStart={2} $colEnd={5} $rowStartSm={2} $rowEndSm={3}>
          <SpecialistCardsWrapper $gap="2rem" $flexWrap="wrap">
            {renderSpecialist}
          </SpecialistCardsWrapper>
        </GridItem>
      </GridContainer>
    </OurSpecialistWrapper>
  );
};

export default React.memo(OurSpecialist);
