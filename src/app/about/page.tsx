'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
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
          <h1 className="text-5xl font-bold mb-6">About Auto Equity Group X</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Dedicated to providing exceptional Italian automotive solutions with a focus on quality, expertise, and customer satisfaction.
          </p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Founded with a passion for Italian automotive excellence, Auto Equity Group X has grown from a small specialist workshop to a comprehensive automotive solutions provider. Our journey began with a simple mission: to provide unparalleled service and expertise in the Italian automotive sector.
              </p>
              <p className="text-gray-600">
                Today, we stand as a trusted name in the industry, serving enthusiasts and collectors across the nation with our extensive knowledge and dedication to preserving the legacy of Italian automotive craftsmanship.
              </p>
            </div>
            <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607603750909-408e193868c7?auto=format&fit=crop&q=80"
                alt="Classic Italian car workshop"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Values Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To provide exceptional automotive solutions that preserve and enhance the legacy of Italian vehicles while delivering unmatched customer service and technical expertise.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#006400] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Excellence in service and technical expertise</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#006400] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Innovation in automotive solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#006400] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Customer satisfaction and trust</span>
                </li>
              </ul>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Values</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality</h3>
                  <p className="text-gray-600">Unwavering commitment to excellence in every service we provide.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Integrity</h3>
                  <p className="text-gray-600">Honest, transparent relationships with our clients and partners.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
                  <p className="text-gray-600">Embracing new technologies while respecting tradition.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Expertise</h3>
                  <p className="text-gray-600">Deep knowledge and continuous learning in our field.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="CEO"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Michael Romano</h3>
              <p className="text-gray-600 mb-2">CEO & Founder</p>
              <p className="text-gray-500 text-sm">25+ years of experience in Italian automotive industry</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                  alt="Technical Director"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Elena Rossi</h3>
              <p className="text-gray-600 mb-2">Technical Director</p>
              <p className="text-gray-500 text-sm">Expert in Italian performance vehicles</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
                  alt="Operations Director"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Marco Ferrari</h3>
              <p className="text-gray-600 mb-2">Operations Director</p>
              <p className="text-gray-500 text-sm">Specialized in automotive logistics and operations</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#006400] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Expertise</h3>
              <p className="text-gray-600">Specialized knowledge in Italian vehicles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#006400] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
              <p className="text-gray-600">Latest technology and techniques</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#006400] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Customer Service</h3>
              <p className="text-gray-600">Personalized attention to every client</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#006400] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Quality</h3>
              <p className="text-gray-600">Highest standards in every service</p>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
} 