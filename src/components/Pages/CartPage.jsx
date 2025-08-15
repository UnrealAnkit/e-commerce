import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150',
      quantity: 2,
      size: 'M',
      color: 'White',
      brand: 'StyleBrand',
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Denim Jacket',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=150',
      quantity: 1,
      size: 'L',
      color: 'Blue',
      brand: 'DenimCo',
      rating: 4.8,
      reviews: 95
    },
    {
      id: 3,
      name: 'Summer Dress',
      price: 59.99,
      originalPrice: 79.99,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=150',
      quantity: 1,
      size: 'S',
      color: 'White',
      brand: 'FashionLine',
      rating: 4.3,
      reviews: 67
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const moveToWishlist = (itemId) => {
    // Here you would typically move item to wishlist
    removeItem(itemId);
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

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal - discount + shipping;

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

  if (cartItems.length === 0) {
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
            <button className="btn-primary px-8 py-3 text-lg font-semibold">
              Start Shopping
            </button>
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
                <h2 className="text-xl font-semibold text-gray-900">Cart Items ({cartItems.length})</h2>
                <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-2">
                  <Trash2 className="h-4 w-4" />
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
                    {/* Product Image */}
                    <div className="relative w-full md:w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1 truncate">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                          
                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(item.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-600">({item.reviews})</span>
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
                            {item.originalPrice > item.price && (
                              <p className="text-sm text-gray-500 line-through">${item.originalPrice}</p>
                            )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2">
                            <button
                              onClick={() => moveToWishlist(item.id)}
                              className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                              title="Move to Wishlist"
                            >
                              <Heart className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
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
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
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
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Including tax</p>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="btn-primary w-full py-4 text-lg font-semibold flex items-center justify-center gap-2">
                Proceed to Checkout
                <ArrowRight className="h-5 w-5" />
              </button>

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
    </div>
  );
};

export default CartPage;
