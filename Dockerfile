# Multi-stage build for production deployment
FROM node:18-alpine as frontend-builder

# Build frontend
WORKDIR /app/frontend
COPY frontend/package*.json frontend/yarn.lock ./
RUN yarn install --frozen-lockfile
COPY frontend/ ./
RUN yarn build

# Python backend stage
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install Python dependencies
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY backend/ ./

# Copy built frontend files
COPY --from=frontend-builder /app/frontend/build ./static

# Create a simple web server to serve static files and API
COPY <<EOF /app/main.py
import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse
import uvicorn
from server import app as api_app

app = FastAPI()

# Mount the API routes under /api
app.mount("/api", api_app)

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve React app for all other routes
@app.get("/{path:path}")
async def serve_react_app(path: str):
    file_path = f"static/{path}"
    if os.path.exists(file_path) and os.path.isfile(file_path):
        return FileResponse(file_path)
    return FileResponse("static/index.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
EOF

EXPOSE 8000

CMD ["python", "main.py"]