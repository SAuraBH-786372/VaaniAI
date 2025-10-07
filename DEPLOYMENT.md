# VaaniAI Deployment Guide

## 🚀 Render.com Deployment (Recommended)

### Prerequisites
- GitHub account with this repository
- Render.com account
- MongoDB Atlas account (free tier available)

### Step-by-Step Deployment

#### 1. Setup MongoDB Atlas
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster (free M0 tier)
3. Create database user and get connection string
4. Whitelist all IPs (0.0.0.0/0) for Render deployment
5. Note your connection string: `mongodb+srv://username:password@cluster.mongodb.net/vaaniai_production`

#### 2. Deploy Backend Service
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure service:
   - **Name**: `vaaniai-backend`
   - **Environment**: `Python`
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your deployment branch)
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn -c gunicorn.conf.py server:app`

5. Set Environment Variables:
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/vaaniai_production
   DB_NAME=vaaniai_production
   CORS_ORIGINS=*
   PYTHON_VERSION=3.11.0
   ```

6. Deploy and wait for success
7. Copy your backend URL: `https://vaaniai-backend-xxxx.onrender.com`

#### 3. Deploy Frontend Service  
1. Click "New" → "Web Service"
2. Connect your GitHub repository
3. Configure service:
   - **Name**: `vaaniai-frontend`  
   - **Environment**: `Node`
   - **Region**: Same as backend
   - **Branch**: `main`
   - **Root Directory**: `frontend`
   - **Build Command**: `yarn install && yarn build`
   - **Start Command**: `npx serve -s build -l $PORT`

4. Set Environment Variables:
   ```
   REACT_APP_BACKEND_URL=https://vaaniai-backend-xxxx.onrender.com
   NODE_VERSION=18.17.0
   ```

5. Deploy and wait for success
6. Your app will be available at: `https://vaaniai-frontend-xxxx.onrender.com`

#### 4. Update CORS Settings
1. Go back to backend service environment variables
2. Update `CORS_ORIGINS` with your frontend URL:
   ```
   CORS_ORIGINS=https://vaaniai-frontend-xxxx.onrender.com
   ```
3. Redeploy backend service

### Alternative: Blueprint Deploy

1. Fork this repository to your GitHub
2. Go to Render Dashboard → "New" → "Blueprint"
3. Connect your forked repository
4. Render will automatically detect `render.yaml`
5. Set environment variables as prompted
6. Deploy both services simultaneously

## 🐳 Docker Deployment

### Local Docker Compose

```bash
# Clone repository
git clone <your-repo-url>
cd VaaniAI-master

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

Services will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000  
- MongoDB: localhost:27017

### Production Docker

```bash
# Build images
docker build -t vaaniai-backend ./backend
docker build -t vaaniai-frontend ./frontend

# Run backend (replace environment variables)
docker run -d \
  -p 8000:8000 \
  -e MONGO_URL="your-mongo-connection-string" \
  -e DB_NAME="vaaniai_production" \
  -e CORS_ORIGINS="https://your-frontend-domain.com" \
  vaaniai-backend

# Run frontend  
docker run -d \
  -p 3000:3000 \
  -e REACT_APP_BACKEND_URL="https://your-backend-domain.com" \
  vaaniai-frontend
```

## 🌐 Other Cloud Platforms

### Vercel (Frontend only)
```bash
# In frontend directory
cd frontend
vercel --prod
```

### Heroku
```bash
# Backend
heroku create vaaniai-backend
heroku config:set MONGO_URL="your-connection-string"
git subtree push --prefix backend heroku main

# Frontend
heroku create vaaniai-frontend  
heroku config:set REACT_APP_BACKEND_URL="https://vaaniai-backend.herokuapp.com"
git subtree push --prefix frontend heroku main
```

### DigitalOcean App Platform
1. Connect GitHub repository
2. Configure components:
   - **Backend**: Python app, dockerfile path: `backend/Dockerfile`  
   - **Frontend**: Node app, dockerfile path: `frontend/Dockerfile`
3. Set environment variables as needed

## 🔧 Environment Variables Reference

### Backend Environment Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb+srv://...` |
| `DB_NAME` | Database name | `vaaniai_production` |
| `CORS_ORIGINS` | Allowed CORS origins | `https://app.example.com` |

### Frontend Environment Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_BACKEND_URL` | Backend API URL | `https://api.example.com` |
| `WDS_SOCKET_PORT` | WebSocket port for development | `443` |

## 🔍 Verification Steps

After deployment, verify your application:

1. **Backend Health Check**:
   ```bash
   curl https://your-backend-url.com/api/health
   ```
   Should return: `{"status": "healthy", "database": "connected"}`

2. **Frontend Loading**: 
   - Visit your frontend URL
   - Check browser console for errors
   - Verify API calls are working

3. **WebSocket Connection**:
   - Test real-time features
   - Check WebSocket connection in browser dev tools

4. **Database Connectivity**:
   - Test creating/reading data
   - Verify MongoDB connection

## 🚨 Troubleshooting

### Common Issues

**Backend won't start:**
- Check environment variables are set correctly
- Verify MongoDB connection string
- Check logs for Python import errors

**Frontend can't connect to backend:**
- Verify `REACT_APP_BACKEND_URL` is correct
- Check CORS settings on backend
- Ensure backend is deployed and healthy

**Database connection errors:**
- Check MongoDB Atlas IP whitelist
- Verify connection string format
- Test connection from local environment

**Build failures:**
- Check Node.js/Python versions match requirements
- Clear build cache and retry
- Check for missing dependencies

### Getting Help
- Check deployment logs in your platform dashboard
- Use health check endpoints for debugging
- Enable debug logging in production (temporarily)

## 📊 Performance Optimization

### Production Optimizations
- Enable gzip compression
- Configure CDN for static assets
- Set appropriate cache headers
- Monitor memory usage and scale as needed

### Security Best Practices
- Use HTTPS for all connections
- Implement rate limiting
- Validate all user inputs
- Keep dependencies updated
- Use environment variables for secrets

---

✅ **Your VaaniAI application is now deployment-ready!**