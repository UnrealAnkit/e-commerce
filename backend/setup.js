import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const setupDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/clothing-ecommerce';
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Database connected successfully');
    
    // Import and run seeder
    const { default: seedData } = await import('./seeders/simpleSeed.js');
    await seedData();
    
    console.log('✅ Database setup completed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
};

setupDatabase();
