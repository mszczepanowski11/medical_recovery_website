'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import WeHelpCard from '@/app/molecules/WeHelpCard/WeHelpCard';
import Text from '@/app/atoms/Text/Text';
import { WeHelpWrapper } from './WeHelp.styles';

type WeHelpProps = {
  cards: {
    title: string;
    description: string;
    logo: string;
    color: keyof typeof Colors;
  }[];
};

const WeHelp: FC<WeHelpProps> = function ({ cards }) {
  const t = useTranslations('we_help');

  const renderCards = cards?.map((card) => (
    <WeHelpCard
      key={card.title}
      color={card.color.includes('#') ? card.color : Colors[card.color]}
      iconSrc={card.logo}
      title={card.title}
      desc={card.description}
      style={{ width: `calc(33% - 4rem / 3)`, flexGrow: 1, minWidth: 320 }}
    />
  ));

  return (
    <WeHelpWrapper>
      <GridContainer
        $gap="3rem"
        $gridColsSm={1}
        $padding="12rem 1rem 4rem 1rem"
      >
        <GridItem $rowStart={1} $rowEnd={2} $colStart={1} $colEnd={5}>
          <Text variant="h2" noMargin>
            {t('title1')}{' '}
            <Text
              variant="span"
              color="#6fe064"
              fontSize="2.625rem"
              style={{ fontWeight: '600' }}
              noMargin
            >
              {t('title2')}
            </Text>
          </Text>
        </GridItem>
        <GridItem $rowStart={2} $rowEnd={3} $colStart={1} $colEnd={5}>
          <Flex $flexWrap="wrap" $gap="2rem">
            {renderCards}
          </Flex>
        </GridItem>
      </GridContainer>
    </WeHelpWrapper>
  );
};

export default React.memo(WeHelp);
