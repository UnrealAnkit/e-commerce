import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

// Initialize Stripe
const stripePromise = loadStripe('pk_test_51Rx2pnJQK6zibjikIydTyzHBJlCKgTFNn3xZBCeVQplsZq87xgnSEc0Ptr8ov8WSn5HEPzO6Lalq55BHnSu5T6Xn00lOXDpezF');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      alert('Card details captured successfully!');
    }

    setProcessing(false);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        iconColor: '#666ee8',
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Test Stripe Card Element</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4 p-3 border border-gray-300 rounded">
          <CardElement options={cardElementOptions} />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {processing ? 'Processing...' : 'Test Card Input'}
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Test Card:</strong> 4242 4242 4242 4242</p>
        <p><strong>Expiry:</strong> Any future date</p>
        <p><strong>CVC:</strong> Any 3 digits</p>
      </div>
    </div>
  );
};

const StripeTest = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default StripeTest;
