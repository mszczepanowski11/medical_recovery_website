import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

// Utils
import { GridContainer, GridItem } from '@/app/[lng]/GlobalStyles';
import { Colors } from '@/app/utils/constans';

// Components
import { HeaderWrapper } from './Header.styles';

type HeaderProps = {};

const Header: FC<HeaderProps> = function ({}) {
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <GridContainer>
        <GridItem />
        <GridItem />
      </GridContainer>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
