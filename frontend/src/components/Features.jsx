import React, { useState } from 'react';
import { Settings, Book, Users, Heart, Brain, Bookmark, ChevronRight, Sparkles } from 'lucide-react';
import { mockFeatures } from '../mock';

const iconMap = {
  Settings,
  Book,
  Users,
  Heart,
  Brain,
  Bookmark
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="features" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">AI-Powered Features</span>
          </div>
          
          <h2 className="heading-2 mb-6">
            Intelligent Captioning
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              That Understands You
            </span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Our smart captioning system adapts to your needs, providing context-aware, 
            accessible, and interactive subtitle experiences powered by advanced AI.
          </p>
        </div>
        
        {/* Interactive Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left - Feature Image */}
          <div className="relative order-2 lg:order-1">
            <div className="hero-image">
              <img 
                src="https://images.pexels.com/photos/4061218/pexels-photo-4061218.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Hand gesture showing sign language communication"
                className="w-full h-[36rem] object-cover object-center rounded-2xl"
                style={{objectPosition: '50% 40%'}}
              />
              
              {/* Interactive Feature Overlay */}
              {/* Simple overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
              

              <div className="mt-6 text-center">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 italic">
                  "The future of learning is accessible, adaptive, and intelligent."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">- Vaani AI Vision Statement</p>
              </div>
            </div>
          </div>
          
          {/* Right - Feature List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {mockFeatures.slice(0, 4).map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                const isActive = activeFeature === index;
                
                return (
                  <div 
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                      isActive 
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700 shadow-lg' 
                        : 'bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-600 hover:bg-green-50/50 dark:hover:bg-green-900/10'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <IconComponent 
                          className="w-6 h-6" 
                          style={{ color: feature.color }}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="heading-3 mb-2 text-lg">{feature.title}</h3>
                        <p className="body-medium text-gray-600 dark:text-gray-400 mb-3">{feature.description}</p>
                        
                        {isActive && (
                          <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 animate-fadeIn">
                            <p className="body-small font-medium text-green-800 dark:text-green-300 flex items-center">
                              <span className="mr-2">💡</span>
                              {feature.demo}
                            </p>
                          </div>
                        )}
                      </div>
                      
                      <ChevronRight 
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isActive ? 'rotate-90 text-green-600 dark:text-green-400' : 'text-gray-400 dark:text-gray-500'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        

        
        {/* Enhanced Statistics Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 border border-gray-200 dark:border-gray-700 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="heading-2 mb-4">Trusted by Learners Worldwide</h3>
            <p className="body-large max-w-2xl mx-auto">
              Join thousands of users experiencing better accessibility and engagement
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Active Users</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Growing daily</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">98.5%</div>
              <div className="stat-label">Accuracy Rate</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">AI-powered precision</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Languages</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Including ISL support</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Hours Transcribed</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Learning content processed</p>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-8 mt-12 opacity-60">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-green-600 dark:text-green-400 font-bold text-sm">AI</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">AI Certified</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">A11Y</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Accessibility</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">EDU</span>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Education</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
