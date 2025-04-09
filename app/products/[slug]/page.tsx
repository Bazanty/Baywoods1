import { notFound } from 'next/navigation';
import Image from 'next/image';
type Product = {
  name: string;
  image: string;
  price: number;
  rating: number;
  slug: string;
};

const products: Product[] = [
  {
    name: 'TNS Premium',
    image: '/Tns.jpeg',
    slug: 'tns-shoes',
    price: 189.99,
    rating: 4.8,
  },
  {
    name: 'Nike Nocta Gold',
    image: '/noctas.jpeg',
    slug: 'nike-noctas',
    price: 249.99,
    rating: 4.9,
  },
  {
    name: 'J4 Travis Scott',
    image: '/j4travis.jpeg',
    slug: 'j4-travis',
    price: 399.99,
    rating: 5.0,
  },
  {
    name: 'Adidas Sambas OG',
    image: '/samba.jpeg',
    slug: 'sambas',
    price: 129.99,
    rating: 4.7,
  },
  {
    name: 'Adidas Campus 00s',
    image: '/campus.jpeg',
    slug: 'campus',
    price: 109.99,
    rating: 4.5,
  },
  {
    name: 'Vans Old Skool Pro',
    image: '/navs.jpeg',
    slug: 'vans',
    price: 89.99,
    rating: 4.6,
  },
  {
    name: 'Dr. Martens 1460',
    image: '/DrMartens.jpeg',
    slug: 'dr-martens',
    price: 179.99,
    rating: 4.9,
  },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-[500px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-baywoods-primary text-2xl font-semibold mb-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-4">⭐ {product.rating} / 5</p>
          <button className="px-6 py-3 bg-baywoods-primary text-white rounded-lg hover:bg-opacity-90 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
