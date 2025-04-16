'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Italian Auto Insider</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Stay updated with the latest news, trends, and insights from the world of Italian automotive excellence.
          </p>
        </div>
      </motion.section>

      {/* Subscribe Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get exclusive content, special offers, and monthly updates delivered directly to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 text-green-800 p-4 rounded-lg"
                >
                  Thank you for subscribing! Please check your email to confirm your subscription.
                </motion.div>
              ) : (
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#006400] text-white rounded-lg hover:bg-[#005300] transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.section>

      {/* Featured Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">What You'll Receive</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#006400] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Latest News</h3>
              <p className="text-gray-600">Stay informed about the latest developments in the Italian automotive world.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#006400] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Exclusive Content</h3>
              <p className="text-gray-600">Access to exclusive interviews, behind-the-scenes content, and expert insights.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#006400] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Special Offers</h3>
              <p className="text-gray-600">Exclusive deals and early access to new services and products.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
} 