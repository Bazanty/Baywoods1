// "use client";
// import React from "react";
// import Link from "next/link";
// import { ShoppingCart, Search } from "lucide-react";

// // Define the type for the Product if not already available
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   // add other relevant fields
// }

// interface ShopHeaderProps {
//   cartItems: Product[];
//   onCartClick: () => void;
// }

// export default function ShopHeader({ cartItems, onCartClick }: ShopHeaderProps) {
//   return (
//     <header className="w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo/Brand */}
//         <Link href="/" className="text-2xl font-bold text-red-600">
//           Baywoods
//         </Link>

//         {/* Nav Links */}
//         <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700 dark:text-gray-300">
//           <Link href="/">Home</Link>
//           <Link href="/shop">Shop</Link>
//           <Link href="/new-arrivals">New Arrivals</Link>
//         </nav>

//         {/* Right side: Search + Cart */}
//         <div className="flex items-center space-x-4">
//           <div className="relative hidden md:block">
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-gray-100 dark:bg-gray-800 text-sm px-4 py-2 rounded-full focus:outline-none"
//             />
//             <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
//           </div>

//           {/* Cart */}
//           <button onClick={onCartClick} className="relative">
//             <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartItems.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }
