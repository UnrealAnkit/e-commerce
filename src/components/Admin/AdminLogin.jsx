import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/slices/authSlice';
import { Eye, EyeOff, Mail, Lock, Shield, Settings, BarChart3, Users, ArrowLeft } from 'lucide-react';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser(formData));
      if (!result.error) {
        // Check if user is admin
        if (result.payload && result.payload.user && result.payload.user.role === 'admin') {
          navigate('/admin');
        } else {
          // If not admin, redirect to regular user area
          navigate('/');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-soft-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent-100/20 rounded-full blur-2xl"></div>
      </div>

      <div className="flex min-h-screen relative z-10">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
          </div>

          <div className="flex flex-col justify-center items-center p-12 relative z-10 text-white">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <span className="text-3xl font-bold">FashionHub</span>
            </div>

            {/* Admin Features */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
              <p className="text-xl opacity-90 mb-8">Manage your e-commerce empire with powerful tools</p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-6 w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-xl p-3">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Analytics & Reports</h3>
                    <p className="text-white/80 text-sm">Track sales, revenue, and performance</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-xl p-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">User Management</h3>
                    <p className="text-white/80 text-sm">Manage customers and their orders</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-xl p-3">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Product Control</h3>
                    <p className="text-white/80 text-sm">Add, edit, and organize inventory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full">
            {/* Back to Home Link */}
            <div className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center text-trust-600 hover:text-primary-600 transition-colors duration-300 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to FashionHub</span>
              </Link>
            </div>

            {/* Login Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-warm border border-primary-100/50 p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-warm transform hover:scale-105 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-trust-800 mb-2">Admin Access</h2>
                <p className="text-trust-600">Sign in to your admin dashboard</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl animate-fade-in-down">
                    <div className="flex items-center">
                      <div className="bg-red-100 rounded-full p-1 mr-3">
                        <Shield className="h-4 w-4 text-red-600" />
                      </div>
                      <span className="text-sm font-medium">{error}</span>
                    </div>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Email Field */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-trust-700 mb-2">
                      Admin Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-trust-400 group-focus-within:text-primary-500 transition-colors duration-300" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-warm-50/50 border border-warm-200 rounded-xl text-trust-800 placeholder-trust-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:bg-white focus:bg-white text-base"
                        placeholder="admin@fashionhub.com"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="group">
                    <label htmlFor="password" className="block text-sm font-semibold text-trust-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-trust-400 group-focus-within:text-primary-500 transition-colors duration-300" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-12 pr-12 py-4 bg-warm-50/50 border border-warm-200 rounded-xl text-trust-800 placeholder-trust-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:bg-white focus:bg-white text-base"
                        placeholder="Enter your admin password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-primary-50 rounded-r-xl transition-colors duration-300"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-trust-400 hover:text-primary-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-trust-400 hover:text-primary-600" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-warm hover:from-primary-600 hover:to-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Authenticating...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Access Admin Dashboard
                    </div>
                  )}
                </button>

                {/* Back Link */}
                <div className="text-center pt-4 border-t border-warm-200">
                  <Link
                    to="/login"
                    className="inline-flex items-center text-trust-600 hover:text-primary-600 transition-colors duration-300 font-medium group"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                    Back to customer login
                  </Link>
                </div>
              </form>
            </div>

            {/* Security Notice */}
            <div className="mt-6 text-center">
              <p className="text-trust-500 text-sm">
                🔒 This is a secure admin area. All actions are logged and monitored.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
