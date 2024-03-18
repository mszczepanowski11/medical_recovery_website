import React, { FC } from 'react';
import RevolutCheckoutInst from '@revolut/checkout';
import { useTranslation } from 'next-i18next';

// Utils
import { GridContainer, GridItem } from '@/app/[lng]/GlobalStyles';
import { Colors } from '@/app/utils/constans';

// Components
import { RevolutCheckoutWrapper } from './RevolutCheckout.styles';

type RevolutCheckoutProps = {};

const RevolutCheckout: FC<RevolutCheckoutProps> = function ({}) {
  const { t } = useTranslation();

  return (
    <RevolutCheckoutWrapper>
      <GridContainer>
        <GridItem />
        <GridItem />
      </GridContainer>
    </RevolutCheckoutWrapper>
  );
};

export default React.memo(RevolutCheckout);
