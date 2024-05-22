/* eslint-disable react/no-unstable-nested-components */

'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Instrument_Sans } from 'next/font/google';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { GridContainer, GridItem } from '@/app/utils/GlobalStyles';

import Text from '@/app/atoms/Text/Text';
import { ContentWrapper, TextContentWrapper } from './TextContent.styles';

const instrument_sans = Instrument_Sans({ subsets: ['latin'] });

type TextContentProps = { contentKey: string };

const TextContent: FC<TextContentProps> = function ({ contentKey }) {
  const t = useTranslations();

  return (
    <TextContentWrapper>
      <GridContainer $gridCols={1} $gridColsMb={1} $gridColsSm={1}>
        <GridItem>
          <ContentWrapper className={instrument_sans.className}>
            {t.rich(contentKey, {
              h1: (chunks) => <Text variant="h1">{chunks}</Text>,
              h2: (chunks) => <Text variant="h2">{chunks}</Text>,
              h3: (chunks) => (
                <Text variant="h3" fontSize="1.2rem">
                  {chunks}
                </Text>
              ),
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
    </TextContentWrapper>
  );
};

export default React.memo(TextContent);
