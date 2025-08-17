import React from 'react';
import { Heart, Users, Award, Globe, Truck, Shield, Star, Target, Eye, Zap } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '1M+', label: 'Happy Customers', icon: Users },
    { number: '50K+', label: 'Products Sold', icon: Award },
    { number: '100+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'Customer Satisfaction', icon: Star }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make starts with our customers. Your satisfaction and happiness drive everything we do.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We source only the finest materials and work with trusted manufacturers to ensure every product meets our high standards.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Honest pricing, clear policies, and transparent communication. We believe trust is the foundation of great relationships.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and supporting brands that care about our planet and future generations.'
    }
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      description: 'Fashion enthusiast with 15+ years in retail, passionate about making style accessible to everyone.'
    },
    {
      name: 'Arjun Patel',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      description: 'Creative visionary who brings global fashion trends to our Indian audience with a modern twist.'
    },
    {
      name: 'Sneha Reddy',
      role: 'Customer Experience Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      description: 'Dedicated to ensuring every customer interaction exceeds expectations and builds lasting relationships.'
    },
    {
      name: 'Vikram Singh',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80',
      description: 'Logistics expert ensuring seamless delivery and supply chain management across India.'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Started as a small online boutique with a dream to make fashion accessible to everyone.'
    },
    {
      year: '2019',
      title: 'First 1000 Customers',
      description: 'Reached our first milestone and expanded our product range based on customer feedback.'
    },
    {
      year: '2020',
      title: 'National Expansion',
      description: 'Launched nationwide delivery and partnered with local artisans across India.'
    },
    {
      year: '2021',
      title: 'Mobile App Launch',
      description: 'Introduced our mobile app for seamless shopping experience on the go.'
    },
    {
      year: '2022',
      title: 'Sustainability Initiative',
      description: 'Launched eco-friendly packaging and sustainable fashion line.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Opened our design and innovation center, focusing on AI-powered personalization.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-soft-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 text-white py-20">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              About <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">FashionHub</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Redefining fashion for the modern Indian. We believe style should be accessible, 
              sustainable, and authentically you.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 mb-4 group-hover:from-primary-100 group-hover:to-secondary-100 transition-all duration-300 border border-primary-100">
                  <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-trust-800 mb-2">{stat.number}</div>
                  <div className="text-trust-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-trust-800">Our Story</h2>
              <div className="space-y-4 text-trust-600 leading-relaxed">
                <p className="text-lg">
                  FashionHub was born from a simple belief: everyone deserves to look and feel their best, 
                  regardless of their budget or location. Founded in 2018 by fashion enthusiast Priya Sharma, 
                  we started as a small online boutique with a big dream.
                </p>
                <p>
                  Growing up in a small town, Priya experienced firsthand the challenges of accessing trendy, 
                  quality fashion. Limited options, high prices, and outdated styles were the norm. 
                  This sparked an idea to bridge the gap between high fashion and everyday accessibility.
                </p>
                <p>
                  Today, we're proud to serve millions of customers across India, offering carefully curated 
                  collections that blend global trends with Indian sensibilities. From traditional wear to 
                  contemporary fashion, we celebrate the diversity and vibrancy of Indian style.
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl font-semibold">
                  Join Our Journey
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 border border-primary-200">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Our story"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-warm-200">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-8 w-8 text-red-500" />
                    <div>
                      <div className="font-bold text-trust-800">Passion</div>
                      <div className="text-trust-600 text-sm">Driven by love</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-trust-800 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-trust-600 max-w-3xl mx-auto">
              Driving change in the fashion industry with purpose and passion
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
              <div className="flex items-center mb-6">
                <div className="bg-primary-500 rounded-full p-3 mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-trust-800">Our Mission</h3>
              </div>
              <p className="text-trust-700 leading-relaxed">
                To democratize fashion by making trendy, quality clothing accessible to everyone across India. 
                We strive to empower individuals to express their unique style while supporting sustainable 
                practices and local communities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8 border border-secondary-200">
              <div className="flex items-center mb-6">
                <div className="bg-secondary-500 rounded-full p-3 mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-trust-800">Our Vision</h3>
              </div>
              <p className="text-trust-700 leading-relaxed">
                To become India's most loved and trusted fashion destination, where style meets affordability, 
                sustainability meets innovation, and every customer feels confident and beautiful in their choices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-trust-800 mb-4">Our Values</h2>
            <p className="text-xl text-trust-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-warm border border-warm-200 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl p-4 mb-4 group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-primary-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-trust-800 mb-3 text-center">{value.title}</h3>
                <p className="text-trust-600 text-sm text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-trust-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-trust-600 max-w-3xl mx-auto">
              The passionate individuals behind FashionHub's success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-warm-50 to-primary-50 rounded-2xl p-6 border border-primary-100 group hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full p-2">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-trust-800 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-trust-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-trust-800 mb-4">Our Journey</h2>
            <p className="text-xl text-trust-600 max-w-3xl mx-auto">
              Key milestones that shaped our story
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-inherit mb-4 lg:mb-0`}>
                    <div className="bg-white rounded-2xl p-6 shadow-warm border border-warm-200 hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-trust-800 mb-3">{milestone.title}</h3>
                      <p className="text-trust-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-trust-800 mb-4">Why Choose FashionHub?</h2>
            <p className="text-xl text-trust-600 max-w-3xl mx-auto">
              What makes us different from other fashion retailers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-trust-800 mb-3">Fast & Free Delivery</h3>
              <p className="text-trust-600">
                Free shipping on orders above ₹499. Express delivery available in major cities.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-trust-800 mb-3">Quality Guarantee</h3>
              <p className="text-trust-600">
                Every product goes through rigorous quality checks. 30-day return guarantee.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
              <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-trust-800 mb-3">24/7 Support</h3>
              <p className="text-trust-600">
                Our customer support team is always ready to help with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Fashion Family?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Discover thousands of styles, enjoy unbeatable prices, and experience the FashionHub difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-warm-50 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
