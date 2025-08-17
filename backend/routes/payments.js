import express from 'express';
import { body, validationResult } from 'express-validator';
import { authenticate } from '../middleware/auth.js';
import Stripe from 'stripe';

const router = express.Router();

// Initialize Stripe with secret key
const stripe = new Stripe('sk_test_51Rx2pnJQK6zibjikWIzBu4KTm6XhayZngvizrC8Qiv24ShjC9pS3axHyBvh50j2jpJzCLNTKKf2Tg8rpAsGjgeNW00eDost2uB', {
  apiVersion: '2023-10-16',
});

// Create payment intent (authenticated users)
router.post('/create-payment-intent', authenticate, [
  body('amount').isFloat({ min: 0.01 }).withMessage('Valid amount is required'),
  body('currency').optional().isIn(['usd', 'eur', 'gbp', 'inr']).withMessage('Valid currency is required')
], async (req, res) => {
  try {
    console.log('Payment intent request received:', req.body);
    console.log('User:', req.user?.id);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { amount, currency = 'usd', metadata = {} } = req.body;
    console.log('Creating payment intent for amount:', amount, 'currency:', currency);

    // Verify Stripe is initialized
    if (!stripe) {
      console.error('Stripe not initialized');
      return res.status(500).json({
        success: false,
        message: 'Payment service not available'
      });
    }

    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata: {
        userId: req.user.id,
        ...metadata
      },
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never',
      },
      payment_method_types: ['card'],
    });

    console.log('Payment intent created successfully:', paymentIntent.id);
    console.log('Client secret:', paymentIntent.client_secret);

    res.json({
      success: true,
      paymentIntent: {
        id: paymentIntent.id,
        client_secret: paymentIntent.client_secret,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        status: paymentIntent.status
      }
    });
  } catch (error) {
    console.error('Create payment intent error:', error);
    console.error('Error details:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Confirm payment (authenticated users)
router.post('/confirm-payment', authenticate, [
  body('paymentIntentId').notEmpty().withMessage('Payment intent ID is required'),
  body('orderId').notEmpty().withMessage('Order ID is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { paymentIntentId, orderId } = req.body;

    // This is a placeholder for payment confirmation
    // In a real implementation, you would:
    // 1. Verify the payment with Stripe
    // 2. Update the order status
    // 3. Send confirmation email

    // Mock successful payment
    const payment = {
      id: paymentIntentId,
      status: 'succeeded',
      amount: 1000, // $10.00
      currency: 'usd',
      created: Date.now()
    };

    res.json({
      success: true,
      message: 'Payment confirmed successfully',
      payment
    });
  } catch (error) {
    console.error('Confirm payment error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get payment status (authenticated users)
router.get('/status/:paymentIntentId', authenticate, async (req, res) => {
  try {
    const { paymentIntentId } = req.params;

    // This is a placeholder for payment status check
    // In a real implementation, you would:
    // 1. Query Stripe for payment status
    // 2. Return the current status

    // Mock payment status
    const paymentStatus = {
      id: paymentIntentId,
      status: 'succeeded',
      amount: 1000,
      currency: 'usd',
      created: Date.now()
    };

    res.json({
      success: true,
      paymentStatus
    });
  } catch (error) {
    console.error('Get payment status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Webhook for payment events (no authentication required)
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    // This is a placeholder for Stripe webhook handling
    // In a real implementation, you would:
    // 1. Verify the webhook signature
    // 2. Handle different event types
    // 3. Update order status based on payment events

    const event = req.body;

    console.log('Received webhook event:', event.type);

    // Handle different event types
    switch (event.type) {
      case 'payment_intent.succeeded':
        // Payment was successful
        console.log('Payment succeeded:', event.data.object.id);
        break;
      case 'payment_intent.payment_failed':
        // Payment failed
        console.log('Payment failed:', event.data.object.id);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({
      success: false,
      message: 'Webhook error'
    });
  }
});

export default router;
