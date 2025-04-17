'use client';

import { useState } from 'react';
import { Newspaper, Calendar, Image, Video, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'press-releases', name: 'Press Releases' },
    { id: 'media-coverage', name: 'Media Coverage' },
    { id: 'announcements', name: 'Announcements' },
    { id: 'awards', name: 'Awards' }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Baywoods Launches Sustainable Streetwear Collection',
      date: '15 March 2024',
      category: 'press-releases',
      excerpt: 'Baywoods announces its new eco-friendly streetwear line made from recycled materials, setting a new standard for sustainable fashion in Africa.',
      content: `
        <p>Nairobi, Kenya - March 15, 2024 - Baywoods, Kenya's leading streetwear brand, today unveiled its groundbreaking sustainable fashion collection at a launch event in Nairobi.</p>
        
        <p>The new line features:</p>
        <ul>
          <li>T-shirts made from 100% recycled cotton</li>
          <li>Hoodies using organic dyes and sustainable fabrics</li>
          <li>Accessories crafted from upcycled materials</li>
        </ul>
        
        <p>"This collection represents our commitment to environmental responsibility while maintaining our signature style," said Brian Nyakundi, Baywoods CEO.</p>
        
        <p>The collection will be available in Baywoods stores nationwide and online starting April 1, 2024.</p>
      `,
      image: '/sustainable-collection.jpg',
      downloads: [
        { name: 'Press Release PDF', url: '#', type: 'document' },
        { name: 'Product Images', url: '#', type: 'image' },
        { name: 'CEO Interview Clip', url: '#', type: 'video' }
      ],
      mediaCoverage: [
        { outlet: 'Business Daily', url: '#', date: '16 March 2024' },
        { outlet: 'Nation Africa', url: '#', date: '17 March 2024' }
      ]
    },
    {
      id: 2,
      title: 'Baywoods Wins African Fashion Innovation Award',
      date: '28 February 2024',
      category: 'awards',
      excerpt: 'Recognized for blending traditional African aesthetics with contemporary streetwear designs at the Pan-African Fashion Awards.',
      content: `
        <p>Lagos, Nigeria - Baywoods was honored with the prestigious African Fashion Innovation Award at the 5th Annual Pan-African Fashion Awards ceremony.</p>
        
        <p>The award recognizes Baywoods' unique approach to:</p>
        <ul>
          <li>Incorporating traditional Maasai beadwork patterns into modern designs</li>
          <li>Collaborating with local artisans</li>
          <li>Promoting Kenyan culture through global streetwear</li>
        </ul>
        
        <p>"This award validates our mission to put Kenyan fashion on the world stage," said Creative Director Eva during the acceptance speech.</p>
      `,
      image: '/fashion-award.jpg',
      downloads: [
        { name: 'Award Photos', url: '#', type: 'image' },
        { name: 'Acceptance Speech Video', url: '#', type: 'video' }
      ]
    },
    {
      id: 3,
      title: 'Baywoods Expands to South African Market',
      date: '10 January 2024',
      category: 'announcements',
      excerpt: 'Opening flagship stores in Johannesburg and Cape Town marks Baywoods first international expansion.',
      content: `
        <p>Johannesburg, South Africa - Baywoods has officially launched its South African operations with two flagship stores in Sandton (Johannesburg) and the V&A Waterfront (Cape Town).</p>
        
        <p>Key highlights:</p>
        <ul>
          <li>1,500 sq ft retail spaces featuring full product lines</li>
          <li>Localized collections incorporating South African influences</li>
          <li>Plans to open 3 more locations by end of 2024</li>
        </ul>
        
        <p>"South Africa represents a strategic market for our Pan-African growth," noted Diana Nyakerario, Head of Expansion.</p>
      `,
      image: '/sa-expansion.jpg',
      downloads: [
        { name: 'Store Photos', url: '#', type: 'image' },
        { name: 'Expansion Fact Sheet', url: '#', type: 'document' }
      ]
    },
    {
      id: 4,
      title: 'Featured in Forbes Africa: The Rise of Kenyan Streetwear',
      date: '5 December 2023',
      category: 'media-coverage',
      excerpt: 'Forbes Africa profiles Baywoods as a case study in building a successful African fashion brand.',
      content: `
        <p>Baywoods was featured in Forbes Africa's December issue as part of their "African Brands to Watch" series.</p>
        
        <p>The 3-page article covers:</p>
        <ul>
          <li>Baywoods' origin story from Nairobi markets to international recognition</li>
          <li>The business strategy behind the brand's rapid growth</li>
          <li>Plans for future expansion across the continent</li>
        </ul>
        
        <p>"Baywoods demonstrates how African brands can compete globally while staying true to their roots," wrote the Forbes journalist.</p>
      `,
      image: '/forbes-feature.jpg',
      downloads: [
        { name: 'Article PDF', url: '#', type: 'document' }
      ],
      externalLink: '#'
    }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-gray-900 rounded-2xl overflow-hidden mb-12">
          <div className="relative aspect-video max-h-96">
            <img
              src="/newsroom-hero.jpg"
              alt="Baywoods Newsroom"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 py-12">
                <Newspaper className="mx-auto h-12 w-12 text-white" />
                <h1 className="mt-4 text-4xl font-bold text-white">Baywoods Newsroom</h1>
                <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                  Stay updated with our latest announcements, media coverage, and brand stories
                </p>
              </div>
            </div>
          </div>
        </div>

        {selectedArticle ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="flex items-center px-6 py-4 text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <ArrowRight className="w-4 h-4 rotate-180 mr-1" />
              Back to Newsroom
            </button>
            
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                {selectedArticle.date}
                <span className="ml-3 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {categories.find(cat => cat.id === selectedArticle.category)?.name}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{selectedArticle.title}</h2>
            </div>
            
            <div className="p-6">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-auto rounded-lg mb-8"
              />
              
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
              
              {(selectedArticle.downloads?.length > 0 || selectedArticle.mediaCoverage?.length > 0) && (
                <div className="mt-12 space-y-8">
                  {selectedArticle.downloads?.length > 0 && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Media Assets</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedArticle.downloads.map((download, index) => (
                          <a
                            key={index}
                            href={download.url}
                            className="border rounded-lg p-4 hover:bg-gray-50 flex items-center gap-3"
                          >
                            {download.type === 'image' ? (
                              <Image className="w-5 h-5 text-gray-500" />
                            ) : download.type === 'video' ? (
                              <Video className="w-5 h-5 text-gray-500" />
                            ) : (
                              <Download className="w-5 h-5 text-gray-500" />
                            )}
                            <span className="text-sm font-medium">{download.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedArticle.mediaCoverage?.length > 0 && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Media Coverage</h3>
                      <div className="space-y-3">
                        {selectedArticle.mediaCoverage.map((coverage, index) => (
                          <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                            <div>
                              <p className="font-medium">{coverage.outlet}</p>
                              <p className="text-sm text-gray-500">{coverage.date}</p>
                            </div>
                            <a 
                              href={coverage.url}
                              className="text-sm font-medium text-blue-600 hover:text-blue-500"
                            >
                              Read Article
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedArticle.externalLink && (
                    <div className="pt-4">
                      <a
                        href={selectedArticle.externalLink}
                        className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
                      >
                        View Full Coverage
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedArticle(item)}
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <button className="text-blue-600 hover:text-blue-500 font-medium flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredNews.length === 0 && (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <Newspaper className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No news articles found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  There are currently no news items in this category.
                </p>
              </div>
            )}
            
            {/* Press Contact */}
            <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Press Inquiries</h2>
                <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                  Members of the media can contact our communications team for interviews, 
                  assets, or additional information about Baywoods.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:press@baywoods.com"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-3 px-6 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                  >
                    Email Press Team
                  </a>
                  <a
                    href="/press-kit.zip"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-3 px-6 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    Download Press Kit
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}