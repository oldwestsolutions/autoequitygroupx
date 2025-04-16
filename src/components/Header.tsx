'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-red-600">
          AEG
        </Link>
        
        <div className="flex items-center gap-8">
          <button className="bg-black text-white hover:bg-gray-800 transition-colors rounded-2xl px-6 py-2">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 