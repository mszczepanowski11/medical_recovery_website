import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

// Utils
import { Colors } from '@/app/utils/constans';

// Components
import { FooterWrapper } from './Footer.styles';
import { GridContainer, GridItem } from '../../utils/GlobalStyles';

type FooterProps = {};

const Footer: FC<FooterProps> = function ({}) {
  const t = useTranslations();

  return (
    <FooterWrapper>
      <GridContainer>
        <GridItem />
        <GridItem />
      </GridContainer>
    </FooterWrapper>
  );
};

export default React.memo(Footer);
