"use client"

import { motion } from "framer-motion"
import { RefreshCw, ArrowUpRight, Zap, Smile, Users, Activity } from "lucide-react"

const services = [
  {
    title: "Optimize Your Tech Stack",
    description:
      "Unlock the full potential of your marketing tools. We fine-tune your existing platforms for peak performance—no wasted spend, no inefficiencies.",
    icon: RefreshCw,
  },
  {
    title: "Scale Marketing Ops Without the Overhead",
    description:
      "Expand your capabilities, not your headcount. We streamline your marketing ops so you can scale smarter, faster, and with less friction.",
    icon: ArrowUpRight,
  },
  {
    title: "Effortless Tool Implementation",
    description:
      "New tech, no headaches. We integrate and configure your marketing platforms so you can focus on strategy, not setup.",
    icon: Zap,
  },
  {
    title: "Reduce Team Burnout with Automation",
    description:
      "Work smarter, not harder. Our automation solutions eliminate manual tasks, giving your team the freedom to focus on high-impact work.",
    icon: Smile,
  },
  {
    title: "Expert-Led Training & Support",
    description:
      "Get hands-on guidance from certified marketing ops experts. From office hours to custom training, we ensure your team is always equipped to execute.",
    icon: Users,
  },
  {
    title: "End-to-End Revenue Attribution",
    description:
      "Track, measure, and optimize every campaign with real-time insights. We give you full visibility into your funnel—from first touch to closed deal.",
    icon: Activity,
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

