import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCollections() {
  const collections = [
    { 
      name: 'Nike Air', 
      image: '/Nike.jpeg', 
      link: '/collections/nike',
      description: 'Iconic sneaker culture'
    },
    { 
      name: 'Adidas Originals', 
      image: '/campus.jpeg', 
      link: '/collections/adidas',
      description: 'Streetwear essentials'
    },
    { 
      name: 'Yeezy Boost', 
      image: '/Yeezy.jpeg', 
      link: '/collections/yeezys',
      description: 'Limited edition drops'
    },
    { 
      name: 'New Era 9FIFTY', 
      image: '/Loewe.jpeg', 
      link: '/collections/caps',
      description: 'Official fitted caps'
    },
  ];

  return (
    <section className="py-16 bg-baywoods-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-baywoods-accent font-medium">Curated Selection</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Featured Collections</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover our handpicked premium selections
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <Link 
              href={collection.link} 
              key={collection.name}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label={`Explore ${collection.name} collection`}
            >
              {/* Image with overlay */}
              <div className="aspect-square relative">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-1">{collection.name}</h3>
                <p className="text-gray-200 mb-4">{collection.description}</p>
                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">Shop now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover effect indicator */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-baywoods-accent transition-all duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/collections" 
            className="inline-flex items-center px-8 py-3 bg-baywoods-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
          >
            View All Collections
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}