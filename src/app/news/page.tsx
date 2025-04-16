'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { newsImages } from './images';

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Auto Equity Group Announces New Italian Partnership",
    excerpt: "Strategic alliance with leading Italian automotive manufacturer to bring premium parts to North America.",
    image: newsImages.partnership,
    category: "Partnership",
    date: "March 15, 2024",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "New Italian Design Studio Opening in Detroit",
    excerpt: "State-of-the-art facility to focus on innovative automotive solutions and design.",
    image: newsImages.designStudio,
    category: "Expansion",
    date: "March 10, 2024",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Advanced Diagnostic Tools Launch",
    excerpt: "Cutting-edge technology for Italian car maintenance and repair.",
    image: newsImages.diagnostic,
    category: "Technology",
    date: "March 5, 2024",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Italian Racing Team Sponsorship",
    excerpt: "Auto Equity Group partners with prestigious Italian racing team.",
    image: newsImages.racing,
    category: "Sports",
    date: "February 28, 2024",
    readTime: "3 min read"
  },
  {
    id: 5,
    title: "New Italian Parts Distribution Center",
    excerpt: "Auto Equity Group opens largest Italian car parts distribution center in North America.",
    image: newsImages.distribution,
    category: "Expansion",
    date: "February 25, 2024",
    readTime: "4 min read"
  }
];

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = newsItems.filter(news => 
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News</h1>
            <p className="text-xl text-gray-300">
              Stay updated with the latest developments in Italian automotive excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search news..."
              className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006400]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First row - two large cards */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[400px]">
                <img
                  src={filteredNews[0].image}
                  alt={filteredNews[0].title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#006400] text-white rounded-full text-sm">
                      {filteredNews[0].category}
                    </span>
                    <span className="text-white">{filteredNews[0].readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{filteredNews[0].title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{filteredNews[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">{filteredNews[0].date}</p>
                  <button className="flex items-center gap-2 text-[#006400] hover:text-[#004d00] transition-colors">
                    Read More <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[400px]">
                <img
                  src={filteredNews[1].image}
                  alt={filteredNews[1].title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#006400] text-white rounded-full text-sm">
                      {filteredNews[1].category}
                    </span>
                    <span className="text-white">{filteredNews[1].readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{filteredNews[1].title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{filteredNews[1].excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">{filteredNews[1].date}</p>
                  <button className="flex items-center gap-2 text-[#006400] hover:text-[#004d00] transition-colors">
                    Read More <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Remaining articles in a 3-column grid */}
            {filteredNews.slice(2).map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 3) * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[300px]">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#006400] text-white rounded-full text-sm">
                        {news.category}
                      </span>
                      <span className="text-white">{news.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{news.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500">{news.date}</p>
                    <button className="flex items-center gap-2 text-[#006400] hover:text-[#004d00] transition-colors">
                      Read More <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Duplicate News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Recent Developments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First row - two large cards */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[400px]">
                <img
                  src={filteredNews[0].image}
                  alt={filteredNews[0].title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#006400] text-white rounded-full text-sm">
                      {filteredNews[0].category}
                    </span>
                    <span className="text-white">{filteredNews[0].readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{filteredNews[0].title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{filteredNews[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">{filteredNews[0].date}</p>
                  <button className="flex items-center gap-2 text-[#006400] hover:text-[#004d00] transition-colors">
                    Read More <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[400px]">
                <img
                  src={filteredNews[1].image}
                  alt={filteredNews[1].title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#006400] text-white rounded-full text-sm">
                      {filteredNews[1].category}
                    </span>
                    <span className="text-white">{filteredNews[1].readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{filteredNews[1].title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{filteredNews[1].excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">{filteredNews[1].date}</p>
                  <button className="flex items-center gap-2 text-[#006400] hover:text-[#004d00] transition-colors">
                    Read More <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Remaining articles in a 3-column grid */}
            {filteredNews.slice(2).map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 3) * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[300px]">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#006400] text-white rounded-full text-sm">
                        {news.category}
                      </span>
                      <span className="text-white">{news.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{news.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500">{news.date}</p>
                    <button className="flex items-center gap-2 text-[#006400] hover:text-[#004d00] transition-colors">
                      Read More <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {filteredNews.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured News</h2>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative h-[400px]">
                  <img
                    src={filteredNews[0].image}
                    alt={filteredNews[0].title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#006400] text-white rounded-full text-sm">
                      {filteredNews[0].category}
                    </span>
                    <span className="text-gray-500">{filteredNews[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{filteredNews[0].title}</h3>
                  <p className="text-gray-600 mb-6">{filteredNews[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500">{filteredNews[0].date}</p>
                    <button className="flex items-center gap-2 text-[#006400] hover:text-[#004d00] transition-colors">
                      Read More <ChevronRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
} 