import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from './CardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51JE4y3KAF2jHqyFpSYig19B7XIJfCccxUcWijV7Mw774p3NIcT2mi9bes7EyNoSfd4Ojz3Qi0RlhoJJEDfcm9Atl00Zwz2ls4S');

const ProcessPayment = ({serviceById, orders, setOrders}) => {



  return (
    <Elements stripe={stripePromise}>
      <CardForm serviceById={serviceById} orders={[orders, setOrders]}/>
    </Elements>
  );
}

export default ProcessPayment;