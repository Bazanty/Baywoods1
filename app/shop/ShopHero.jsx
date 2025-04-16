// 'use client'

// import { motion } from 'framer-motion'

// export default function HeroSection() {
//   return (
//     <section className="relative flex flex-col md:flex-row items-center justify-between px-1 md:px-20 py-20 bg-white overflow-hidden">
//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-2xl z-30"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//       >
//         ↓
//       </motion.div>

//       {/* Left: Rotating Image with pulsing blob and glow ring */}
//       <div className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
//         {/* Glowing Aura Ring */}
//         <motion.div
//           className="absolute w-80 h-80 md:w-[420px] md:h-[420px] border-4 border-red-300 rounded-full z-0"
//           animate={{ rotate: [0, 360] }}
//           transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
//         />

//         {/* Animated Colored Blob */}
//         <motion.div
//           className="absolute w-72 h-72 md:w-[400px] md:h-[400px] bg-red-200 rounded-full blur-2xl z-0"
//           animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />

//         {/* Rotating Product Image */}
//         <motion.img
//           src="/drip.jpeg"
//           alt="Baywoods Hero"
//           className="relative z-10 w-64 md:w-96 rounded-2xl shadow-xl"
//           animate={{ rotate: [0, 360] }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         />
//       </div>

//       {/* Right: Text with Motion */}
//       <motion.div
//         className="text-center md:text-left max-w-xl z-10"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 1 }}
//       >
//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold leading-tight"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         >
//           Step Into the{' '}
//           <span className="bg-gradient-to-r from-red-500 via-black to-red-500 bg-clip-text text-transparent">
//             Drip
//           </span>
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-lg text-gray-600"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.9, duration: 1 }}
//         >
//           Discover the freshest sneakers, caps, and streetwear — built for your lifestyle.
//         </motion.p>

//         <motion.button
//           className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-xl hover:shadow-[0_0_20px_#ff0000] transition-all duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Shop Now
//         </motion.button>
//       </motion.div>
//     </section>
//   )
// }