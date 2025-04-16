'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, WrenchIcon, SparklesIcon, CurrencyDollarIcon, ArrowDownIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsItems = [
    {
      date: "March 15, 2024",
      title: "New Partnership with Italian Auto Parts Manufacturer",
      content: "Auto Equity Group announces strategic partnership with leading Italian automotive parts manufacturer."
    },
    {
      date: "March 10, 2024",
      title: "Innovative Insurance Solutions for Classic Cars",
      content: "Introducing our new specialized insurance program for classic and vintage vehicles."
    },
    {
      date: "March 5, 2024",
      title: "Expanding Our Network of Certified Repair Centers",
      content: "Auto Equity Group expands its network of certified repair centers across the United States."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 300000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, newsItems.length]);

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    setIsAutoPlaying(false);
  };

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    setIsAutoPlaying(false);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/racing-stripes.svg')] opacity-10"></div>
        
        <div className="relative container mx-auto px-4">
          <Header />
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-md"
            >
              <span className="text-black tracking-widest text-sm uppercase">Welcome to Auto Equity Group</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                <span className="text-[#006400]">Legendary Craftsmanship</span>,<br />
                <span className="text-black">American Innovation</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 font-light">
                Experience the perfect blend of Italian automotive excellence and American ingenuity. 
                Your trusted partner in automotive insurance and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up" className="btn-primary bg-black text-white hover:bg-gray-800 transition-colors rounded-2xl">
                  Sign Up <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link href="/learn-more" className="btn-outline border-2 border-black text-black hover:bg-black hover:text-white transition-colors rounded-2xl">
                  Learn More
                </Link>
              </div>
            </motion.div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={currentNewsIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gray-50 rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="aspect-video w-full relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80"
                        alt="Italian car showcase"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-black text-xs">{newsItems[currentNewsIndex].date}</span>
                      <h3 className="text-base font-bold text-gray-800 mt-1 mb-2">{newsItems[currentNewsIndex].title}</h3>
                      <p className="text-sm text-gray-600">{newsItems[currentNewsIndex].content}</p>
                    </div>
                  </motion.article>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  <button 
                    onClick={prevNews}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeftIcon className="w-5 h-5 text-black" />
                  </button>
                  <button 
                    onClick={nextNews}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-black" />
                  </button>
                </div>

                {/* Progress Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentNewsIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentNewsIndex ? 'bg-black' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional News Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80"
                  alt="Italian car showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
              </div>
              <span className="text-gray-800 text-sm font-medium">February 28, 2024</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">New Italian Automotive Parts Distribution Center</h3>
              <p className="text-gray-700 mb-4">Auto Equity Group opens new distribution center in Detroit, bringing premium Italian automotive parts closer to our customers.</p>
              <div className="flex items-center gap-2 text-[#006400] text-sm">
                <span>Read More</span>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80"
                  alt="Luxury vehicle insurance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
              </div>
              <span className="text-gray-800 text-sm font-medium">February 20, 2024</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">Enhanced Insurance Coverage for Luxury Vehicles</h3>
              <p className="text-gray-700 mb-4">Introducing expanded coverage options for high-end and luxury vehicles, with specialized protection for Italian imports.</p>
              <div className="flex items-center gap-2 text-[#006400] text-sm">
                <span>Read More</span>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
                  alt="Italian racing team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
              </div>
              <span className="text-gray-800 text-sm font-medium">February 15, 2024</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">Partnership with Italian Racing Team</h3>
              <p className="text-gray-700 mb-4">Auto Equity Group announces sponsorship of Italian racing team, bringing track-proven technology to our customers.</p>
              <div className="flex items-center gap-2 text-[#006400] text-sm">
                <span>Read More</span>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </motion.article>
          </div>

          {/* Latest Updates Section */}
          <div className="py-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
              <button className="text-[#006400] hover:text-[#004d00] transition-colors rounded-2xl px-4 py-2">View All</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="aspect-square rounded-lg relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80"
                        alt="Italian design studio"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <span className="text-gray-800 text-sm font-medium">February 10, 2024</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">New Italian Design Studio Opening</h3>
                    <p className="text-gray-700">Auto Equity Group establishes new design studio in Milan, focusing on innovative automotive solutions.</p>
                  </div>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <div className="aspect-square rounded-lg relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80"
                        alt="Diagnostic tools"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <span className="text-gray-800 text-sm font-medium">February 5, 2024</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">Advanced Diagnostic Tools Launch</h3>
                    <p className="text-gray-700">Introducing our new line of advanced diagnostic tools, developed in collaboration with Italian engineering experts.</p>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>

          {/* Featured Stories Section */}
          <div className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80"
                    alt="Auto insurance innovation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="text-gray-800 text-sm font-medium">January 30, 2024</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Revolutionizing Auto Insurance</h3>
                  <p className="text-gray-700 mb-4">How Auto Equity Group is transforming the insurance industry with innovative solutions and Italian expertise.</p>
                  <div className="flex items-center gap-2 text-[#006400] text-sm">
                    <span>Read Full Story</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80"
                    alt="Future of automotive innovation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="text-gray-800 text-sm font-medium">January 25, 2024</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">The Future of Automotive Innovation</h3>
                  <p className="text-gray-700 mb-4">Exploring how Italian design and American technology are shaping the future of the automotive industry.</p>
                  <div className="flex items-center gap-2 text-[#006400] text-sm">
                    <span>Read Full Story</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-aeg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-12 rounded-2xl shadow-xl"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Stay Connected</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Subscribe to our newsletter for exclusive updates, special offers, and the latest news from Auto Equity Group.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-200"
                />
                <button 
                  type="submit" 
                  className="btn-primary whitespace-nowrap rounded-2xl px-8 py-4 text-lg"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 