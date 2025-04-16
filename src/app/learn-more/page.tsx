'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

export default function LearnMore() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              About Auto Equity Group
            </h1>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-[#006400] mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  At Auto Equity Group, we combine Italian automotive excellence with American innovation to provide 
                  unparalleled service and support to our clients. Our mission is to revolutionize the automotive 
                  industry through cutting-edge technology, exceptional craftsmanship, and customer-focused solutions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#006400] mb-4">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Insurance Solutions</h3>
                    <p className="text-gray-600">
                      Comprehensive insurance coverage tailored to your specific needs, with a focus on luxury 
                      and high-performance vehicles.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Parts Distribution</h3>
                    <p className="text-gray-600">
                      Direct access to premium Italian automotive parts through our extensive distribution network.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#006400] mb-4">Why Choose Us</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">•</span>
                    <p className="text-gray-600">Expertise in Italian automotive engineering and design</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">•</span>
                    <p className="text-gray-600">Innovative insurance solutions for modern vehicles</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">•</span>
                    <p className="text-gray-600">Direct partnerships with leading Italian manufacturers</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black font-bold">•</span>
                    <p className="text-gray-600">Commitment to customer satisfaction and quality service</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 