'use client';

import React, { FC, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import {
  collectAllTagsFromSpecialist,
  specialistTagsFilterFunc,
} from '@/app/utils/utils';

// Components
import { GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import SpecialistCard from '@/app/molecules/SpecialistCard/SpecialistCard';
import Text from '@/app/atoms/Text/Text';
import TagFilter from '@/app/molecules/TagFilter/TagFilter';
import {
  OurSpecialistWrapper,
  SpecialistCardsWrapper,
} from './OurSpecialist.styles';

type OurSpecialistProps = { locale: 'en' | 'pl' | 'de'; specialistsList: any };

const OurSpecialist: FC<OurSpecialistProps> = function ({
  locale,
  specialistsList,
}) {
  const t = useTranslations('our_specialists');
  const [specialist] = useState(specialistsList.psychologists);
  const [filteredTags, setFilteredTags] = useState([]);

  const renderSpecialist = useMemo(
    () =>
      specialist
        ?.filter((psycho: any) =>
          specialistTagsFilterFunc(psycho.tags[`tags_${locale}`], filteredTags),
        )
        ?.map((psycho: any) => {
          return (
            <SpecialistCard
              locale={locale}
              key={`${psycho.name_surname}-${psycho.title}`}
              name={psycho.name_surname}
              title={psycho.title}
              description={psycho.description}
              languages={psycho.languages}
              tags={psycho.tags}
              profileImage={psycho.profileImage}
              filteredTags={filteredTags}
              setFilteredTags={setFilteredTags}
            />
          );
        }),
    [specialist, locale, filteredTags],
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
      <GridContainer $gridCols={1} $padding="4rem 1rem 3rem 1rem">
        <GridItem>
          <Text variant="h2" noMargin>
            {t('title')}
          </Text>
        </GridItem>
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
