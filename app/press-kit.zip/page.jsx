'use client';

import { Download, Image, FileText, Video, User, Box, Globe, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function PressKitPage() {
  const pressKitSections = [
    {
      title: 'Brand Assets',
      items: [
        {
          name: 'Baywoods Logo Pack',
          description: 'High-resolution logos in PNG, SVG, and EPS formats',
          type: 'zip',
          size: '12.4 MB',
          url: '#'
        },
        {
          name: 'Brand Color Palette',
          description: 'Official color codes and usage guidelines',
          type: 'pdf',
          size: '2.1 MB',
          url: '#'
        },
        {
          name: 'Typography Guide',
          description: 'Brand fonts and typography standards',
          type: 'pdf',
          size: '3.5 MB',
          url: '#'
        }
      ]
    },
    {
      title: 'Media Resources',
      items: [
        {
          name: 'Product Images 2024',
          description: 'High-res product photography from current collection',
          type: 'zip',
          size: '45.7 MB',
          url: '#'
        },
        {
          name: 'Store Location Photos',
          description: 'Exterior and interior shots of flagship stores',
          type: 'zip',
          size: '28.3 MB',
          url: '#'
        },
        {
          name: 'Brand B-Roll Footage',
          description: '30-second brand video clips (1080p)',
          type: 'zip',
          size: '156 MB',
          url: '#'
        }
      ]
    },
    {
      title: 'Company Information',
      items: [
        {
          name: 'Baywoods Fact Sheet',
          description: 'Company overview, history, and key statistics',
          type: 'pdf',
          size: '1.8 MB',
          url: '#'
        },
        {
          name: 'Executive Bios',
          description: 'Professional backgrounds of leadership team',
          type: 'pdf',
          size: '4.2 MB',
          url: '#'
        },
        {
          name: 'Sustainability Report',
          description: '2023 Environmental and Social Impact Report',
          type: 'pdf',
          size: '8.9 MB',
          url: '#'
        }
      ]
    }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'zip':
        return <Box className="w-5 h-5 text-blue-500" />;
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'image':
        return <Image className="w-5 h-5 text-green-500" />;
      case 'video':
        return <Video className="w-5 h-5 text-purple-500" />;
      default:
        return <Download className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Baywoods Press Kit</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download official brand resources, media assets, and company information
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Press Kit</h2>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-blue-50 rounded-lg p-6 mb-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Full Press Kit Download</h3>
                <p className="text-gray-600">
                  Contains all brand assets, media resources, and company information in one package
                </p>
              </div>
              <a
                href="#"
                className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
              >
                <Download className="w-5 h-5" />
                Download Full Press Kit (189 MB)
              </a>
            </div>

            <div className="space-y-8">
              {pressKitSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{section.title}</h3>
                  <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50">
                        <div className="flex items-start gap-4">
                          {getIcon(item.type)}
                          <div>
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 sm:ml-4">
                          <span className="text-sm text-gray-500">{item.size}</span>
                          <a
                            href={item.url}
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a href="mailto:press@baywoods.com" className="text-blue-600 hover:text-blue-500">
                      press@baywoods.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <a href="tel:+254700123456" className="text-blue-600 hover:text-blue-500">
                      +254 700 123 456
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <User className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Press Contact</h3>
                    <p className="text-gray-600">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Head of Communications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Founded</h3>
                    <p className="text-gray-600">2020, Nairobi Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Box className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Products</h3>
                    <p className="text-gray-600">Streetwear, Footwear, Accessories</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <User className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Leadership</h3>
                    <p className="text-gray-600">Brian Nyakundi, CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Something Else?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact our press team for custom requests or 
            additional information about Baywoods.
          </p>
          <a
            href="mailto:press@baywoods.com"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Contact Press Team
          </a>
        </div>
      </div>
    </div>
  );
}