'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { appointletCalendarUrl } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import Image from 'next/image';
import { HeroImageWrapper, HeroLine, HeroWrapper } from './Hero.styles';

type HeroProps = {};

const Hero: FC<HeroProps> = function ({}) {
  const tHero = useTranslations('hero');
  const tCta = useTranslations('cta');

  return (
    <HeroWrapper>
      <div className="hero-background" />
      <GridContainer
        $gridColsMb={1}
        $gridColsSm={1}
        $padding="6rem 1rem 0rem 1rem"
        $paddingMb="6rem 1rem 4rem 1rem"
        $paddingSm="4rem 1rem"
        // $height={`calc(100vh - ${headerHeight}px)`}
        style={{
          position: 'relative',
          overflow: 'visible',
          clipPath: 'none',
          width: '100%',
        }}
      >
        <GridItem
          $colStart={1}
          $colEnd={3}
          $colStartMb={1}
          $colEndMb={2}
          $rowStartMb={1}
          $rowEndMb={2}
          $styleMd={{ width: '100%', zIndex: 5 }}
          className="hero-grid-item"
        >
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
            <Text color="text_secondary" className="hero-description">
              {tHero('description')}
            </Text>
            <Flex style={{ position: 'relative' }}>
              <Button
                size="large"
                style={{ marginTop: '1rem' }}
                href={appointletCalendarUrl}
                target="_blank"
              >
                <Text noMargin fontSize="1.25rem" fontWeight={500}>
                  {tCta('arrange_meeting')}
                </Text>
              </Button>
              <HeroLine />
            </Flex>
          </Flex>
        </GridItem>

        <GridItem
          $colStart={3}
          $colEnd={5}
          $colStartMb={1}
          $colEndMb={2}
          $rowStartMb={1}
          $rowEndMb={2}
          $styleMd={{ zIndex: 2 }}
        >
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
              className="hero-hide-mb"
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
              className="hero-hide-mb"
              style={{
                position: 'relative',
                left: '11.5%',
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
