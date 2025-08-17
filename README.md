# 🛍️ FashionHub - Modern E-commerce Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-%5E18.0.0-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](https://expressjs.com/)

## 🌟 Overview

**FashionHub** is a full-stack, modern e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js). Designed for fashion retailers, it offers a complete online shopping experience with admin management, secure payments, and responsive design.

### 🎯 Perfect for:
- Fashion retailers and clothing brands
- Small to medium-sized businesses
- Entrepreneurs starting an online fashion store
- Developers learning full-stack e-commerce development
- Students studying modern web development

## 🚀 Live Demo

🌐 **Live Website**: [https://e-commerce-du5a.onrender.com](https://e-commerce-du5a.onrender.com)
📱 **Mobile Responsive**: Fully optimized for all devices
🔐 **Admin Panel**: Complete dashboard for store management

### Demo Credentials
```
Customer Account:
Email: demo@customer.com
Password: customer123

Admin Account:
Email: admin@fashionhub.com
Password: admin123
```

## ✨ Key Features

### 🛒 Customer Features
- **Product Browsing**: Advanced filtering by category, price, size, color
- **Product Search**: Real-time search with autocomplete
- **Shopping Cart**: Persistent cart with quantity management
- **Wishlist**: Save favorite items for later
- **User Authentication**: Secure login/registration with JWT
- **Order Management**: Track orders and view order history
- **Payment Integration**: Stripe payment gateway support
- **Responsive Design**: Mobile-first, works on all devices
- **Product Reviews**: Customer reviews and ratings system

### 🔧 Admin Features
- **Dashboard Analytics**: Real-time sales and user statistics
- **Product Management**: Add, edit, delete products with image upload
- **Inventory Control**: Stock management and tracking
- **Order Management**: Process and track customer orders
- **User Management**: View and manage customer accounts
- **Category Management**: Organize products into categories
- **Revenue Tracking**: Detailed sales reports and analytics

### 🎨 Design Features
- **Modern UI/UX**: Clean, professional design with warm colors
- **Glassmorphism Effects**: Contemporary design trends
- **Smooth Animations**: Engaging user interactions
- **Dark/Light Mode**: Coming soon
- **Accessibility**: WCAG compliant design

## 🛠️ Technology Stack

### Frontend
```javascript
React 18         // UI Library
Redux Toolkit    // State Management
React Router     // Navigation
Tailwind CSS     // Styling Framework
Lucide React     // Icon Library
Axios           // HTTP Client
Vite            // Build Tool
```

### Backend
```javascript
Node.js         // Runtime Environment
Express.js      // Web Framework
MongoDB         // Database
Mongoose        // ODM
JWT             // Authentication
Bcrypt          // Password Hashing
Multer          // File Upload
Cors            // Cross-Origin Resource Sharing
```

### Payment & Services
```javascript
Stripe          // Payment Processing
Cloudinary      // Image Storage
Render          // Deployment Platform
```

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud)
- **Git**
- **npm** or **yarn**

### 🔧 Quick Start

1. **Clone the Repository**
```bash
git clone https://github.com/UnrealAnkit/e-commerce.git
cd e-commerce
```

2. **Install Dependencies**
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

3. **Environment Setup**
Create `.env` file in the root directory:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/fashionhub
# OR use MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fashionhub

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# URLs
CLIENT_URL=http://localhost:5173
ADMIN_URL=http://localhost:3001

# Server Configuration
PORT=3000
NODE_ENV=development
```

4. **Database Setup**
```bash
# Start MongoDB (if running locally)
mongod

# Import sample data (optional)
cd backend
npm run seed
```

5. **Start Development Servers**
```bash
# Start backend server (Terminal 1)
cd backend
npm run dev

# Start frontend server (Terminal 2)
cd ..
npm run dev
```

6. **Access the Application**
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **Admin Panel**: http://localhost:5173/admin

## 📁 Project Structure

```
e-commerce/
├── 📁 public/              # Static files
├── 📁 src/                 # Frontend source code
│   ├── 📁 api/            # API service functions
│   ├── 📁 components/     # React components
│   │   ├── 📁 Admin/      # Admin panel components
│   │   ├── 📁 Auth/       # Authentication components
│   │   ├── 📁 Layout/     # Layout components
│   │   ├── 📁 Pages/      # Page components
│   │   └── 📁 UI/         # Reusable UI components
│   ├── 📁 store/          # Redux store configuration
│   ├── 📁 styles/         # CSS and styling files
│   └── 📄 main.jsx        # Application entry point
├── 📁 backend/            # Backend source code
│   ├── 📁 middleware/     # Express middleware
│   ├── 📁 models/         # MongoDB models
│   ├── 📁 routes/         # API routes
│   ├── 📁 seeders/        # Database seeders
│   └── 📄 server.js       # Server entry point
├── 📄 package.json        # Dependencies and scripts
├── 📄 tailwind.config.js  # Tailwind CSS configuration
├── 📄 vite.config.js      # Vite configuration
└── 📄 README.md           # This file
```

## 🔐 Authentication & Security

### Features
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for password security
- **Protected Routes**: Admin and user route protection
- **CORS Configuration**: Secure cross-origin requests
- **Input Validation**: Server-side validation for all inputs
- **XSS Protection**: Sanitized user inputs

### API Endpoints

#### Authentication
```http
POST /api/auth/register     # User registration
POST /api/auth/login        # User login
GET  /api/auth/me          # Get current user
POST /api/auth/logout      # User logout
```

#### Products
```http
GET    /api/products       # Get all products
GET    /api/products/:id   # Get single product
POST   /api/products       # Create product (Admin)
PUT    /api/products/:id   # Update product (Admin)
DELETE /api/products/:id   # Delete product (Admin)
```

#### Orders
```http
GET  /api/orders          # Get user orders
POST /api/orders          # Create new order
GET  /api/orders/:id      # Get order details
PUT  /api/orders/:id      # Update order status (Admin)
```

#### Dashboard (Admin Only)
```http
GET  /api/dashboard/stats           # Get dashboard statistics
GET  /api/dashboard/recent-orders   # Get recent orders
GET  /api/dashboard/top-products    # Get top-selling products
```

## 💳 Payment Integration

### Stripe Setup
1. **Create Stripe Account**: [https://stripe.com](https://stripe.com)
2. **Get API Keys**: From Stripe Dashboard
3. **Configure Environment**: Add keys to `.env` file
4. **Test Payments**: Use Stripe test cards

### Supported Payment Methods
- Credit/Debit Cards (Visa, MasterCard, American Express)
- Digital Wallets (Apple Pay, Google Pay)
- Bank Transfers
- Buy Now, Pay Later options

### Test Cards
```
Card Number: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3 digits
ZIP: Any valid ZIP code
```

## 🎨 UI/UX Design

### Design Philosophy
- **Mobile-First**: Responsive design for all devices
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized for fast loading
- **User Experience**: Intuitive navigation and interactions

### Color Palette
```css
Primary Colors:
- Primary: #8B5CF6 (Purple)
- Secondary: #06B6D4 (Cyan)
- Accent: #F59E0B (Amber)

Neutral Colors:
- Trust: #374151 (Gray)
- Warm: #FEF3C7 (Warm Yellow)
- Soft: #F3F4F6 (Light Gray)
```

### Typography
- **Primary Font**: Inter (Clean, modern sans-serif)
- **Weights**: 400, 500, 600, 700
- **Responsive**: Scales with screen size

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)
```bash
# Build for production
npm run build

# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist

# Deploy to Vercel
npm install -g vercel
vercel --prod
```

### Backend Deployment (Render/Railway)
```bash
# Deploy to Render
# 1. Connect GitHub repository
# 2. Set environment variables
# 3. Deploy automatically

# Deploy to Railway
npm install -g @railway/cli
railway login
railway deploy
```

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
STRIPE_SECRET_KEY=your_production_stripe_key
CLIENT_URL=https://your-frontend-domain.com
```

## 📊 SEO & Analytics

### SEO Features
- **Meta Tags**: Dynamic meta descriptions and titles
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Rich snippets for search engines
- **XML Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling configuration

### Target Keywords
- E-commerce platform development
- MERN stack online store
- React shopping cart application
- MongoDB e-commerce solution
- Full-stack JavaScript shopping website
- Responsive fashion store design
- Secure payment gateway integration
- Modern e-commerce admin dashboard

## 🔍 Performance Optimization

### Frontend Optimization
- **Code Splitting**: Lazy loading of components
- **Image Optimization**: WebP format with lazy loading
- **Bundle Analysis**: Webpack bundle analyzer
- **Caching**: Service worker for static assets

### Backend Optimization
- **Database Indexing**: Optimized MongoDB queries
- **Compression**: Gzip compression for responses
- **Rate Limiting**: API rate limiting for security
- **Caching**: Redis caching for frequent queries

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/AmazingFeature`
3. **Commit Changes**: `git commit -m 'Add AmazingFeature'`
4. **Push to Branch**: `git push origin feature/AmazingFeature`
5. **Open Pull Request**

### Contribution Guidelines
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation
- Ensure mobile responsiveness

## 🐛 Troubleshooting

### Common Issues

#### Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Database Connection
```bash
# Check MongoDB status
brew services list | grep mongodb  # macOS
sudo systemctl status mongod       # Linux

# Test connection
mongosh "mongodb://localhost:27017/fashionhub"
```

## 🗺️ Roadmap

### Version 2.0 (Coming Soon)
- [ ] Multi-vendor marketplace
- [ ] Advanced analytics dashboard
- [ ] AI-powered product recommendations
- [ ] Social media integration
- [ ] Progressive Web App (PWA)
- [ ] Real-time chat support
- [ ] Multi-language support
- [ ] Cryptocurrency payments

## 📞 Support & Contact

### Get Help
- **Documentation**: Check this README first
- **Issues**: [GitHub Issues](https://github.com/UnrealAnkit/e-commerce/issues)
- **Email**: support@fashionhub.com

### Community
- **GitHub**: [Project Repository](https://github.com/UnrealAnkit/e-commerce)
- **Demo**: [Live Website](https://e-commerce-du5a.onrender.com)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team**: For the amazing React library
- **MongoDB**: For the flexible database solution
- **Stripe**: For secure payment processing
- **Tailwind CSS**: For the utility-first CSS framework
- **Open Source Community**: For inspiration and contributions

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/UnrealAnkit/e-commerce)
![GitHub forks](https://img.shields.io/github/forks/UnrealAnkit/e-commerce)
![GitHub issues](https://img.shields.io/github/issues/UnrealAnkit/e-commerce)
![GitHub pull requests](https://img.shields.io/github/issues-pr/UnrealAnkit/e-commerce)

---

## 🌟 Star This Repository

If you found this project helpful, please give it a ⭐ star on GitHub! It helps others discover this project and motivates continued development.

**Built with ❤️ by the FashionHub Team**

---

*This README.md is optimized for search engines and provides comprehensive documentation for developers, contributors, and users interested in modern e-commerce development with the MERN stack.*