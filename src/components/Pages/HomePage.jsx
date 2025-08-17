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
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=800&q=80',
      link: '/products?gender=men',
      description: 'Sophisticated styles for the modern gentleman'
    },
    {
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80',
      link: '/products?gender=women',
      description: 'Elegant fashion for the confident woman'
    },
    {
      name: 'Kids',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&h=800&q=80',
      link: '/products?gender=kids',
      description: 'Fun and comfortable styles for little ones'
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
      name: 'Priya Sharma',
      role: 'Fashion Blogger, Mumbai',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'FashionHub मेरा favorite shopping destination है! The fusion wear collection is absolutely stunning and delivery is super fast across India. Quality bilkul premium है!'
    },
    {
      id: 2,
      name: 'Arjun Patel',
      role: 'Software Engineer, Bangalore',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Being a techie, I love their user-friendly app and website. COD facility भी है और customer service ekdum responsive है. Perfect for busy professionals like me!'
    },
    {
      id: 3,
      name: 'Sneha Gupta',
      role: 'College Student, Delhi',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'College budget में भी trendy clothes mil jaate हैं! Their festive collection is amazing - from kurtas to Indo-western outfits. My friends always ask where I shop from!'
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
       <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
                 {/* Premium background with mesh gradient */}
         <div className="absolute inset-0">
           {/* Animated mesh background */}
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-pink-900/20"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(216,180,254,0.2),transparent_50%)]"></div>
           
           {/* Floating premium elements */}
           <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
           <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
           <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/35 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
           <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
           
           {/* Premium geometric shapes */}
           <div className="absolute top-20 left-20 w-20 h-20 border border-white/10 rounded-full animate-float transform rotate-12"></div>
           <div className="absolute bottom-32 right-32 w-16 h-16 border border-white/10 rounded-lg animate-float transform -rotate-12" style={{animationDelay: '2s'}}></div>
         </div>
        
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
           <div className="text-center">
             {/* Premium badge */}
             <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white/90 mb-8 animate-fade-in-up">
               <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
               Premium Fashion • Curated Collections
             </div>
             
             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 lg:mb-8 animate-fade-in-up text-white leading-[0.9] tracking-tight">
               Elevate Your
               <span className="block bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent font-black">
                 Fashion Game
               </span>
             </h1>
             
               <p className="text-xl sm:text-2xl lg:text-3xl mb-6 lg:mb-8 text-white/80 animate-fade-in-up max-w-4xl mx-auto leading-relaxed font-light" style={{animationDelay: '0.2s'}}>
                 Discover luxury fashion and premium accessories crafted for the modern trendsetter. 
                 <span className="block mt-2 text-lg lg:text-xl text-white/60">Where style meets sophistication</span>
               </p>
               
               {/* Premium features */}
               <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 mb-12 lg:mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                 <div className="flex items-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/20 transition-all duration-300">
                   <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                     <span className="text-white text-sm font-bold">✨</span>
                   </div>
                   <div className="text-left">
                     <div className="text-white font-semibold">Free Premium Shipping</div>
                     <div className="text-white/60 text-sm">Orders over $75</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/20 transition-all duration-300">
                   <div className="w-10 h-10 bg-gradient-to-r from-violet-400 to-purple-400 rounded-xl flex items-center justify-center mr-4">
                     <span className="text-white text-sm font-bold">🛡️</span>
                   </div>
                   <div className="text-left">
                     <div className="text-white font-semibold">60-Day Returns</div>
                     <div className="text-white/60 text-sm">No questions asked</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/20 transition-all duration-300">
                   <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center mr-4">
                     <span className="text-white text-sm font-bold">💎</span>
                   </div>
                   <div className="text-left">
                     <div className="text-white font-semibold">Luxury Service</div>
                     <div className="text-white/60 text-sm">24/7 Style Concierge</div>
                   </div>
                 </div>
               </div>
               
                             <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center animate-fade-in-up max-w-2xl mx-auto" style={{animationDelay: '0.4s'}}>
                 <Link
                   to="/products"
                   className="group relative bg-gradient-to-r from-white via-gray-50 to-white text-slate-900 px-10 lg:px-14 py-4 lg:py-5 text-lg lg:text-xl font-bold rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 inline-flex items-center justify-center overflow-hidden"
                 >
                   <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-pink-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                   <span className="relative z-10">Explore Collection</span>
                   <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                 </Link>
                 
                 {!isAuthenticated && (
                   <Link
                     to="/register"
                     className="bg-transparent border-2 border-white/30 text-white px-10 lg:px-14 py-4 lg:py-5 text-lg lg:text-xl font-bold rounded-2xl hover:bg-white hover:text-slate-900 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                   >
                     Join the Elite
                   </Link>
                 )}
               </div>
              
                             {/* Trust Indicators */}
               <div className="mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 animate-fade-in-up max-w-4xl mx-auto" style={{animationDelay: '0.6s'}}>
                 <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                   <CheckCircle className="h-8 w-8 lg:h-10 lg:w-10 mx-auto mb-3 text-green-300" />
                   <div className="text-2xl lg:text-3xl font-bold mb-1">50K+</div>
                   <div className="text-sm lg:text-base text-white/80">Happy Customers</div>
                 </div>
                 <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                   <Award className="h-8 w-8 lg:h-10 lg:w-10 mx-auto mb-3 text-yellow-300" />
                   <div className="text-2xl lg:text-3xl font-bold mb-1">Premium</div>
                   <div className="text-sm lg:text-base text-white/80">Quality Products</div>
                 </div>
                 <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                   <Truck className="h-8 w-8 lg:h-10 lg:w-10 mx-auto mb-3 text-blue-300" />
                   <div className="text-2xl lg:text-3xl font-bold mb-1">2-3 Days</div>
                   <div className="text-sm lg:text-base text-white/80">Fast Delivery</div>
                 </div>
               </div>
            </div>
        </div>
      </section>

             {/* Categories Section */}
       <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-pink-500/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                     <div className="text-center mb-16 lg:mb-20">
             <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-100 to-pink-100 border border-violet-200 rounded-full text-sm font-semibold text-violet-700 mb-6">
               <span className="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse"></span>
               Curated Collections
             </div>
             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
               Shop by Category
             </h2>
             <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
               Discover our premium collections designed for every style, occasion, and personality
             </p>
           </div>
           
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {categories.map((category, index) => (
                             <Link
                 key={category.name}
                 to={category.link}
                 className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 animate-fade-in-up border border-gray-100"
                 style={{animationDelay: `${index * 0.15}s`}}
               >
                                 <div className="relative h-80 lg:h-96 overflow-hidden">
                   <img
                     src={category.image}
                     alt={category.name}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                     loading="lazy"
                     onError={(e) => {
                       // Try alternative images first
                       if (category.name === 'Women' && !e.target.src.includes('woman-portrait')) {
                         e.target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80';
                       } else if (category.name === 'Women' && !e.target.src.includes('placeholder')) {
                         e.target.src = 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80';
                       } else {
                         e.target.src = `https://via.placeholder.com/600x800/8B5CF6/FFFFFF?text=${category.name}`;
                       }
                     }}
                   />
                   {/* Premium overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                   
                   {/* Floating elements */}
                   <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                     <ArrowRight className="w-5 h-5 text-white" />
                   </div>
                 </div>
                 
                 <div className="absolute bottom-0 left-0 right-0 p-8">
                   <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                     <h3 className="text-white text-3xl lg:text-4xl font-black mb-3 drop-shadow-2xl">
                       {category.name}
                     </h3>
                     <p className="text-white/90 text-base lg:text-lg mb-4 font-medium leading-relaxed drop-shadow-lg">
                       {category.description}
                     </p>
                     <div className="inline-flex items-center bg-white/20 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-2xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                       Explore Collection
                       <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                     </div>
                   </div>
                 </div>
                 
                 {/* Premium shimmer effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
              </Link>
            ))}
          </div>
          
                     {/* Category Stats */}
           <div className="mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
             <div className="group bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 lg:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                 <span className="text-white text-xl font-bold">👔</span>
               </div>
               <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">500+</div>
               <div className="text-gray-700 text-lg lg:text-xl font-bold mb-2">Men's Collection</div>
               <div className="text-gray-500 text-sm">Sophisticated & Timeless</div>
             </div>
             
             <div className="group bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 lg:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
               <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                 <span className="text-white text-xl font-bold">👗</span>
               </div>
               <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">800+</div>
               <div className="text-gray-700 text-lg lg:text-xl font-bold mb-2">Women's Collection</div>
               <div className="text-gray-500 text-sm">Elegant & Fashion Forward</div>
             </div>
             
             <div className="group bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 lg:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                 <span className="text-white text-xl font-bold">🧸</span>
               </div>
               <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">300+</div>
               <div className="text-gray-700 text-lg lg:text-xl font-bold mb-2">Kids' Collection</div>
               <div className="text-gray-500 text-sm">Fun & Comfortable</div>
             </div>
           </div>
        </div>
      </section>

             {/* Featured Products */}
       <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/30 to-white relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                     <div className="text-center mb-16 lg:mb-20">
             <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 mb-6">
               <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
               Handpicked Selection
             </div>
             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
               Featured Collection
             </h2>
             <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
               Discover our premium selection of handpicked styles crafted for the discerning fashion enthusiast
             </p>
             <Link
               to="/products"
               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl hover:from-slate-800 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 font-semibold shadow-xl hover:shadow-2xl"
             >
               View Full Collection
               <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {featuredProducts.map((product, index) => (
                                 <div key={product._id} className="bg-white rounded-3xl shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up group" style={{animationDelay: `${index * 0.1}s`}}>
                   <div className="relative">
                                         <div className="relative h-48 lg:h-56 overflow-hidden">
                       <img
                         src={product.image}
                         alt={product.name}
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </div>
                                         <button 
                       className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all duration-300" 
                       onClick={() => handleAddToWishlist(product)}
                     >
                       <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors duration-300" />
                     </button>
                                         {product.originalPrice > product.price && (
                       <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                         {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                       </div>
                     )}
                  </div>
                  <div className="p-5">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{product.name}</h3>
                      <p className="text-gray-500 text-sm font-medium">{product.brand}</p>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm ml-2 font-medium">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-xl text-gray-900">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <button 
                      className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-2xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center shadow-md hover:shadow-lg"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
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
