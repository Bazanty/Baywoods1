'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
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
    <div className="min-h-screen">
      {/* Transparent Navbar */}
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
              <div className="relative group">
                <button className={`flex items-center gap-1 transition-colors ${scrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
                  About
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <Link href="/about/stories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Stories</Link>
                  <Link href="/about/impacts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Impacts</Link>
                  <Link href="/about/newsroom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Newsroom</Link>
                </div>
              </div>
            </div>

            <Link href="/cart" className={`ml-4 ${scrolled ? 'text-black' : 'text-white'}`}>
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div className={`md:hidden ${scrolled ? 'bg-white' : 'bg-black bg-opacity-90'} text-white`}>
            <div className="px-6 pt-2 pb-4 space-y-2">
              <Link href="/" className="block py-2 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/shop" className="block py-2 border-b border-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </Link>
              <div className="py-2 border-b border-gray-700">
                <div className="font-medium">About</div>
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/about/stories" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Stories
                  </Link>
                  <Link href="/about/impacts" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Impacts
                  </Link>
                  <Link href="/about/newsroom" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                    Newsroom
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/about-hero.jpg"
          alt="About Baywoods"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Discover the passion, craftsmanship, and vision behind Baywoods
            </p>
          </div>
        </div>
      </div>

      {/* About Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Stories */}
          <Link href="/about/stories" className="group">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src="/stories.jpg"
                alt="Our Stories"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4 group-hover:text-gray-600 transition-colors">Our Stories</h2>
            <p className="text-gray-600 mt-2">
              The journey of Baywoods from humble beginnings to industry leaders
            </p>
          </Link>

          {/* Impacts */}
          <Link href="/about/impacts" className="group">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src="/impacts.jpg"
                alt="Our Impacts"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4 group-hover:text-gray-600 transition-colors">Our Impacts</h2>
            <p className="text-gray-600 mt-2">
              How we're making a difference in communities and the environment
            </p>
          </Link>

          {/* Newsroom */}
          <Link href="/about/newsroom" className="group">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src="/newsroom.jpg"
                alt="Newsroom"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4 group-hover:text-gray-600 transition-colors">Newsroom</h2>
            <p className="text-gray-600 mt-2">
              Latest updates, press releases, and media coverage
            </p>
          </Link>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Baywoods, we're committed to creating exceptional products while maintaining sustainable practices
            and giving back to our community. We believe in quality craftsmanship, ethical sourcing,
            and making a positive impact through every pair we create.
          </p>
        </div>
      </div>

      {/* Footer */}
     <div>
        <Footer />
     </div>
     </div> )}
    