'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function StoriesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timeline = [
    {
      year: "2010",
      title: "Humble Beginnings",
      description: "Founded in a small garage with just three employees, Baywoods started with a vision to create premium footwear.",
      image: "/story-2010.jpg"
    },
    // Add more timeline items as needed
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className={`text-2xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>
            BAYWOODS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/" className={`transition-colors ${scrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
                Home
              </Link>
              <Link href="/shop" className={`transition-colors ${scrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
                Shop
              </Link>
              <Link href="/about/stories" className={`transition-colors ${scrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
                Stories
              </Link>
              <Link href="/about/impacts" className={`transition-colors ${scrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
                Impacts
              </Link>
              <Link href="/about/newsroom" className={`transition-colors ${scrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
                Newsroom
              </Link>
            </div>

            <Link href="/cart" className={`ml-4 ${scrolled ? 'text-black' : 'text-white'}`}>
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button - Corrected Implementation */}
          <button 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${scrolled ? 'bg-white' : 'bg-black bg-opacity-90'} ${scrolled ? 'text-black' : 'text-white'}`}>
            <div className="px-6 pt-2 pb-4 space-y-3">
              <Link href="/" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/shop" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </Link>
              <Link href="/about/stories" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Stories
              </Link>
              <Link href="/about/impacts" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                Impacts
              </Link>
              <Link href="/about/newsroom" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                Newsroom
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Rest of your Stories page content */}
      <div className="pt-16">
        {/* Hero section */}
        <div className="relative h-[60vh]">
          <Image
            src="/stories-hero.jpg"
            alt="Our Story"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Journey</h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                The story of Baywoods - from a small workshop to a global brand
              </p>
            </div>
          </div>
        </div>

        {/* Timeline and other sections */}
        {/* ... */}
      </div>
    </div>
  );
}