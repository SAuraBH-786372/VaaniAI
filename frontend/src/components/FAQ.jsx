import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  MessageCircle, 
  Video, 
  FileText, 
  ExternalLink,
  X,
  Sparkles,
  Users,
  DollarSign,
  Settings,
  Shield
} from 'lucide-react';
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from './ui/accordion';
import { mockFAQs } from '../mockData';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [openAccordion, setOpenAccordion] = useState('');
  const accordionRefs = useRef({});

  const categories = ['All', 'General', 'Features', 'Pricing', 'Technical', 'Accessibility'];

  // Category icon mapping
  const categoryIcons = {
    General: HelpCircle,
    Features: Sparkles,
    Pricing: DollarSign,
    Technical: Settings,
    Accessibility: Shield
  };

  // Popular questions (first 6 FAQs)
  const popularQuestions = mockFAQs.slice(0, 6);

  // Filter FAQs based on category and search term
  const filteredFAQs = mockFAQs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Scroll to specific FAQ
  const scrollToFAQ = (faqId) => {
    setActiveCategory('All');
    setSearchTerm('');
    setOpenAccordion(`item-${faqId}`);
    
    setTimeout(() => {
      const element = accordionRefs.current[faqId];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="section-padding-sm bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 rounded-full px-6 py-3 mb-6 fade-in-up">
              <HelpCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">Help Center</span>
            </div>
            
            <h1 className="heading-2 mb-6 fade-in-up stagger-1">
              Frequently Asked Questions
            </h1>
            
            <p className="body-large mb-8 fade-in-up stagger-2">
              Find answers to common questions about Smart Captions
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto fade-in-up stagger-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-2xl text-base focus:outline-none focus:border-green-400 dark:focus:border-green-500 focus:ring-4 focus:ring-green-100 dark:focus:ring-green-900/30 transition-all bg-white dark:bg-gray-800 dark:text-gray-100 shadow-sm"
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics Grid */}
      <section className="section-padding-sm">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-3 mb-4">Popular Topics</h2>
            <p className="body-medium text-gray-600 dark:text-gray-400">Quick answers to our most asked questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {popularQuestions.map((faq) => {
              const IconComponent = categoryIcons[faq.category] || HelpCircle;
              return (
                <div
                  key={faq.id}
                  onClick={() => scrollToFAQ(faq.id)}
                  className="product-card cursor-pointer group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                      <IconComponent className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {faq.question}
                      </h3>
                      <p className="body-small text-gray-600 dark:text-gray-400 line-clamp-2">
                        {faq.answer.replace(/<[^>]*>/g, '').substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Category Filters */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-pill ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding-sm bg-white dark:bg-gray-900">
        <div className="container max-w-4xl">
          {filteredFAQs.length > 0 ? (
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4"
              value={openAccordion}
              onValueChange={setOpenAccordion}
            >
              {filteredFAQs.map((faq) => {
                const IconComponent = categoryIcons[faq.category] || HelpCircle;
                return (
                  <AccordionItem
                    key={faq.id}
                    value={`item-${faq.id}`}
                    className="faq-accordion-item bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 px-6 overflow-hidden"
                    ref={(el) => (accordionRefs.current[faq.id] = el)}
                  >
                    <AccordionTrigger className="faq-accordion-trigger hover:no-underline">
                      <div className="flex items-start space-x-4 text-left pr-4">
                        <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                          <IconComponent className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="faq-category-badge">{faq.category}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="faq-accordion-content pl-14">
                      <div 
                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="heading-3 mb-4">No results found</h3>
              <p className="body-medium text-gray-600 dark:text-gray-400 mb-6">
                We couldn't find any FAQs matching "{searchTerm}". Try different keywords or browse by category.
              </p>
              <button
                onClick={clearSearch}
                className="btn-secondary"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-900">
        <div className="container max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 border-2 border-green-100 dark:border-green-800 shadow-xl text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            
            <h2 className="heading-2 mb-4">Still need help?</h2>
            <p className="body-large mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" className="btn-primary">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <a 
                href="https://community.smartcaptions.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </a>
            </div>

            {/* Additional Resources */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-6">Additional Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <a
                  href="https://docs.smartcaptions.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                    <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Documentation</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    Read guides <ExternalLink className="w-3 h-3 ml-1" />
                  </span>
                </a>

                <a
                  href="https://youtube.com/@smartcaptions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-colors">
                    <Video className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Video Tutorials</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    Watch now <ExternalLink className="w-3 h-3 ml-1" />
                  </span>
                </a>

                <a
                  href="https://blog.smartcaptions.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                    <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Blog</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    Latest updates <ExternalLink className="w-3 h-3 ml-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
