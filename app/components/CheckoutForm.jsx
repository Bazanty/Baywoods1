'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Paypal } from 'lucide-react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const [activeTab, setActiveTab] = useState('shipping');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'Zip code is required';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (activeTab === 'payment' && formData.paymentMethod === 'credit-card') {
      if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length !== 16) {
        newErrors.cardNumber = 'Valid card number required';
      }
      if (!formData.cardExpiry || !/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
        newErrors.cardExpiry = 'MM/YY format required';
      }
      if (!formData.cardCvc || formData.cardCvc.length !== 3) {
        newErrors.cardCvc = '3-digit CVC required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Order submitted:', formData);
      // Process payment and submit order
    }
  };

  const cartItems = [
    { name: 'Premium Sneakers', price: 120, quantity: 1 },
    { name: 'Limited Edition Cap', price: 45, quantity: 2 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Purchase</h1>
          <p className="mt-2 text-gray-600">Secure checkout powered by Baywoods</p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Progress Steps */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('shipping')}
              className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'shipping' ? 'text-baywoods-primary border-b-2 border-baywoods-primary' : 'text-gray-500'}`}
            >
              Shipping
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'payment' ? 'text-baywoods-primary border-b-2 border-baywoods-primary' : 'text-gray-500'}`}
            >
              Payment
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            {activeTab === 'shipping' ? (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Shipping Information</h2>
                
                {/* Form fields for shipping */}
                {/* ... (same as previous implementation) ... */}
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Payment Method</h2>
                
                {/* Payment method selection and form fields */}
                {/* ... (same as previous implementation) ... */}
              </div>
            )}
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            {/* Order summary content */}
            {/* ... (same as previous implementation) ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;