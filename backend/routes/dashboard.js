import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

const router = express.Router();

// Get dashboard stats (admin only)
router.get('/stats', authenticate, authorize('admin'), async (req, res) => {
  try {
    // Get counts
    const totalProducts = await Product.countDocuments({ isActive: true });
    const totalUsers = await User.countDocuments({ role: 'user' });
    const totalOrders = await Order.countDocuments();
    
    // Calculate total revenue
    const orders = await Order.find({ paymentStatus: 'completed' });
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);

    // Get recent orders
    const recentOrders = await Order.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 })
      .limit(5);

    // Get top products (by number of orders)
    const topProducts = await Product.aggregate([
      { $match: { isActive: true } },
      {
        $lookup: {
          from: 'orders',
          localField: '_id',
          foreignField: 'items.product',
          as: 'orderItems'
        }
      },
      {
        $addFields: {
          salesCount: { $size: '$orderItems' }
        }
      },
      { $sort: { salesCount: -1 } },
      { $limit: 5 },
      {
        $project: {
          name: 1,
          salesCount: 1,
          price: 1,
          images: 1
        }
      }
    ]);

    res.json({
      success: true,
      stats: {
        totalProducts,
        totalUsers,
        totalOrders,
        totalRevenue: Math.round(totalRevenue * 100) / 100
      },
      recentOrders,
      topProducts
    });
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get recent orders (admin only)
router.get('/recent-orders', authenticate, authorize('admin'), async (req, res) => {
  try {
    const recentOrders = await Order.find()
      .populate('user', 'name email')
      .populate('items.product', 'name images')
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({
      success: true,
      orders: recentOrders
    });
  } catch (error) {
    console.error('Get recent orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get top products (admin only)
router.get('/top-products', authenticate, authorize('admin'), async (req, res) => {
  try {
    const topProducts = await Product.aggregate([
      { $match: { isActive: true } },
      {
        $lookup: {
          from: 'orders',
          localField: '_id',
          foreignField: 'items.product',
          as: 'orderItems'
        }
      },
      {
        $addFields: {
          salesCount: { $size: '$orderItems' }
        }
      },
      { $sort: { salesCount: -1 } },
      { $limit: 10 },
      {
        $project: {
          name: 1,
          salesCount: 1,
          price: 1,
          images: 1,
          rating: 1
        }
      }
    ]);

    res.json({
      success: true,
      products: topProducts
    });
  } catch (error) {
    console.error('Get top products error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;
