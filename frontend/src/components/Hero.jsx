import React from 'react';
import { Play, ArrowRight, Zap, Users, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1540929140372-508d6f9096bd?ixlib=rb-4.0.3&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxkZWFmJTIwYWNjZXNzaWJpbGl0eSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%',
          transform: 'scale(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/85"></div>
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-border fade-in-up">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">AI-Powered Smart Captions</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left fade-in-up stagger-1 leading-tight">
              Smart, Adaptive
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Captions for Everyone
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-left fade-in-up stagger-2 leading-relaxed">
              Personalized, easy-to-read captions with context, emotion, and interactive learning. 
              Making content accessible and engaging for all learners through intelligent AI.
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mb-8 fade-in-up stagger-3">
              <div className="text-center px-2 sm:px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-primary">98.5%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center px-2 sm:px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-primary">50K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Users</div>
              </div>
              <div className="text-center px-2 sm:px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-primary">12</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 fade-in-up stagger-4 w-full sm:w-auto">
              <button 
                onClick={scrollToDemo}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-6 sm:px-8 py-2.5 sm:py-3 flex items-center justify-center space-x-2 transition-colors duration-200 w-full sm:w-auto"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Try Interactive Demo</span>
              </button>
              <button 
                onClick={scrollToFeatures}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium rounded-full px-6 sm:px-8 py-2.5 sm:py-3 border border-border flex items-center justify-center space-x-2 transition-colors duration-200 w-full sm:w-auto"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground fade-in-up stagger-5">
              <div className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Users className="w-4 h-4 text-primary" />
                <span>Trusted by educators</span>
              </div>
              <div className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Globe className="w-4 h-4 text-primary" />
                <span>Global accessibility</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Images */}
          <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col items-center lg:items-end">
            {/* Main Hero Image */}
            <div className="hero-image interactive-float fade-in-up stagger-2 w-full max-w-lg pt-6 pb-2">
              <img 
                src="https://images.pexels.com/photos/10029239/pexels-photo-10029239.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Person using sign language - accessibility in communication"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover object-center aspect-[4/3]"
                style={{objectPosition: '50% 30%'}}
              />
            </div>
            
            {/* Caption Below Image */}
            <div className="w-full max-w-lg mt-4 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border shadow-md">
              <div className="text-foreground text-sm mb-1">
                <span className="text-primary font-semibold">Professor:</span>
                <span className="ml-2">Welcome to our interactive learning session! 👋</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs text-muted-foreground">Easy Mode</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Secondary Images */}
            <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-lg">
              <div className="feature-image fade-in-up stagger-4 relative overflow-hidden rounded-xl shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1640550444366-b94e5752c479?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Hands forming sign language gesture"
                  className="w-full h-36 object-cover object-center rounded-xl transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl flex items-end p-3">
                  <span className="text-white text-sm font-medium">ISL Support</span>
                </div>
              </div>
              
              <div className="feature-image fade-in-up stagger-5 relative overflow-hidden rounded-xl shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1698993001180-8654ab29032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Student practicing sign language in educational setting"
                  className="w-full h-36 object-cover object-center rounded-xl transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl flex items-end p-3">
                  <span className="text-white text-sm font-medium">Interactive Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Preview Cards */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24 pb-12 sm:pb-16 lg:pb-20">
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Intelligent captioning in action"
              className="w-full h-full object-cover object-center opacity-10 dark:opacity-5"
              style={{objectPosition: '50% 30%'}}
            />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Intelligent Captioning That Understands You</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="product-card fade-in-up stagger-6 bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <div className="text-xl sm:text-2xl">🎯</div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Adaptive Intelligence</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">AI automatically adjusts caption complexity based on your learning level and preferences.</p>
              </div>
              
              <div className="product-card fade-in-up stagger-6 bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <div className="text-xl sm:text-2xl">📚</div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Smart Glossary</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Tap any word for instant definitions, translations, and ISL video demonstrations.</p>
              </div>
              
              <div className="product-card fade-in-up stagger-6 bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <div className="text-xl sm:text-2xl">🎭</div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">Emotional Context</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Visual indicators for tone, emotion, and sound events enhance understanding.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
