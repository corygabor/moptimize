"use client"

import { motion } from "framer-motion"
import { Mountain as Foundation, Cog, Brain } from "lucide-react"

const services = [
  {
    title: "Foundation Setup",
    description:
      "Get your marketing operations foundation right. We audit, clean up, and streamline your systems so campaigns run smoothly and scale with less effort.",
    icon: Foundation,
  },
  {
    title: "GTM Operations",
    description:
      "Automate the busywork across your go-to-market systems. We design workflows that route leads, trigger follow-ups, and keep campaigns moving with less manual effort.",
    icon: Cog,
  },
  {
    title: "AI-First Operations",
    description:
      "Stay ahead with AI-powered operations. We build practical AI into your GTM processes, from outbound and routing to campaign execution, so your team can scale faster.",
    icon: Brain,
  },
]

export default function Services() {
  return (
    <section className="relative z-10">
      <div className="container mx-auto px-6 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-white/10 hover:border-[#8A7FFF]/50 transition-colors"
            >
              <service.icon className="w-12 h-12 text-[#8A7FFF] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
