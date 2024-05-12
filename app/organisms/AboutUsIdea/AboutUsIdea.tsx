'use client';

import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Image from 'next/image';
import Button from '@/app/atoms/Button/Button';
import {
  AboutUsIdeaWrapper,
  IconCardsWrapper,
  IdeaCard,
  IdeaItem,
  IdeaList,
} from './AboutUsIdea.styles';

type AboutUsIdeaProps = {
  items: {
    icon: { url: string; width: number; height: number };
    title: string;
    description?: string;
    list?: string[];
    btn?: { label: string; href: string };
  }[];
  locale: 'en' | 'pl' | 'de';
};

const AboutUsIdea: FC<AboutUsIdeaProps> = function ({ items, locale }) {
  const t = useTranslations('about_us_page.idea');

  const renderIdeas = useMemo(
    () =>
      items?.map((item) => (
        <IdeaCard
          key={item.title}
          $flexDirection="column"
          $alignItems="flex-start"
          $gap="1rem"
        >
          <Image
            src={`/img/${item.icon?.url}`}
            alt="Idea!"
            width={item.icon.width}
            height={item.icon.height}
          />
          <Text variant="h3" fontSize="1.125rem" fontWeight={600} noMargin>
            {item.title}
          </Text>
          {!!item.description && (
            <Text noMargin color="text_secondary">
              {item.description}
            </Text>
          )}
          {!!item.list && item.list?.length > 0 && (
            <IdeaList>
              {item.list?.map((el) => (
                <IdeaItem key={el}>
                  <Text noMargin color="text_secondary">
                    {el}
                  </Text>
                </IdeaItem>
              ))}
            </IdeaList>
          )}
          <Button
            href={`/${locale}${item.btn?.href}`}
            color="transparent"
            style={{ marginTop: '1rem' }}
          >
            <Text noMargin fontWeight={500} noWrap>
              {item.btn?.label}
            </Text>
          </Button>
        </IdeaCard>
      )),
    [items, locale],
  );

  return (
    <AboutUsIdeaWrapper>
      <GridContainer
        $bg={Colors.background_blue_hover}
        $gridCols={1}
        $gridColsSm={1}
      >
        <GridItem $colStart={1}>
          <Text
            variant="h2"
            fontSize="1.25rem"
            fontWeight={400}
            textAlign="center"
            style={{ marginBottom: '3rem' }}
          >
            {t('title')}
          </Text>
        </GridItem>
        <GridItem $rowStart={2} $rowEnd={3} $rowStartSm={2} $rowEndSm={3}>
          <IconCardsWrapper>{renderIdeas}</IconCardsWrapper>
        </GridItem>
      </GridContainer>
    </AboutUsIdeaWrapper>
  );
};

export default React.memo(AboutUsIdea);
