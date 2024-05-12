'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import Image from 'next/image';
import useWindowSize from '@/app/utils/useWindowSize';
import { ColoredSquare, OfferHeroWrapper } from './OfferHero.styles';

type OfferHeroProps = { locale: 'en' | 'pl' | 'de' };

const OfferHero: FC<OfferHeroProps> = function ({ locale }) {
  const t = useTranslations('offer_page.hero');
  const tCta = useTranslations('cta');
  const { isMobile } = useWindowSize();

  return (
    <OfferHeroWrapper>
      <GridContainer
        $gridColsSm={1}
        $gap="2rem"
        $rowGapSm="2rem"
        className="offer-hero-grid-container"
        $padding="4rem 1rem 12rem 1rem"
        $paddingSm="4rem 1rem"
      >
        <GridItem $colStart={1} $colEnd={3} $rowStartSm={1} $rowEndSm={2}>
          <Flex
            $flexDirection="column"
            $justifyContent="center"
            $alignItems="flex-start"
            $rowGap="1.5rem"
            $style={{ height: '100%' }}
          >
            <Text
              variant="h1"
              fontWeight={600}
              style={{ fontSize: '2.625rem' }}
              styleSm={{ fontSize: '2rem' }}
              noMargin
            >
              {t('title1')}
              <Text
                variant="span"
                fontWeight={600}
                style={{
                  fontSize: '2.625rem',
                  display: 'block',
                  lineHeight: '1.33',
                }}
                styleSm={{ fontSize: '2rem' }}
                noMargin
              >
                {t('title2', { price: 100 })}
              </Text>
            </Text>

            <Text noMargin>{t('description1', { price: 100 })}</Text>
            <Text noMargin>{t('description2', { price: 100 })}</Text>
            <Button href={`/${locale}/specialists`}>
              <Text noMargin fontWeight={500} noWrap>
                {tCta('arrange')}
              </Text>
            </Button>
          </Flex>
        </GridItem>
        <GridItem $colStart={3} $colEnd={5} $rowStartSm={2} $rowEndSm={3}>
          <Flex
            style={{ position: 'relative', aspectRatio: '1' }}
            $styleSm={{ maxWidth: 'min(300px, 70vw)' }}
          >
            <Image
              src={`/img/offer-hero${isMobile ? '-sm' : ''}.png`}
              alt="Ahoi!"
              fill
              className="offer-hero-right-img"
            />
            <ColoredSquare />
          </Flex>
        </GridItem>
      </GridContainer>
    </OfferHeroWrapper>
  );
};

export default React.memo(OfferHero);
