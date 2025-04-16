'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
  rating: number;
  reviews: number;
  status: 'available' | 'coming-soon';
  colors: string[];
  sizes: string[];
  badge?: string;
  description: string;
  features: string[];
  releaseDate?: string;
}

interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export default function Shop() {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = React.useState<string>('');
  const [selectedColor, setSelectedColor] = React.useState<string>('');
  const [quantity, setQuantity] = React.useState<number>(1);
  const [wishlist, setWishlist] = React.useState<Product[]>([]);
  const [showWishlist, setShowWishlist] = React.useState<boolean>(false);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: 'Baywoods Phantom X',
      price: 129.99,
      category: 'sneakers',
      images: ['/drip.jpeg'],
      rating: 4.9,
      reviews: 142,
      status: 'available',
      colors: ['#000000', '#FF0000', '#FFFFFF'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
      badge: 'Bestseller',
      description: 'Premium lightweight sneakers with advanced cushioning technology for all-day comfort.',
      features: ['Breathable mesh upper', 'Memory foam insole', 'Durable rubber outsole', 'Shock absorption']
    },
    {
      id: 2,
      name: 'Urban Explorer Jacket',
      price: 89.99,
      category: 'outerwear',
      images: ['/drip.jpeg'],
      rating: 4.7,
      reviews: 86,
      status: 'available',
      colors: ['#2C3E50', '#7F8C8D'],
      sizes: ['S', 'M', 'L', 'XL'],
      badge: 'New',
      description: 'Water-resistant jacket with multiple pockets for urban adventures.',
      features: ['Water-resistant material', 'Multiple pockets', 'Adjustable hood', 'Breathable lining']
    },
    {
      id: 3,
      name: 'Classic Logo Tee',
      price: 29.99,
      category: 'tops',
      images: ['/drip.jpeg'],
      rating: 4.5,
      reviews: 215,
      status: 'available',
      colors: ['#000000', '#FFFFFF', '#C0392B'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      description: 'Essential cotton t-shirt with minimalist logo design.',
      features: ['100% cotton', 'Reinforced stitching', 'Pre-shrunk fabric']
    },
    {
      id: 4,
      name: 'Future Retro Sneakers',
      price: 159.99,
      category: 'sneakers',
      images: ['/drip.jpeg'],
      rating: 4.8,
      reviews: 53,
      status: 'coming-soon',
      colors: ['#E74C3C', '#3498DB'],
      sizes: ['US 6', 'US 7', 'US 8', 'US 9'],
      releaseDate: '2023-12-15',
      description: 'Limited edition sneakers blending retro aesthetics with modern technology.',
      features: ['Vintage-inspired design', 'Advanced cushioning', 'Premium materials']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    if (product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size');
      return;
    }
    if (product.colors.length > 0 && !selectedColor) {
      alert('Please select a color');
      return;
    }
    
    // Add the product with selected variants
    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor,
      quantity
    };
    
    setCartItems([...cartItems, productToAdd]);
    setIsCartOpen(true);
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);
  };

  const toggleWishlist = (product: Product) => {
    if (wishlist.some(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === productId ? {...item, quantity: newQuantity} : item
    ));
  };

  const categories = ['all', ...new Set(products.map(product => product.category))];

  return (
    <div className="text-black bg-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6 md:px-20 sticky top-0 z-40">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            BAYWOODS
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {categories.map(category => (
              <button
                key={category}
                className={`capitalize ${selectedCategory === category ? 'font-bold text-red-600' : 'text-gray-600'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className="relative"
              onClick={() => setShowWishlist(!showWishlist)}
            >
              <HeartIcon filled={wishlist.length > 0} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <CartIcon />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="absolute right-3 top-2.5 text-gray-400" />
          </div>
          
          <div className="flex overflow-x-auto space-x-2 mt-2 pb-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white overflow-hidden">
        {/* ... (keep your existing hero section code) ... */}
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Desktop search and filter */}
          <div className="hidden md:flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Our Collection</h2>
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium text-gray-600">No products found</h3>
              <button 
                className="mt-4 px-6 py-2 bg-black text-white rounded-lg"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    <button 
                      className={`absolute top-4 right-4 p-2 rounded-full ${wishlist.some(item => item.id === product.id) ? 'text-red-600 bg-white' : 'text-gray-400 bg-white/80 hover:text-red-600'}`}
                      onClick={() => toggleWishlist(product)}
                    >
                      <HeartIcon filled={wishlist.some(item => item.id === product.id)} />
                    </button>
                    
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {product.badge}
                      </div>
                    )}
                    
                    {product.status === 'coming-soon' && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold bg-black px-4 py-2 rounded-lg">
                          Coming {product.releaseDate ? new Date(product.releaseDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Soon'}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold hover:text-red-600 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                      {product.name}
                    </h3>
                    <div className="flex items-center my-2">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} filled={i < Math.floor(product.rating)} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-gray-700 my-3 line-clamp-2">{product.description}</p>
                    
                    {product.colors.length > 0 && (
                      <div className="my-2">
                        <p className="text-sm text-gray-500">Colors:</p>
                        <div className="flex space-x-2 mt-1">
                          {product.colors.map(color => (
                            <button
                              key={color}
                              className={`w-6 h-6 rounded-full border ${selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                              style={{ backgroundColor: color }}
                              onClick={() => setSelectedColor(color)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {product.sizes.length > 0 && (
                      <div className="my-2">
                        <p className="text-sm text-gray-500">Sizes:</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {product.sizes.map(size => (
                            <button
                              key={size}
                              className={`px-2 py-1 text-xs rounded ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
                              onClick={() => setSelectedSize(size)}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                      {product.status === 'available' ? (
                        <button
                          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-red-600 transition-colors"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg cursor-not-allowed">
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-black">
                  &times;
                </button>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg h-80 overflow-hidden">
                    <img 
                      src={selectedProduct.images[0]} 
                      alt={selectedProduct.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-gray-100 rounded h-20 cursor-pointer hover:border-2 hover:border-black">
                        {i <= selectedProduct.images.length ? (
                          <img 
                            src={selectedProduct.images[i-1]} 
                            alt="" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < Math.floor(selectedProduct.rating)} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                    </span>
                    {selectedProduct.badge && (
                      <span className="ml-4 bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                        {selectedProduct.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-2xl font-bold mb-6">${selectedProduct.price.toFixed(2)}</p>
                  
                  <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    {selectedProduct.colors.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Color</h4>
                        <div className="flex space-x-2">
                          {selectedProduct.colors.map(color => (
                            <button
                              key={color}
                              className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
                              style={{ backgroundColor: color }}
                              onClick={() => setSelectedColor(color)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedProduct.sizes.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Size</h4>
                        <div className="grid grid-cols-4 gap-2">
                          {selectedProduct.sizes.map(size => (
                            <button
                              key={size}
                              className={`py-2 text-center rounded ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
                              onClick={() => setSelectedSize(size)}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-medium mb-2">Quantity</h4>
                      <div className="flex items-center border rounded w-32">
                        <button 
                          className="px-3 py-2 text-xl"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          -
                        </button>
                        <span className="flex-1 text-center">{quantity}</span>
                        <button 
                          className="px-3 py-2 text-xl"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      className="flex-1 py-3 bg-black text-white rounded-lg hover:bg-red-600 transition-colors"
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="p-3 border rounded-lg hover:bg-gray-100"
                      onClick={() => toggleWishlist(selectedProduct)}
                    >
                      <HeartIcon filled={wishlist.some(item => item.id === selectedProduct.id)} />
                    </button>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-medium mb-2">Features</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedProduct.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wishlist Sidebar */}
      {showWishlist && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowWishlist(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-bold">Your Wishlist ({wishlist.length})</h3>
                <button onClick={() => setShowWishlist(false)} className="p-1">
                  &times;
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {wishlist.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                    <button
                      onClick={() => setShowWishlist(false)}
                      className="px-6 py-2 bg-black text-white rounded-full"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {wishlist.map((item) => (
                      <div key={item.id} className="flex border-b pb-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="font-medium hover:text-red-600 cursor-pointer" onClick={() => {
                            setSelectedProduct(item);
                            setShowWishlist(false);
                          }}>{item.name}</h4>
                          <p className="font-bold mt-1">${item.price.toFixed(2)}</p>
                          <div className="flex justify-between items-center mt-2">
                            <button
                              className="text-sm text-black hover:text-red-600"
                              onClick={() => toggleWishlist(item)}
                            >
                              Remove
                            </button>
                            <button
                              className="text-sm bg-black text-white px-3 py-1 rounded hover:bg-red-600"
                              onClick={() => {
                                setSelectedProduct(item);
                                setShowWishlist(false);
                              }}
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {wishlist.length > 0 && (
                <div className="p-4 border-t">
                  <button 
                    className="w-full py-3 bg-black text-white rounded-full font-medium hover:bg-red-600 transition-colors"
                    onClick={() => {
                      setShowWishlist(false);
                      setIsCartOpen(true);
                    }}
                  >
                    View Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-bold">Your Cart ({cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)})</h3>
                <button onClick={() => setIsCartOpen(false)} className="p-1">
                  &times;
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">Your cart is empty</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="px-6 py-2 bg-black text-white rounded-full"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex border-b pb-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="text-sm text-gray-600 mt-1">
                            {item.selectedColor && (
                              <span>Color: <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: item.selectedColor }}></span> </span>
                            )}
                            {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center border rounded">
                              <button 
                                className="px-2 py-1"
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                              >
                                -
                              </button>
                              <span className="px-2">{item.quantity || 1}</span>
                              <button 
                                className="px-2 py-1"
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                              >
                                +
                              </button>
                            </div>
                            <p className="font-bold">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                          </div>
                          <button
                            className="text-sm text-red-600 hover:text-red-800 mt-1"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between mb-4 font-bold text-lg">
                    <span>Total</span>
                    <span>${cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0).toFixed(2)}</span>
                  </div>
                  <button className="w-full py-3 bg-black text-white rounded-full font-medium hover:bg-red-600 transition-colors mb-2">
                    Checkout
                  </button>
                  <button 
                    className="w-full py-2 border border-black rounded-full font-medium hover:bg-gray-100 transition-colors"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">BAYWOODS</h4>
            <p className="text-gray-400">Premium streetwear and sneakers for the modern urban lifestyle.</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Shop</h5>
            <ul className="space-y-2 text-gray-400">
              {categories.filter(c => c !== 'all').map(category => (
                <li key={category} className="hover:text-white cursor-pointer capitalize">{category}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Help</h5>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Shipping</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Newsletter</h5>
            <p className="text-gray-400 mb-4">Subscribe for exclusive drops and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none flex-1"
              />
              <button className="bg-red-600 px-4 py-2 rounded-r hover:bg-red-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BAYWOODS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Helper components
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);