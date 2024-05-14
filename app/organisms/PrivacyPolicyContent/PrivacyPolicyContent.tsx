/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */

'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Instrument_Sans } from 'next/font/google';

// Components
import { GridContainer, GridItem } from '@/app/utils/GlobalStyles';
import Text from '@/app/atoms/Text/Text';
import {
  ContentWrapper,
  PrivacyPolicyContentWrapper,
} from './PrivacyPolicyContent.styles';

const instrument_sans = Instrument_Sans({ subsets: ['latin'] });

type PrivacyPolicyContentProps = {};

const PrivacyPolicyContent: FC<PrivacyPolicyContentProps> = function ({}) {
  const t = useTranslations();

  return (
    <PrivacyPolicyContentWrapper>
      <GridContainer $gridCols={1} $gridColsMb={1} $gridColsSm={1}>
        <GridItem>
          <ContentWrapper className={instrument_sans.className}>
            {t.rich('privacy_policy_page', {
              h1: (chunks) => <Text variant="h1">{chunks}</Text>,
              h2: (chunks) => <Text variant="h2">{chunks}</Text>,
              h3: (chunks) => <Text variant="h3">{chunks}</Text>,
              h4: (chunks) => <Text variant="h4">{chunks}</Text>,
              p: (chunks) => <Text>{chunks}</Text>,
              pcenter: (chunks) => <Text textAlign="center">{chunks}</Text>,
              ol: (chunks) => <ol>{chunks}</ol>,
              ol2: (chunks) => <ol type="a">{chunks}</ol>,
              li: (chunks) => <li>{chunks}</li>,
              strong: (chunks) => <strong>{chunks}</strong>,
              aemail: (chunks) => <a href={`mailto:${chunks}`}>{chunks}</a>,
            })}
          </ContentWrapper>
        </GridItem>
      </GridContainer>
    </PrivacyPolicyContentWrapper>
  );
};

export default React.memo(PrivacyPolicyContent);
