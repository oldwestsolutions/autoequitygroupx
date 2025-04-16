'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { newsImages } from '../news/images';

// Sample article data with real images
const articles = [
  {
    id: 1,
    title: "The Evolution of Italian Supercars: From Classic to Modern",
    excerpt: "Explore how Italian supercars have evolved over the decades, from the iconic designs of the 1960s to today's cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "History",
    make: "Ferrari",
    model: "250 GTO",
    year: "1962",
    readTime: "8 min read",
    author: "Marco Rossi",
    date: "March 20, 2024",
    upvotes: 1245,
    comments: 89
  },
  {
    id: 2,
    title: "Lamborghini's Latest Innovation: The Future of Electric Supercars",
    excerpt: "Lamborghini reveals their vision for the future of electric supercars, combining Italian craftsmanship with sustainable technology.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Technology",
    make: "Lamborghini",
    model: "Revuelto",
    year: "2024",
    readTime: "6 min read",
    author: "Giovanni Bianchi",
    date: "March 18, 2024",
    upvotes: 987,
    comments: 67
  },
  {
    id: 3,
    title: "Restoring a Classic: The 1971 Alfa Romeo Montreal",
    excerpt: "Follow the journey of restoring a rare 1971 Alfa Romeo Montreal to its former glory, with expert insights and detailed photos.",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Restoration",
    make: "Alfa Romeo",
    model: "Montreal",
    year: "1971",
    readTime: "10 min read",
    author: "Luca Ferrari",
    date: "March 15, 2024",
    upvotes: 1567,
    comments: 112
  },
  {
    id: 4,
    title: "Maserati's Return to Racing: The MC20 GT2",
    excerpt: "Maserati announces their return to GT racing with the new MC20 GT2, bringing Italian racing heritage back to the track.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Racing",
    make: "Maserati",
    model: "MC20 GT2",
    year: "2024",
    readTime: "5 min read",
    author: "Antonio Romano",
    date: "March 12, 2024",
    upvotes: 876,
    comments: 54
  }
];

// Sample makes, models, and years
const makes = [
  // Italian
  "Ferrari", "Lamborghini", "Maserati", "Alfa Romeo", "Pininfarina",
  // American
  "Ford", "Chevrolet", "Dodge", "Jeep", "Tesla", "Cadillac", "Buick", "Lincoln",
  // Japanese
  "Toyota", "Honda", "Nissan", "Mazda", "Subaru", "Lexus", "Acura", "Infiniti",
  // German
  "BMW", "Mercedes-Benz", "Audi", "Porsche", "Volkswagen", "Mini", "Smart"
];

const models = [
  // Italian
  "250 GTO", "Revuelto", "MC20 GT2", "Montreal", "Battista",
  // American
  "Mustang", "Corvette", "Charger", "Wrangler", "Model S", "Escalade", "Enclave", "Navigator",
  // Japanese
  "Supra", "Civic", "GT-R", "MX-5", "WRX", "LS", "NSX", "Q50",
  // German
  "M3", "S-Class", "R8", "911", "Golf", "Cooper", "ForTwo"
];

const years = ["1962", "1971", "2023", "2024"];

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMake = !selectedMake || article.make === selectedMake;
    const matchesModel = !selectedModel || article.model === selectedModel;
    const matchesYear = !selectedYear || article.year === selectedYear;
    return matchesSearch && matchesMake && matchesModel && matchesYear;
  });

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Italian Automotive Articles</h1>
            <p className="text-xl text-gray-300">
              Discover in-depth articles about Italian cars, from classic restorations to the latest innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006400]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <select
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006400]"
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
              >
                <option value="">All Makes</option>
                {makes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
              <select
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006400]"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                <option value="">All Models</option>
                {models.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
              <select
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006400]"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-[#006400] text-white rounded-full text-sm">
                          {article.category}
                        </span>
                        <span className="text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500">{article.make} {article.model} ({article.year})</span>
                          <span className="text-sm text-gray-500">By {article.author}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500">{article.upvotes} upvotes</span>
                          <span className="text-sm text-gray-500">{article.comments} comments</span>
                          <button className="flex items-center gap-2 text-[#006400] hover:text-[#004d00] transition-colors">
                            Read More <ChevronRightIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Articles */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {articles.slice(0, 3).map(article => (
                    <div key={article.id} className="flex items-start gap-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{article.title}</h4>
                        <p className="text-xs text-gray-500">{article.upvotes} upvotes</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Rated Articles */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Top Rated Articles</h3>
                <div className="space-y-4">
                  {[...articles]
                    .sort((a, b) => b.upvotes - a.upvotes)
                    .slice(0, 3)
                    .map(article => (
                      <div key={article.id} className="flex items-start gap-4">
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{article.title}</h4>
                          <p className="text-xs text-gray-500">{article.upvotes} upvotes</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {[
                    "History",
                    "Technology",
                    "Restoration",
                    "Racing",
                    "Performance",
                    "Maintenance",
                    "Reviews",
                    "Classics"
                  ].map(category => (
                    <button
                      key={category}
                      className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 