const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/shop" className="hover:text-white">All Products</a></li>
            <li><a href="/collections" className="hover:text-white">Collections</a></li>
            <li><a href="/new-arrivals" className="hover:text-white">New Arrivals</a></li>
            <li><a href="/best-sellers" className="hover:text-white">Best Sellers</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping Info</a></li>
            <li><a href="/returns" className="hover:text-white">Returns & Exchanges</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Join Our Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">Be the first to know about drops, deals & discounts.</p>
          <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-md text-black w-full"
            />
            <button
              type="submit"
              className="bg-baywoods-primary hover:bg-baywoods-primary/90 text-white px-4 py-2 rounded-md w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brown-700 py-10 text-center px-4 sm:px-0">
        <p className="text-gray-300 text-sm mb-4">
          Elevate your streetwear game with our curated collection of shoes and caps.
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">Baywoods</h1>
        <div className="text-sm text-gray-400 mt-2">
          &copy; {new Date().getFullYear()} Baywoods. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
