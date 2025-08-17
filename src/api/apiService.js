import axios from 'axios';

const API_BASE_URL = 'https://e-commerce-du5a.onrender.com/api';

// Create axios instance with better config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // 15 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Debug: Log the base URL
console.log('API Base URL:', API_BASE_URL);

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('API Request:', config.method?.toUpperCase(), config.url, 'Data:', config.data);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    // Better error handling
    if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
      console.error('API Timeout:', error.config?.url);
      error.message = 'Request timeout. Please check your connection and try again.';
    } else if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
      console.error('Network Error:', error.config?.url);
      error.message = 'Network error. Please check your connection.';
    } else if (error.response) {
      console.error('API Error:', error.response?.status, error.config?.url, 'Error:', error.response?.data);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        // Don't redirect immediately, let components handle it
      }
    } else {
      console.error('Unknown Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },
};

// Products API
export const productsAPI = {
  getAll: async (params) => {
    const response = await api.get('/products', { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  create: async (productData) => {
    const response = await api.post('/products', productData);
    return response.data;
  },
  update: async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },
  getFeatured: async () => {
    const response = await api.get('/products/featured/products');
    return response.data;
  },
  addReview: async (id, reviewData) => {
    const response = await api.post(`/products/${id}/reviews`, reviewData);
    return response.data;
  },
};

// Categories API
export const categoriesAPI = {
  getAll: async (params) => {
    const response = await api.get('/categories', { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  },
  create: async (categoryData) => {
    const response = await api.post('/categories', categoryData);
    return response.data;
  },
  update: async (id, categoryData) => {
    const response = await api.put(`/categories/${id}`, categoryData);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
  },
};

// Orders API
export const ordersAPI = {
  getMyOrders: () => api.get('/orders/my-orders'),
  getMyOrder: (id) => api.get(`/orders/my-orders/${id}`),
  create: (orderData) => api.post('/orders', orderData),
  getAll: (params) => api.get('/orders', { params }),
  updateStatus: (id, status) => api.put(`/orders/${id}/status`, { orderStatus: status }),
};

// Users API
export const usersAPI = {
  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },
  updateProfile: async (profileData) => {
    const response = await api.put('/users/profile', profileData);
    return response.data;
  },
  getAll: async (params) => {
    const response = await api.get('/users', { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
  update: async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  },
};

// Payments API
export const paymentsAPI = {
  createPaymentIntent: async (paymentData) => {
    const response = await api.post('/payments/create-payment-intent', paymentData);
    return response.data;
  },
  confirmPayment: async (paymentData) => {
    const response = await api.post('/payments/confirm-payment', paymentData);
    return response.data;
  },
  getPaymentStatus: async (paymentIntentId) => {
    const response = await api.get(`/payments/status/${paymentIntentId}`);
    return response.data;
  },
};

// Upload API
export const uploadAPI = {
  uploadSingle: (file) => {
    const formData = new FormData();
    formData.append('image', file);
    return api.post('/upload/single', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  uploadMultiple: (files) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });
    return api.post('/upload/multiple', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  deleteFile: (filename) => api.delete(`/upload/${filename}`),
};

// Dashboard API
export const dashboardAPI = {
  getStats: () => api.get('/dashboard/stats'),
  getRecentOrders: () => api.get('/dashboard/recent-orders'),
  getTopProducts: () => api.get('/dashboard/top-products'),
};

export default api;
