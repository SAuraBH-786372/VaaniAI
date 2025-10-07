import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, Twitter, Linkedin, Github, Youtube, Heart, Accessibility, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 mb-6 group cursor-pointer">
              <div className="relative">
                <Accessibility className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  Smart Captions
                </span>
                <div className="text-xs text-muted-foreground -mt-1">AI-Powered Accessibility</div>
              </div>
            </Link>

            {/* Mission Statement */}
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Making content accessible and engaging for everyone through intelligent AI-powered captions and interactive learning experiences.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/80 border border-border hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/80 border border-border hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View our GitHub repository"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/80 border border-border hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/80 border border-border hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </Link>
              </li>
              <li>
                <a href="#careers" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Careers</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </li>
              <li>
                <a href="#press" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Press Kit</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Contact</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Features</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/#demo" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </Link>
              </li>
              <li>
                <a href="#api-docs" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>API Docs</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </li>
              <li>
                <a href="#integrations" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Integrations</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#blog" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Blog</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </li>
              <li>
                <a href="#help" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Help Center</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </li>
              <li>
                <a href="#community" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Community</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </li>
              <li>
                <a href="#tutorials" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Tutorials</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </li>
              <li>
                <a href="#changelog" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1">
                  <span>Changelog</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-foreground mb-3">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates on new features and accessibility innovations.
            </p>
            
            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Subscribe to newsletter"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <>
                      <Mail className="w-4 h-4 animate-pulse mr-2" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      <span>Subscribe</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            <p className="text-xs text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-10">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vaani AI. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1.5 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with love for accessibility</span>
            </div>
            
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
