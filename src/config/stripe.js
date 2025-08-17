import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with publishable key
const stripePromise = loadStripe('pk_test_51Rx2pnJQK6zibjikIydTyzHBJlCKgTFNn3xZBCeVQplsZq87xgnSEc0Ptr8ov8WSn5HEPzO6Lalq55BHnSu5T6Xn00lOXDpezF');

export default stripePromise;
