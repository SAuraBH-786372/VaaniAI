import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Award } from 'lucide-react';
import { mockTestimonials } from '../mock';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % mockTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 rounded-full px-6 py-3 mb-6">
            <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">User Stories</span>
          </div>
          
          <h2 className="heading-2 mb-6">
            Loved by Learners
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Across the Globe
            </span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Hear from students, professionals, and educators who have transformed 
            their learning experience with Smart Captions intelligent features.
          </p>
        </div>
        
        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 dark:from-green-900/30 to-transparent rounded-full -mr-32 -mt-32 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-100 dark:from-emerald-900/30 to-transparent rounded-full -ml-24 -mb-24 opacity-30"></div>
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 rounded-2xl flex items-center justify-center mx-auto">
                  <Quote className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="text-center">
                {/* Rating */}
                <div className="flex items-center justify-center mb-6">
                  {[...Array(mockTestimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-8 leading-relaxed italic">
                  "{mockTestimonials[currentTestimonial].content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                      {mockTestimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      {mockTestimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {mockTestimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                
                <div className="flex space-x-2">
                  {mockTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-green-500 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mockTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`product-card cursor-pointer transition-all duration-500 ${
                index === currentTestimonial ? 'ring-2 ring-green-500 shadow-2xl scale-105' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 rounded-xl flex items-center justify-center">
                  <Quote className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="body-medium mb-6 italic text-gray-700 dark:text-gray-300 line-clamp-4">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="mt-auto flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-gray-600 dark:text-gray-300">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</div>
                  <div className="body-small text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900/20 rounded-3xl p-12 border border-green-200 dark:border-green-800 shadow-xl relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100 dark:from-green-900/30 to-transparent rounded-full -mr-48 -mt-48 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-100 dark:from-emerald-900/30 to-transparent rounded-full -ml-32 -mb-32 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 rounded-full px-6 py-3 mb-6">
              <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">Join the Community</span>
            </div>
            
            <h3 className="heading-2 mb-6">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Your Learning Experience?
              </span>
            </h3>
            
            <p className="body-large mb-8 max-w-3xl mx-auto">
              Join thousands of users who have made content more accessible and engaging 
              with Smart Captions intelligent features. Start your journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-primary px-10 py-5 text-lg">
                Start Free Trial
              </button>
              <button className="btn-secondary px-10 py-5 text-lg">
                View Pricing Plans
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
