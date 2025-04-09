'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'TNS Premium',
    image: '/Tns.jpeg',
    price: 189.99,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Baywoods Classic Cap',
    image: '/cap1.jpg',
    price: 49.99,
    quantity: 2,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
            : item
        )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-baywoods-primary">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600 mb-4">Your cart is empty.</p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-baywoods-primary text-white rounded-lg hover:bg-opacity-90"
            >
              Go Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 relative rounded overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 border rounded hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 border rounded hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="border-t mt-8 pt-6 text-right">
              <p className="text-xl font-semibold">
                Subtotal: <span className="text-baywoods-primary">${subtotal.toFixed(2)}</span>
              </p>
              <Link
                href="/checkout"
                className="mt-4 inline-block bg-baywoods-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
