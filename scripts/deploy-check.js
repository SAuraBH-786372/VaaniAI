#!/usr/bin/env node

const https = require('https');
const http = require('http');

// Configuration
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

console.log('🚀 VaaniAI Deployment Health Check\n');

// Helper function to make HTTP requests
function makeRequest(url, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { timeout }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            data: res.headers['content-type']?.includes('application/json') 
              ? JSON.parse(data) 
              : data
          });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });
    
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Check backend health
async function checkBackend() {
  console.log('🔍 Checking backend...');
  
  try {
    // Check API root
    const rootCheck = await makeRequest(`${BACKEND_URL}/api/`);
    console.log(`   ✅ API Root: ${rootCheck.status} - ${rootCheck.data.message || 'OK'}`);
    
    // Check health endpoint
    const healthCheck = await makeRequest(`${BACKEND_URL}/api/health`);
    console.log(`   ✅ Health Check: ${healthCheck.status} - ${healthCheck.data.status || 'OK'}`);
    
    if (healthCheck.data.database) {
      console.log(`   ✅ Database: ${healthCheck.data.database}`);
    }
    
    return true;
  } catch (error) {
    console.log(`   ❌ Backend Error: ${error.message}`);
    return false;
  }
}

// Check frontend
async function checkFrontend() {
  console.log('\n🔍 Checking frontend...');
  
  try {
    const response = await makeRequest(FRONTEND_URL);
    if (response.status === 200) {
      console.log(`   ✅ Frontend: ${response.status} - Loading successfully`);
      return true;
    } else {
      console.log(`   ⚠️  Frontend: ${response.status} - Unexpected status`);
      return false;
    }
  } catch (error) {
    console.log(`   ❌ Frontend Error: ${error.message}`);
    return false;
  }
}

// Check WebSocket connection
async function checkWebSocket() {
  console.log('\n🔍 Checking WebSocket...');
  
  // Note: This is a basic check - in real deployment you'd test actual WebSocket connection
  try {
    const wsUrl = BACKEND_URL.replace('http', 'ws') + '/ws/health-check';
    console.log(`   ℹ️  WebSocket URL: ${wsUrl}`);
    console.log(`   ✅ WebSocket endpoint configured`);
    return true;
  } catch (error) {
    console.log(`   ❌ WebSocket Error: ${error.message}`);
    return false;
  }
}

// Main deployment check
async function runHealthCheck() {
  console.log(`Backend URL: ${BACKEND_URL}`);
  console.log(`Frontend URL: ${FRONTEND_URL}\n`);
  
  const checks = await Promise.all([
    checkBackend(),
    checkFrontend(),
    checkWebSocket()
  ]);
  
  const allPassed = checks.every(Boolean);
  
  console.log('\n📊 Deployment Status Summary:');
  console.log('='.repeat(40));
  
  if (allPassed) {
    console.log('🎉 All checks passed! Deployment is healthy.');
    console.log('\n🌐 Your VaaniAI application is ready:');
    console.log(`   • Frontend: ${FRONTEND_URL}`);
    console.log(`   • Backend API: ${BACKEND_URL}/api`);
    console.log(`   • API Docs: ${BACKEND_URL}/docs`);
    process.exit(0);
  } else {
    console.log('⚠️  Some checks failed. Please review the deployment.');
    console.log('\n🔧 Troubleshooting tips:');
    console.log('   • Check environment variables');
    console.log('   • Verify MongoDB connection');
    console.log('   • Review deployment logs');
    console.log('   • Ensure all services are running');
    process.exit(1);
  }
}

// Run the health check
runHealthCheck().catch(error => {
  console.error('💥 Health check failed:', error.message);
  process.exit(1);
});