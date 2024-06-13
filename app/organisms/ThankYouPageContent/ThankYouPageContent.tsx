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

type ThankYouPageContentProps = {
  locale: 'en' | 'pl' | 'de';
  searchParams: any;
};

const ThankYouPageContent: FC<ThankYouPageContentProps> = function ({
  locale,
  searchParams,
}) {
  const t = useTranslations('thank_you_page');
  const {
    'attendee[email]': email,
    'attendee[first_name]': first_name,
    'attendee[last_name]': last_name,
    'meeting_type[name]': meeting_type,
  } = searchParams || {};

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
            <Text variant="h1" noMargin textAlign="center" fontSize="2.4rem">
              {t('title', {
                name: first_name ? ` ${first_name} ${last_name}` : undefined,
              })}
            </Text>
            <Text noMargin textAlign="center" fontSize="1.3rem">
              {!!email && !!meeting_type
                ? t('description', { email, meeting_type })
                : t('description_no_data')}
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
