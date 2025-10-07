import React, { useState } from 'react';
import { Sparkles, Check, X, DollarSign, Shield, HelpCircle, ArrowRight, CreditCard } from 'lucide-react';
import { mockPricingTiers, mockFAQs } from '../mockData';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  // Filter FAQs to show only pricing-related questions
  const pricingFAQs = mockFAQs.filter(faq => faq.category === 'Pricing').slice(0, 6);

  // Calculate annual pricing (20% discount)
  const getPrice = (monthlyPrice) => {
    if (monthlyPrice === null || monthlyPrice === 0) return monthlyPrice;
    return billingPeriod === 'annual' ? Math.floor(monthlyPrice * 12 * 0.8) : monthlyPrice;
  };

  const getPricingDisplay = (tier) => {
    if (tier.price === null) {
      return <span className="text-2xl font-semibold">Custom</span>;
    }
    if (tier.price === 0) {
      return <span className="pricing-price">$0</span>;
    }
    
    const price = getPrice(tier.price);
    const period = billingPeriod === 'annual' ? 'year' : 'month';
    
    return (
      <>
        <span className="pricing-price">${price}</span>
        <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">/{period}</span>
      </>
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">Flexible Plans</span>
          </div>
          
          <h2 className="heading-2 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="body-large max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-gray-800/80 rounded-full p-2 border-2 border-gray-200 dark:border-gray-700 shadow-sm">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                billingPeriod === 'annual'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Annual
              <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {mockPricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card ${tier.popular ? 'popular' : ''}`}
            >
              {tier.popular && (
                <div className="pricing-badge">Most Popular</div>
              )}
              
              <div className="mb-6">
                <h3 className="heading-3 mb-2">{tier.name}</h3>
                <p className="body-medium text-gray-600 dark:text-gray-400 mb-4">{tier.description}</p>
                
                <div className="flex items-baseline mb-6">
                  {getPricingDisplay(tier)}
                </div>
              </div>

              {/* Feature List */}
              <ul className="pricing-feature-list">
                {tier.features.map((feature, index) => (
                  <li key={index} className="pricing-feature-item">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 dark:text-gray-500" />
                    )}
                    <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full mt-6 ${
                  tier.popular ? 'btn-primary' : 'btn-secondary'
                } flex items-center justify-center gap-2 dark:focus:ring-0`}
              >
                {tier.ctaText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table - Desktop Only */}
        <div className="hidden lg:block mb-20 bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl overflow-x-auto">
          <h3 className="heading-3 text-center mb-8">Detailed Feature Comparison</h3>
          
          <table className="w-full">
            <thead className="sticky top-0 bg-white dark:bg-gray-900">
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">Features</th>
                {mockPricingTiers.map((tier) => (
                  <th key={tier.id} className="text-center py-4 px-6">
                    <div className="font-bold text-lg text-gray-900 dark:text-white">{tier.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {tier.price === null ? 'Custom' : tier.price === 0 ? 'Free' : `$${getPrice(tier.price)}`}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Caption Features */}
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td colSpan="4" className="py-3 px-6 font-semibold text-gray-900 dark:text-white">
                  Caption Features
                </td>
              </tr>
              {mockPricingTiers[0].features.slice(0, 2).map((_, featureIndex) => (
                <tr key={featureIndex} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {mockPricingTiers[0].features[featureIndex].name}
                  </td>
                  {mockPricingTiers.map((tier) => (
                    <td key={tier.id} className="text-center py-4 px-6">
                      {tier.features[featureIndex].included ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 dark:text-gray-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Languages & Support */}
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td colSpan="4" className="py-3 px-6 font-semibold text-gray-900 dark:text-white">
                  Languages & Support
                </td>
              </tr>
              {mockPricingTiers[0].features.slice(2, 5).map((_, featureIndex) => (
                <tr key={featureIndex + 2} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {mockPricingTiers[0].features[featureIndex + 2].name}
                  </td>
                  {mockPricingTiers.map((tier) => (
                    <td key={tier.id} className="text-center py-4 px-6">
                      {tier.features[featureIndex + 2].included ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 dark:text-gray-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Advanced Features */}
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td colSpan="4" className="py-3 px-6 font-semibold text-gray-900 dark:text-white">
                  Advanced Features
                </td>
              </tr>
              {mockPricingTiers[0].features.slice(5).map((_, featureIndex) => (
                <tr key={featureIndex + 5} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {mockPricingTiers[0].features[featureIndex + 5].name}
                  </td>
                  {mockPricingTiers.map((tier) => (
                    <td key={tier.id} className="text-center py-4 px-6">
                      {tier.features[featureIndex + 5].included ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 dark:text-gray-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/20 rounded-full px-6 py-3 mb-6">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Pricing FAQs</span>
            </div>
            <h3 className="heading-2 mb-4">Common Questions</h3>
            <p className="body-large text-gray-600 dark:text-gray-400">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {pricingFAQs.map((faq, index) => (
                <AccordionItem key={faq.id} value={`item-${index}`} className="faq-accordion-item px-6">
                  <AccordionTrigger className="faq-accordion-trigger hover:no-underline">
                    <span className="text-left font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="faq-accordion-content">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8">
            <Link to="/faq" className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-semibold inline-flex items-center gap-2">
              View all FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Trust Badges & CTA */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-12 border border-green-200 dark:border-green-800">
          <div className="text-center mb-8">
            <h3 className="heading-2 mb-4">Still have questions?</h3>
            <p className="body-large text-gray-700 dark:text-gray-400 mb-8">
              Our team is here to help you find the perfect plan for your needs
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/contact" className="btn-primary">
                Contact Sales
              </Link>
              <Link to="/faq" className="btn-secondary dark:bg-gray-800/80 dark:border-gray-700 dark:text-gray-200">
                View Full FAQ
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 bg-white dark:bg-gray-800/80 rounded-xl p-6 shadow-sm border border-transparent dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">30-Day Money Back</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">100% satisfaction guaranteed</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white dark:bg-gray-800/80 rounded-xl p-6 shadow-sm border border-transparent dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">No Credit Card Required</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Start free, upgrade anytime</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white dark:bg-gray-800/80 rounded-xl p-6 shadow-sm border border-transparent dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Cancel Anytime</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">No long-term commitments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;