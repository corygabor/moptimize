"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ClosingCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-[#8A7FFF]/10 backdrop-blur-sm p-12 rounded-xl border border-[#8A7FFF]/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to automate your ops?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Tell us what your team spends the most time on. We&apos;ll show you what an agent can do instead.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 transition-colors bg-[#8A7FFF] text-white hover:bg-[#7A6FEF]"
          >
            Work With Us
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
