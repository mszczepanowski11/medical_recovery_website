/* eslint-disable react/no-unstable-nested-components */

'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors, headerHeight } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Image from 'next/image';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import useScrollTo from '@/app/utils/useScrollTo';
import { AboutUsHeroWrapper } from './AboutUsHero.styles';

type AboutUsHeroProps = {};

const AboutUsHero: FC<AboutUsHeroProps> = function ({}) {
  const t = useTranslations('about_us_page.hero');
  const tCta = useTranslations('cta');
  const { scrollTo } = useScrollTo();

  return (
    <AboutUsHeroWrapper>
      <GridContainer
        $gridCols={5}
        $gridColsMb={7}
        $gridColsSm={1}
        $bg={Colors.background_yellow_light}
        $padding="0 1rem 4rem 1rem"
        $paddingSm="4rem 1rem"
        className="about-us-grid-950"
      >
        <GridItem
          $colStart={1}
          $colEnd={3}
          $colStartMb={1}
          $colEndMb={3}
          $styleSm={{ display: 'none' }}
          className="about-us-hide-950"
        >
          <Flex
            $style={{
              position: 'relative',
              height: '100%',
              minHeight: 'min(20vh, 650px)',
              aspectRatio: '443 / 643',
            }}
            $styleMd={{ height: 'auto' }}
          >
            <Image src="/img/about-us-hero.png" alt="about us" fill />
            <Flex
              $style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                translate: '14% 14%',
                width: 160,
                height: 160,
              }}
              $styleMd={{ width: 120, height: 120 }}
            >
              <Image
                src="/img/logo-circle.svg"
                alt="about us"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          $colStart={3}
          $colEnd={6}
          $colStartMb={3}
          $colEndMb={8}
          $colStartSm={1}
          $colEndSm={2}
        >
          <Flex $alignItems="center" style={{ height: '100%' }}>
            <Flex
              $flexDirection="column"
              $alignItems="flex-start"
              $gap="1.5rem"
              $style={{ paddingTop: '4rem' }}
              $styleSm={{ paddingTop: 0 }}
            >
              <Text variant="h1" noMargin>
                {t.rich('title', {
                  underscore: (chunks) => (
                    <span
                      style={{
                        textDecoration: 'underline',
                        textDecorationColor:
                          Colors.background_interactive_hover,
                      }}
                    >
                      {chunks}
                    </span>
                  ),
                })}
              </Text>
              <Text
                variant="h4"
                color="text_secondary"
                noMargin
                fontWeight={500}
              >
                {t('description')}
              </Text>
              <Button
                onClick={() =>
                  scrollTo('about-us-intro', { offset: -headerHeight })
                }
              >
                <Text noMargin fontSize="1.1rem" fontWeight={500} noWrap>
                  {tCta('meet_us')}
                </Text>
              </Button>
            </Flex>
          </Flex>
        </GridItem>
      </GridContainer>
    </AboutUsHeroWrapper>
  );
};

export default React.memo(AboutUsHero);
