import React from 'react';
import { Users, Target, Eye, Heart, Lightbulb, Shield, Linkedin, Twitter, Github, Mail, Sparkles, ArrowRight, Globe, TrendingUp, GitBranch } from 'lucide-react';
import { mockTeam, mockValues } from '../mockData';
import { mockStats } from '../mock';

const iconMap = {
  Heart,
  Lightbulb,
  Users,
  GitBranch,
  Globe,
  TrendingUp,
  Shield,
  Target,
  Eye
};

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden py-16">
        {/* Background with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/85"></div>
          <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-gray-200 dark:border-gray-700 fade-in-up">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Our Story</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="heading-1 mb-6 fade-in-up stagger-1">
            About Smart Captions
          </h1>
          
          {/* Subheadline */}
          <p className="body-large mb-8 fade-in-up stagger-2">
            We're on a mission to make digital content accessible and engaging for everyone through intelligent, adaptive captioning technology powered by AI.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="product-card fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="heading-3 mb-4">Our Mission</h3>
              <p className="body-medium">
                To break down communication barriers and make every piece of digital content accessible, understandable, and engaging for people of all abilities, backgrounds, and learning styles. We believe that accessibility is not just a feature—it's a fundamental right.
              </p>
            </div>

            {/* Vision Card */}
            <div className="product-card fade-in-up stagger-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="heading-3 mb-4">Our Vision</h3>
              <p className="body-medium">
                A world where language, hearing ability, or comprehension level never stands in the way of learning, communication, or entertainment. We envision a future where AI-powered accessibility tools are seamlessly integrated into every digital experience.
              </p>
            </div>
          </div>

          {/* Stats Integration */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 border border-gray-200 dark:border-gray-700 shadow-xl fade-in-up stagger-2">
            <div className="text-center mb-12">
              <h3 className="heading-2 mb-4">Our Impact</h3>
              <p className="body-large max-w-2xl mx-auto">
                Making a difference in accessibility, one caption at a time
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{mockStats.totalUsers}</div>
                <div className="stat-label">Active Users</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Growing daily</p>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">{mockStats.accuracyRate}</div>
                <div className="stat-label">Accuracy Rate</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">AI-powered precision</p>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">{mockStats.languagesSupported}</div>
                <div className="stat-label">Languages</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Including ISL support</p>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">{mockStats.hoursTranscribed}</div>
                <div className="stat-label">Hours Transcribed</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Content processed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 rounded-full px-6 py-3 mb-6">
              <Heart className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">What Drives Us</span>
            </div>
            
            <h2 className="heading-2 mb-6">Our Core Values</h2>
            <p className="body-large max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer support
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockValues.map((value, index) => {
              const IconComponent = iconMap[value.icon];
              
              return (
                <div 
                  key={value.id} 
                  className="product-card fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <h3 className="heading-3 mb-4">{value.title}</h3>
                  <p className="body-medium">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 rounded-full px-6 py-3 mb-6">
              <Users className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">The People Behind Smart Captions</span>
            </div>
            
            <h2 className="heading-2 mb-6">Meet Our Team</h2>
            <p className="body-large max-w-3xl mx-auto">
              A diverse group of passionate individuals dedicated to making the digital world more accessible
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockTeam.map((member, index) => (
              <div 
                key={member.id} 
                className="team-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-avatar"
                />
                
                <h3 className="heading-3 text-lg mb-1">{member.name}</h3>
                <p className="text-green-600 dark:text-green-400 font-semibold text-sm mb-3">{member.role}</p>
                <p className="body-small text-gray-600 dark:text-gray-400 mb-4 flex-1">{member.bio}</p>
                
                {/* Social Links */}
                <div className="team-social-links">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="team-social-link"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="team-social-link"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="team-social-link"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-12 md:p-16 text-center border border-green-100 dark:border-green-800">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800/80 rounded-full px-6 py-3 mb-6">
                <Heart className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">Be Part of Something Bigger</span>
              </div>
              
              <h2 className="heading-2 mb-6">Join Our Mission</h2>
              <p className="body-large mb-8">
                We're always looking for talented, passionate individuals who share our vision of making the digital world more accessible. Whether you're a developer, designer, researcher, or accessibility advocate, there's a place for you on our team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#careers" 
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>View Careers</span>
                </a>
                <a 
                  href="#community" 
                  className="btn-secondary inline-flex items-center justify-center space-x-2"
                >
                  <span>Join Community</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              
              {/* Additional Info */}
              <div className="mt-12 pt-8 border-t border-green-200 dark:border-green-800">
                <p className="body-medium text-gray-600 dark:text-gray-400">
                  Want to contribute to our open-source projects or collaborate on research?
                </p>
                <a 
                  href="https://github.com/smartcaptions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-semibold mt-3 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Visit our GitHub</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
