import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

// Define schemas inline to avoid import issues
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  isVerified: { type: Boolean, default: true },
  isBlocked: { type: Boolean, default: false },
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, { timestamps: true });

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  image: { type: String, default: '' },
  gender: { type: String, enum: ['men', 'women', 'kids', 'unisex'], required: true },
  isActive: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 }
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  discount: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  brand: { type: String, required: true },
  images: [{ type: String }],
  sizes: [{
    name: { type: String, required: true },
    stock: { type: Number, required: true, min: 0 }
  }],
  colors: [{
    name: { type: String, required: true },
    code: { type: String, required: true }
  }],
  gender: { type: String, enum: ['men', 'women', 'kids', 'unisex'], required: true },
  tags: [{ type: String }],
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

// Create models
const User = mongoose.model('User', userSchema);
const Category = mongoose.model('Category', categorySchema);
const Product = mongoose.model('Product', productSchema);

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
    console.log('🗑️ Cleared existing users');

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
    console.log('✅ Admin user created');

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
    console.log('✅ Regular user created');

    return { adminUser, regularUser };
  } catch (error) {
    console.error('❌ Error seeding users:', error);
  }
};

const seedCategories = async () => {
  try {
    // Clear existing categories
    await Category.deleteMany({});
    console.log('🗑️ Cleared existing categories');

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
        name: 'Dresses',
        description: 'Elegant dresses for all occasions',
        gender: 'women',
        sortOrder: 1
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
    console.log('🗑️ Cleared existing products');

    const products = [
      {
        name: 'Classic White T-Shirt',
        description: 'A comfortable and versatile white t-shirt made from 100% cotton.',
        price: 29.99,
        originalPrice: 39.99,
        discount: 25,
        category: categories.find(c => c.name === 'T-Shirts')._id,
        brand: 'StyleBrand',
        images: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400'
        ],
        sizes: [
          { name: 'S', stock: 10 },
          { name: 'M', stock: 15 },
          { name: 'L', stock: 12 },
          { name: 'XL', stock: 8 }
        ],
        colors: [
          { name: 'White', code: '#FFFFFF' },
          { name: 'Black', code: '#000000' }
        ],
        gender: 'men',
        tags: ['casual', 'basic', 'cotton'],
        rating: 4.5,
        numReviews: 128,
        isActive: true,
        isFeatured: true
      },
      {
        name: 'Summer Dress',
        description: 'A beautiful summer dress perfect for warm weather.',
        price: 59.99,
        originalPrice: 79.99,
        discount: 25,
        category: categories.find(c => c.name === 'Dresses')._id,
        brand: 'FashionLine',
        images: [
          'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
        ],
        sizes: [
          { name: 'S', stock: 12 },
          { name: 'M', stock: 15 },
          { name: 'L', stock: 10 }
        ],
        colors: [
          { name: 'Floral', code: '#FF69B4' },
          { name: 'Blue', code: '#4169E1' }
        ],
        gender: 'women',
        tags: ['dress', 'summer', 'floral'],
        rating: 4.3,
        numReviews: 67,
        isActive: true,
        isFeatured: true
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

// Run seeder
seedDatabase();
