'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, WrenchIcon, SparklesIcon, CurrencyDollarIcon, ArrowDownIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
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
                <span className="text-[#006400]">Italian Craftsmanship</span>,<br />
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
                    <div className="aspect-video w-full bg-black/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
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
              <div className="aspect-video bg-black/20 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
              </div>
              <span className="text-black text-sm font-medium">February 28, 2024</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">New Italian Automotive Parts Distribution Center</h3>
              <p className="text-gray-300 mb-4">Auto Equity Group opens new distribution center in Detroit, bringing premium Italian automotive parts closer to our customers.</p>
              <div className="flex items-center gap-2 text-black text-sm">
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
              <div className="aspect-video bg-black/20 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
              </div>
              <span className="text-black text-sm font-medium">February 20, 2024</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">Enhanced Insurance Coverage for Luxury Vehicles</h3>
              <p className="text-gray-300 mb-4">Introducing expanded coverage options for high-end and luxury vehicles, with specialized protection for Italian imports.</p>
              <div className="flex items-center gap-2 text-black text-sm">
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
              <div className="aspect-video bg-black/20 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
              </div>
              <span className="text-black text-sm font-medium">February 15, 2024</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">Partnership with Italian Racing Team</h3>
              <p className="text-gray-300 mb-4">Auto Equity Group announces sponsorship of Italian racing team, bringing track-proven technology to our customers.</p>
              <div className="flex items-center gap-2 text-black text-sm">
                <span>Read More</span>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </motion.article>
          </div>

          {/* Latest Updates Section */}
          <div className="py-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Latest Updates</h2>
              <button className="text-black hover:text-gray-800 transition-colors rounded-2xl px-4 py-2">View All</button>
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
                    <div className="aspect-square bg-black/20 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <span className="text-black text-sm font-medium">February 10, 2024</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-4">New Italian Design Studio Opening</h3>
                    <p className="text-gray-300">Auto Equity Group establishes new design studio in Milan, focusing on innovative automotive solutions.</p>
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
                    <div className="aspect-square bg-black/20 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <span className="text-black text-sm font-medium">February 5, 2024</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-4">Advanced Diagnostic Tools Launch</h3>
                    <p className="text-gray-300">Introducing our new line of advanced diagnostic tools, developed in collaboration with Italian engineering experts.</p>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>

          {/* Featured Stories Section */}
          <div className="py-12">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-black/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="text-black text-sm font-medium">January 30, 2024</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">Revolutionizing Auto Insurance</h3>
                  <p className="text-gray-300 mb-4">How Auto Equity Group is transforming the insurance industry with innovative solutions and Italian expertise.</p>
                  <div className="flex items-center gap-2 text-black text-sm">
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
                <div className="aspect-video bg-black/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="text-black text-sm font-medium">January 25, 2024</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">The Future of Automotive Innovation</h3>
                  <p className="text-gray-300 mb-4">Exploring how Italian design and American technology are shaping the future of the automotive industry.</p>
                  <div className="flex items-center gap-2 text-black text-sm">
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

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Logo</span>
                </div>
                <h3 className="text-2xl font-bold text-black">AEG</h3>
              </div>
              <p className="text-gray-600">
                Italian Craftsmanship, American Innovation
              </p>
              <div className="mt-4 flex gap-4">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Home</a></li>
                <li><a href="/learn-more" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Email: info@autoequitygroup.com</li>
                <li className="text-gray-600">Phone: (555) 123-4567</li>
                <li className="text-gray-600">Address: 123 Auto Drive, Detroit, MI 48201</li>
                <li className="text-gray-600">Hours: Mon-Fri 9:00 AM - 5:00 PM EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Auto Equity Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 