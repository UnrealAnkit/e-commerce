# 🚀 Render.com Deployment Guide

## Step-by-Step Instructions

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Click "Get Started"
3. Sign up with your GitHub account
4. Verify your email

### Step 2: Create New Web Service
1. Click **"New"** → **"Web Service"**
2. Connect your GitHub repository
3. Select your `e-commerce` repository

### Step 3: Configure Service Settings
```
Name: ecommerce-backend
Environment: Node
Build Command: npm install
Start Command: npm start
Root Directory: backend
```

### Step 4: Set Environment Variables
Click **"Environment"** tab and add:

```
NODE_ENV = production
MONGODB_URI = your_mongodb_atlas_connection_string
JWT_SECRET = your_super_secret_jwt_key_here
JWT_EXPIRE = 30d
CLIENT_URL = https://dancing-pastelito-c1fe75.netlify.app
ADMIN_URL = https://dancing-pastelito-c1fe75.netlify.app
```

### Step 5: Deploy
1. Click **"Create Web Service"**
2. Wait for deployment (2-3 minutes)
3. Your app will be at: `https://your-app-name.onrender.com`

### Step 6: Update Frontend
In Netlify dashboard, add environment variable:
```
VITE_API_URL = https://your-app-name.onrender.com/api
```

## Testing Your Deployment

1. **Backend Test**: Visit your Render URL
   - Should show: `{"message":"E-commerce Backend API","version":"1.0.0","status":"running"}`

2. **API Health Check**: Add `/api/health` to your URL

3. **Frontend Test**: Your Netlify site should now work with login/register

## Troubleshooting

- **Build Fails**: Check build logs in Render dashboard
- **App Won't Start**: Check logs for error messages
- **CORS Issues**: Backend is already configured for your Netlify domain
- **MongoDB Issues**: Verify your Atlas connection string

## Advantages of Render

✅ **Completely Free** (no credit card required)  
✅ **Auto-deploys** from GitHub  
✅ **Easy to use** interface  
✅ **Good performance**  
✅ **Custom domains** available  
✅ **SSL certificates** included
