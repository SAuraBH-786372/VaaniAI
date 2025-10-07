import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  Mail,
  MessageCircle,
  Share2,
  MapPin,
  Send,
  Loader2,
  MessageSquare,
  Calendar,
  BookOpen,
  Users,
  Sparkles,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Facebook,
  Instagram,
  ExternalLink
} from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { mockContactInfo } from '../mockData';

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);
      toast.success('Message sent successfully!', {
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      reset();
      setIsSubmitting(false);
    }, 2000);
  };

  const socialIcons = {
    twitter: Twitter,
    linkedin: Linkedin,
    github: Github,
    youtube: Youtube,
    facebook: Facebook,
    instagram: Instagram
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 rounded-full px-6 py-3 mb-6 border border-green-200 dark:border-green-800">
            <Mail className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">Contact Us</span>
          </div>
          
          <h2 className="heading-2 mb-6">
            Get in Touch
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, our team is here to help.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="heading-3 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-form-label">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register('name')}
                    className={`h-12 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-green-500'}`}
                  />
                  {errors.name && (
                    <p className="contact-form-error">
                      <span>⚠️</span>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-form-label">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email')}
                    className={`h-12 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-green-500'}`}
                  />
                  {errors.email && (
                    <p className="contact-form-error">
                      <span>⚠️</span>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="contact-form-group">
                  <label htmlFor="subject" className="contact-form-label">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    {...register('subject')}
                    className={`h-12 ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-green-500'}`}
                  />
                  {errors.subject && (
                    <p className="contact-form-error">
                      <span>⚠️</span>
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    {...register('message')}
                    className={`${errors.message ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-green-500'}`}
                  />
                  {errors.message && (
                    <p className="contact-form-error">
                      <span>⚠️</span>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Email Card */}
            <a
              href={`mailto:${mockContactInfo.email}`}
              className="contact-info-card block"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h4 className="heading-3 text-lg mb-2">Email Us</h4>
                  <p className="body-medium text-gray-600 dark:text-gray-400 mb-2">Send us an email</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">{mockContactInfo.email}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </a>

            {/* Support Card */}
            <div className="contact-info-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="heading-3 text-lg mb-2">Support Hours</h4>
                  <p className="body-medium text-gray-600 dark:text-gray-400 mb-2">We're here to help</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-700 dark:text-gray-300">{mockContactInfo.supportHours.weekdays}</p>
                    <p className="text-gray-700 dark:text-gray-300">{mockContactInfo.supportHours.weekends}</p>
                    <p className="text-gray-500 dark:text-gray-500">{mockContactInfo.supportHours.closed}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="contact-info-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Share2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h4 className="heading-3 text-lg mb-2">Connect With Us</h4>
                  <p className="body-medium text-gray-600 dark:text-gray-400 mb-4">Follow us on social media</p>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(mockContactInfo.social).map(([platform, url]) => {
                      const IconComponent = socialIcons[platform];
                      return IconComponent ? (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                          aria-label={platform}
                        >
                          <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400" />
                        </a>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-12 md:p-16 overflow-hidden border border-green-200 dark:border-green-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-700 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200 dark:bg-emerald-700 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-6">
                <MapPin className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="heading-2 mb-4">Visit Our Office</h3>
              <p className="body-large mb-6 max-w-2xl mx-auto">
                {mockContactInfo.address.street}<br />
                {mockContactInfo.address.city}, {mockContactInfo.address.state} {mockContactInfo.address.zip}<br />
                {mockContactInfo.address.country}
              </p>
              <p className="body-medium text-gray-600 dark:text-gray-400">
                <strong>Phone:</strong> {mockContactInfo.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div>
          <div className="text-center mb-12">
            <h3 className="heading-2 mb-4">More Ways to Connect</h3>
            <p className="body-large max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Live Chat */}
            <a
              href={mockContactInfo.quickLinks.liveChat}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card group"
            >
              <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="heading-3 text-lg mb-2">Live Chat</h4>
              <p className="body-medium text-gray-600 dark:text-gray-400 mb-4 flex-1">
                Chat with our support team in real-time
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 font-semibold text-sm">
                Start Chat
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>

            {/* Schedule Call */}
            <a
              href={mockContactInfo.quickLinks.scheduleCall}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="heading-3 text-lg mb-2">Schedule Call</h4>
              <p className="body-medium text-gray-600 dark:text-gray-400 mb-4 flex-1">
                Book a time to speak with our team
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                Book Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>

            {/* Help Center */}
            <a
              href={mockContactInfo.quickLinks.helpCenter}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card group"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="heading-3 text-lg mb-2">Help Center</h4>
              <p className="body-medium text-gray-600 dark:text-gray-400 mb-4 flex-1">
                Browse our knowledge base and guides
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold text-sm">
                Visit Help Center
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>

            {/* Community Forum */}
            <a
              href={mockContactInfo.quickLinks.communityForum}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card group"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="heading-3 text-lg mb-2">Community Forum</h4>
              <p className="body-medium text-gray-600 dark:text-gray-400 mb-4 flex-1">
                Connect with other users and share ideas
              </p>
              <div className="flex items-center text-orange-600 dark:text-orange-400 font-semibold text-sm">
                Join Community
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
