import React from 'react';
import { RotateCcw, Package, Truck, CreditCard, Clock, CheckCircle, AlertTriangle, Phone, Mail } from 'lucide-react';

const ReturnPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-soft-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RotateCcw className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Return Policy
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Easy returns within 30 days with free pickup and full refunds
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Overview */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-primary-100/30">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 text-center">30-Day Return Policy</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-trust-800 mb-2">30 Days</h3>
              <p className="text-trust-600 text-sm">Return window from delivery</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-trust-800 mb-2">Free Pickup</h3>
              <p className="text-trust-600 text-sm">We collect from your doorstep</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-trust-800 mb-2">Original Condition</h3>
              <p className="text-trust-600 text-sm">Unused with tags attached</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <CreditCard className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-trust-800 mb-2">Full Refund</h3>
              <p className="text-trust-600 text-sm">100% money back guarantee</p>
            </div>
          </div>
        </div>

        {/* Return Process */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">How to Return Your Order</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-trust-800 mb-2 text-lg">Initiate Return</h3>
                <p className="text-trust-600 mb-3">
                  Log into your account, go to "My Orders" and click "Return" next to the item you want to return.
                </p>
                <div className="bg-primary-50 p-3 rounded-lg">
                  <p className="text-trust-700 text-sm">
                    <strong>Tip:</strong> You can also call our customer support at +91-1234567890 to initiate a return.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-trust-800 mb-2 text-lg">Select Reason</h3>
                <p className="text-trust-600 mb-3">
                  Choose the reason for return from options like size issues, quality concerns, wrong item received, or changed mind.
                </p>
                <ul className="text-trust-600 text-sm space-y-1 ml-4">
                  <li>• Size too small/large</li>
                  <li>• Quality not as expected</li>
                  <li>• Wrong item received</li>
                  <li>• Changed my mind</li>
                  <li>• Damaged during shipping</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-trust-800 mb-2 text-lg">Schedule Pickup</h3>
                <p className="text-trust-600 mb-3">
                  Choose a convenient date and time slot for pickup. Our delivery partner will collect the item from your address.
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-trust-700 text-sm">
                    <strong>Free Pickup:</strong> We provide free pickup service across all major cities in India.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                <span className="text-primary-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-trust-800 mb-2 text-lg">Pack the Item</h3>
                <p className="text-trust-600 mb-3">
                  Pack the item in its original packaging with all tags, labels, and accessories. If original packaging is not available, use any suitable packaging.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-1">Include:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Original tags and labels</li>
                      <li>• Invoice/receipt</li>
                      <li>• Any accessories</li>
                      <li>• Original packaging</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-1">Avoid:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Removing security tags</li>
                      <li>• Washing the item</li>
                      <li>• Using the item extensively</li>
                      <li>• Damaging original packaging</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                <span className="text-primary-600 font-bold">5</span>
              </div>
              <div>
                <h3 className="font-semibold text-trust-800 mb-2 text-lg">Handover & Get Refund</h3>
                <p className="text-trust-600">
                  Hand over the package to our delivery partner and get a receipt. Once we receive and inspect the item, 
                  your refund will be processed within 5-7 business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Refund Information */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">Refund Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-trust-800 mb-4 text-lg">Refund Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <CreditCard className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-trust-800">Credit/Debit Cards</p>
                    <p className="text-trust-600 text-sm">5-7 business days</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <CreditCard className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-semibold text-trust-800">UPI/Wallets</p>
                    <p className="text-trust-600 text-sm">2-3 business days</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <CreditCard className="h-5 w-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-semibold text-trust-800">Net Banking</p>
                    <p className="text-trust-600 text-sm">7-10 business days</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-trust-800 mb-4 text-lg">Refund Options</h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                  <h4 className="font-semibold text-trust-800 mb-1">Original Payment Method</h4>
                  <p className="text-trust-600 text-sm">Refund to the same card/account used for payment</p>
                </div>
                <div className="p-3 bg-secondary-50 rounded-lg border border-secondary-200">
                  <h4 className="font-semibold text-trust-800 mb-1">Store Credit</h4>
                  <p className="text-trust-600 text-sm">Get instant store credit for faster future purchases</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-trust-800 mb-1">Exchange</h4>
                  <p className="text-trust-600 text-sm">Exchange for different size/color (subject to availability)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Return Conditions */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
            <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
            Return Conditions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-trust-800 mb-4 text-lg text-green-600">✓ Returnable Items</h3>
              <ul className="space-y-2 text-trust-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  All clothing items in original condition
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Shoes (unworn, in original box)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Accessories with tags attached
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Items returned within 30 days
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Items with original invoice
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-trust-800 mb-4 text-lg text-red-600">✗ Non-Returnable Items</h3>
              <ul className="space-y-2 text-trust-600">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-1" />
                  Intimate apparel and undergarments
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-1" />
                  Customized or personalized items
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-1" />
                  Items without tags or in used condition
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-1" />
                  Final sale and clearance items
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-1" />
                  Items returned after 30 days
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exchange Policy */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">Exchange Policy</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-200">
              <h3 className="font-semibold text-trust-800 mb-3 text-lg">Size & Color Exchange</h3>
              <p className="text-trust-600 mb-3">
                You can exchange items for a different size or color within 30 days of delivery, subject to availability.
              </p>
              <ul className="text-trust-600 space-y-1">
                <li>• Same price: Direct exchange</li>
                <li>• Higher price: Pay the difference</li>
                <li>• Lower price: Receive store credit for the difference</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-trust-800 mb-2">Exchange Process</h4>
                <ol className="text-trust-600 text-sm space-y-1">
                  <li>1. Initiate return for exchange</li>
                  <li>2. Select new size/color</li>
                  <li>3. Schedule pickup</li>
                  <li>4. Receive new item within 3-5 days</li>
                </ol>
              </div>
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <h4 className="font-semibold text-trust-800 mb-2">Quick Exchange</h4>
                <p className="text-trust-600 text-sm">
                  For size exchanges, we can send the new size immediately and collect the old one during delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help with Returns?</h3>
          <p className="text-lg opacity-90 mb-6">
            Our customer support team is here to make your return experience smooth and hassle-free
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="mailto:returns@yourstore.com"
              className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-warm-50 transition-colors duration-300 flex items-center justify-center"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Returns Team
            </a>
            <a
              href="tel:+91-1234567890"
              className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Support
            </a>
            <a
              href="/faq"
              className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              View FAQ
            </a>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Support Hours: Monday to Sunday, 9 AM to 9 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPage;
