import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#e5e4e2] to-transparent text-black px-6">
      {/* Background Image or Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/Hero2.jpeg')" }}></div>
      
      <div className="relative z-10 text-center">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
          Welcome to <span className="text-black">Baywoods</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
          Where streetwear meets culture. Discover your next fit — sneakers, caps, and more.
        </p>
        
        {/* Call-to-Action Button */}
        <Link href="/shop">
          <button className="bg-green-200 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition">
            Shop 
          </button>
        </Link>
      </div>
    </section>
  );
}
