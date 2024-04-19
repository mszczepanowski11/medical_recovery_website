import React, { FC } from 'react';

// Utils

// Components
import { FooterWrapper } from './Footer.styles';
import { GridContainer, GridItem } from '../../utils/GlobalStyles';

type FooterProps = {};

const Footer: FC<FooterProps> = function ({}) {
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
