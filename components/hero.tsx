"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center pb-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block bg-[#8A7FFF] text-white text-sm font-medium py-1 px-3 rounded-full backdrop-blur-sm">
              Marketing Operations + AI
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
  <span className="block">We Build AI Agents</span>
  <span className="block text-[#A5B4FC]">for MOPs Teams</span>
</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto"
          >
            From list imports and lead routing to outbound sequences and campaign ops — we build agents and automations that replace the manual work your team does every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[#8A7FFF] text-white hover:bg-[#7A6FEF]"
            >
              Work With Us
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
