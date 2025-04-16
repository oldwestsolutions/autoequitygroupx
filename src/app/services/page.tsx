'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive automotive solutions for Italian car enthusiasts and collectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Parts Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#006400] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-6-6H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Parts Distribution</h3>
              <p className="text-gray-600 mb-4">
                Access to genuine Italian car parts and components through our extensive network of manufacturers and suppliers.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Genuine OEM parts</li>
                <li>• Performance upgrades</li>
                <li>• Restoration components</li>
                <li>• Worldwide shipping</li>
              </ul>
            </motion.div>

            {/* Technical Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#006400] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-600 mb-4">
                Expert technical assistance and diagnostic services for Italian car maintenance and repair.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Diagnostic services</li>
                <li>• Technical documentation</li>
                <li>• Expert consultations</li>
                <li>• Troubleshooting guides</li>
              </ul>
            </motion.div>

            {/* Restoration Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#006400] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Restoration Services</h3>
              <p className="text-gray-600 mb-4">
                Professional restoration services for classic and vintage Italian automobiles.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Full vehicle restoration</li>
                <li>• Bodywork and paint</li>
                <li>• Engine rebuilding</li>
                <li>• Interior restoration</li>
              </ul>
            </motion.div>

            {/* Training Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#006400] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-4">
                Specialized training programs for technicians and enthusiasts interested in Italian cars.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Technical workshops</li>
                <li>• Certification programs</li>
                <li>• Online courses</li>
                <li>• Hands-on training</li>
              </ul>
            </motion.div>

            {/* Consulting Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#006400] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Consulting Services</h3>
              <p className="text-gray-600 mb-4">
                Expert consulting for collectors, restorers, and enthusiasts of Italian automobiles.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Collection management</li>
                <li>• Investment advice</li>
                <li>• Restoration planning</li>
                <li>• Market analysis</li>
              </ul>
            </motion.div>

            {/* Event Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#006400] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Event Management</h3>
              <p className="text-gray-600 mb-4">
                Organization and management of Italian car events, shows, and gatherings.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Car shows</li>
                <li>• Track events</li>
                <li>• Club meetings</li>
                <li>• Private gatherings</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 