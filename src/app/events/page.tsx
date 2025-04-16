'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Events() {
  const [filter, setFilter] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "Italian Classics Exhibition",
      date: "June 15, 2024",
      location: "Milan Convention Center",
      image: "https://images.unsplash.com/photo-1605559911160-a3d95d213904?auto=format&fit=crop&q=80",
      description: "Experience the finest collection of classic Italian automobiles, featuring rare and iconic models.",
      category: "Exhibition"
    },
    {
      id: 2,
      title: "Tech Workshop Series",
      date: "July 8-10, 2024",
      location: "Auto Equity Group X HQ",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
      description: "Three-day intensive workshop on Italian automotive maintenance and restoration techniques.",
      category: "Workshop"
    },
    {
      id: 3,
      title: "Supercar Summit",
      date: "August 20, 2024",
      location: "Monza Circuit",
      image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80",
      description: "Join us for an exclusive gathering of Italian supercar enthusiasts and industry experts.",
      category: "Meet-up"
    },
    {
      id: 6,
      title: "Italian Automotive Heritage Tour",
      date: "September 12-15, 2024",
      location: "Various Locations in Italy",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
      description: "A four-day immersive tour of Italy's most iconic automotive landmarks and museums.",
      category: "Tour"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Restoration Masterclass",
      date: "March 10, 2024",
      location: "Florence Workshop",
      image: "https://images.unsplash.com/photo-1621359748820-552e5693de68?auto=format&fit=crop&q=80",
      description: "Expert-led session on vintage Italian car restoration techniques and best practices.",
      category: "Workshop"
    },
    {
      id: 5,
      title: "Spring Collection Launch",
      date: "April 5, 2024",
      location: "Turin Showroom",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80",
      description: "Exclusive preview of our latest Italian automotive parts and accessories collection.",
      category: "Launch"
    }
  ];

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
          <h1 className="text-5xl font-bold mb-6">Events & Gatherings</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Join us for exclusive events celebrating Italian automotive excellence and culture.
          </p>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                filter === 'upcoming'
                  ? 'bg-[#006400] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                filter === 'past'
                  ? 'bg-[#006400] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {(filter === 'upcoming' ? upcomingEvents : pastEvents).map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-64">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#006400] text-white px-4 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{event.title}</h3>
                  <div className="flex items-center mb-4 text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center mb-4 text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <button className="w-full px-6 py-3 bg-[#006400] text-white rounded-lg hover:bg-[#005300] transition-colors">
                    {filter === 'upcoming' ? 'Register Now' : 'View Details'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
} 