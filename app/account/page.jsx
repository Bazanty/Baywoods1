'use client';

import { useState } from 'react';
import { User, ShoppingBag, Heart, MapPin, CreditCard, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    name: 'Brian Nyakundi',
    email: 'brian@baywoods.com',
    phone: '+254 712 345 678',
    address: '123 Drip Street, Nairobi, Kenya'
  });

  const [orders, setOrders] = useState([
    {
      id: 'BW-2023-0456',
      date: '15 Oct 2023',
      status: 'Delivered',
      items: [
        { name: 'Premium Sneakers', price: 8500, quantity: 1, image: '/sneaker1.jpg' },
        { name: 'Streetwear Hoodie', price: 4500, quantity: 2, image: '/hoodie1.jpg' }
      ],
      total: 17500
    },
    {
      id: 'BW-2023-0382',
      date: '02 Sep 2023',
      status: 'Shipped',
      items: [
        { name: 'Classic Cap', price: 2500, quantity: 1, image: '/cap1.jpg' }
      ],
      total: 2500
    }
  ]);

  const [wishlist, setWishlist] = useState([
    { id: 1, name: 'Limited Edition Sneakers', price: 12000, image: '/sneaker2.jpg' },
    { id: 2, name: 'Designer Jeans', price: 6000, image: '/jeans1.jpg' }
  ]);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      street: '123 Drip Street',
      city: 'Nairobi',
      postalCode: '00100',
      country: 'Kenya',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      street: '456 Trendy Avenue',
      city: 'Nairobi',
      postalCode: '00100',
      country: 'Kenya',
      isDefault: false
    }
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'Visa',
      last4: '4242',
      expiry: '12/25',
      isDefault: true
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Add your save logic here
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">{userData.name}</h3>
                  <p className="text-sm text-gray-500">{userData.email}</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'profile' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <User className="w-4 h-4" />
                  Profile
                </button>
                
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'orders' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  My Orders
                  <span className="ml-auto bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    {orders.length}
                  </span>
                </button>
                
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'wishlist' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Heart className="w-4 h-4" />
                  Wishlist
                  <span className="ml-auto bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    {wishlist.length}
                  </span>
                </button>
                
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'addresses' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <MapPin className="w-4 h-4" />
                  Addresses
                </button>
                
                <button
                  onClick={() => setActiveTab('payments')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'payments' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <CreditCard className="w-4 h-4" />
                  Payment Methods
                </button>
                
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'settings' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Settings className="w-4 h-4" />
                  Account Settings
                </button>
              </nav>
              
              <button className="mt-8 w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md">
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                </div>
                <div className="px-6 py-5">
                  <form onSubmit={handleSaveProfile}>
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={userData.name}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                      </div>

                      <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={userData.email}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={userData.phone}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                      </div>

                      <div className="sm:col-span-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          value={userData.address}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Order History</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {orders.map((order) => (
                    <div key={order.id} className="p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                        <div>
                          <h4 className="font-medium text-gray-900">Order #{order.id}</h4>
                          <p className="text-sm text-gray-500">Placed on {order.date}</p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg divide-y divide-gray-200">
                        {order.items.map((item, index) => (
                          <div key={index} className="p-4 flex">
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
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          href={`/orders/${order.id}`}
                          className="text-sm font-medium text-blue-600 hover:text-blue-500"
                        >
                          View Order Details
                        </Link>
                        <p className="text-lg font-medium text-gray-900">Total: KSh {order.total.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Your Wishlist</h3>
                </div>
                {wishlist.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {wishlist.map((item) => (
                      <div key={item.id} className="border rounded-lg overflow-hidden">
                        <div className="aspect-square bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="mt-1 text-lg font-medium text-gray-900">KSh {item.price.toLocaleString()}</p>
                          <div className="mt-4 flex gap-2">
                            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700">
                              Add to Cart
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-500">
                              <Heart className="w-5 h-5 fill-current" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <Heart className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No items in wishlist</h3>
                    <p className="mt-1 text-sm text-gray-500">Start adding items you like to your wishlist.</p>
                    <div className="mt-6">
                      <Link
                        href="/shop"
                        className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Saved Addresses</h3>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    + Add New Address
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  {addresses.map((address) => (
                    <div key={address.id} className={`border rounded-lg p-6 ${address.isDefault ? 'border-blue-500 ring-1 ring-blue-500' : ''}`}>
                      <div className="flex justify-between">
                        <h4 className="font-medium text-gray-900">{address.type}</h4>
                        {address.isDefault && (
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {address.street}<br />
                        {address.city}, {address.postalCode}<br />
                        {address.country}
                      </p>
                      <div className="mt-4 flex gap-3">
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                          Edit
                        </button>
                        {!address.isDefault && (
                          <>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                              Set as Default
                            </button>
                            <button className="text-sm font-medium text-red-600 hover:text-red-500">
                              Remove
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Payment Methods Tab */}
            {activeTab === 'payments' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Payment Methods</h3>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    + Add New Payment Method
                  </button>
                </div>
                <div className="divide-y divide-gray-200">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="p-6 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{method.type} ending in {method.last4}</h4>
                          <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                        </div>
                        {method.isDefault && (
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                          Edit
                        </button>
                        {!method.isDefault && (
                          <>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                              Set as Default
                            </button>
                            <button className="text-sm font-medium text-red-600 hover:text-red-500">
                              Remove
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Account Settings</h3>
                </div>
                <div className="p-6 space-y-8">
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-4">Change Password</h4>
                    <form className="space-y-4 max-w-md">
                      <div>
                        <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="current-password"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                      </div>
                      <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="new-password"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirm-password"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        />
                      </div>
                      <button
                        type="submit"
                        className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Update Password
                      </button>
                    </form>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-md font-medium text-gray-900 mb-4">Delete Account</h4>
                    <p className="text-sm text-gray-500 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}