import React from 'react';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, AlertCircle } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-soft-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm opacity-75 mt-4">Last updated: January 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Overview */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-primary-100/30">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 text-center">Privacy at a Glance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Lock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-trust-800 mb-2">Secure Data</h3>
              <p className="text-trust-600 text-sm">SSL encryption and secure storage</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-trust-800 mb-2">Transparent Use</h3>
              <p className="text-trust-600 text-sm">Clear about how we use your data</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-trust-800 mb-2">Your Control</h3>
              <p className="text-trust-600 text-sm">Manage your data and preferences</p>
            </div>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
            <Database className="h-6 w-6 text-primary-600 mr-3" />
            Information We Collect
          </h2>
          <div className="space-y-6">
            <div className="border border-warm-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-trust-800 mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-trust-700">Account Information:</h4>
                  <ul className="text-trust-600 text-sm space-y-1 ml-4">
                    <li>• Name and contact details</li>
                    <li>• Email address and phone number</li>
                    <li>• Shipping and billing addresses</li>
                    <li>• Date of birth (optional)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-trust-700">Transaction Information:</h4>
                  <ul className="text-trust-600 text-sm space-y-1 ml-4">
                    <li>• Purchase history and preferences</li>
                    <li>• Payment information (securely processed)</li>
                    <li>• Order and delivery details</li>
                    <li>• Return and exchange records</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-warm-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-trust-800 mb-4">Automatically Collected Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-trust-700">Technical Information:</h4>
                  <ul className="text-trust-600 text-sm space-y-1 ml-4">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Operating system details</li>
                    <li>• Screen resolution and device type</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-trust-700">Usage Information:</h4>
                  <ul className="text-trust-600 text-sm space-y-1 ml-4">
                    <li>• Pages visited and time spent</li>
                    <li>• Products viewed and searched</li>
                    <li>• Click patterns and interactions</li>
                    <li>• Referral sources</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">How We Use Your Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
                <h3 className="font-semibold text-trust-800 mb-2">Order Processing</h3>
                <p className="text-trust-600 text-sm">
                  To process your orders, arrange deliveries, handle payments, and provide customer support.
                </p>
              </div>
              <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-200">
                <h3 className="font-semibold text-trust-800 mb-2">Account Management</h3>
                <p className="text-trust-600 text-sm">
                  To create and maintain your account, manage preferences, and provide personalized experiences.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <h3 className="font-semibold text-trust-800 mb-2">Communication</h3>
                <p className="text-trust-600 text-sm">
                  To send order updates, promotional offers, newsletters, and important service announcements.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-trust-800 mb-2">Personalization</h3>
                <p className="text-trust-600 text-sm">
                  To recommend products, customize content, and improve your shopping experience.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <h3 className="font-semibold text-trust-800 mb-2">Analytics & Improvement</h3>
                <p className="text-trust-600 text-sm">
                  To analyze website usage, improve our services, and develop new features.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <h3 className="font-semibold text-trust-800 mb-2">Legal Compliance</h3>
                <p className="text-trust-600 text-sm">
                  To comply with legal obligations, prevent fraud, and protect our users and business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Information Sharing */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">Information Sharing & Disclosure</h2>
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-semibold text-trust-800 mb-3 flex items-center">
                <Lock className="h-5 w-5 text-green-600 mr-2" />
                We DO NOT sell your personal information
              </h3>
              <p className="text-trust-600">
                Your personal data is never sold to third parties. We only share information in specific circumstances outlined below.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-trust-800 text-lg">When We Share Information:</h4>
                <ul className="space-y-3 text-trust-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Service Providers:</strong> Payment processors, shipping companies, and analytics services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span><strong>With Consent:</strong> When you explicitly authorize us to share information</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-trust-800 text-lg">Third-Party Services:</h4>
                <div className="space-y-2">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="font-semibold text-trust-800 text-sm">Payment Processors</p>
                    <p className="text-trust-600 text-xs">Stripe, Razorpay for secure payment processing</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="font-semibold text-trust-800 text-sm">Shipping Partners</p>
                    <p className="text-trust-600 text-xs">Delivery companies for order fulfillment</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="font-semibold text-trust-800 text-sm">Analytics</p>
                    <p className="text-trust-600 text-xs">Google Analytics for website performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
            <Shield className="h-6 w-6 text-primary-600 mr-3" />
            Data Security & Protection
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-trust-800 text-lg">Security Measures:</h3>
              <ul className="space-y-2 text-trust-600">
                <li className="flex items-start">
                  <Lock className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  SSL encryption for all data transmission
                </li>
                <li className="flex items-start">
                  <Lock className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Secure servers with regular security updates
                </li>
                <li className="flex items-start">
                  <Lock className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Payment data handled by PCI-compliant processors
                </li>
                <li className="flex items-start">
                  <Lock className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Regular security audits and monitoring
                </li>
                <li className="flex items-start">
                  <Lock className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Limited access to personal information
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-trust-800 text-lg">Data Retention:</h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                  <p className="font-semibold text-trust-800 text-sm">Account Data</p>
                  <p className="text-trust-600 text-xs">Retained while your account is active</p>
                </div>
                <div className="p-3 bg-secondary-50 rounded-lg border border-secondary-200">
                  <p className="font-semibold text-trust-800 text-sm">Transaction Data</p>
                  <p className="text-trust-600 text-xs">Kept for 7 years for legal compliance</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-trust-800 text-sm">Analytics Data</p>
                  <p className="text-trust-600 text-xs">Anonymized after 26 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6 flex items-center">
            <Users className="h-6 w-6 text-primary-600 mr-3" />
            Your Rights & Choices
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-trust-800 text-lg">Data Rights:</h3>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-green-50 rounded-lg border border-green-200">
                  <Eye className="h-4 w-4 text-green-600 mr-2 mt-1" />
                  <div>
                    <p className="font-semibold text-trust-800 text-sm">Access Your Data</p>
                    <p className="text-trust-600 text-xs">Request a copy of your personal information</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <AlertCircle className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                  <div>
                    <p className="font-semibold text-trust-800 text-sm">Correct Information</p>
                    <p className="text-trust-600 text-xs">Update or correct inaccurate data</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-red-50 rounded-lg border border-red-200">
                  <Database className="h-4 w-4 text-red-600 mr-2 mt-1" />
                  <div>
                    <p className="font-semibold text-trust-800 text-sm">Delete Your Data</p>
                    <p className="text-trust-600 text-xs">Request deletion of your information</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <Lock className="h-4 w-4 text-purple-600 mr-2 mt-1" />
                  <div>
                    <p className="font-semibold text-trust-800 text-sm">Restrict Processing</p>
                    <p className="text-trust-600 text-xs">Limit how we use your data</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-trust-800 text-lg">Communication Preferences:</h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary-50 rounded-lg border border-primary-200">
                  <p className="font-semibold text-trust-800 text-sm">Marketing Emails</p>
                  <p className="text-trust-600 text-xs">Unsubscribe anytime from promotional emails</p>
                </div>
                <div className="p-3 bg-secondary-50 rounded-lg border border-secondary-200">
                  <p className="font-semibold text-trust-800 text-sm">SMS Notifications</p>
                  <p className="text-trust-600 text-xs">Opt out of text message updates</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-trust-800 text-sm">Push Notifications</p>
                  <p className="text-trust-600 text-xs">Disable in your device/browser settings</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-trust-800 text-sm mb-2">How to Exercise Your Rights:</h4>
                <div className="space-y-2">
                  <div className="flex items-center p-2 bg-white rounded border">
                    <Mail className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-trust-600 text-sm">privacy@yourstore.com</span>
                  </div>
                  <div className="flex items-center p-2 bg-white rounded border">
                    <Phone className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-trust-600 text-sm">+91-1234567890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-2xl shadow-warm p-8 mb-8 border border-warm-200">
          <h2 className="text-2xl font-bold text-trust-800 mb-6">Cookies & Tracking</h2>
          <div className="space-y-6">
            <p className="text-trust-600">
              We use cookies and similar technologies to enhance your experience, analyze website performance, and provide personalized content.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <h3 className="font-semibold text-trust-800 mb-2">Essential Cookies</h3>
                <p className="text-trust-600 text-sm">Required for website functionality, login, and cart features</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-trust-800 mb-2">Analytics Cookies</h3>
                <p className="text-trust-600 text-sm">Help us understand how visitors interact with our website</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <h3 className="font-semibold text-trust-800 mb-2">Marketing Cookies</h3>
                <p className="text-trust-600 text-sm">Used to show relevant ads and track campaign effectiveness</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <p className="text-trust-700 text-sm">
                <strong>Cookie Control:</strong> You can manage cookie preferences in your browser settings or through our cookie consent banner. 
                Note that disabling certain cookies may affect website functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Updates & Contact */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
          <p className="text-lg opacity-90 mb-6">
            We're here to help you understand how we protect your privacy and handle your data
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="mailto:privacy@yourstore.com"
              className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-warm-50 transition-colors duration-300 flex items-center justify-center"
            >
              <Mail className="h-4 w-4 mr-2" />
              Privacy Team
            </a>
            <a
              href="mailto:support@yourstore.com"
              className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              General Support
            </a>
            <a
              href="/faq"
              className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
            >
              <AlertCircle className="h-4 w-4 mr-2" />
              FAQ
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm opacity-75">
              This privacy policy may be updated periodically. We'll notify you of significant changes via email or website notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
