import React from 'react';
import { XCircle, Clock, RefreshCw, AlertCircle, CheckCircle, Phone, Mail } from 'lucide-react';

const CancellationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-soft-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <XCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cancellation Policy
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Understanding our order cancellation process and policies
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Summary */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-primary-100/30">
          <div className="flex items-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-trust-800">Quick Summary</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-trust-800 mb-2">Before Dispatch</h3>
              <p className="text-trust-600 text-sm">Free cancellation within 24 hours</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <RefreshCw className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold text-trust-800 mb-2">After Dispatch</h3>
              <p className="text-trust-600 text-sm">Return & refund process applies</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
              <XCircle className="h-12 w-12 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-trust-800 mb-2">Non-Cancellable</h3>
              <p className="text-trust-600 text-sm">Custom & intimate items</p>
            </div>
          </div>
        </div>

        {/* Detailed Policy */}
        <div className="space-y-8">
          {/* When You Can Cancel */}
          <div className="bg-white rounded-2xl shadow-warm p-8 border border-warm-200">
            <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
              When You Can Cancel
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-trust-800 mb-2">Within 24 Hours of Placing Order</h3>
                  <p className="text-trust-600">
                    You can cancel your order free of charge within 24 hours of placing it, provided it hasn't been dispatched. 
                    Simply log into your account and cancel from the 'My Orders' section.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <RefreshCw className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-trust-800 mb-2">Before Dispatch</h3>
                  <p className="text-trust-600">
                    Orders can be cancelled until they are dispatched from our warehouse. Once dispatched, 
                    you can only return the item after delivery following our return policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Cancel */}
          <div className="bg-white rounded-2xl shadow-warm p-8 border border-warm-200">
            <h2 className="text-2xl font-bold text-trust-800 mb-6">How to Cancel Your Order</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-trust-800 mb-4 text-lg">Online Cancellation</h3>
                <ol className="space-y-3 text-trust-600">
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                    Log into your account on our website
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                    Go to "My Orders" section
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                    Find your order and click "Cancel"
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                    Select reason for cancellation
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                    Confirm cancellation
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-trust-800 mb-4 text-lg">Contact Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-primary-50 rounded-xl border border-primary-200">
                    <Phone className="h-5 w-5 text-primary-600 mr-3" />
                    <div>
                      <p className="font-semibold text-trust-800">Call Us</p>
                      <p className="text-trust-600">+91-1234567890</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-secondary-50 rounded-xl border border-secondary-200">
                    <Mail className="h-5 w-5 text-secondary-600 mr-3" />
                    <div>
                      <p className="font-semibold text-trust-800">Email Us</p>
                      <p className="text-trust-600">support@yourstore.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Non-Cancellable Items */}
          <div className="bg-white rounded-2xl shadow-warm p-8 border border-warm-200">
            <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
              Non-Cancellable Items
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <h3 className="font-semibold text-trust-800 mb-2">Customized Products</h3>
                  <p className="text-trust-600 text-sm">
                    Items that are made-to-order or personalized according to your specifications cannot be cancelled once production begins.
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <h3 className="font-semibold text-trust-800 mb-2">Intimate Apparel</h3>
                  <p className="text-trust-600 text-sm">
                    For hygiene reasons, intimate wear, undergarments, and swimwear cannot be cancelled after dispatch.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <h3 className="font-semibold text-trust-800 mb-2">Sale Items</h3>
                  <p className="text-trust-600 text-sm">
                    Final sale items, clearance products, and items purchased with special discounts may not be cancellable.
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <h3 className="font-semibold text-trust-800 mb-2">Gift Cards</h3>
                  <p className="text-trust-600 text-sm">
                    Digital gift cards and vouchers cannot be cancelled once purchased and delivered.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Refund Process */}
          <div className="bg-white rounded-2xl shadow-warm p-8 border border-warm-200">
            <h2 className="text-2xl font-bold text-trust-800 mb-6">Refund Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-trust-800 mb-2">Immediate Cancellation</h3>
                  <p className="text-trust-600">
                    If you cancel within 24 hours and before dispatch, your refund will be processed immediately. 
                    The amount will be credited to your original payment method within 3-5 business days.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <RefreshCw className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-trust-800 mb-2">After Dispatch</h3>
                  <p className="text-trust-600">
                    If the order has already been dispatched, you'll need to receive the item and then initiate a return. 
                    Our return policy will apply, and the refund will be processed after we receive the returned item.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-100 rounded-full p-2 mr-4 mt-1">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-trust-800 mb-2">Processing Time</h3>
                  <p className="text-trust-600">
                    Refunds typically take 5-7 business days for credit/debit cards, 2-3 days for UPI/wallets, 
                    and 7-10 days for net banking. You'll receive a confirmation email once the refund is processed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
            <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 text-primary-600 mr-3" />
              Important Notes
            </h2>
            <ul className="space-y-3 text-trust-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Cancellation requests are processed in the order they are received
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                During sale periods, cancellation policies may vary - check specific terms
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                If paying with COD, no refund is applicable for cancellations
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Shipping charges are non-refundable for free shipping orders above the minimum threshold
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                We reserve the right to cancel orders due to stock unavailability or technical errors
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with Cancellation?</h3>
            <p className="text-lg opacity-90 mb-6">
              Our customer support team is available to assist you with your cancellation requests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@yourstore.com"
                className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-warm-50 transition-colors duration-300"
              >
                Email Support
              </a>
              <a
                href="tel:+91-1234567890"
                className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300"
              >
                Call: +91-1234567890
              </a>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Support Hours: Monday to Friday, 9 AM to 8 PM | Saturday, 10 AM to 6 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPage;
