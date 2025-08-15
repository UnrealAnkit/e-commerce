import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import Category from '../models/Category.js';
import Product from '../models/Product.js';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/clothing-ecommerce';
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB Connected for seeding');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

const seedUsers = async () => {
  try {
    // Clear existing users
    await User.deleteMany({});

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@example.com',
      password: adminPassword,
      role: 'admin',
      isVerified: true
    });
    await adminUser.save();

    // Create regular user
    const userPassword = await bcrypt.hash('user123', 12);
    const regularUser = new User({
      name: 'John Doe',
      email: 'user@example.com',
      password: userPassword,
      role: 'user',
      isVerified: true
    });
    await regularUser.save();

    console.log('✅ Users seeded successfully');
    return { adminUser, regularUser };
  } catch (error) {
    console.error('❌ Error seeding users:', error);
  }
};

const seedCategories = async () => {
  try {
    // Clear existing categories
    await Category.deleteMany({});

    const categories = [
      {
        name: 'T-Shirts',
        description: 'Comfortable and stylish t-shirts for everyday wear',
        gender: 'men',
        sortOrder: 1
      },
      {
        name: 'Shirts',
        description: 'Formal and casual shirts for professional and casual occasions',
        gender: 'men',
        sortOrder: 2
      },
      {
        name: 'Jeans',
        description: 'Classic denim jeans in various styles and fits',
        gender: 'men',
        sortOrder: 3
      },
      {
        name: 'Dresses',
        description: 'Elegant dresses for all occasions',
        gender: 'women',
        sortOrder: 1
      },
      {
        name: 'Tops',
        description: 'Stylish tops and blouses for women',
        gender: 'women',
        sortOrder: 2
      },
      {
        name: 'Skirts',
        description: 'Fashionable skirts in various lengths and styles',
        gender: 'women',
        sortOrder: 3
      },
      {
        name: 'Kids Clothing',
        description: 'Comfortable and fun clothing for children',
        gender: 'kids',
        sortOrder: 1
      }
    ];

    const createdCategories = await Category.insertMany(categories);
    console.log('✅ Categories seeded successfully');
    return createdCategories;
  } catch (error) {
    console.error('❌ Error seeding categories:', error);
  }
};

const seedProducts = async (categories) => {
  try {
    // Clear existing products
    await Product.deleteMany({});

    const products = [
      {
        name: 'Classic White T-Shirt',
        description: 'A comfortable and versatile white t-shirt made from 100% cotton. Perfect for everyday wear and easy to style with any outfit.',
        price: 29.99,
        originalPrice: 39.99,
        discount: 25,
        category: categories.find(c => c.name === 'T-Shirts')._id,
        brand: 'StyleBrand',
        images: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
          'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400'
        ],
        sizes: [
          { name: 'S', stock: 10 },
          { name: 'M', stock: 15 },
          { name: 'L', stock: 12 },
          { name: 'XL', stock: 8 }
        ],
        colors: [
          { name: 'White', code: '#FFFFFF' },
          { name: 'Black', code: '#000000' },
          { name: 'Gray', code: '#808080' }
        ],
        gender: 'men',
        tags: ['casual', 'basic', 'cotton'],
        rating: 4.5,
        numReviews: 128,
        isActive: true,
        isFeatured: true
      },
      {
        name: 'Denim Jacket',
        description: 'A timeless denim jacket that never goes out of style. Made from premium denim with a comfortable fit and classic design.',
        price: 89.99,
        originalPrice: 119.99,
        discount: 25,
        category: categories.find(c => c.name === 'Shirts')._id,
        brand: 'DenimCo',
        images: [
          'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400',
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400'
        ],
        sizes: [
          { name: 'S', stock: 8 },
          { name: 'M', stock: 12 },
          { name: 'L', stock: 10 },
          { name: 'XL', stock: 6 }
        ],
        colors: [
          { name: 'Blue', code: '#0066CC' },
          { name: 'Light Blue', code: '#87CEEB' }
        ],
        gender: 'men',
        tags: ['denim', 'jacket', 'casual'],
        rating: 4.8,
        numReviews: 95,
        isActive: true,
        isFeatured: true
      },
      {
        name: 'Summer Dress',
        description: 'A beautiful summer dress perfect for warm weather. Made from lightweight, breathable fabric with a flattering silhouette.',
        price: 59.99,
        originalPrice: 79.99,
        discount: 25,
        category: categories.find(c => c.name === 'Dresses')._id,
        brand: 'FashionLine',
        images: [
          'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
          'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400'
        ],
        sizes: [
          { name: 'XS', stock: 5 },
          { name: 'S', stock: 12 },
          { name: 'M', stock: 15 },
          { name: 'L', stock: 10 },
          { name: 'XL', stock: 8 }
        ],
        colors: [
          { name: 'Floral', code: '#FF69B4' },
          { name: 'Blue', code: '#4169E1' },
          { name: 'White', code: '#FFFFFF' }
        ],
        gender: 'women',
        tags: ['dress', 'summer', 'floral'],
        rating: 4.3,
        numReviews: 67,
        isActive: true,
        isFeatured: true
      },
      {
        name: 'Casual Sneakers',
        description: 'Comfortable and stylish sneakers perfect for everyday wear. Made from breathable materials with cushioned soles.',
        price: 79.99,
        originalPrice: 99.99,
        discount: 20,
        category: categories.find(c => c.name === 'T-Shirts')._id, // Using T-Shirts as placeholder
        brand: 'ShoeStyle',
        images: [
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400'
        ],
        sizes: [
          { name: '7', stock: 8 },
          { name: '8', stock: 12 },
          { name: '9', stock: 15 },
          { name: '10', stock: 10 },
          { name: '11', stock: 6 }
        ],
        colors: [
          { name: 'White', code: '#FFFFFF' },
          { name: 'Black', code: '#000000' },
          { name: 'Gray', code: '#808080' }
        ],
        gender: 'unisex',
        tags: ['sneakers', 'casual', 'comfortable'],
        rating: 4.6,
        numReviews: 203,
        isActive: true,
        isFeatured: true
      },
      {
        name: 'Formal Shirt',
        description: 'A crisp formal shirt perfect for professional settings. Made from high-quality cotton with a modern fit.',
        price: 49.99,
        originalPrice: 69.99,
        discount: 29,
        category: categories.find(c => c.name === 'Shirts')._id,
        brand: 'ProfessionalWear',
        images: [
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',
          'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400'
        ],
        sizes: [
          { name: 'S', stock: 10 },
          { name: 'M', stock: 15 },
          { name: 'L', stock: 12 },
          { name: 'XL', stock: 8 }
        ],
        colors: [
          { name: 'White', code: '#FFFFFF' },
          { name: 'Light Blue', code: '#87CEEB' },
          { name: 'Pink', code: '#FFC0CB' }
        ],
        gender: 'men',
        tags: ['formal', 'professional', 'business'],
        rating: 4.4,
        numReviews: 89,
        isActive: true,
        isFeatured: false
      },
      {
        name: 'Kids T-Shirt',
        description: 'Comfortable and fun t-shirt for kids. Made from soft cotton with colorful designs.',
        price: 19.99,
        originalPrice: 24.99,
        discount: 20,
        category: categories.find(c => c.name === 'Kids Clothing')._id,
        brand: 'KidsFashion',
        images: [
          'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400',
          'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400'
        ],
        sizes: [
          { name: 'XS', stock: 8 },
          { name: 'S', stock: 12 },
          { name: 'M', stock: 10 },
          { name: 'L', stock: 6 }
        ],
        colors: [
          { name: 'Red', code: '#FF0000' },
          { name: 'Blue', code: '#0000FF' },
          { name: 'Green', code: '#008000' }
        ],
        gender: 'kids',
        tags: ['kids', 'casual', 'fun'],
        rating: 4.7,
        numReviews: 45,
        isActive: true,
        isFeatured: false
      }
    ];

    const createdProducts = await Product.insertMany(products);
    console.log('✅ Products seeded successfully');
    return createdProducts;
  } catch (error) {
    console.error('❌ Error seeding products:', error);
  }
};

const seedDatabase = async () => {
  try {
    await connectDB();
    
    console.log('🌱 Starting database seeding...');
    
    const users = await seedUsers();
    const categories = await seedCategories();
    const products = await seedProducts(categories);
    
    console.log('✅ Database seeding completed successfully!');
    console.log('\n📋 Seeded Data Summary:');
    console.log(`👥 Users: ${users ? 2 : 0} (1 admin, 1 regular)`);
    console.log(`📂 Categories: ${categories ? categories.length : 0}`);
    console.log(`🛍️ Products: ${products ? products.length : 0}`);
    console.log('\n🔑 Admin Login Credentials:');
    console.log('Email: admin@example.com');
    console.log('Password: admin123');
    console.log('\n👤 User Login Credentials:');
    console.log('Email: user@example.com');
    console.log('Password: user123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run seeder if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase();
}

export default seedDatabase;
