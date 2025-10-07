import React, { createContext, useContext, useEffect, useRef } from 'react';
import { socketClient } from '../utils/socket';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const listeners = useRef(new Set());

  useEffect(() => {
    // Initialize WebSocket connection
    socketClient.connect();

    // Add a listener for connection status changes
    const handleConnectionChange = (message) => {
      if (message.type === 'connection') {
        console.log('WebSocket connection status:', message.connected ? 'Connected' : 'Disconnected');
      }
    };

    const removeListener = socketClient.addMessageListener(handleConnectionChange);

    // Cleanup on unmount
    return () => {
      removeListener();
      socketClient.disconnect();
    };
  }, []);

  // Function to send messages
  const sendMessage = (message) => {
    return socketClient.sendMessage(message);
  };

  // Function to add message listeners
  const addMessageListener = (callback) => {
    return socketClient.addMessageListener(callback);
  };

  return (
    <WebSocketContext.Provider value={{ sendMessage, addMessageListener }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};

export default WebSocketContext;
