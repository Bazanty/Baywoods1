'use client';
import { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const promos = [
    "🚀 Flash Sale: 50% off select styles - Use code BAYWOODS50",
    "✨ New Arrivals: Just dropped - Limited quantities available",
    "📦 Free Worldwide Shipping: On orders over $150",
    "⭐ Exclusive: Early access for members - Sign up now"
  ];

  const handleClose = () => {
    setIsVisible(false);
  };

  const [currentPromo, setCurrentPromo] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promos.length]);

  if (!isVisible) return null;

  return (
    <section className="relative bg-gradient-to-r from-baywoods-accent/90 to-baywoods-primary/90 text-black py-3 px-4 overflow-hidden">
      <div className="container mx-auto flex items-center justify-between">
        {/* Desktop Marquee */}
        <div className="hidden md:flex w-full overflow-hidden">
          <div className="whitespace-nowrap animate-marquee flex">
            {promos.map((promo, index) => (
              <span key={index} className="inline-block mx-8 text-sm md:text-base font-medium">
                {promo}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile Rotating Message */}
        <div className="md:hidden flex-1 text-center">
          <p className="text-sm font-medium animate-fade">
            {promos[currentPromo]}
          </p>
        </div>

        {/* CTA and Close Button */}
        <div className="flex items-center ml-4">
          <Link 
            href="/sale" 
            className="hidden sm:flex items-center text-xs sm:text-sm font-bold bg-red-200 text-baywoods-primary px-3 py-1 rounded-full hover:bg-opacity-90 transition-all"
          >
            Shop Now <ArrowRight className="ml-1 w-3 h-3" />
          </Link>
          <button 
            onClick={handleClose}
            className="ml-3 p-1 rounded-full hover:bg-white/10 transition"
            aria-label="Close promotional banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes fade {
          0%, 100% { opacity: 0; }
          20%, 80% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}