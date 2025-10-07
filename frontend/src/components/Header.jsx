import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Accessibility, Sparkles, Zap } from 'lucide-react';
import ThemeToggle from '@/components/ui/theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`nav-header sticky top-0 z-50 w-full bg-background/95 backdrop-blur transition-all duration-500 ${
        isScrolled ? 'shadow-md border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
      {/* Brand */}
      <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
        <div className="relative">
          <Accessibility className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div>
          <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
            Smart Captions
          </span>
          <div className="text-xs text-muted-foreground -mt-1">AI-Powered</div>
        </div>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-2">
        <Link 
          to="/" 
          className={`nav-link ${isActiveRoute('/') ? 'text-primary' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`nav-link ${isActiveRoute('/about') ? 'text-primary' : ''}`}
        >
          About
        </Link>
        {isHomePage ? (
          <button onClick={() => scrollToSection('features')} className="nav-link">
            Features
          </button>
        ) : (
          <Link to="/#features" className="nav-link">
            Features
          </Link>
        )}
        {isHomePage ? (
          <button onClick={() => scrollToSection('demo')} className="nav-link">
            Demo
          </button>
        ) : (
          <Link to="/#demo" className="nav-link">
            Demo
          </Link>
        )}
        <Link 
          to="/pricing" 
          className={`nav-link ${isActiveRoute('/pricing') ? 'text-primary' : ''}`}
        >
          Pricing
        </Link>
        <Link 
          to="/faq" 
          className={`nav-link ${isActiveRoute('/faq') ? 'text-primary' : ''}`}
        >
          FAQ
        </Link>
        <Link 
          to="/contact" 
          className={`nav-link ${isActiveRoute('/contact') ? 'text-primary' : ''}`}
        >
          Contact
        </Link>
      </nav>
      
      {/* Desktop CTA */}
      <div className="hidden lg:flex items-center space-x-3">
        <button className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
          Sign In
        </button>

        <ThemeToggle />

        {isHomePage ? (
          <button 
            onClick={() => scrollToSection('demo')} 
            className="btn-primary flex items-center space-x-2 px-6 py-3"
          >
            <Zap className="w-4 h-4" />
            <span>Try Demo</span>
          </button>
        ) : (
          <Link 
            to="/#demo" 
            className="btn-primary flex items-center space-x-2 px-6 py-3"
          >
            <Zap className="w-4 h-4" />
            <span>Try Demo</span>
          </Link>
        )}
      </div>
      
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center space-x-3">
        <ThemeToggle />
        <button 
          className="p-3 rounded-xl hover:bg-accent transition-colors duration-300" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 
            <X className="w-6 h-6 text-foreground" /> : 
            <Menu className="w-6 h-6 text-foreground" />
          }
        </button>
      </div>
      
      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 bg-background/95 backdrop-blur-md rounded-3xl border border-border shadow-2xl p-6 lg:hidden z-50">
            <nav className="space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`w-full flex items-center space-x-3 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 group ${isActiveRoute('/') ? 'bg-green-50' : ''}`}
              >
                <span className="text-lg">🏠</span>
                <span className={`font-medium group-hover:text-primary ${isActiveRoute('/') ? 'text-primary' : 'text-foreground'}`}>Home</span>
              </Link>
              
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`w-full flex items-center space-x-3 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 group ${isActiveRoute('/about') ? 'bg-green-50' : ''}`}
              >
                <span className="text-lg">ℹ️</span>
                <span className={`font-medium group-hover:text-primary ${isActiveRoute('/about') ? 'text-primary' : 'text-foreground'}`}>About</span>
              </Link>
              
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="w-full flex items-center space-x-3 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 group"
                >
                  <span className="text-lg">✨</span>
                  <span className="font-medium text-foreground group-hover:text-primary">Features</span>
                </button>
              ) : (
                <Link 
                  to="/#features" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center space-x-3 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 group"
                >
                  <span className="text-lg">✨</span>
                  <span className="font-medium text-gray-800 group-hover:text-green-700">Features</span>
                </Link>
              )}
              
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection('demo')} 
                  className="w-full flex items-center space-x-3 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 group"
                >
                  <span className="text-lg">🎮</span>
                  <span className="font-medium text-foreground group-hover:text-primary">Demo</span>
                </button>
              ) : (
                <Link 
                  to="/#demo" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center space-x-3 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 group"
                >
                  <span className="text-lg">🎮</span>
                  <span className="font-medium text-gray-800 group-hover:text-green-700">Demo</span>
                </Link>
              )}
              
              <Link 
                to="/pricing" 
                onClick={() => setIsMenuOpen(false)}
                className={`w-full flex items-center space-x-3 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 group ${isActiveRoute('/pricing') ? 'bg-green-50' : ''}`}
              >
                <span className="text-lg">💰</span>
                <span className={`font-medium group-hover:text-primary ${isActiveRoute('/pricing') ? 'text-primary' : 'text-foreground'}`}>Pricing</span>
              </Link>
              
              <Link 
                to="/faq" 
                onClick={() => setIsMenuOpen(false)}
                className={`w-full flex items-center space-x-3 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 group ${isActiveRoute('/faq') ? 'bg-green-50' : ''}`}
              >
                <span className="text-lg">❓</span>
                <span className={`font-medium group-hover:text-primary ${isActiveRoute('/faq') ? 'text-primary' : 'text-foreground'}`}>FAQ</span>
              </Link>
              
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`w-full flex items-center space-x-3 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 group ${isActiveRoute('/contact') ? 'bg-green-50' : ''}`}
              >
                <span className="text-lg">📞</span>
                <span className={`font-medium group-hover:text-primary ${isActiveRoute('/contact') ? 'text-primary' : 'text-foreground'}`}>Contact</span>
              </Link>
              
              <hr className="my-4 border-gray-200" />
              
              <div className="space-y-3">

                <button className="w-full p-4 text-center text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
                  Sign In
                </button>
                {isHomePage ? (
                  <button 
                    onClick={() => scrollToSection('demo')} 
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Try Demo Free</span>
                  </button>
                ) : (
                  <Link 
                    to="/#demo" 
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Try Demo Free</span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </>
      )}
      </div>
    </header>
  );
};

export default Header;