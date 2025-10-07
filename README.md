# VaaniAI - AI-Powered Voice Captioning Platform

VaaniAI is a modern full-stack web application built with React (frontend) and FastAPI (backend) that provides AI-powered voice captioning and real-time communication features.

## 🏗️ Architecture

- **Frontend**: React 18 with Create React App, TailwindCSS, Radix UI components
- **Backend**: FastAPI with MongoDB, WebSocket support, and async operations
- **Database**: MongoDB for data persistence
- **Real-time Communication**: WebSocket connections for live updates

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+
- Python 3.11+
- MongoDB (local or cloud)
- Yarn package manager

### Local Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd VaaniAI-master
   ```

2. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   cp .env.example .env  # Configure your environment variables
   uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   yarn install
   cp .env.example .env  # Configure your environment variables
   yarn start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## 📦 Production Deployment

### Deploy on Render (Recommended)

VaaniAI is optimized for deployment on [Render](https://render.com) with the following configurations:

#### Option 1: Using render.yaml (Blueprint Deploy)
1. Fork/upload this repository to GitHub
2. Connect to Render and create a new Blueprint
3. Use the `render.yaml` configuration file
4. Set environment variables in Render dashboard

#### Option 2: Manual Service Creation

**Backend Service:**
- **Type**: Web Service
- **Environment**: Python
- **Build Command**: `pip install -r backend/requirements.txt`
- **Start Command**: `cd backend && gunicorn -c gunicorn.conf.py server:app`
- **Environment Variables**:
  - `MONGO_URL`: Your MongoDB connection string
  - `DB_NAME`: vaaniai_production
  - `CORS_ORIGINS`: Your frontend URL

**Frontend Service:**
- **Type**: Web Service  
- **Environment**: Node.js
- **Build Command**: `cd frontend && yarn install && yarn build`
- **Start Command**: `cd frontend && npx serve -s build -l $PORT`
- **Environment Variables**:
  - `REACT_APP_BACKEND_URL`: Your backend service URL

### Deploy with Docker

Build and run both services:

```bash
# Backend
cd backend
docker build -t vaaniai-backend .
docker run -p 8000:8000 vaaniai-backend

# Frontend  
cd frontend
docker build -t vaaniai-frontend .
docker run -p 3000:3000 vaaniai-frontend
```

### Environment Variables

#### Backend (.env)
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=vaaniai_production
CORS_ORIGINS=*
```

#### Frontend (.env)
```env
REACT_APP_BACKEND_URL=http://localhost:8000
WDS_SOCKET_PORT=443
```

## 🛠️ Development

### Project Structure
```
VaaniAI-master/
├── backend/                 # FastAPI backend
│   ├── server.py           # Main API server
│   ├── requirements.txt    # Python dependencies
│   ├── .env               # Environment config
│   └── Dockerfile         # Docker config
├── frontend/               # React frontend
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── package.json       # Node dependencies
│   ├── .env              # Frontend config
│   └── Dockerfile        # Docker config
├── render.yaml            # Render deployment config
└── README.md             # This file
```

### Available Scripts

**Backend:**
- `uvicorn server:app --reload` - Start development server
- `pytest` - Run tests

**Frontend:**
- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn test` - Run tests

### API Endpoints

- `GET /api/` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - Get status checks
- `WS /ws/{client_id}` - WebSocket connection

## 🔒 Security Considerations

- Environment variables for sensitive data
- CORS configuration for production
- MongoDB connection security
- WebSocket authentication (implement as needed)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 💬 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using React, FastAPI, and MongoDB**