import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  Heart, 
  ArrowRight,
  Truck,
  CreditCard,
  Shield,
  Star,
  X
} from 'lucide-react';
import { removeFromCart, updateQuantity, clearCart } from '../../store/slices/cartSlice';
import Toast from '../UI/Toast';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, total, itemCount } = useSelector((state) => state.cart);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

  const handleUpdateQuantity = (productId, size, color, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ productId, size, color, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId, size, color) => {
    dispatch(removeFromCart({ productId, size, color }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const moveToWishlist = (item) => {
    // Here you would typically move item to wishlist
    handleRemoveItem(item.product._id, item.size, item.color);
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'save20') {
      setAppliedCoupon({ code: couponCode, discount: 0.20 });
    } else if (couponCode.toLowerCase() === 'fashion10') {
      setAppliedCoupon({ code: couponCode, discount: 0.10 });
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
  };

  const showToast = (message, type = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'info' }), 3000);
  };

  const subtotal = total;
  const discount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const finalTotal = subtotal - discount + shipping;

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $50'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure checkout'
    },
    {
      icon: CreditCard,
      title: 'Easy Returns',
      description: '30-day return policy'
    }
  ];

  const recommendedProducts = [
    {
      id: 4,
      name: 'Casual Sneakers',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150',
      brand: 'ShoeStyle',
      rating: 4.6,
      reviews: 203
    },
    {
      id: 5,
      name: 'Vintage Denim Jacket',
      price: 129.99,
      originalPrice: 159.99,
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=150',
      brand: 'DenimVintage',
      rating: 4.9,
      reviews: 234
    }
  ];

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to discover amazing fashion!
            </p>
            <Link to="/" className="btn-primary px-8 py-3 text-lg font-semibold inline-block">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review your items and proceed to checkout</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="card-modern mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Cart Items ({items.length})</h2>
                <button 
                  onClick={handleClearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={`${item.product._id}-${item.size}-${item.color}`} className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
                    {/* Product Image */}
                    <div className="relative w-full md:w-24 h-24 flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        onClick={() => handleRemoveItem(item.product._id, item.size, item.color)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1 truncate">{item.product.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{item.product.brand}</p>
                          
                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(item.product.rating || 4.5)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-600">({item.product.reviews || 100})</span>
                          </div>

                          {/* Size and Color */}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span>Size: {item.size}</span>
                            <span>Color: {item.color}</span>
                          </div>
                        </div>

                        {/* Price and Actions */}
                        <div className="flex flex-col items-end gap-4">
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-900">${item.price}</p>
                            {item.product.originalPrice && item.product.originalPrice > item.price && (
                              <p className="text-sm text-gray-500 line-through">${item.product.originalPrice}</p>
                            )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleUpdateQuantity(item.product._id, item.size, item.color, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => handleUpdateQuantity(item.product._id, item.size, item.color, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2">
                            <button
                              onClick={() => moveToWishlist(item)}
                              className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                              title="Move to Wishlist"
                            >
                              <Heart className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleRemoveItem(item.product._id, item.size, item.color)}
                              className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                              title="Remove Item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="card-modern text-center p-6">
                  <feature.icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Recommended Products */}
            <div className="card-modern">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">You Might Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-gray-900">${product.price}</p>
                          {product.originalPrice > product.price && (
                            <p className="text-sm text-gray-500 line-through">${product.originalPrice}</p>
                          )}
                        </div>
                        <button className="btn-secondary text-sm">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="card-modern sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              {/* Coupon Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="input-modern flex-1"
                  />
                  <button
                    onClick={applyCoupon}
                    className="btn-secondary whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="mt-2 flex items-center justify-between bg-green-50 p-3 rounded-lg">
                    <span className="text-sm text-green-800">
                      Coupon "{appliedCoupon.code}" applied
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-green-600 hover:text-green-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedCoupon.discount * 100}%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Including tax</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href="https://buy.stripe.com/test_9B614o1lk0x14GL5CbaVa00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-4 text-lg font-semibold flex items-center justify-center gap-2 text-center block text-white no-underline hover:no-underline"
                >
                  <CreditCard className="h-5 w-5" />
                  Pay Now (Test)
                </a>
                
                <Link 
                  to="/" 
                  className="btn-secondary w-full py-3 text-center block"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Security Notice */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
                  <Shield className="h-4 w-4" />
                  Secure Checkout
                </div>
                <p className="text-xs text-gray-500">
                  Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Success Notice */}
      {toast.show && toast.type === 'success' && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-2xl shadow-lg z-50">
          <p className="font-medium">🎉 Payment will be processed on Stripe's secure page!</p>
        </div>
      )}

      {/* Toast Notifications */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'info' })}
        />
      )}
    </div>
  );
};

export default CartPage;
