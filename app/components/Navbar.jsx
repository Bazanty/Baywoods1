'use client';

import { useState } from 'react';
import { Menu, X, ShoppingCart, User, ChevronDown, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change this based on auth state

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          BAYWOODS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">About</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Link>
          
          {isLoggedIn ? (
            <div className="relative">
              <button 
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                  <Link 
                    href="/account" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    My Account
                  </Link>
                  <Link 
                    href="/orders" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link 
              href="/login" 
              className="flex items-center gap-1 text-sm font-medium"
            >
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </Link>
          )}

          <button 
            className="md:hidden p-1" 
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 shadow">
          <Link href="/" onClick={() => setOpen(false)} className="py-2 border-b border-gray-100">
            Home
          </Link>
          <Link href="/shop" onClick={() => setOpen(false)} className="py-2 border-b border-gray-100">
            Shop
          </Link>
          <Link href="/collections" onClick={() => setOpen(false)} className="py-2 border-b border-gray-100">
            Collections
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="py-2 border-b border-gray-100">
            About
          </Link>
          
          {isLoggedIn ? (
            <>
              <Link href="/account" onClick={() => setOpen(false)} className="py-2 border-b border-gray-100">
                My Account
              </Link>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="w-full text-left py-2 text-red-600 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </>
          ) : (
            <Link 
              href="/login" 
              onClick={() => setOpen(false)}
              className="py-2 text-blue-600 font-medium"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}