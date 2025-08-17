import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "We offer multiple shipping options: Standard delivery (5-7 business days), Express delivery (2-3 business days), and Same-day delivery (for select cities). All orders are processed within 24 hours."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs duties may apply depending on your country's regulations."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! Once your order is dispatched, you'll receive a tracking number via email and SMS. You can track your order in real-time through our website or the courier's tracking page."
        },
        {
          question: "What if my order is delayed?",
          answer: "If your order is delayed beyond the expected delivery date, please contact our customer support. We'll investigate and provide updates. In case of significant delays, we may offer compensation or expedited shipping for your next order."
        }
      ]
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          question: "How do I choose the right size?",
          answer: "Please refer to our detailed size guide which includes measurements for chest, waist, hips, and length. Each product page also has a size chart. If you're between sizes, we recommend sizing up for a comfortable fit."
        },
        {
          question: "Are your clothes true to size?",
          answer: "Our clothes generally run true to size based on Indian sizing standards. We provide detailed measurements for each garment. Customer reviews often mention fit, which can help you decide."
        },
        {
          question: "What materials are your clothes made from?",
          answer: "We use high-quality materials including 100% cotton, cotton blends, linen, silk, and sustainable fabrics. Each product page lists the exact fabric composition and care instructions."
        },
        {
          question: "Do you have plus-size options?",
          answer: "Yes! We offer sizes from XS to 5XL for most of our collections. Our size guide includes detailed measurements for all sizes to ensure the perfect fit."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy from the date of delivery. Items must be unused, unwashed, and in original condition with tags attached. Intimate wear and customized items cannot be returned."
        },
        {
          question: "How do I initiate a return?",
          answer: "Log into your account, go to 'My Orders', and click 'Return' next to the item. Choose your reason and schedule a pickup. Our team will collect the item from your address at no extra cost."
        },
        {
          question: "When will I get my refund?",
          answer: "Refunds are processed within 5-7 business days after we receive and inspect your returned item. The amount will be credited to your original payment method or store credit, as per your preference."
        },
        {
          question: "Can I exchange for a different size/color?",
          answer: "Yes! You can exchange items for a different size or color within 30 days. The exchange process is similar to returns. If there's a price difference, you'll need to pay the difference or receive a partial refund."
        }
      ]
    },
    {
      category: "Payment & Account",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards (Visa, MasterCard, American Express), UPI, net banking, mobile wallets (Paytm, PhonePe, Google Pay), and Cash on Delivery (COD) for orders above ₹500."
        },
        {
          question: "Is it safe to shop on your website?",
          answer: "Absolutely! Our website uses SSL encryption to protect your personal and payment information. We're also PCI DSS compliant and follow strict security protocols to ensure your data is safe."
        },
        {
          question: "Can I save my payment information?",
          answer: "Yes, you can securely save your payment information for faster checkout. We use tokenization to ensure your card details are never stored on our servers."
        },
        {
          question: "Do you offer EMI options?",
          answer: "Yes! We offer 0% EMI options on orders above ₹3,000 for 3, 6, 9, and 12 months. EMI is available on select credit cards and digital payment platforms."
        }
      ]
    },
    {
      category: "Offers & Loyalty",
      questions: [
        {
          question: "How do I use a discount code?",
          answer: "Enter your discount code in the 'Promo Code' field during checkout and click 'Apply'. The discount will be reflected in your order total. Note that only one promo code can be used per order."
        },
        {
          question: "Do you have a loyalty program?",
          answer: "Yes! Join our VIP program to earn points on every purchase, get early access to sales, exclusive discounts, and special birthday offers. You earn 1 point for every ₹10 spent."
        },
        {
          question: "When do you have sales?",
          answer: "We have seasonal sales during festivals, end-of-season clearances, and special occasions. Follow us on social media or subscribe to our newsletter to stay updated on upcoming sales and exclusive offers."
        },
        {
          question: "Can I combine multiple offers?",
          answer: "Generally, offers cannot be combined unless specifically mentioned. However, loyalty points can often be used along with certain promotions. Check the terms and conditions of each offer for details."
        }
      ]
    }
  ];

  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-soft-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, returns, and more
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-warm p-6 border border-primary-100/30">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-trust-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-warm-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-trust-800 text-lg"
            />
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {filteredFAQs.length === 0 && searchTerm ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl shadow-warm p-8 border border-warm-200">
              <HelpCircle className="h-16 w-16 mx-auto mb-4 text-trust-400" />
              <h3 className="text-xl font-semibold text-trust-800 mb-2">No results found</h3>
              <p className="text-trust-600">
                Try searching with different keywords or browse through our categories below.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-warm border border-warm-200 overflow-hidden">
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 px-6 py-4 border-b border-warm-200">
                  <h2 className="text-2xl font-bold text-trust-800">{category.category}</h2>
                </div>
                <div className="divide-y divide-warm-100">
                  {category.questions.map((faq, questionIndex) => {
                    const isOpen = openFAQ === `${categoryIndex}-${questionIndex}`;
                    return (
                      <div key={questionIndex}>
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full px-6 py-6 text-left hover:bg-warm-50 transition-colors duration-200 flex items-center justify-between group"
                        >
                          <h3 className="text-lg font-semibold text-trust-800 group-hover:text-primary-600 transition-colors duration-200">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-primary-500 transform transition-transform duration-200" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-trust-400 group-hover:text-primary-500 transform transition-transform duration-200" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 animate-fade-in-up">
                            <div className="bg-warm-50 rounded-xl p-4 border-l-4 border-primary-400">
                              <p className="text-trust-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
          <p className="text-lg opacity-90 mb-6">
            Can't find what you're looking for? Our customer support team is here to help!
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
              Call Us: +91-1234567890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
