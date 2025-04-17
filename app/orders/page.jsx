'use client';

import { useState } from 'react';
import { ShoppingBag, ChevronRight, X, Check, Clock, Truck, RefreshCw, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: 'BW-2023-0456',
      date: '15 Oct 2023',
      status: 'delivered',
      items: [
        { 
          id: 1,
          name: 'Premium Sneakers', 
          price: 8500, 
          quantity: 1, 
          image: '/sneaker1.jpg',
          size: '42',
          color: 'Black/White'
        },
        { 
          id: 2,
          name: 'Streetwear Hoodie', 
          price: 4500, 
          quantity: 2, 
          image: '/hoodie1.jpg',
          size: 'L',
          color: 'Charcoal'
        }
      ],
      shipping: {
        address: '123 Drip Street, Nairobi, Kenya',
        carrier: 'Baywoods Express',
        tracking: 'BWEX-45678-2023'
      },
      payment: {
        method: 'Visa ending in 4242',
        total: 17500,
        subtotal: 17500,
        shipping: 0,
        discount: 0
      }
    },
    {
      id: 'BW-2023-0382',
      date: '02 Sep 2023',
      status: 'shipped',
      items: [
        { 
          id: 3,
          name: 'Classic Cap', 
          price: 2500, 
          quantity: 1, 
          image: '/cap1.jpg',
          size: 'One Size',
          color: 'Navy'
        }
      ],
      shipping: {
        address: '456 Trendy Avenue, Nairobi, Kenya',
        carrier: 'Baywoods Express',
        tracking: 'BWEX-38291-2023'
      },
      payment: {
        method: 'M-Pesa',
        total: 2500,
        subtotal: 2500,
        shipping: 0,
        discount: 0
      }
    },
    {
      id: 'BW-2023-0521',
      date: '28 Nov 2023',
      status: 'processing',
      items: [
        { 
          id: 4,
          name: 'Designer Jeans', 
          price: 6000, 
          quantity: 1, 
          image: '/jeans1.jpg',
          size: '32',
          color: 'Dark Blue'
        },
        { 
          id: 5,
          name: 'Graphic T-Shirt', 
          price: 2800, 
          quantity: 1, 
          image: '/tshirt1.jpg',
          size: 'M',
          color: 'White'
        }
      ],
      shipping: {
        address: '789 Fashion Lane, Nairobi, Kenya',
        carrier: 'Baywoods Express',
        tracking: null
      },
      payment: {
        method: 'Mastercard ending in 5555',
        total: 8800,
        subtotal: 8800,
        shipping: 0,
        discount: 0
      }
    }
  ];

  const filteredOrders = activeFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeFilter);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <Check className="w-4 h-4 text-green-500" />;
      case 'shipped':
        return <Truck className="w-4 h-4 text-blue-500" />;
      case 'processing':
        return <RefreshCw className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            <p className="mt-2 text-sm text-gray-600">
              View your order history and track recent purchases
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All Orders
            </button>
            <button
              onClick={() => setActiveFilter('processing')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeFilter === 'processing' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Processing
            </button>
            <button
              onClick={() => setActiveFilter('shipped')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeFilter === 'shipped' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Shipped
            </button>
            <button
              onClick={() => setActiveFilter('delivered')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeFilter === 'delivered' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Delivered
            </button>
          </div>
        </div>

        {selectedOrder ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
              <button 
                onClick={() => setSelectedOrder(null)}
                className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
                Back to orders
              </button>
              <h2 className="text-lg font-medium text-gray-900">
                Order #{selectedOrder.id}
                <span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`}>
                  {getStatusIcon(selectedOrder.status)}
                  <span className="ml-1 capitalize">{selectedOrder.status}</span>
                </span>
              </h2>
              <p className="text-sm text-gray-500">
                Placed on {selectedOrder.date}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 p-6">
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Details</h3>
                <div className="border rounded-lg divide-y divide-gray-200">
                  {selectedOrder.items.map((item) => (
                    <div key={item.id} className="p-4 flex">
                      <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Size: {item.size} | Color: {item.color}
                        </p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="text-sm font-medium text-gray-900">KSh {item.price.toLocaleString()}</p>
                        {selectedOrder.status === 'delivered' && (
                          <button className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500">
                            Buy Again
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {selectedOrder.status === 'shipped' && (
                  <div className="mt-8 bg-blue-50 rounded-lg p-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Tracking Information</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Carrier</p>
                        <p className="text-sm font-medium text-gray-900">{selectedOrder.shipping.carrier}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Tracking Number</p>
                        <p className="text-sm font-medium text-blue-600">{selectedOrder.shipping.tracking}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-600">Shipping To</p>
                        <p className="text-sm font-medium text-gray-900 text-right">{selectedOrder.shipping.address}</p>
                      </div>
                    </div>
                    <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700">
                      Track Package
                    </button>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Subtotal</p>
                      <p className="text-sm font-medium text-gray-900">KSh {selectedOrder.payment.subtotal.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Shipping</p>
                      <p className="text-sm font-medium text-gray-900">KSh {selectedOrder.payment.shipping.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Discount</p>
                      <p className="text-sm font-medium text-gray-900">-KSh {selectedOrder.payment.discount.toLocaleString()}</p>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                      <p className="text-base font-medium text-gray-900">Total</p>
                      <p className="text-base font-bold text-gray-900">KSh {selectedOrder.payment.total.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Payment Method</h4>
                    <p className="text-sm text-gray-600">{selectedOrder.payment.method}</p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Shipping Address</h4>
                    <p className="text-sm text-gray-600">{selectedOrder.shipping.address}</p>
                  </div>

                  {selectedOrder.status !== 'delivered' && (
                    <button className="mt-6 w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-50">
                      Cancel Order
                    </button>
                  )}
                </div>

                <div className="mt-6 bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    If you have any questions about your order, contact our customer service.
                  </p>
                  <button className="w-full flex items-center justify-center gap-2 text-blue-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-50">
                    <HelpCircle className="w-4 h-4" />
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {filteredOrders.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <div key={order.id} className="p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Order #{order.id}</h4>
                        <p className="text-sm text-gray-500">Placed on {order.date}</p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1 capitalize">{order.status}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg divide-y divide-gray-200">
                      {order.items.slice(0, 2).map((item) => (
                        <div key={item.id} className="p-4 flex">
                          <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="ml-4 flex-1">
                            <h5 className="text-sm font-medium text-gray-900">{item.name}</h5>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">KSh {item.price.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                      {order.items.length > 2 && (
                        <div className="p-4 text-center text-sm text-gray-500">
                          + {order.items.length - 2} more items
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-sm font-medium text-blue-600 hover:text-blue-500"
                      >
                        View Order Details
                      </button>
                      <div className="flex flex-col sm:flex-row gap-4">
                        {order.status === 'delivered' && (
                          <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                            Buy Again
                          </button>
                        )}
                        <p className="text-lg font-medium text-gray-900">
                          Total: KSh {order.payment.total.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {activeFilter === 'all' 
                    ? "You haven't placed any orders yet." 
                    : `You don't have any ${activeFilter} orders.`}
                </p>
                <div className="mt-6">
                  <Link
                    href="/shop"
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                  >
                    Start Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}