import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import { WebSocketProvider } from "./contexts/WebSocketContext";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CaptionDemo from "./components/CaptionDemo";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import { useWebSocket } from "./contexts/WebSocketContext";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// ScrollToTop component - scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Home Page Component
const Home = () => {
  const { sendMessage, addMessageListener } = useWebSocket();
  const [connectionStatus, setConnectionStatus] = useState('disconnected');

  useEffect(() => {
    // Add WebSocket message listener
    const removeListener = addMessageListener((message) => {
      console.log('Received WebSocket message:', message);
      // Handle incoming WebSocket messages here
    });

    // Cleanup on unmount
    return () => removeListener();
  }, [addMessageListener]);

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log("Backend connected:", response.data.message);
    } catch (e) {
      console.error("Backend connection error:", e);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CaptionDemo />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

// About Page Component
const AboutPage = () => (
  <>
    <Header />
    <main>
      <About />
    </main>
    <Footer />
  </>
);

// Pricing Page Component
const PricingPage = () => (
  <>
    <Header />
    <main>
      <Pricing />
    </main>
    <Footer />
  </>
);

// Contact Page Component
const ContactPage = () => (
  <>
    <Header />
    <main>
      <Contact />
    </main>
    <Footer />
  </>
);

// FAQ Page Component
const FAQPage = () => (
  <>
    <Header />
    <main>
      <FAQ />
    </main>
    <Footer />
  </>
);

function App() {
  // Set favicon
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>';
    document.head.appendChild(favicon);
  }, []);

  return (
    <WebSocketProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </WebSocketProvider>
  );
}

export default App;
