'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors, headerHeight } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import Image from 'next/image';
import { HeroImageWrapper, HeroWrapper } from './Hero.styles';

type HeroProps = {};

const Hero: FC<HeroProps> = function ({}) {
  const tHero = useTranslations('hero');
  const tCta = useTranslations('cta');

  return (
    <HeroWrapper>
      <GridContainer
        $padding="6rem 1rem 6rem 1rem"
        style={{ position: 'relative' }}
      >
        <GridItem $colStart={1} $colEnd={3}>
          <Flex
            $flexDirection="column"
            $alignItems="flex-start"
            $justifyContent="flex-start"
          >
            <Text variant="h1" noMargin>
              {tHero('title1')}
            </Text>
            <Text variant="h1" noMargin>
              {tHero('title2')}
            </Text>
            <Text variant="h1">{tHero('title3')}</Text>
            <Text color="text_secondary">{tHero('description')}</Text>
            <Button size="large" style={{ marginTop: '1rem' }}>
              <Text noMargin fontSize="1.25rem">
                {tCta('arrange_meeting')}
              </Text>
            </Button>
          </Flex>
        </GridItem>

        <GridItem $colStart={3} $colEnd={5}>
          <Flex
            style={{ height: '100%' }}
            $gap="1.5rem"
            $rowGap="3rem"
            $flexWrap="wrap"
            $alignItems="flex-start"
            $justifyContent="center"
          >
            <HeroImageWrapper
              style={{
                flexGrow: 5,
                maxWidth: 'calc(50% - 0.75rem)',
                minWidth: '59.3055%',
                aspectRatio: 343 / 320,
              }}
            >
              <Image
                src="/img/hero-1.png"
                alt={tHero('image1_alt')}
                fill
                sizes=""
              />
            </HeroImageWrapper>
            <HeroImageWrapper
              style={{
                flexGrow: 1,
                maxWidth: 'calc(50% - 0.75rem)',
                minWidth: '35%',
                aspectRatio: 212 / 318,
              }}
            >
              <Image src="/img/hero-2.png" alt={tHero('image2_alt')} fill />
            </HeroImageWrapper>
            <HeroImageWrapper
              style={{
                flexGrow: 1,
                maxWidth: 'calc(50% - 0.75rem)',
                minWidth: '40%',
                aspectRatio: 269 / 326,
              }}
            >
              <Image src="/img/hero-3.png" alt={tHero('image3_alt')} fill />
            </HeroImageWrapper>
          </Flex>
        </GridItem>
      </GridContainer>
    </HeroWrapper>
  );
};

export default React.memo(Hero);
