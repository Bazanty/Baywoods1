import React from 'react'
import CartPage from '../components/CartDrawer'
import Navbar from '../components/Navbar'

export default function Cart() {
  return (
    <div className='text-black'>
      <Navbar />
      <CartPage />
    </div>
  )
}
