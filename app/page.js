import CheckoutForm from "./components/CheckoutForm";
import FeaturedCollections from "./components/FeaturedCollections";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import TrendingProducts from "./components/TrendingProducts";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div>
        <Navbar />
        <Hero />
        <FeaturedCollections />
        <TrendingProducts />
        <PromoBanner />
        <CheckoutForm />
      </div>
     </main>
)}