'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  Heart, 
  Share2, 
  ArrowLeft, 
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle
} from 'lucide-react';

export default function ImpactPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(75);
  const [liked, setLiked] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  // WhatsApp share function
  const shareOnWhatsApp = () => {
    const message = "Check out Baywoods' community impact initiatives!";
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`, '_blank');
  };

  const testimonials = [
    {
      quote: "Baywoods is more than a brand, it's a movement. I received a pair of shoes that changed my life!",
      name: "Jane Doe",
      role: "Scholarship Recipient",
      image: "/testimonial-1.jpg"
    },
    {
      quote: "The donation I received helped me in school and gave me the confidence to chase my dreams!",
      name: "John Smith",
      role: "Community Member",
      image: "/testimonial-2.jpg"
    },
    {
      quote: "Working with Baywoods on their sustainability initiatives has been transformative for our organization.",
      name: "Sarah Johnson",
      role: "Environmental NGO Director",
      image: "/testimonial-3.jpg"
    }
  ];

  const impactStats = [
    { value: "100,000+", label: "Shoes Donated", description: "To underprivileged communities across Africa" },
    { value: "50+", label: "Communities Reached", description: "In 10 different countries" },
    { value: "1M+", label: "Lives Impacted", description: "Through our various programs" },
    { value: "75%", label: "Sustainable Materials", description: "Used in our production process" }
  ];

  const initiatives = [
    {
      title: "Walk With Purpose",
      description: "Through our flagship initiative, we've donated 100,000 pairs of shoes to underprivileged communities across Africa.",
      image: "/impact-initiative-1.jpg",
      link: "/initiatives/walk-with-purpose",
      whatsappMessage: "Learn more about our Walk With Purpose initiative:",
      details: [
        "Launched in 2021",
        "Operates in 15 countries",
        "Partnered with 50+ local organizations"
      ]
    },
    {
      title: "Sustainable Future",
      description: "We're committed to reducing our environmental footprint by implementing eco-friendly practices throughout our supply chain.",
      image: "/impact-initiative-2.jpg",
      link: "/initiatives/sustainability",
      whatsappMessage: "Discover our sustainability efforts:",
      details: [
        "Reduced carbon emissions by 40%",
        "100% recycled packaging",
        "Solar-powered factories"
      ]
    },
    {
      title: "Education First",
      description: "Our scholarship programs have helped over 500 students continue their education with proper footwear and supplies.",
      image: "/impact-initiative-3.jpg",
      link: "/initiatives/education",
      whatsappMessage: "Read about our education initiatives:",
      details: [
        "50 scholarships annually",
        "School uniform donations",
        "After-school programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-green-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Creating Lasting Impact</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              At Baywoods, we measure success not just by profits, but by the positive change we create in communities worldwide.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full ${liked ? 'bg-red-100 text-red-600' : 'bg-white/10 hover:bg-white/20'} backdrop-blur-sm transition-colors`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
                <span>{liked ? 'Liked' : 'Support Our Mission'}</span>
              </button>
              <div className="relative">
                <button 
                  onClick={() => setShareOpen(!shareOpen)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
                {shareOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg py-2 w-48 z-50">
                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <Facebook className="w-4 h-4 text-blue-600" />
                      <span>Facebook</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <Twitter className="w-4 h-4 text-blue-400" />
                      <span>Twitter</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <Instagram className="w-4 h-4 text-pink-600" />
                      <span>Instagram</span>
                    </a>
                    <button 
                      onClick={shareOnWhatsApp}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-lg text-gray-700 font-medium mb-2">{stat.label}</div>
                <p className="text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Initiatives */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we're making a difference through focused programs and partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <ul className="mb-6 space-y-2">
                    {initiative.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <Link href={initiative.link} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                      Learn more <ChevronRight className="w-5 h-5 ml-1" />
                    </Link>
                    <button 
                      onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(initiative.whatsappMessage + ' ' + window.location.origin + initiative.link)}`, '_blank')}
                      className="text-green-600 hover:text-green-800"
                      aria-label="Share on WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Progress Toward 2025 Goals</h2>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Current Progress</span>
                <span className="font-medium text-blue-600">{progress}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <p className="text-gray-600 mb-8">
              We're making great strides toward our ambitious 2025 goals. Join us in creating lasting change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Support Our Mission
              </button>
              <button 
                onClick={() => window.open('https://wa.me/254712345678?text=I%20want%20to%20support%20Baywoods%20mission', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-br from-blue-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Stories of Impact</h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-6xl mx-auto gap-8">
                      <div className="w-full md:w-1/3">
                        <div className="relative h-64 rounded-xl overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-2/3">
                        <p className="text-xl md:text-2xl italic mb-8">"{testimonial.quote}"</p>
                        <div className="font-bold text-lg">{testimonial.name}</div>
                        <div className="text-blue-200">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setActiveSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setActiveSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer CTA */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-3xl p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Join Our Movement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Become a volunteer and help us create lasting change in communities worldwide.
            </p>
            <form className="max-w-md mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option value="">Select Interest</option>
                  <option value="donations">Donations</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="partnerships">Partnerships</option>
                </select>
              </div>
              <textarea
                placeholder="Why do you want to volunteer with us?"
                className="w-full p-3 border border-gray-300 rounded-lg mb-6"
                rows="3"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Sign Up to Volunteer
              </button>
            </form>
            <div className="mt-8">
              <p className="mb-4">Or contact us directly:</p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => window.open('https://wa.me/254712345678', '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
                <a href="tel:+254712345678" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2">
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with WhatsApp */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Baywoods
            </h3>
            <p className="text-gray-400 mb-4">
              Crafting premium footwear while creating positive change since 2024
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => window.open('https://wa.me/254712345678', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Support
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">About</h4>
            <ul className="space-y-3">
              <li><Link href="/about/stories" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/about/impacts" className="text-gray-400 hover:text-white transition-colors">Impact</Link></li>
              <li><Link href="/about/newsroom" className="text-gray-400 hover:text-white transition-colors">Newsroom</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-3">
              <li><Link href="/volunteer" className="text-gray-400 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link href="/donate" className="text-gray-400 hover:text-white transition-colors">Donate</Link></li>
              <li><Link href="/partnerships" className="text-gray-400 hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <Link href="#" className="bg-gray-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="bg-gray-700 hover:bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="bg-gray-700 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </Link>
              <button 
                onClick={() => window.open('https://wa.me/254712345678', '_blank')}
                className="bg-gray-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium">Contact Us</h5>
              <p className="text-gray-400">+254 712 345 678</p>
              <p className="text-gray-400">info@baywoods.com</p>
              <p className="text-gray-400">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">© 2024 Baywoods. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}