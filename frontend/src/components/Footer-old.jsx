import React from 'react';
import { Accessibility, Mail, Phone, MapPin, Github, Twitter, Linkedin, Heart, Globe, Shield, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Accessibility className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <span className="font-bold text-2xl">Smart Captions</span>
                <div className="text-sm text-green-400 -mt-1">AI-Powered Accessibility</div>
              </div>
            </div>
            <p className="body-medium text-gray-300 mb-6 leading-relaxed">
              Making content accessible and engaging for everyone through intelligent, 
              adaptive captioning technology powered by advanced AI.
            </p>
            
            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-4 mb-6 border border-green-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-300">Our Mission</span>
              </div>
              <p className="text-sm text-gray-300">Empowering accessibility through innovation</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button className="p-3 bg-gray-800/50 rounded-xl text-gray-400 hover:text-green-400 hover:bg-green-900/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700/50">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-3 bg-gray-800/50 rounded-xl text-gray-400 hover:text-green-400 hover:bg-green-900/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700/50">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 bg-gray-800/50 rounded-xl text-gray-400 hover:text-green-400 hover:bg-green-900/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700/50">
                <Github className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Enhanced Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-6 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-green-400" />
              <span>Navigation</span>
            </h3>
            <ul className="space-y-4">
              {[
                { id: 'home', label: 'Home', icon: '🏠' },
                { id: 'features', label: 'Features', icon: '✨' },
                { id: 'demo', label: 'Interactive Demo', icon: '🎮' },
                { id: 'about', label: 'About Us', icon: 'ℹ️' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="group-hover:font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-1 group">
                  <span className="text-sm">💰</span>
                  <span className="group-hover:font-medium">Pricing Plans</span>
                </button>
              </li>
            </ul>
          </div>
          
          {/* Enhanced Features */}
          <div>
            <h3 className=\"font-semibold text-xl mb-6 flex items-center space-x-2\">
              <Shield className=\"w-5 h-5 text-green-400\" />
              <span>Smart Features</span>
            </h3>
            <ul className=\"space-y-4\">
              {[
                { name: 'Adaptive Modes', desc: 'Easy, Medium, Verbatim' },
                { name: 'Smart Glossary', desc: 'Instant definitions' },
                { name: 'Speaker ID', desc: 'Color-coded speakers' },
                { name: 'ISL Support', desc: 'Sign language integration' },
                { name: 'Interactive Learning', desc: 'Quiz & bookmarks' }
              ].map((feature) => (
                <li key={feature.name} className="group">
                  <div className="text-gray-300 group-hover:text-green-400 transition-colors duration-300">
                    <div className="font-medium">{feature.name}</div>
                    <div className="text-sm text-gray-500 group-hover:text-green-500">{feature.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Enhanced Contact Info */}
          <div>
            <h3 className=\"font-semibold text-xl mb-6 flex items-center space-x-2\">
              <Mail className=\"w-5 h-5 text-green-400\" />
              <span>Connect With Us</span>
            </h3>
            <ul className=\"space-y-4\">
              <li>
                <a 
                  href=\"mailto:hello@smartcaptions.app\" 
                  className=\"flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-all duration-300 group p-3 rounded-xl hover:bg-green-900/10\"
                >
                  <Mail className=\"w-5 h-5 text-green-400 flex-shrink-0\" />
                  <div>
                    <div className=\"font-medium\">Email Support</div>
                    <div className=\"text-sm text-gray-500\">hello@smartcaptions.app</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href=\"tel:+919876543210\" 
                  className=\"flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-all duration-300 group p-3 rounded-xl hover:bg-green-900/10\"
                >
                  <Phone className=\"w-5 h-5 text-green-400 flex-shrink-0\" />
                  <div>
                    <div className=\"font-medium\">Phone Support</div>
                    <div className=\"text-sm text-gray-500\">+91 98765 43210</div>
                  </div>
                </a>
              </li>
              <li>
                <div className=\"flex items-start space-x-3 text-gray-300 p-3 rounded-xl bg-gray-800/30\">
                  <MapPin className=\"w-5 h-5 text-green-400 flex-shrink-0 mt-1\" />
                  <div>
                    <div className=\"font-medium\">Headquarters</div>
                    <div className=\"text-sm text-gray-500\">Bangalore, India</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* About Section */}
        <div id="about" className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="heading-2 mb-4">About Smart Captions</h3>
            <p className="body-large text-gray-300 mb-6">
              Smart Captions was born from the vision of making digital content truly accessible 
              to everyone. Our intelligent captioning system adapts to individual learning styles, 
              comprehension levels, and accessibility needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">🎧</div>
                <h4 className="font-semibold mb-2">Accessibility First</h4>
                <p className="body-small text-gray-400">
                  Designed with the deaf and hard-of-hearing community at the center
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🧠</div>
                <h4 className="font-semibold mb-2">AI-Powered</h4>
                <p className="body-small text-gray-400">
                  Advanced machine learning for context-aware caption adaptation
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌍</div>
                <h4 className="font-semibold mb-2">Global Impact</h4>
                <p className="body-small text-gray-400">
                  Supporting multiple languages and cultural contexts including ISL
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="body-small text-gray-400 mb-4 md:mb-0">
            © 2024 Smart Captions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button className="body-small text-gray-400 hover:text-green-400 transition-colors">
              Privacy Policy
            </button>
            <button className="body-small text-gray-400 hover:text-green-400 transition-colors">
              Terms of Service
            </button>
            <button className="body-small text-gray-400 hover:text-green-400 transition-colors">
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;