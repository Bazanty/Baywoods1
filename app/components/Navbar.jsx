'use client';

import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <ShoppingCart className="w-5 h-5" />
          </Link>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 shadow">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/collections" onClick={() => setOpen(false)}>Collections</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
}
