# 🚀 Deployment Guide - E-commerce App

## Backend Deployment (Heroku)

### Step 1: Install Heroku CLI
```bash
# Download from: https://devcenter.heroku.com/articles/heroku-cli
# Or use npm:
npm install -g heroku
```

### Step 2: Login to Heroku
```bash
heroku login
```

### Step 3: Create Heroku App
```bash
cd backend
heroku create your-app-name
```

### Step 4: Set Environment Variables
```bash
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your_mongodb_atlas_connection_string
heroku config:set JWT_SECRET=your_jwt_secret_key
heroku config:set JWT_EXPIRE=30d
heroku config:set CLIENT_URL=https://dancing-pastelito-c1fe75.netlify.app
heroku config:set ADMIN_URL=https://dancing-pastelito-c1fe75.netlify.app
```

### Step 5: Deploy to Heroku
```bash
git add .
git commit -m "Initial backend deployment"
git push heroku main
```

### Step 6: Check Deployment
```bash
heroku logs --tail
heroku open
```

## Frontend Configuration

### Step 1: Update API URL
In your Netlify deployment, add environment variable:
```
VITE_API_URL=https://your-heroku-app-name.herokuapp.com/api
```

### Step 2: Redeploy Frontend
The frontend will automatically redeploy with the new API URL.

## Environment Variables Reference

### Backend (.env for Heroku)
```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/clothing-ecommerce
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d
CLIENT_URL=https://dancing-pastelito-c1fe75.netlify.app
ADMIN_URL=https://dancing-pastelito-c1fe75.netlify.app
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

### Frontend (Netlify Environment Variables)
```env
VITE_API_URL=https://your-heroku-app-name.herokuapp.com/api
```

## Troubleshooting

### Common Issues:

1. **CORS Error**: Make sure your Netlify URL is added to CORS origins in backend
2. **MongoDB Connection**: Verify your MongoDB Atlas connection string
3. **JWT Issues**: Ensure JWT_SECRET is set correctly
4. **Build Errors**: Check Heroku logs with `heroku logs --tail`

### Useful Commands:
```bash
# Check Heroku app status
heroku ps

# View logs
heroku logs --tail

# Open app
heroku open

# Run commands on Heroku
heroku run npm run seed

# Check config vars
heroku config
```

## Testing Deployment

1. Visit your Heroku app: `https://your-app-name.herokuapp.com`
2. Should see: `{"message":"E-commerce Backend API","version":"1.0.0","status":"running"}`
3. Test API: `https://your-app-name.herokuapp.com/api/health`
4. Test frontend login with new API URL

## Security Notes

- Never commit `.env` files to git
- Use strong JWT secrets
- Enable MongoDB Atlas network access for Heroku IPs
- Set up proper CORS origins
- Use HTTPS in production
