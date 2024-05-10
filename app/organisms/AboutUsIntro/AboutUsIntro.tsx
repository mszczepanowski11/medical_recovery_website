'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Image from 'next/image';
import Text from '@/app/atoms/Text/Text';
import { AboutUsIntroWrapper } from './AboutUsIntro.styles';

type AboutUsIntroProps = {};

const AboutUsIntro: FC<AboutUsIntroProps> = function ({}) {
  const t = useTranslations('about_us_page.intro');

  return (
    <AboutUsIntroWrapper id="about-us-intro">
      <GridContainer
        $customGridRows="repeat(2, minmax(0, 1fr))"
        $bg={Colors.background_purple}
        $rowGap="2.4rem"
        $gridColsMb={7}
        $gridColsSm={1}
        $paddingSm="3rem 1rem"
        className="about-us-grid-950"
      >
        <GridItem
          $colStart={1}
          $colEnd={4}
          $colStartMb={1}
          $colEndMb={6}
          $colEndSm={2}
          $rowStart={1}
          $rowEnd={2}
          $rowStartSm={1}
          $rowEndSm={2}
        >
          <Flex
            $alignItems="flex-end"
            $rowGap="2rem"
            $style={{ height: '100%', maxWidth: 800 }}
          >
            <Text
              variant="h2"
              fontWeight={500}
              noMargin
              style={{ fontSize: '2rem' }}
              styleSm={{ fontSize: '1.33rem' }}
            >
              {t('main')}
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          $colStart={1}
          $colEnd={4}
          $colStartMb={1}
          $colEndMb={6}
          $colEndSm={2}
          $rowStart={2}
          $rowEnd={3}
          $rowStartSm={3}
          $rowEndSm={4}
        >
          <Flex $flexDirection="column" $justifyContent="center" $rowGap="2rem">
            <Text noMargin>{t('description1')}</Text>
            <Text noMargin>{t('description2')}</Text>
          </Flex>
        </GridItem>
        <GridItem
          $colStart={4}
          $colEnd={5}
          $colStartMb={6}
          $colEndMb={8}
          $colStartSm={1}
          $colEndSm={2}
          $rowStart={1}
          $rowEnd={3}
          $rowStartSm={2}
          $rowEndSm={3}
          className="about-us-hide-950"
        >
          <Flex
            $style={{ position: 'relative', aspectRatio: '348 / 619' }}
            $styleMd={{ maxWidth: `min(320px, 40vw)`, margin: '2rem auto' }}
          >
            <Image src="/img/about-us-intro.png" alt="About us intro" fill />
          </Flex>
        </GridItem>
      </GridContainer>
    </AboutUsIntroWrapper>
  );
};

export default React.memo(AboutUsIntro);
