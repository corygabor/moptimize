"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AgentCTA() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#8A7FFF]/30 bg-gradient-to-br from-[#8A7FFF]/10 to-transparent p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8A7FFF]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#8A7FFF]" />
                <span className="text-[#8A7FFF] text-sm font-medium">New Product</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Introducing Moptimize Agent
              </h2>

              <p className="text-gray-400 text-lg mb-6 max-w-2xl">
                AI-powered marketing operations for teams running a MAP and CRM. Query data and take action across both platforms with natural language.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-[#FF7A59] rounded" />
                  HubSpot
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-[#00A1E0] rounded" />
                  Salesforce
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 opacity-50">
                  <div className="w-2 h-2 bg-[#5C4C9F] rounded" />
                  Marketo (Soon)
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#8A7FFF] hover:bg-[#7A6FEF] text-white" asChild>
                  <Link href="/agent">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-transparent border border-white/20 text-white hover:bg-white/10" asChild>
                  <Link href="/contact">
                    Request Access
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
