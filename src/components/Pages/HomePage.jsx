import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  ArrowRight, 
  Star, 
  ShoppingCart, 
  Heart,
  TrendingUp,
  Users,
  Package,
  Shield,
  CheckCircle,
  Award,
  Clock,
  Truck,
  CreditCard,
  Headphones,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  ChevronLeft,
  ChevronRight,
  Play,
  Quote
} from 'lucide-react';
import AddToCartModal from '../UI/AddToCartModal';
import Toast from '../UI/Toast';

const HomePage = () => {
  const dispatch = useDispatch();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToWishlist = (product) => {
    // Here you would typically add to wishlist
    console.log('Added to wishlist:', product.name);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const showSuccessMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const hideToast = () => {
    setShowToast(false);
  };

  useEffect(() => {
    // Simulate loading featured products
    setTimeout(() => {
      setFeaturedProducts([
        {
          _id: '1',
          name: 'Classic White T-Shirt',
          price: 29.99,
          originalPrice: 39.99,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
          rating: 4.5,
          reviews: 128,
          brand: 'StyleBrand'
        },
        {
          _id: '2',
          name: 'Denim Jacket',
          price: 89.99,
          originalPrice: 119.99,
          image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400',
          rating: 4.8,
          reviews: 95,
          brand: 'DenimCo'
        },
        {
          _id: '3',
          name: 'Summer Dress',
          price: 59.99,
          originalPrice: 79.99,
          image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
          rating: 4.3,
          reviews: 67,
          brand: 'FashionLine'
        },
        {
          _id: '4',
          name: 'Casual Sneakers',
          price: 79.99,
          originalPrice: 99.99,
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
          rating: 4.6,
          reviews: 203,
          brand: 'ShoeStyle'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const categories = [
    {
      name: 'Men',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      link: '/products?gender=men'
    },
    {
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
      link: '/products?gender=women'
    },
    {
      name: 'Kids',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400',
      link: '/products?gender=kids'
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Trending Styles',
      description: 'Stay ahead with the latest fashion trends'
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Fast Delivery',
      description: 'Get your orders delivered within 2-3 days'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Payment',
      description: '100% secure payment with SSL encryption'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Round the clock customer support'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fashion Blogger',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      rating: 5,
      text: 'FashionHub has completely transformed my wardrobe! The quality and style selection is unmatched. I love how easy it is to find exactly what I\'m looking for.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Professional',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 5,
      text: 'As someone who values both style and convenience, FashionHub delivers on both fronts. The delivery is lightning fast and the customer service is exceptional.'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Student',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 5,
      text: 'Perfect for students on a budget! Great prices, trendy styles, and the return policy is so hassle-free. I recommend FashionHub to all my friends.'
    }
  ];

  const trendingProducts = [
    {
      _id: '5',
      name: 'Vintage Denim Jacket',
      price: 129.99,
      originalPrice: 159.99,
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400',
      rating: 4.9,
      reviews: 234,
      brand: 'DenimVintage',
      badge: 'Trending'
    },
    {
      _id: '6',
      name: 'Elegant Evening Dress',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
      rating: 4.8,
      reviews: 156,
      brand: 'Elegance',
      badge: 'Popular'
    },
    {
      _id: '7',
      name: 'Sporty Sneakers',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      rating: 4.7,
      reviews: 189,
      brand: 'SportStyle',
      badge: 'Hot'
    },
    {
      _id: '8',
      name: 'Casual Hoodie',
      price: 59.99,
      originalPrice: 79.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
      rating: 4.6,
      reviews: 267,
      brand: 'ComfortWear',
      badge: 'New'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products Available' },
    { number: '24/7', label: 'Customer Support' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  const socialProof = [
    { platform: 'Instagram', followers: '125K', icon: Instagram },
    { platform: 'Facebook', followers: '89K', icon: Facebook },
    { platform: 'Twitter', followers: '67K', icon: Twitter },
    { platform: 'YouTube', followers: '45K', icon: Youtube }
  ];

  return (
    <div className="min-h-screen">
             {/* Hero Section */}
       <section className="relative gradient-primary text-white overflow-hidden animate-gradient-shift min-h-screen flex items-center">
                 {/* Animated background elements */}
         <div className="absolute inset-0">
           <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse animate-float"></div>
           <div className="absolute top-20 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse animate-float" style={{animationDelay: '1s'}}></div>
           <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse animate-float" style={{animationDelay: '2s'}}></div>
           <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white opacity-10 rounded-full animate-pulse animate-float" style={{animationDelay: '3s'}}></div>
           <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white opacity-5 rounded-full animate-spin-slow"></div>
           <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-white opacity-5 rounded-full animate-heartbeat"></div>
         </div>
        
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
           <div className="text-center">
             <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up text-white drop-shadow-2xl">
               Discover Your Style
             </h1>
               <p className="text-xl md:text-2xl mb-4 text-purple-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                 Shop the latest trends in fashion and accessories at FashionHub
               </p>
               <p className="text-lg mb-8 text-purple-200 animate-fade-in-up animate-wave" style={{animationDelay: '0.3s'}}>
                 ✨ Free Shipping on Orders Over $50 • 🎉 30-Day Returns • 🔒 Secure Payment
               </p>
                             <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                 <Link
                   to="/products"
                   className="btn-primary px-10 py-4 text-lg font-bold hover-lift inline-flex items-center justify-center group shadow-strong"
                 >
                   Shop Now
                   <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                 </Link>
                 {!isAuthenticated && (
                   <Link
                     to="/register"
                     className="btn-secondary px-10 py-4 text-lg font-bold hover-lift inline-flex items-center justify-center"
                   >
                     Sign Up
                   </Link>
                 )}
               </div>
              
                             {/* Trust Indicators */}
               <div className="mt-16 flex flex-wrap justify-center items-center gap-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                 <div className="glass-card px-6 py-4 animate-bounce-in hover-lift" style={{animationDelay: '0.7s'}}>
                   <div className="flex items-center text-white">
                     <CheckCircle className="h-6 w-6 mr-3 animate-pulse-glow" />
                     <span className="text-lg font-semibold">50K+ Happy Customers</span>
                   </div>
                 </div>
                 <div className="glass-card px-6 py-4 animate-bounce-in hover-lift" style={{animationDelay: '0.8s'}}>
                   <div className="flex items-center text-white">
                     <Award className="h-6 w-6 mr-3 animate-pulse-glow" />
                     <span className="text-lg font-semibold">Premium Quality</span>
                   </div>
                 </div>
                 <div className="glass-card px-6 py-4 animate-bounce-in hover-lift" style={{animationDelay: '0.9s'}}>
                   <div className="flex items-center text-white">
                     <Truck className="h-6 w-6 mr-3 animate-pulse-glow" />
                     <span className="text-lg font-semibold">Fast Delivery</span>
                   </div>
                 </div>
               </div>
            </div>
        </div>
      </section>

             {/* Categories Section */}
       <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary animate-zoom-in mb-4">Shop by Category</h2>
             <p className="text-lg text-gray-600 animate-fade-in-up max-w-2xl mx-auto" style={{animationDelay: '0.2s'}}>Explore our curated collections for every style and occasion</p>
           </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
                             <Link
                 key={category.name}
                 to={category.link}
                 className="group relative overflow-hidden rounded-3xl shadow-strong hover-lift animate-fade-in-up"
                 style={{animationDelay: `${index * 0.1}s`}}
               >
                                 <img
                   src={category.image}
                   alt={category.name}
                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center">
                   <h3 className="text-white text-3xl font-bold group-hover:scale-110 transition-transform duration-300 mb-3 drop-shadow-lg">{category.name}</h3>
                   <p className="text-white/90 text-lg group-hover:scale-105 transition-transform duration-300 font-medium">Explore Collection</p>
                 </div>
              </Link>
            ))}
          </div>
          
                     {/* Category Stats */}
           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="card-modern text-center animate-bounce-in hover-lift" style={{animationDelay: '0.1s'}}>
               <div className="text-4xl font-bold text-gradient-primary mb-3 animate-heartbeat">500+</div>
               <div className="text-gray-600 text-lg">Products in Men's Collection</div>
             </div>
             <div className="card-modern text-center animate-bounce-in hover-lift" style={{animationDelay: '0.2s'}}>
               <div className="text-4xl font-bold text-gradient-primary mb-3 animate-heartbeat">800+</div>
               <div className="text-gray-600 text-lg">Products in Women's Collection</div>
             </div>
             <div className="card-modern text-center animate-bounce-in hover-lift" style={{animationDelay: '0.3s'}}>
               <div className="text-4xl font-bold text-gradient-primary mb-3 animate-heartbeat">300+</div>
               <div className="text-gray-600 text-lg">Products in Kids' Collection</div>
             </div>
           </div>
        </div>
      </section>

             {/* Featured Products */}
       <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="flex justify-between items-center mb-12">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary animate-zoom-in mb-4">Featured Products</h2>
               <p className="text-lg text-gray-600 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Handpicked styles for every occasion</p>
             </div>
             <Link
               to="/products"
               className="text-purple-600 hover:text-purple-700 font-semibold flex items-center group transition-all duration-300 hover:scale-105 animate-pulse-glow"
             >
               View All
               <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform animate-wave" />
             </Link>
           </div>

                     {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[...Array(4)].map((_, index) => (
                 <div key={index} className="animate-pulse">
                   <div className="bg-gray-200 h-64 rounded-lg mb-4 animate-shimmer"></div>
                   <div className="bg-gray-200 h-4 rounded mb-2 animate-shimmer"></div>
                   <div className="bg-gray-200 h-4 rounded w-3/4 animate-shimmer"></div>
                 </div>
               ))}
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                                 <div key={product._id} className="product-card animate-fade-in-up overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                   <div className="relative">
                                         <img
                       src={product.image}
                       alt={product.name}
                       className="w-full h-64 object-cover rounded-t-2xl"
                     />
                                         <button 
                       className="btn-floating absolute top-3 right-3 animate-bounce-in" 
                       style={{animationDelay: '0.5s'}}
                       onClick={() => handleAddToWishlist(product)}
                     >
                       <Heart className="h-5 w-5 text-white animate-heartbeat" />
                     </button>
                                         {product.originalPrice > product.price && (
                       <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                         {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                       </div>
                     )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg" onClick={() => handleAddToCart(product)}>
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

             {/* Features Section */}
       <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-primary animate-zoom-in">Why Choose FashionHub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                             <div key={index} className="card-modern text-center group animate-fade-in-up hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                 <div className="gradient-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-strong group-hover:scale-110 transition-transform duration-300 animate-rotate-in">
                   {feature.icon}
                 </div>
                 <h3 className="text-2xl font-bold mb-4 text-gradient-primary group-hover:scale-105 transition-transform duration-300">{feature.title}</h3>
                 <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

             {/* Stats Section */}
       <section className="py-16 gradient-primary text-white animate-gradient-shift">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                         {stats.map((stat, index) => (
               <div key={index} className="glass-card text-center animate-fade-in-up hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                 <div className="text-4xl md:text-5xl font-bold mb-3 animate-heartbeat drop-shadow-lg">{stat.number}</div>
                 <div className="text-white text-lg font-semibold animate-pulse-glow">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="flex justify-between items-center mb-12">
             <div>
               <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-zoom-in">Trending Now</h2>
               <p className="text-gray-600 mt-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Discover what's hot and trending in fashion</p>
             </div>
             <Link
               to="/products"
               className="text-purple-600 hover:text-purple-700 font-semibold flex items-center group transition-all duration-300 hover:scale-105 animate-pulse-glow"
             >
               View All
               <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform animate-wave" />
             </Link>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
                             <div key={product._id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                 <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-700"
                  />
                                     <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                     {product.badge}
                   </div>
                   <button 
                     className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                     onClick={() => handleAddToWishlist(product)}
                   >
                     <Heart className="h-5 w-5 text-gray-600" />
                   </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-lg">${product.price}</span>
                      <span className="text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg" onClick={() => handleAddToCart(product)}>
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

             {/* Testimonials Section */}
       <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary animate-zoom-in mb-4">What Our Customers Say</h2>
             <p className="text-lg text-gray-600 animate-fade-in-up max-w-2xl mx-auto" style={{animationDelay: '0.2s'}}>Real reviews from real customers</p>
           </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {testimonials.map((testimonial, index) => (
               <div key={testimonial.id} className="card-modern hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                                 <div className="flex items-center mb-4">
                   {[...Array(testimonial.rating)].map((_, i) => (
                     <Star key={i} className="h-4 w-4 text-yellow-400 fill-current animate-bounce-in" style={{animationDelay: `${i * 0.1}s`}} />
                   ))}
                 </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-zoom-in">Join Our Community</h2>
             <p className="text-gray-600 mt-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Follow us for the latest fashion trends and exclusive offers</p>
           </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialProof.map((social, index) => (
              <div key={social.platform} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                                 <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-rotate-in">
                   <social.icon className="h-8 w-8 animate-pulse-glow" />
                 </div>
                <h3 className="text-lg font-semibold mb-2">{social.platform}</h3>
                <p className="text-2xl font-bold text-purple-600">{social.followers}</p>
                <p className="text-sm text-gray-600">Followers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

             {/* Newsletter Section */}
       <section className="py-16 gradient-secondary text-white animate-gradient-shift">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-zoom-in drop-shadow-lg">Stay in the Loop</h2>
           <p className="text-lg mb-8 text-white/90 animate-fade-in-up max-w-2xl mx-auto" style={{animationDelay: '0.2s'}}>Get exclusive offers, fashion tips, and new arrivals delivered to your inbox</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                         <input
               type="email"
               placeholder="Enter your email address"
               className="input-modern flex-1 px-6 py-4 text-lg"
             />
                         <button className="btn-primary px-8 py-4 text-lg font-bold hover-lift flex items-center justify-center animate-pulse-glow">
               <Mail className="h-6 w-6 mr-3 animate-wave" />
               Subscribe
             </button>
          </div>
          
          <p className="text-sm text-purple-200 mt-4">No spam, unsubscribe at any time</p>
        </div>
      </section>

             {/* Call to Action Section */}
       <section className="py-16 gradient-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-zoom-in drop-shadow-lg">Ready to Transform Your Style?</h2>
           <p className="text-lg mb-8 text-white/80 animate-fade-in-up max-w-2xl mx-auto" style={{animationDelay: '0.2s'}}>Join thousands of fashion enthusiasts who trust FashionHub</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <Link
               to="/products"
               className="btn-primary px-10 py-4 text-lg font-bold hover-lift inline-flex items-center justify-center group animate-pulse-glow shadow-strong"
             >
               Start Shopping
               <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform animate-wave" />
             </Link>
                         <Link
               to="/register"
               className="btn-secondary px-10 py-4 text-lg font-bold hover-lift inline-flex items-center justify-center"
             >
               Create Account
             </Link>
          </div>
        </div>
      </section>

             {/* Add To Cart Modal */}
       <AddToCartModal
         product={selectedProduct}
         isOpen={isModalOpen}
         onClose={closeModal}
         onSuccess={showSuccessMessage}
       />

       {/* Toast Notification */}
       <Toast
         message={toastMessage}
         type="success"
         isVisible={showToast}
         onClose={hideToast}
       />
    </div>
  );
};

export default HomePage;
