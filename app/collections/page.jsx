'use client'
import Image from 'next/image';
import { useState } from 'react';
import { Heart, Star, ChevronRight, ShoppingBag } from 'lucide-react';

const filters = [
  { name: 'Puffer Jacket', id: 'puffer-jacket' },
  { name: 'Puffer Men Pant', id: 'puffer-pant' },
  { name: 'Light Puffer Jacket', id: 'light-puffer' },
  { name: 'Winter Jacket', id: 'winter-jacket' },
  { name: 'Rain Jacket', id: 'rain-jacket' }
];

const products = [
  {
    id: 1,
    name: 'Columbia Puffer Coat',
    price: 289.00,
    originalPrice: 349.00,
    image: '/puffer1.jpg',
    category: 'puffer-jacket',
    rating: 4.8,
    reviews: 124,
    colors: ['black', 'navy', 'olive'],
    isNew: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: 'Columbia Puffer Men',
    price: 289.00,
    image: '/puffer2.jpg',
    category: 'puffer-jacket',
    rating: 4.5,
    reviews: 89,
    colors: ['black', 'gray'],
    isNew: false,
    isBestSeller: false
  },
  // Add more products following the same structure
];

export default function NewArrivals() {
  const [selectedFilter, setSelectedFilter] = useState('puffer-pant');
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const filteredProducts = products.filter(
    (product) => product.category === selectedFilter
  );

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">NEW ARRIVALS</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our latest collection of premium outerwear for the season
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              selectedFilter === filter.id
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-800 border-gray-300 hover:border-black'
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Product Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="bg-baywoods-primary text-white px-2 py-1 rounded-full text-xs font-bold">
                    BESTSELLER
                  </span>
                )}
              </div>
              
              {/* Quick Actions */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                >
                  <Heart 
                    className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                  />
                </button>
                <button 
                  onClick={() => setQuickViewProduct(product)}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                >
                  <Eye className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
            
            <div className="mt-4">
              <h2 className="font-medium text-gray-900">{product.name}</h2>
              <div className="flex items-center mt-1">
                <div className="flex mr-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>
              <div className="mt-1">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="inline-flex items-center px-6 py-3 border border-black rounded-full font-medium hover:bg-black hover:text-white transition-all">
          View All New Arrivals
          <ChevronRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square">
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{quickViewProduct.name}</h2>
                    <div className="flex items-center mt-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(quickViewProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {quickViewProduct.reviews} reviews
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setQuickViewProduct(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="my-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">${quickViewProduct.price.toFixed(2)}</span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-gray-500 line-through">
                        ${quickViewProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    {Math.round((1 - quickViewProduct.price / quickViewProduct.originalPrice) * 100)}% OFF
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Colors</h3>
                  <div className="flex gap-2">
                    {quickViewProduct.colors.map(color => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full border-2 ${color === 'black' ? 'border-black' : 'border-gray-300'}`}
                      >
                        <div 
                          className="w-6 h-6 rounded-full mx-auto"
                          style={{ 
                            backgroundColor: color === 'black' ? '#000' : 
                                           color === 'navy' ? '#001f3f' : '#3d9970'
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <button className="w-full py-3 bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-2">Product Details</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Waterproof and windproof fabric</li>
                    <li>• Insulated for warmth</li>
                    <li>• Adjustable hood and cuffs</li>
                    <li>• Multiple pockets for storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}