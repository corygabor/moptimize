"use client"

import { motion } from "framer-motion"
import { Bot, ArrowRightLeft, Database, Workflow } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "AI Agents for MOps",
    description:
      "Custom AI agents that automate list imports, lead research, outbound sequences, and campaign ops — built for your stack.",
    icon: Bot,
  },
  {
    title: "Platform Migrations",
    description:
      "End-to-end MAP and CRM migrations. Nurtures, templates, routing, and integrations rebuilt without losing momentum.",
    icon: ArrowRightLeft,
  },
  {
    title: "Data & Enrichment",
    description:
      "Clay workflows, lead routing, data normalization, and warehouse integrations so the right leads reach the right people.",
    icon: Database,
  },
  {
    title: "Campaign Automation",
    description:
      "Workflows, nurtures, and operational processes that keep campaigns running across your GTM stack without manual intervention.",
    icon: Workflow,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="text-[#8A7FFF] hover:text-[#B4ACFF] transition-colors text-sm font-medium"
          >
            View all services →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
