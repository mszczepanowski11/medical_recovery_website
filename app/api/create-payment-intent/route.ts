import { NextApiRequest, NextApiResponse } from 'next';
import StripePackage from 'stripe';

const stripe = new StripePackage(
  'sk_test_51Orc3OIe9ZHvbVYZBFyPJpyH47YYdO5fLoOw05qbWbYzDWHmW4DFzzixFwFTNw4tBwQYy2Xk3HV7tmdrZ1Kmghn600dPltsjSB',
);

const calculateOrderAmount = (items: any) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export async function POST(req: any) {
  const { items } = await req.json();
  console.log('kaczuszka512', items);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'eur',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  console.log('paymentIntent', paymentIntent);

  return Response.json({ clientSecret: paymentIntent.client_secret });
}
