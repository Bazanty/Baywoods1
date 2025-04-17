'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Heart, Star, ChevronRight, ShoppingBag, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

// Type definitions
type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  colors: string[];
  isNew: boolean;
  isBestSeller: boolean;
};

type Filter = {
  name: string;
  id: string;
};

const filters: Filter[] = [
  { name: 'Nikes Dunks', id: 'nikes-dunks' },
  { name: 'Adidas', id: 'adidas' },
  { name: 'Jordans', id: 'jordans' },
  { name: 'Vans', id: 'vans' },
  { name: 'Amiri', id: 'amiri' }
];

const products: Product[] = [
  {
    id: 1,
    name: 'Nike Tns',
    price: 289.0,
    originalPrice: 349.0,
    image: '/Tns.jpeg',
    category: 'nikes-dunks',
    rating: 4.8,
    reviews: 124,
    colors: ['black', 'navy', 'olive'],
    isNew: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: 'Adidas Superstar',
    price: 289.0,
    image: '/puffer2.jpg',
    category: 'adidas',
    rating: 4.5,
    reviews: 89,
    colors: ['black', 'gray'],
    isNew: false,
    isBestSeller: false
  }
];

export default function ProductCollection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('nikes-dunks');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = products.filter(
    (product) => product.category === selectedFilter
  );

  const toggleWishlist = (productId: number): void => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleCardHover = (
    e: React.MouseEvent<HTMLDivElement>,
    productId: number,
    isEntering: boolean
  ): void => {
    const card = e.currentTarget;
    
    if (isEntering) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleY = (x - centerX) / 20;
      const angleX = (centerY - y) / 20;

      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      card.style.transition = 'transform 0.1s ease';
      setHoveredProduct(productId);
    } else {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      setHoveredProduct(null);
    }
  };

  return (
    <div className="min-h-screen w-full text-black" >
      <Navbar />
      {/* Full-page background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/Tns.jpeg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-sm"></div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Header section */}
        <div className="text-center mb-12 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-2 text-black"
          >
            SNEAKER COLLECTION
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-800 max-w-2xl mx-auto"
          >
            Discover our latest collection of premium sneakers
          </motion.p>
        </div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                selectedFilter === filter.id
                  ? 'bg-black text-white border-black shadow-lg'
                  : 'bg-white text-black border-gray-200 hover:border-black shadow-md'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Product grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => handleCardHover(e, product.id, true)}
              onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => handleCardHover(e, product.id, true)}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => handleCardHover(e, product.id, false)}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group border border-gray-200 backdrop-blur-sm bg-opacity-80"
              style={{
                transform: hoveredProduct === product.id ? 'translateZ(20px)' : 'none',
                boxShadow: hoveredProduct === product.id
                  ? '0 20px 30px rgba(0,0,0,0.1)'
                  : '0 10px 15px rgba(0,0,0,0.05)'
              }}
            >
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {product.isNew && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-md"
                    >
                      NEW
                    </motion.span>
                  )}
                  {product.isBestSeller && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-md"
                    >
                      BESTSELLER
                    </motion.span>
                  )}
                </div>

                {/* Action buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  className="absolute top-3 right-3 flex flex-col gap-2 transition-opacity"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleWishlist(product.id)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlist.includes(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-800'
                      }`}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuickViewProduct(product)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                  >
                    <Eye className="w-5 h-5 text-gray-800" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Product details */}
              <div className="p-4">
                <h2 className="font-medium text-gray-900">{product.name}</h2>
                <div className="flex items-center mt-1">
                  <div className="flex mr-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                <div className="mt-1">
                  <span className="font-bold text-black">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-black rounded-full font-medium transition-all text-black hover:text-white"
          >
            View All Sneakers
            <ChevronRight className="ml-2 w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Quick View Modal */}
        <AnimatePresence>
          {quickViewProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
              onClick={() => setQuickViewProduct(null)}
            >
              <motion.div
                className="bg-white rounded-lg p-6 max-w-lg w-full text-black"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              >
                <div className="flex justify-between mb-4">
                  <h3 className="text-lg font-semibold">{quickViewProduct.name}</h3>
                  <button onClick={() => setQuickViewProduct(null)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="mb-4">
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-md w-full"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-lg">
                      ${quickViewProduct.price.toFixed(2)}
                    </span>
                    {quickViewProduct.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${quickViewProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}