import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';

export default function TrendingProducts() {
  const products = [
    { 
      name: 'TNS Premium', 
      image: '/Tns.jpeg', 
      link: '/products/tns-shoes',
      price: 189.99,
      rating: 4.8,
      isNew: true
    },
    { 
      name: 'Nike Nocta Gold', 
      image: '/noctas.jpeg', 
      link: '/products/nike-noctas',
      price: 249.99,
      rating: 4.9,
      isLimited: true
    },
    { 
      name: 'J4 Travis Scott', 
      image: '/j4travis.jpeg', 
      link: '/products/j4-travis',
      price: 399.99,
      rating: 5.0,
      isBestSeller: true
    },
    { 
      name: 'Adidas Sambas OG', 
      image: '/samba.jpeg', 
      link: '/products/sambas',
      price: 129.99,
      rating: 4.7
    },
    { 
      name: 'Adidas Campus 00s', 
      image: '/campus.jpeg', 
      link: '/products/campus',
      price: 109.99,
      rating: 4.5
    },
    { 
      name: 'Vans Old Skool Pro', 
      image: '/navs.jpeg', 
      link: '/products/vans',
      price: 89.99,
      rating: 4.6,
      isNew: true
    },
    { 
      name: 'Dr. Martens 1460', 
      image: '/DrMartens.jpeg', 
      link: '/products/dr-martens',
      price: 179.99,
      rating: 4.9
    },
  ];

  return (
    <section className="py-16 bg-baywoods-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-baywoods-accent/10 text-baywoods-accent mb-4">
            Hot This Week
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Trending Now</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            The most coveted styles of the season, curated for you
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.name}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Product Badges */}
              <div className="absolute top-3 left-3 z-10 flex gap-2">
                {product.isNew && (
                  <span className="px-2 py-1 text-xs font-bold rounded bg-green-500 text-white">
                    NEW
                  </span>
                )}
                {product.isLimited && (
                  <span className="px-2 py-1 text-xs font-bold rounded bg-red-500 text-white">
                    LIMITED
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="px-2 py-1 text-xs font-bold rounded bg-baywoods-primary text-white">
                    BESTSELLER
                  </span>
                )}
              </div>

              {/* Product Image */}
              <Link href={product.link} className="block relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">
                    <Link href={product.link} className="hover:text-baywoods-accent transition">
                      {product.name}
                    </Link>
                  </h3>
                  <span className="font-bold text-baywoods-primary">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-baywoods-accent text-baywoods-accent' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{product.rating}</span>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-baywoods-primary text-white rounded-lg hover:bg-opacity-90 transition">
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>

              {/* Quick View Button (appears on hover) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link 
                  href={product.link}
                  className="px-6 py-2 bg-white text-baywoods-primary rounded-full font-medium shadow-lg hover:bg-gray-50 transition"
                >
                  Quick View
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/shop" 
            className="inline-flex items-center px-8 py-3 bg-baywoods-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all group"
          >
            Explore All Products
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}