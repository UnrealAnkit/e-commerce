import React from 'react';
import { FileText, Scale, AlertCircle, Shield, CreditCard, Truck, Users, Mail, Phone } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-soft-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FileText className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Please read these terms carefully before using our website and services
          </p>
          <p className="text-sm opacity-75 mt-4">Last updated: January 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Agreement Overview */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-primary-100/30">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 text-center">Agreement Overview</h2>
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-200">
            <p className="text-trust-700 leading-relaxed">
              By accessing and using our website, you accept and agree to be bound by the terms and provision of this agreement. 
              These terms apply to all visitors, users, and others who access or use our service. If you disagree with any part 
              of these terms, then you may not access our service.
            </p>
          </div>
        </div>

        {/* Use of Service */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
            <Users className="h-6 w-6 text-primary-600 mr-3" />
            Use of Our Service
          </h2>
          <div className="space-y-6">
            <div className="border border-warm-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-trust-800 mb-4">Permitted Use</h3>
              <ul className="space-y-2 text-trust-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Browse and purchase products for personal use
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Create an account and manage your profile
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Write reviews and provide feedback
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Contact customer support for assistance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Share products on social media
                </li>
              </ul>
            </div>

            <div className="border border-red-200 rounded-xl p-6 bg-red-50">
              <h3 className="text-xl font-semibold text-trust-800 mb-4">Prohibited Activities</h3>
              <ul className="space-y-2 text-trust-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Using the service for any unlawful purpose
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Attempting to gain unauthorized access to our systems
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Transmitting viruses or malicious code
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Impersonating others or providing false information
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Scraping or copying content without permission
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Posting offensive, defamatory, or inappropriate content
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Account Terms */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">Account Terms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-trust-800 text-lg">Account Creation</h3>
              <ul className="space-y-2 text-trust-600 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  You must be at least 18 years old to create an account
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Provide accurate and complete information
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Keep your account information updated
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  One account per person
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-trust-800 text-lg">Account Security</h3>
              <ul className="space-y-2 text-trust-600 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  You are responsible for your password security
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Notify us immediately of any unauthorized access
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  We may suspend accounts for security reasons
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  You're liable for all activities under your account
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Purchase Terms */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
            <CreditCard className="h-6 w-6 text-primary-600 mr-3" />
            Purchase Terms
          </h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-trust-800 text-lg">Orders & Payment</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                    <h4 className="font-semibold text-trust-800 text-sm">Order Acceptance</h4>
                    <p className="text-trust-600 text-xs">We reserve the right to refuse or cancel any order</p>
                  </div>
                  <div className="p-3 bg-secondary-50 rounded-lg border border-secondary-200">
                    <h4 className="font-semibold text-trust-800 text-sm">Payment Processing</h4>
                    <p className="text-trust-600 text-xs">Payment is due at the time of order placement</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-trust-800 text-sm">Price Changes</h4>
                    <p className="text-trust-600 text-xs">Prices may change without notice</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-trust-800 text-lg">Shipping & Delivery</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-trust-800 text-sm">Delivery Times</h4>
                    <p className="text-trust-600 text-xs">Estimated delivery times are not guaranteed</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-trust-800 text-sm">Shipping Costs</h4>
                    <p className="text-trust-600 text-xs">Calculated based on location and order value</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-trust-800 text-sm">Risk of Loss</h4>
                    <p className="text-trust-600 text-xs">Title and risk of loss pass to you upon delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Returns & Refunds */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
            <Truck className="h-6 w-6 text-primary-600 mr-3" />
            Returns & Refunds
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-200">
              <p className="text-trust-700">
                Our return and refund policies are detailed in our separate Return Policy document. 
                By making a purchase, you agree to these terms. Returns must be initiated within 30 days 
                of delivery and items must be in original condition.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="font-semibold text-trust-800 mb-1">30-Day Window</div>
                <div className="text-trust-600 text-sm">Return period from delivery</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="font-semibold text-trust-800 mb-1">Original Condition</div>
                <div className="text-trust-600 text-sm">Unused with tags attached</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                <div className="font-semibold text-trust-800 mb-1">Full Refund</div>
                <div className="text-trust-600 text-sm">Money back guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
            <Shield className="h-6 w-6 text-primary-600 mr-3" />
            Intellectual Property
          </h2>
          <div className="space-y-6">
            <div className="border border-warm-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-trust-800 mb-4">Our Content</h3>
              <p className="text-trust-600 mb-4">
                All content on our website, including but not limited to text, graphics, logos, images, audio clips, 
                digital downloads, and software, is the property of our company or our content suppliers and is protected 
                by copyright laws.
              </p>
              <ul className="space-y-2 text-trust-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  You may not reproduce, distribute, or create derivative works
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Limited use for personal, non-commercial purposes only
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  All trademarks and service marks are our property
                </li>
              </ul>
            </div>

            <div className="border border-warm-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-trust-800 mb-4">User-Generated Content</h3>
              <p className="text-trust-600 mb-4">
                By submitting reviews, comments, or other content, you grant us a non-exclusive, royalty-free, 
                perpetual license to use, modify, and display such content.
              </p>
              <ul className="space-y-2 text-trust-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  You retain ownership of your original content
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  You're responsible for the accuracy of your submissions
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  We may remove content at our discretion
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Liability & Disclaimers */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
            <Scale className="h-6 w-6 text-primary-600 mr-3" />
            Liability & Disclaimers
          </h2>
          <div className="space-y-6">
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <h3 className="font-semibold text-trust-800 mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                Service Disclaimer
              </h3>
              <p className="text-trust-600 text-sm">
                Our service is provided "as is" without any warranty of any kind. We make no representations or warranties 
                about the accuracy, reliability, completeness, or timeliness of the content, services, software, text, 
                graphics, and links.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-trust-800 text-lg">Limitation of Liability</h3>
                <ul className="space-y-2 text-trust-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    We are not liable for indirect or consequential damages
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Maximum liability is limited to the amount you paid
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    We're not responsible for third-party actions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Some jurisdictions may not allow these limitations
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-trust-800 text-lg">Indemnification</h3>
                <ul className="space-y-2 text-trust-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    You agree to indemnify us against claims arising from your use
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    This includes legal fees and other costs
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Applies to violations of these terms or applicable law
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Coverage extends to our affiliates and partners
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">Termination</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                <h3 className="font-semibold text-trust-800 mb-3">We May Terminate</h3>
                <ul className="space-y-2 text-trust-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    If you violate these terms
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    For fraudulent or illegal activity
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    At our sole discretion with notice
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Immediately for serious violations
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-trust-800 mb-3">You May Terminate</h3>
                <ul className="space-y-2 text-trust-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Delete your account anytime
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Stop using our services
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Outstanding orders remain valid
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Data deletion per privacy policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">Governing Law & Disputes</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-200">
              <h3 className="font-semibold text-trust-800 mb-3">Jurisdiction</h3>
              <p className="text-trust-600">
                These terms are governed by the laws of India. Any disputes will be resolved in the courts of 
                [Your City], India. We make no representation that our service is appropriate or available 
                for use in other locations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <h3 className="font-semibold text-trust-800 mb-2">Dispute Resolution</h3>
                <p className="text-trust-600 text-sm">
                  We encourage resolving disputes through customer service first. 
                  If needed, disputes may be subject to binding arbitration.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <h3 className="font-semibold text-trust-800 mb-2">Severability</h3>
                <p className="text-trust-600 text-sm">
                  If any provision is found unenforceable, the remaining terms 
                  will continue in full force and effect.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Updates */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
          <p className="text-lg opacity-90 mb-6">
            Contact our legal team if you have questions about these terms of service
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="mailto:legal@yourstore.com"
              className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-warm-50 transition-colors duration-300 flex items-center justify-center"
            >
              <Mail className="h-4 w-4 mr-2" />
              Legal Team
            </a>
            <a
              href="mailto:support@yourstore.com"
              className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              Support Team
            </a>
            <a
              href="/faq"
              className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
            >
              <FileText className="h-4 w-4 mr-2" />
              FAQ
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm opacity-75">
              We may update these terms from time to time. Continued use of our service after changes constitutes acceptance of new terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
