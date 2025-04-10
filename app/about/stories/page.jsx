'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, ArrowLeft, ChevronRight, Instagram, Twitter, Facebook, Heart, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';

export default function StoriesPage() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");
    const [liked, setLiked] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const timeline = [
        {
            year: "2024",
            title: "Humble Beginnings",
            description: "Baywoods was founded with a vision to curate premium footwear and fashion from the most iconic brands, including Nike, Adidas, and many others. While we currently focus on offering top-tier products from global brands, we're excited to expand into our own collection, starting with clothing such as pants and track shirts. At Baywoods, we stand for comfort, style, and quality, and we aim to bring that same essence into every piece we create. Our goal is to make the Baywoods brand recognized worldwide, with a special focus on establishing a strong presence in Kenya.",
            image: "/story1.jpeg",
            category: "milestone",
            color: "bg-blue-500"
        },
        {
            year: "2025",
            title: "First Breakthrough",
            description: "Our selection of premium sneakers gained significant attention after being worn by several influencers, leading to our first major retail partnership.",
            image: "/story-2013.jpg",
            category: "growth",
            color: "bg-green-500"
        },
        {
            year: "2023",
            title: "Sustainability Commitment",
            description: "At Baywoods, we are committed to sustainability. We strive to incorporate eco-friendly practices into our products, focusing on creating stylish, high-quality items while minimizing our environmental impact.",
            image: "/story-2016.jpg",
            category: "impact",
            color: "bg-purple-500"
        },
        {
            year: "2022",
            title: "Global Recognition",
            description: "At Baywoods, we aim to continue the culture of sneakers and establish ourselves as a leading global brand. We believe that Kenya can produce world-class products, and we are committed to changing the mindset that local brands can't achieve international success. Let Baywoods be the start of the drip, setting trends as the best streetwear brand across all borders.",
            image: "/story-2020.jpg",
            category: "milestone",
            color: "bg-blue-500"
        },
        {
            year: "2021",
            title: "Community Impact",
            description: "At Baywoods, we believe in giving back to the community. Through initiatives like our 'Walk With Purpose' program, we've donated thousands of shoes to underprivileged communities, helping those in need. We are dedicated to making a positive impact, supporting causes that align with our values, and contributing to the well-being of people around the world.",
            image: "/story-2023.jpg",
            category: "impact",
            color: "bg-purple-500"
        }
    ];

    const founders = [
        {
            name: "Brian Nyakundi",
            role: "CEO & Creative Director",
            bio: "With a background in industrial design, Brian brings the creative vision to Baywoods.",
            image: "/founder-alex.jpg",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#"
            }
        },
        {
            name: "Eva",
            role: "Head of Production",
            bio: "Eva has been handling the sales and marketing by running social media campaigns and school adverts, significantly contributing to the growing popularity of the brand.",
            image: "/founder-jordan.jpg",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#"
            }
        },
        {
            name: "Diana Nyakerario",
            role: "Community Relations",
            bio: "Taylor leads our social impact initiatives and community partnerships.",
            image: "/founder-taylor.jpg",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#"
            }
        }
    ];

    const filteredTimeline = activeFilter === "all" 
        ? timeline 
        : timeline.filter(item => item.category === activeFilter);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Modern Glass Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                        BAYWOODS
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-8 text-sm font-medium">
                            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                                Home
                            </Link>
                            <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition-colors">
                                Shop
                            </Link>
                            <div className="relative group">
                                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
                                    About
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 hidden group-hover:block border border-gray-100">
                                    <Link href="/about/stories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Stories</Link>
                                    <Link href="/about/impacts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Impacts</Link>
                                    <Link href="/about/newsroom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Newsroom</Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <Link href="/cart" className="text-gray-700 hover:text-blue-600 relative">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    3
                                </span>
                            </Link>
                        </div>
                    </div>

                    <button 
                        className="md:hidden p-2 rounded-lg bg-gray-100" 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-6 pt-2 pb-4 space-y-2">
                            <Link href="/" className="block py-2 px-3 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                                Home
                            </Link>
                            <Link href="/shop" className="block py-2 px-3 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                                Shop
                            </Link>
                            <Link href="/about/stories" className="block py-2 px-3 rounded-lg bg-blue-50 text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                                Stories
                            </Link>
                            <Link href="/about/impacts" className="block py-2 px-3 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                                Impacts
                            </Link>
                            <Link href="/about/newsroom" className="block py-2 px-3 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                                Newsroom
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section with Gradient Background */}
            <div className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-400 opacity-20 z-0"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Journey</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-lg">
                                From a small Nairobi workshop to becoming a recognized name in African streetwear fashion.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button 
                                    onClick={() => setLiked(!liked)}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-full ${liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-700'} transition-colors`}
                                >
                                    <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
                                    <span>{liked ? 'Liked' : 'Like this story'}</span>
                                </button>
                                <div className="relative">
                                    <button 
                                        onClick={() => setShareOpen(!shareOpen)}
                                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                    >
                                        <Share2 className="w-5 h-5" />
                                        <span>Share</span>
                                    </button>
                                    {shareOpen && (
                                        <div className="absolute left-0 mt-2 bg-white rounded-xl shadow-lg py-2 w-48 z-50 border border-gray-100">
                                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                                <Facebook className="w-4 h-4 text-blue-600" />
                                                Facebook
                                            </a>
                                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                                <Twitter className="w-4 h-4 text-blue-400" />
                                                Twitter
                                            </a>
                                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                                <Instagram className="w-4 h-4 text-pink-600" />
                                                Instagram
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/story1.jpeg"
                                alt="Our Story"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline Filters */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="flex flex-wrap gap-3">
                    <button 
                        onClick={() => setActiveFilter("all")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "all" ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        All Stories
                    </button>
                    <button 
                        onClick={() => setActiveFilter("milestone")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "milestone" ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        Milestones
                    </button>
                    <button 
                        onClick={() => setActiveFilter("growth")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "growth" ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        Growth
                    </button>
                    <button 
                        onClick={() => setActiveFilter("impact")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "impact" ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        Impact
                    </button>
                </div>
            </div>

            {/* Modern Timeline */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="space-y-16">
                    {filteredTimeline.map((item, index) => (
                        <div 
                            key={index}
                            className={`group relative pl-8 md:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-1 ${item.color} before:rounded-full`}
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="md:w-1/3">
                                        <div className="relative h-64 rounded-xl overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold text-black ${item.color}`}>
                                                {item.year}
                                            </span>
                                            <span className="text-sm text-gray-500">{item.category.toUpperCase()}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                        <p className="text-gray-600 mb-6">{item.description}</p>
                                        <div className="flex gap-4">
                                            <button className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm font-medium">
                                                Read more
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Founders Section */}
            <div className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet The Visionaries</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The passionate minds shaping Baywoods' future
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {founders.map((founder, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-80">
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                                        <p className="text-blue-200">{founder.role}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6">{founder.bio}</p>
                                    <div className="flex gap-4">
                                        <a href={founder.social.instagram} className="text-gray-500 hover:text-pink-600">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href={founder.social.twitter} className="text-gray-500 hover:text-blue-400">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href={founder.social.facebook} className="text-gray-500 hover:text-blue-600">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                            <div className="text-5xl font-bold text-blue-600 mb-3">10K+</div>
                            <div className="text-gray-700 font-medium">Happy Customers</div>
                        </div>
                        <div className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
                            <div className="text-5xl font-bold text-green-600 mb-3">5</div>
                            <div className="text-gray-700 font-medium">Cities</div>
                        </div>
                        <div className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
                            <div className="text-5xl font-bold text-purple-600 mb-3">50+</div>
                            <div className="text-gray-700 font-medium">Products</div>
                        </div>
                        <div className="p-8 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100">
                            <div className="text-5xl font-bold text-yellow-600 mb-3">2024</div>
                            <div className="text-gray-700 font-medium">Founded</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-28 overflow-hidden bg-gray-900">
                <Image
                    src="/cta-bg.jpg"
                    alt="Join Baywoods"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-20"
                />
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Walk With Us?</h2>
                    <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
                        Join thousands of others who are already part of the Baywoods journey
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/shop"
                            className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                        >
                            Shop Now <ChevronRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/about/impacts"
                            className="border-2 border-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            Our Mission <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                    <div className="mt-12 flex justify-center gap-6">
                        <a href="#" className="text-white hover:text-blue-300 transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-white hover:text-blue-400 transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-white hover:text-blue-500 transition-colors">
                            <Facebook className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}