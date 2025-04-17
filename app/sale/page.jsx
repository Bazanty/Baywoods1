'use client';

import { useState, useEffect } from 'react';
import { Clock, ChevronRight, Star, ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function SalePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Sale end date (3 days from now)
  const saleEndDate = new Date();
  saleEndDate.setDate(saleEndDate.getDate() + 3);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = saleEndDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const saleCategories = [
    {
      name: 'Sneakers',
      discount: '50% OFF',
      image: '/sale-sneakers.jpg',
      link: '/shop?category=sneakers&sale=true'
    },
    {
      name: 'Hoodies',
      discount: '40% OFF',
      image: '/sale-hoodies.jpg',
      link: '/shop?category=hoodies&sale=true'
    },
    {
      name: 'T-Shirts',
      discount: '35% OFF',
      image: '/sale-tshirts.jpg',
      link: '/shop?category=tshirts&sale=true'
    },
    {
      name: 'Accessories',
      discount: '30% OFF',
      image: '/sale-accessories.jpg',
      link: '/shop?category=accessories&sale=true'
    }
  ];

  const featuredDeals = [
    {
      id: 1,
      name: 'Premium Retro Sneakers',
      originalPrice: 12000,
      salePrice: 6000,
      discount: '50%',
      image: '/sale-item1.jpg',
      rating: 4.8,
      reviewCount: 124,
      limitedStock: true
    },
    {
      id: 2,
      name: 'Oversized Street Hoodie',
      originalPrice: 7500,
      salePrice: 4500,
      discount: '40%',
      image: '/sale-item2.jpg',
      rating: 4.6,
      reviewCount: 89,
      bestSeller: true
    },
    {
      id: 3,
      name: 'Graphic Print T-Shirt',
      originalPrice: 4000,
      salePrice: 2600,
      discount: '35%',
      image: '/sale-item3.jpg',
      rating: 4.5,
      reviewCount: 56,
      newArrival: true
    },
    {
      id: 4,
      name: 'Designer Baseball Cap',
      originalPrice: 3500,
      salePrice: 2450,
      discount: '30%',
      image: '/sale-item4.jpg',
      rating: 4.7,
      reviewCount: 42,
      lastChance: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/sale-banner.jpg"
            alt="Baywoods Mega Sale"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              BAYWOODS <span className="text-yellow-400">MEGA SALE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Limited time only! Huge discounts across our entire collection
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center w-20">
                <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-xs text-gray-300">DAYS</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center w-20">
                <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-xs text-gray-300">HRS</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center w-20">
                <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-300">MIN</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center w-20">
                <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-300">SEC</div>
              </div>
            </div>
            
            <Link
              href="#featured-deals"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-gray-900 hover:bg-yellow-500 shadow-lg"
            >
              Shop Now <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Sale Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop By Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleCategories.map((category, index) => (
            <Link 
              key={index} 
              href={category.link}
              className="group relative block overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                <p className="text-yellow-300 font-bold">{category.discount}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Deals */}
      <div id="featured-deals" className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Deals</h2>
            <Link 
              href="/shop?sort=discount_desc"
              className="flex items-center text-blue-600 hover:text-blue-500 font-medium mt-4 md:mt-0"
            >
              View All Sale Items <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDeals.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="aspect-square bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {product.limitedStock && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Limited Stock
                    </span>
                  )}
                  {product.bestSeller && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Best Seller
                    </span>
                  )}
                  {product.newArrival && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      New Arrival
                    </span>
                  )}
                  {product.lastChance && (
                    <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Last Chance
                    </span>
                  )}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                      <Heart className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-yellow-400 text-gray-900 text-sm font-bold px-2 py-1 rounded">
                    {product.discount} OFF
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-bold text-gray-900">KSh {product.salePrice.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 line-through">KSh {product.originalPrice.toLocaleString()}</p>
                  </div>
                  <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Limited Time Offer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">Flash Sale - Today Only!</h2>
              <p className="text-blue-100 mb-6">
                Get an extra 15% off on already discounted items. Use code: 
                <span className="font-bold text-white ml-2">FLASH15</span>
              </p>
              <div className="flex items-center gap-2 text-white mb-6">
                <Clock className="w-5 h-5" />
                <span>Ends in {timeLeft.hours} hours {timeLeft.minutes} minutes</span>
              </div>
              <Link
                href="/shop?flash_sale=true"
                className="self-start bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
              >
                Shop Flash Sale
              </Link>
            </div>
            <div className="hidden md:block relative">
              <img
                src="/flash-sale.jpg"
                alt="Flash Sale"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-purple-600/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't Miss Out On These Deals!</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            The Baywoods Mega Sale ends in {timeLeft.days} days {timeLeft.hours} hours. 
            Shop now before these prices are gone!
          </p>
          <Link
            href="/shop?sale=true"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-gray-900 hover:bg-yellow-500 shadow-lg"
          >
            Shop All Sale Items <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}