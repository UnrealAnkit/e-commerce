import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'Men', href: '/products?gender=men' },
      { name: 'Women', href: '/products?gender=women' },
      { name: 'Kids', href: '/products?gender=kids' },
      { name: 'New Arrivals', href: '/products' },
      { name: 'Sale', href: '/products' }
    ],
    support: [
      { name: 'Help Center', href: '/faq' },
      { name: 'FAQs', href: '/faq' },
      { name: 'Returns & Refunds', href: '/returns' },
      { name: 'Cancellation Policy', href: '/cancellation' },
      { name: 'Size Guide', href: '/size-guide' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Careers', href: '/careers' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg lg:text-xl">F</span>
              </div>
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">FashionHub</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              Discover the latest trends in fashion and accessories. 
              Shop with confidence knowing you're getting premium quality products at unbeatable prices.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">support@fashionhub.com</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">123 Fashion St, Style City, SC 12345</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 lg:mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm font-medium">
                © {currentYear} FashionHub. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>Made with ❤️ for fashion lovers</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm mr-3 hidden lg:block">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-primary-600 hover:to-secondary-600 text-gray-400 hover:text-white transition-all duration-300 rounded-xl flex items-center justify-center transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="mt-8 pt-8 border-t border-gray-700/50">
            <div className="text-center max-w-md mx-auto">
              <h4 className="text-lg font-bold mb-2 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest fashion trends and exclusive offers delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
