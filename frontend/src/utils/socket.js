class WebSocketClient {
  constructor() {
    this.socket = null;
    this.messageListeners = [];
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 3000; // 3 seconds
    this.clientId = `client-${Math.random().toString(36).substr(2, 9)}`;
  }

  connect() {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      console.log('WebSocket already connected');
      return;
    }

    // Use the same host as the backend URL but with ws:// protocol
    const backendUrl = new URL(process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000');
    const wsProtocol = backendUrl.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${wsProtocol}//${backendUrl.host}/ws/${this.clientId}`;
    
    console.log('Connecting to WebSocket:', wsUrl);
    this.socket = new WebSocket(wsUrl);

    this.socket.onopen = () => {
      console.log('WebSocket connected');
      this.reconnectAttempts = 0;
      // Notify all listeners of the connection
      this.notifyListeners({ type: 'connection', connected: true });
    };

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.notifyListeners(data);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    this.socket.onclose = () => {
      console.log('WebSocket disconnected');
      this.notifyListeners({ type: 'connection', connected: false });
      this.attemptReconnect();
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      this.socket.close();
    };
  }

  attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
      setTimeout(() => this.connect(), this.reconnectDelay);
    } else {
      console.error('Max reconnection attempts reached');
    }
  }

  sendMessage(message) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      const messageToSend = typeof message === 'string' ? message : JSON.stringify(message);
      this.socket.send(messageToSend);
      return true;
    }
    console.warn('WebSocket not connected');
    return false;
  }

  addMessageListener(callback) {
    if (typeof callback === 'function') {
      this.messageListeners.push(callback);
      return () => {
        this.messageListeners = this.messageListeners.filter(cb => cb !== callback);
      };
    }
  }

  notifyListeners(message) {
    this.messageListeners.forEach(callback => {
      try {
        callback(message);
      } catch (error) {
        console.error('Error in WebSocket listener:', error);
      }
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      this.messageListeners = [];
    }
  }
}

// Create a singleton instance
export const socketClient = new WebSocketClient();

// Export the class for testing or advanced usage
export default WebSocketClient;
