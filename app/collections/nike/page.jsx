'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Add this import
import { ChevronRight, Star, ShoppingCart, Heart, ArrowRight, Search, Mic, MapPin, Check, Gift } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navbar from '../../components/Navbar';

// ... rest of your imports and code ...

// Dynamically load heavy components
const ThreeSneakerViewer = dynamic(() => import('../../components/ThreeSneakerViewer'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
});

const ARViewer = dynamic(() => import('../../components/ARViewer'), {
  ssr: false,
  loading: () => <button className="btn bg-blue-600 text-white">Loading AR...</button>
});

const VoiceSearch = dynamic(() => import('../../components/VoiceSearch'), {
  ssr: false
});

export default function NikeCollectionsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewedItems, setViewedItems] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showAR, setShowAR] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [stylePreferences, setStylePreferences] = useState({});
  const searchInputRef = useRef(null);

  // Nike collections data
  const nikeCollections = [
    {
      id: 'air-jordan',
      name: 'Air Jordan',
      description: 'The legacy of Michael Jordan lives on in these iconic sneakers',
      image: '/air-jordan-collection.jpg',
      models: [
        { id: 'aj1-high', name: 'Air Jordan 1 High', price: 14500, image: '/aj1-high.jpg', colors: ['red', 'black', 'blue'], sizes: [8, 9, 10, 11, 12] },
        { id: 'aj4-retro', name: 'Air Jordan 4 Retro', price: 16500, image: '/aj4-retro.jpg', colors: ['white', 'black'], sizes: [7, 8, 9, 10, 11] },
        { id: 'aj11', name: 'Air Jordan 11', price: 18500, image: '/aj11.jpg', colors: ['black', 'white'], sizes: [8, 9, 10, 11] },
        { id: 'aj6', name: 'Air Jordan 6', price: 15500, image: '/aj6.jpg', colors: ['red', 'black'], sizes: [8, 9, 10, 11, 12] }
      ]
    },
    // ... other collections (same structure as above)
  ];

  // Track viewed items
  useEffect(() => {
    const storedItems = localStorage.getItem('viewedNikeItems');
    if (storedItems) {
      setViewedItems(JSON.parse(storedItems));
    }
  }, []);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => console.error('Geolocation error:', error)
      );
    }
  }, []);

  // Fetch recommendations
  useEffect(() => {
    if (viewedItems.length > 0) {
      fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ viewedItems })
      })
      .then(res => res.json())
      .then(data => setRecommendations(data));
    }
  }, [viewedItems]);

  // Handle product view
  const handleProductView = (productId) => {
    const updatedItems = [...new Set([...viewedItems, productId])].slice(0, 5);
    setViewedItems(updatedItems);
    localStorage.setItem('viewedNikeItems', JSON.stringify(updatedItems));
  };

  // Style quiz handler
  const handleStyleQuiz = (answers) => {
    setStylePreferences(answers);
    setQuizCompleted(true);
    // Store in cookies or local storage
    document.cookie = `stylePrefs=${JSON.stringify(answers)}; path=/; max-age=2592000`; // 30 days
  };

  // Voice search handler
  const handleVoiceSearch = (transcript) => {
    if (searchInputRef.current) {
      searchInputRef.current.value = transcript;
      // Trigger search
    }
  };

  // Filter collections based on active filter
  const filteredCollections = nikeCollections.filter(collection => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'recommended') {
      return recommendations.some(rec => 
        collection.models.some(model => model.id === rec.productId)
      );
    }
    return collection.id === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Navbar />
      
      {/* Hero Banner with Parallax Effect */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-black/30 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)'
          }}
        ></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(/nike-hero-banner.jpg)',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
            transition: 'transform 0.3s ease-out',
            backgroundPosition: 'center calc(50% + var(--mouse-y, 0px))'
          }}
          onMouseMove={(e) => {
            const y = (e.clientY / window.innerHeight) * 20 - 10;
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          }}
        ></div>
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Nike Collections
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl text-gray-300 mb-8">
              Explore authentic Nike footwear with immersive 3D previews and AR try-on
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#collections"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 transition-all hover:scale-105"
              >
                View Collections <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              
              <button 
                onClick={() => setShowAR(true)}
                className="inline-flex items-center justify-center rounded-md border border-white px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-all hover:scale-105"
              >
                Try AR Experience
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Style Quiz Modal */}
      {!quizCompleted && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold mb-4">Find Your Perfect Nike Style</h3>
            <p className="text-gray-600 mb-6">Answer a few questions for personalized recommendations</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">What's your primary use for sneakers?</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['Running', 'Basketball', 'Casual', 'Training'].map((use) => (
                    <button
                      key={use}
                      onClick={() => handleStyleQuiz({ ...stylePreferences, primaryUse: use })}
                      className="border rounded-lg p-3 hover:bg-gray-100"
                    >
                      {use}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* More quiz questions would go here */}
              
              <button 
                onClick={() => setQuizCompleted(true)}
                className="w-full bg-black text-white py-3 rounded-lg font-medium"
              >
                Get Recommendations
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AR Viewer Modal */}
      {showAR && (
        <div className="fixed inset-0 bg-black/90 z-50">
          <button 
            onClick={() => setShowAR(false)}
            className="absolute top-4 right-4 text-white z-50"
          >
            Close AR
          </button>
          <ARViewer modelId="nike-airmax" />
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search Nike collections..."
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" />
              
              <div className="absolute right-3 top-3">
                <VoiceSearch onTranscript={handleVoiceSearch} />
              </div>
            </div>
            
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="all">All Collections</option>
              <option value="recommended">Recommended For You</option>
              {nikeCollections.map(collection => (
                <option key={collection.id} value={collection.id}>
                  {collection.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Size filters */}
          <div className="flex flex-wrap gap-2">
            {[7, 8, 9, 10, 11, 12].map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                className={`px-4 py-2 rounded-full ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-100'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Recommended Section */}
        {recommendations.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Recommended For You</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recommendations.slice(0, 4).map(rec => {
                const product = nikeCollections
                  .flatMap(c => c.models)
                  .find(m => m.id === rec.productId);
                
                return product ? (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onView={() => handleProductView(product.id)}
                    badge="Recommended"
                  />
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* All Collections */}
        <div id="collections" className="space-y-20">
          {filteredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
                <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-first' : 'order-last'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{collection.name}</h3>
                  <p className="text-gray-600 mb-6">{collection.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {collection.models.slice(0, 3).map(model => (
                      <span key={model.id} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {model.name}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/shop?brand=nike&collection=${collection.id}`}
                    className="self-start inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 transition-all hover:scale-105"
                  >
                    Shop {collection.name}
                  </Link>
                </div>
                
                <div className="relative aspect-square">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* 3D Preview Button */}
                  <button 
                    onClick={() => handleProductView(collection.models[0].id)}
                    className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <span>3D Preview</span>
                  </button>
                </div>
              </div>
              
              {/* Featured Models */}
              <div className="p-6 md:p-8 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-medium text-gray-900">Featured Models</h4>
                  
                  {userLocation && (
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Available in 3 stores near you</span>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {collection.models
                    .filter(model => !selectedSize || model.sizes.includes(selectedSize))
                    .map((model, modelIndex) => (
                      <ProductCard 
                        key={modelIndex} 
                        product={model} 
                        onView={() => handleProductView(model.id)}
                      />
                    ))
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Authenticity Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">100% Authentic Nike Products</h2>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium">Verified Official Retailer</span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Every Nike product at Baywoods comes with our authenticity guarantee and full manufacturer warranty.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                    <Check className="w-4 h-4 mr-1 text-green-600" />
                    Direct from Nike
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                    <Check className="w-4 h-4 mr-1 text-green-600" />
                    Quality Guaranteed
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center">
                    <Check className="w-4 h-4 mr-1 text-green-600" />
                    Latest Releases
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block relative">
                <img
                  src="/nike-authenticity.jpg"
                  alt="Nike Authenticity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent"></div>
                
                {/* Blockchain verification badge */}
                <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="text-blue-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L4 7v10l8 5 8-5V7L12 2zm0 15l-5-3v-6l5 3 5-3v6l-5 3z" />
                      </svg>
                    </div>
                    <span className="font-medium">Blockchain Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loyalty Program CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Gift className="mx-auto w-12 h-12 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Join Baywoods Premium</h2>
            <p className="text-xl mb-8">
              Get exclusive access to limited edition Nike releases, early product drops, and member-only pricing.
            </p>
            <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 transition-all hover:scale-105">
              Learn About Benefits <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Cart Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button className="bg-black text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            3
          </span>
        </button>
      </motion.div>
    </div>
  );
}

// Product Card Component
function ProductCard({ product, onView, badge }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onMouseEnter={() => {
        setIsHovered(true);
        onView();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative"
    >
      {badge && (
        <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold z-10">
          {badge}
        </div>
      )}
      
      <button 
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
      </button>
      
      <div className="aspect-square bg-gray-200 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent flex items-end p-4"
          >
            <button className="w-full bg-black text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Quick View
            </button>
          </motion.div>
        )}
      </div>
      
      <div className="p-4">
        <h5 className="font-medium text-gray-900 mb-1">{product.name}</h5>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                className={`w-4 h-4 ${star <= 4 ? 'fill-current' : ''}`} // 4/5 stars
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">(124)</span>
        </div>
        
        <div className="flex items-center gap-3">
          <p className="text-lg font-bold text-gray-900">KSh {product.price.toLocaleString()}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">KSh {product.originalPrice.toLocaleString()}</p>
          )}
        </div>
        
        <div className="mt-3 flex gap-2">
          {product.colors?.slice(0, 3).map((color, i) => (
            <div 
              key={i}
              className="w-4 h-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            ></div>
          ))}
          {product.colors?.length > 3 && (
            <div className="text-xs text-gray-500">+{product.colors.length - 3} more</div>
          )}
        </div>
        
        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}