import React, { useState } from 'react';
import { 
  useStripe, 
  useElements, 
  PaymentElement,
  Elements 
} from '@stripe/react-stripe-js';
import { CreditCard, Lock, ShoppingBag, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import stripePromise from '../../config/stripe';

// Payment Form Component
const PaymentForm = ({ clientSecret, amount, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe is not loaded yet. Please wait and try again.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message);
        setIsLoading(false);
        return;
      }

      const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
        redirect: 'if_required',
      });

      if (confirmError) {
        setError(confirmError.message);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent);
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError('An unexpected error occurred. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Secure Payment</h3>
            <p className="text-gray-600">Complete your order</p>
          </div>
        </div>
        <button
          onClick={onCancel}
          className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Amount */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Total Amount</span>
          <span className="text-2xl font-bold text-gray-900">${amount}</span>
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border border-gray-200 rounded-2xl p-4">
          <PaymentElement 
            options={{
              layout: 'tabs',
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
              fields: {
                billingDetails: {
                  name: 'auto',
                  email: 'auto',
                },
              },
            }}
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Security Notice */}
        <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
          <Lock className="w-4 h-4 mr-2 text-green-600" />
          <span>Your payment information is secure and encrypted</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!stripe || isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            <div className="flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Pay ${amount}
            </div>
          )}
        </button>
      </form>

      {/* Test Card Info */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-2xl">
        <h4 className="text-sm font-semibold text-yellow-800 mb-2">Test Mode</h4>
        <p className="text-xs text-yellow-700 mb-2">Use test card: 4242 4242 4242 4242</p>
        <p className="text-xs text-yellow-700">Any future date, any 3-digit CVC</p>
      </div>
    </div>
  );
};

// Main Stripe Payment Component
const StripePayment = ({ clientSecret, amount, onSuccess, onCancel }) => {
  if (!clientSecret) {
    return null;
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#7c3aed',
        colorBackground: '#ffffff',
        colorText: '#1f2937',
        borderRadius: '16px',
        spacingUnit: '4px',
        fontFamily: 'Inter, system-ui, sans-serif',
      },
      rules: {
        '.Tab': {
          borderRadius: '12px',
          padding: '12px',
        },
        '.Input': {
          borderRadius: '12px',
          padding: '12px',
        },
      },
    },
    loader: 'auto',
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Elements stripe={stripePromise} options={options}>
        <PaymentForm
          clientSecret={clientSecret}
          amount={amount}
          onSuccess={onSuccess}
          onCancel={onCancel}
        />
      </Elements>
    </div>
  );
};

export default StripePayment;
