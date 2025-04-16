'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Image from 'next/image';

export default function LearnMore() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/racing-stripes.svg')] opacity-5"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About Auto Equity Group
            </h1>
            <p className="text-xl text-gray-600">
              Where Italian Craftsmanship Meets American Innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 w-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Mission Image</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#006400] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Auto Equity Group, we combine Italian automotive excellence with American innovation to provide 
                unparalleled service and support to our clients. Our mission is to revolutionize the automotive 
                industry through cutting-edge technology, exceptional craftsmanship, and customer-focused solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#006400] font-bold text-xl">•</span>
                  <p className="text-gray-600">Deliver exceptional automotive solutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#006400] font-bold text-xl">•</span>
                  <p className="text-gray-600">Maintain the highest standards of quality</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#006400] font-bold text-xl">•</span>
                  <p className="text-gray-600">Foster innovation in automotive technology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#006400] mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your automotive needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400">Insurance Image</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Insurance Solutions</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive insurance coverage tailored to your specific needs, with a focus on luxury 
                and high-performance vehicles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#006400]">•</span>
                  <span className="text-gray-600">Customized coverage plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#006400]">•</span>
                  <span className="text-gray-600">24/7 claims support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#006400]">•</span>
                  <span className="text-gray-600">Competitive rates</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400">Parts Image</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Parts Distribution</h3>
              <p className="text-gray-600 mb-4">
                Direct access to premium Italian automotive parts through our extensive distribution network.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#006400]">•</span>
                  <span className="text-gray-600">Genuine Italian parts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#006400]">•</span>
                  <span className="text-gray-600">Fast delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#006400]">•</span>
                  <span className="text-gray-600">Quality assurance</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400">Support Image</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Technical Support</h3>
              <p className="text-gray-600 mb-4">
                Expert assistance and guidance for all your automotive needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#006400]">•</span>
                  <span className="text-gray-600">Expert consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#006400]">•</span>
                  <span className="text-gray-600">Technical assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#006400]">•</span>
                  <span className="text-gray-600">Maintenance support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#006400] mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Decades of experience in Italian automotive engineering</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Specialized knowledge in luxury vehicles</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Continuous training and certification</p>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Cutting-edge technology solutions</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Advanced diagnostic tools</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Modern service approach</p>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quality</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Premium parts and materials</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Rigorous quality control</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Exceptional craftsmanship</p>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Service</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Personalized attention</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">24/7 support</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#006400] font-bold">•</span>
                    <p className="text-gray-600">Customer satisfaction guarantee</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Experience Excellence?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us in revolutionizing your automotive experience with Italian craftsmanship and American innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sign-up"
                className="btn-primary bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-2xl"
              >
                Get Started
              </a>
              <a
                href="#"
                className="btn-outline border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-2xl"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 