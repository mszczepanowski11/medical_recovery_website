'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Image from 'next/image';
import Button from '@/app/atoms/Button/Button';
import Text from '@/app/atoms/Text/Text';
import OfferCollapseList from '@/app/molecules/OfferCollapseList/OfferCollapseList';
import { OfferDiagnosisWrapper, StickyElement } from './OfferDiagnosis.styles';

type OfferDiagnosisProps = {
  items: { title: string; description?: string }[];
  locale: 'en' | 'pl' | 'de';
};

const OfferDiagnosis: FC<OfferDiagnosisProps> = function ({ items, locale }) {
  const t = useTranslations('offer_page.diagnosis');
  const tCta = useTranslations('cta');

  return (
    <OfferDiagnosisWrapper>
      <GridContainer
        $gridCols={2}
        $gridColsSm={1}
        $rowGapSm="3rem"
        $padding="4rem 3rem"
        $paddingMb="4rem 1rem"
        $paddingSm="4rem 1rem"
        className="offer-intro-grid-container"
      >
        <GridItem $rowStartSm={1} $rowEndSm={2}>
          <Flex $flexDirection="column" $rowGap="1rem">
            <Text variant="h2" noMargin fontSize="2rem">
              {t('title')}
            </Text>
            <Text noMargin fontWeight={500} color="text_secondary">
              {t('description1')}
            </Text>
            <Text noMargin fontWeight={500} color="text_secondary">
              {t('description2')}
            </Text>
            <Text noMargin fontWeight={500} color="text_secondary">
              {t('description3')}
            </Text>
            <OfferCollapseList items={items} />
          </Flex>
        </GridItem>
        <GridItem $colStart={2} $colEnd={3} $rowStartSm={2} $rowEndSm={3}>
          <StickyElement>
            <Flex
              style={{
                position: 'relative',
                aspectRatio: '526 / 367',
                width: '100%',
              }}
              $styleSm={{ maxWidth: 400 }}
            >
              <Image
                src="/img/offer-diagnosis-sticky.png"
                alt="Meet out specialists"
                fill
              />
            </Flex>
            <Button style={{ marginTop: '1.5rem' }} href="/specialists">
              <Text noMargin fontSize="1.1rem" fontWeight={500}>
                {tCta('meet_our_specialists')}
              </Text>
            </Button>
          </StickyElement>
        </GridItem>
      </GridContainer>
    </OfferDiagnosisWrapper>
  );
};

export default React.memo(OfferDiagnosis);
