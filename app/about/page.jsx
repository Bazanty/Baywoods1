'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Glass Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            BAYWOODS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition-colors">
                Shop
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
                  About
                  <ChevronRight className="w-4 h-4 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 hidden group-hover:block border border-gray-100">
                  <Link href="/about/stories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Stories</Link>
                  <Link href="/about/impacts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Impacts</Link>
                  <Link href="/about/newsroom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Newsroom</Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <Link href="/cart" className="text-gray-700 hover:text-blue-600 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-gray-100" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 pt-2 pb-4 space-y-2">
              <Link href="/" className="block py-2 px-3 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/shop" className="block py-2 px-3 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </Link>
              <Link href="/about/stories" className="block py-2 px-3 rounded-lg bg-blue-50 text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Stories
              </Link>
              <Link href="/about/impacts" className="block py-2 px-3 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                Impacts
              </Link>
              <Link href="/about/newsroom" className="block py-2 px-3 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                Newsroom
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/color.jpeg"
          alt="About Baywoods"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Crafting excellence with purpose and passion
            </p>
            <div className="animate-bounce pt-12">
              <ChevronRight className="w-8 h-8 text-white mx-auto transform rotate-90" />
            </div>
          </div>
        </div>
      </div>

      {/* About Sections with Hover Effects */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Stories */}
          <Link href="/about/stories" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-square relative">
            <Image
  src="/drip5.jpeg" // Ensure this path is correct and the image is in the public folder
  alt="Our Stories"
  layout="fill" // Or use fixed width and height for more control
  objectFit="cover" // Ensures the image covers the area without distortion
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Our Stories</h2>
                <p className="text-gray-200">
                  The journey from humble beginnings to industry leaders
                </p>
                <div className="mt-4 flex items-center text-blue-300 group-hover:text-white transition-colors">
                  Explore <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Impacts */}
          <Link href="/about/impacts" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-square relative">
              <Image
                src="/Down.jpeg"
                alt="Our Impacts"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Our Impacts</h2>
                <p className="text-gray-200">
                  Making a difference in communities and environment
                </p>
                <div className="mt-4 flex items-center text-blue-300 group-hover:text-white transition-colors">
                  Discover <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Newsroom */}
          <Link href="/about/newsroom" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-square relative">
              <Image
                src="/drip.jpeg"
                alt="Newsroom"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Newsroom</h2>
                <p className="text-gray-200">
                  Latest updates and media coverage
                </p>
                <div className="mt-4 flex items-center text-blue-300 group-hover:text-white transition-colors">
                  View <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-8">
            <span className="text-sm font-medium bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
              Our Purpose
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining Fashion with Purpose</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Baywoods, we blend exceptional craftsmanship with sustainable innovation to create footwear that doesn't
            just look good, but does good. From ethical sourcing to community empowerment, every step in our process is
            designed to leave a positive footprint.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">2024</div>
            <div className="text-gray-700">Founded</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-700">Team Members</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-700">Happy Customers</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-yellow-600 mb-2">5</div>
            <div className="text-gray-700">Countries</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a brand that stands for quality, sustainability, and positive change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/shop"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Shop Our Collection
            </Link>
            <Link
              href="/about/impacts"
              className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn About Our Impact
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}