'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const categories = ['Shoes', 'Caps', 'New Arrivals', 'Best Sellers'];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    console.log('Subscribed:', { email, selectedCategories });
    setSubmitted(true);
    setEmail('');
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-baywoods-primary">Join the Baywoods Club</h1>
        <p className="text-center text-gray-600">Be the first to know about new drops, exclusive offers & more.</p>

        {submitted ? (
          <div className="text-center space-y-4">
            <CheckCircle className="mx-auto text-green-500 w-10 h-10" />
            <p className="text-lg text-gray-700 font-medium">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-baywoods-primary"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">What do you want updates about?</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedCategories.includes(category)
                        ? 'bg-baywoods-primary text-white border-baywoods-primary'
                        : 'bg-white text-gray-700 border-gray-300'
                    } transition`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-baywoods-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}