'use client';

import React, { FC } from 'react';

// Utils
import { GridContainer, GridItem } from '@/app/[lng]/GlobalStyles';
import { Colors } from '@/app/utils/constans';
import { useTranslation } from '@/app/i18n/client';

// Components
import { HeaderWrapper } from './Header.styles';

type HeaderProps = {};

const Header: FC<HeaderProps> = function () {
  const { t } = useTranslation();
  return (
    <HeaderWrapper>
      <GridContainer>
        <GridItem>{t('test2')}</GridItem>
        <GridItem />
      </GridContainer>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
