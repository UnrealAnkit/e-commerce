import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  X, 
  Heart,
  LogOut,
  Settings
} from 'lucide-react';
import { logoutUser } from '../../store/slices/authSlice';
import { clearCart } from '../../store/slices/cartSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
     <header className="sticky top-0 z-50 bg-warm-50/85 backdrop-blur-xl border-b border-warm-200/40 shadow-trust">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
                     <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
             <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-warm transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
               <span className="text-white font-bold text-lg lg:text-xl">F</span>
             </div>
             <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300 hidden sm:block">FashionHub</span>
           </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
                         <Link 
               to="/" 
               className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 relative group py-2"
             >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 relative group py-2"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link 
              to="/products?gender=men" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 relative group py-2"
            >
              Men
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link 
              to="/products?gender=women" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 relative group py-2"
            >
              Women
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link 
              to="/products?gender=kids" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 relative group py-2"
            >
              Kids
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-6">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative group">
                                 <input
                   type="text"
                   placeholder="Search products, brands, categories..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-12 pr-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 group-hover:bg-white focus:bg-white"
                 />
                                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" />
              </div>
            </form>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-1 lg:space-x-3">
            {/* Wishlist */}
            {isAuthenticated && (
                             <Link 
                 to="/wishlist" 
                 className="p-2 lg:p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 relative group"
               >
                 <Heart className="h-5 w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform duration-300" />
               </Link>
            )}

            {/* Cart */}
                         <Link 
               to="/cart" 
               className="p-2 lg:p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 relative group"
             >
               <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform duration-300" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 lg:h-6 lg:w-6 flex items-center justify-center font-medium shadow-md animate-pulse">
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative">
                                 <button
                   onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                   className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-xl transition-all duration-300 group"
                 >
                   <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                     <span className="text-white text-sm lg:text-base font-medium">
                       {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                     </span>
                   </div>
                   <span className="hidden lg:block text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors duration-300">
                     {user?.name?.split(' ')[0] || 'User'}
                   </span>
                 </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-strong border border-gray-100 py-2 z-50 animate-fade-in-down">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 group"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <User className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        Profile Settings
                      </Link>
                      <Link
                        to="/orders"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 group"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        My Orders
                      </Link>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-all duration-300 group"
                        >
                          <LogOut className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </form>
              
              {/* Mobile Navigation */}
              <nav className="grid grid-cols-2 gap-4">
                <Link 
                  to="/" 
                  className="flex items-center justify-center py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className="flex items-center justify-center py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  to="/products?gender=men" 
                  className="flex items-center justify-center py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Men
                </Link>
                <Link 
                  to="/products?gender=women" 
                  className="flex items-center justify-center py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Women
                </Link>
                <Link 
                  to="/products?gender=kids" 
                  className="flex items-center justify-center py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kids
                </Link>
                {isAuthenticated && (
                  <Link 
                    to="/wishlist" 
                    className="flex items-center justify-center py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Wishlist
                  </Link>
                )}
              </nav>
              
              {/* Mobile Auth Actions */}
              {!isAuthenticated && (
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                  <Link
                    to="/login"
                    className="w-full text-center py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="w-full text-center py-3 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-medium shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;