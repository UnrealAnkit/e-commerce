import api from './apiService';

// Get dashboard statistics
export const getDashboardStats = async () => {
  try {
    const response = await api.get('/dashboard/stats');
    return response.data;
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    throw error;
  }
};

// Get recent orders
export const getRecentOrders = async () => {
  try {
    const response = await api.get('/dashboard/recent-orders');
    return response.data;
  } catch (error) {
    console.error('Get recent orders error:', error);
    throw error;
  }
};

// Get top products
export const getTopProducts = async () => {
  try {
    const response = await api.get('/dashboard/top-products');
    return response.data;
  } catch (error) {
    console.error('Get top products error:', error);
    throw error;
  }
};

export default {
  getDashboardStats,
  getRecentOrders,
  getTopProducts
};
