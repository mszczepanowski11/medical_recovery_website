'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { Flex, GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import Button from '@/app/atoms/Button/Button';
import { ThankYouPageContentWrapper } from './ThankYouPageContent.styles';

type ThankYouPageContentProps = { locale: 'en' | 'pl' | 'de' };

const ThankYouPageContent: FC<ThankYouPageContentProps> = function ({
  locale,
}) {
  const t = useTranslations('thank_you_page');

  return (
    <ThankYouPageContentWrapper>
      <GridContainer $gridCols={1} $gridColsMb={1} $gridColsSm={1}>
        <GridItem>
          <Flex
            $flexDirection="column"
            $alignItems="center"
            $justifyContent="center"
            $rowGap="2rem"
            $marginTop="2rem"
          >
            <Text variant="h1" noMargin textAlign="center">
              {t('title')}
            </Text>
            <Text noMargin textAlign="center" fontSize="1.3rem">
              {t('description')}
            </Text>
            <Button href={`/${locale}`} style={{ marginTop: '1.5rem' }}>
              <Text noMargin fontSize="1.1rem" fontWeight={500} noWrap>
                {t('back_btn')}
              </Text>
            </Button>
          </Flex>
        </GridItem>
      </GridContainer>
    </ThankYouPageContentWrapper>
  );
};

export default React.memo(ThankYouPageContent);
