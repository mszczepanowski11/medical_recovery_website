'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import {
  GridContainer,
  GridItem,
} from '@/app/components/GlobalStyles/GlobalStyles';

// Components
import { HeaderWrapper } from './Header.styles';

type HeaderProps = {};

const Header: FC<HeaderProps> = function ({}) {
  const t = useTranslations('Index');
  return (
    <HeaderWrapper>
      <GridContainer>
        <GridItem>{t('title')}</GridItem>
        <GridItem />
      </GridContainer>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
