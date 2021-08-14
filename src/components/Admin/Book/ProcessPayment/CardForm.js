import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const CardForm = ({serviceById, orders, setOrders}) => {
  const stripe = useStripe();
  const elements = useElements();

  // User Context
  const [loggedInUser] = useContext(UserContext);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      alert(error.message)
      console.log('[error]', error);
      
    } else {
       /// Order Placing
      const newOrder = {...loggedInUser, ...orders, ...paymentMethod}
      console.log(newOrder)
      fetch('https://desolate-ravine-13432.herokuapp.com/addOrder', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newOrder)
      })
      .then( result => {
        alert('Successfully order placed!')
      })
      
      //console.log('[PaymentMethod]', paymentMethod);
    }

   





  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      
      <button type="submit" disabled={!stripe} className="btn btn-primary mt-4">
        Pay <span style={{color: 'yellow', marginRight: '10px', fontWeight: 'bold'}}>${serviceById.price} </span>  & Order
      </button>
    </form>
  );
};

export default CardForm;