'use client';

import { FC, useState, useEffect, memo } from 'react';
import { PaymentElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Utils
import { GridContainer, GridItem } from '@/app/[lng]/GlobalStyles';
import { Colors } from '@/app/utils/constans';

// Components
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import {} from './StripePayment.styles';

const stripePromise = loadStripe(
  'pk_test_51Orc3OIe9ZHvbVYZiGxFw4hJJg0i9GBVUXoS1ckBCfg04BgldWdzFB3Xh7VuzveNsNULxlAyfxWTsPmAWk02BO2h00PK91T7ib',
);

type StripePaymentProps = {};

const StripePayment: FC<StripePaymentProps> = function ({}) {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  useEffect(() => {
    console.log('clientSecret', clientSecret);
  }, [clientSecret]);

  const appearance: { theme: 'stripe' } = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutPage />
        </Elements>
      )}
    </div>
  );
};

export default memo(StripePayment);
