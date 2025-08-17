import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store/store.ts';
import { getCurrentUser } from './store/slices/authSlice';

// Import components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './components/Pages/HomePage';
import ProductsPage from './components/Pages/ProductsPage';
import ProductDetailPage from './components/Pages/ProductDetailPage';
import CartPage from './components/Pages/CartPage';
import CheckoutPage from './components/Pages/CheckoutPage';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';
import ProfilePage from './components/Pages/ProfilePage';
import OrdersPage from './components/Pages/OrdersPage';
import OrderDetailPage from './components/Pages/OrderDetailPage';
import WishlistPage from './components/Pages/WishlistPage';
import NotFoundPage from './components/Pages/NotFoundPage';
import FAQPage from './components/Pages/FAQPage';
import CancellationPage from './components/Pages/CancellationPage';
import ReturnPage from './components/Pages/ReturnPage';
import SizeGuidePage from './components/Pages/SizeGuidePage';
import PrivacyPage from './components/Pages/PrivacyPage';
import TermsPage from './components/Pages/TermsPage';
import AboutPage from './components/Pages/AboutPage';

// Import Admin components
import AdminLayout from './components/Admin/AdminLayout';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminLogin from './components/Admin/AdminLogin';
import UsersManagement from './components/Admin/UsersManagement';
import AdminCategoriesManagement from './components/Admin/AdminCategoriesManagement';
import AdminProductsManagement from './components/Admin/AdminProductsManagement';
import ErrorBoundary from './components/UI/ErrorBoundary';
import ConnectionStatus from './components/UI/ConnectionStatus';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Public Route Component (redirect if authenticated)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  
  if (token && isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
  const { isAuthenticated, token, user } = useSelector((state) => state.auth);
  
  if (!token || !isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  
  if (user && user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

// App Content Component
const AppContent = () => {
  const dispatch = useDispatch();
  const { token, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser()).catch((error) => {
        console.log('Failed to get user data:', error);
        // Silently handle the error - user can still use the app
      });
    }
  }, [dispatch, token]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <ConnectionStatus />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            
            {/* Auth Routes */}
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              } 
            />
            <Route 
              path="/register" 
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              } 
            />
            
            {/* Protected Routes */}
            <Route 
              path="/checkout" 
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/orders" 
              element={
                <ProtectedRoute>
                  <OrdersPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/orders/:id" 
              element={
                <ProtectedRoute>
                  <OrderDetailPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/wishlist" 
              element={
                <ProtectedRoute>
                  <WishlistPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin" 
              element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<UsersManagement />} />
              <Route path="categories" element={<AdminCategoriesManagement />} />
              <Route path="products" element={<AdminProductsManagement />} />
              {/* Add more admin routes here */}
            </Route>
            
            {/* Information Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/cancellation" element={<CancellationPage />} />
            <Route path="/returns" element={<ReturnPage />} />
            <Route path="/size-guide" element={<SizeGuidePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// Main App Component
function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;