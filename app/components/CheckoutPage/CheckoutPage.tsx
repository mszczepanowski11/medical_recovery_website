import React, { FC } from 'react';
import { PaymentElement, Elements } from '@stripe/react-stripe-js';

// Utils
import { GridContainer, GridItem } from '@/app/[lng]/GlobalStyles';
import { Colors } from '@/app/utils/constans';

// Components
import {} from './CheckoutPage.styles';

type CheckoutPageProps = {};

const CheckoutPage: FC<CheckoutPageProps> = function ({}) {
  return (
    <GridContainer>
      <GridItem>
        <PaymentElement />
      </GridItem>
      <GridItem />
    </GridContainer>
  );
};

export default React.memo(CheckoutPage);
