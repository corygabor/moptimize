"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Zap, MessageSquare, RefreshCw, Shield } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function AgentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="relative min-h-[calc(100vh-76px)] flex items-center pb-10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 bg-[#8A7FFF]/20 text-[#8A7FFF] text-sm font-medium py-1 px-3 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#8A7FFF] rounded-full animate-pulse" />
                AI-Powered Marketing Ops
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Your HubSpot + Salesforce,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A7FFF] to-[#B4ACFF]">
                  unified
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
            >
              Stop switching between your MAP and CRM. Query, sync, and automate across both platforms with natural language.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="bg-[#8A7FFF] hover:bg-[#7A6FEF] text-white px-8" asChild>
                <Link href="/contact">
                  Request Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Platform badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FF7A59] rounded" />
                HubSpot
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00A1E0] rounded" />
                Salesforce
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <div className="w-3 h-3 bg-[#5C4C9F] rounded" />
                Marketo (Soon)
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
            <p className="text-gray-400">Three steps to unified marketing ops</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Connect",
                description: "Authenticate your HubSpot and Salesforce accounts with secure OAuth. Your credentials stay safe.",
                icon: Shield,
              },
              {
                step: "02",
                title: "Ask",
                description: "Query both systems with plain English. No SOQL, no complex filters. Just ask what you need.",
                icon: MessageSquare,
              },
              {
                step: "03",
                title: "Automate",
                description: "Create records, update fields, sync data between platforms. All through conversation.",
                icon: RefreshCw,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 rounded-xl p-8 bg-white/5 hover:border-[#8A7FFF]/50 transition-colors"
              >
                <div className="text-[#8A7FFF] text-sm font-mono mb-4">{item.step}</div>
                <item.icon className="w-8 h-8 text-[#8A7FFF] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-semibold text-white">Example queries</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "Show me all leads from last week's webinar",
              "Find HubSpot contacts not synced to Salesforce",
              "Add these leads to the Q1 nurture campaign",
              "What deals are closing this month over $50k?",
              "Create a contact in HubSpot for john@acme.com",
              "Update lead status to MQL for engaged contacts",
            ].map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
              >
                <span className="text-[#8A7FFF] font-mono text-sm">$</span>
                <span className="text-gray-300 text-sm">{example}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for marketing ops teams
              </h2>
              <p className="text-gray-400 mb-8">
                Stop tab-switching between your MAP and CRM. Get answers instantly and take action in seconds.
              </p>
              <ul className="space-y-4">
                {[
                  "Query your MAP and CRM with plain English",
                  "Take action across platforms with a single prompt",
                  "Bulk updates in seconds — no exports, no imports",
                  "No SOQL, no complex filters — just ask",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Zap className="w-5 h-5 text-[#8A7FFF]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#8A7FFF] flex items-center justify-center font-bold text-white">
                  M
                </div>
                <div>
                  <div className="text-white font-medium">Moptimize Agent</div>
                  <div className="text-gray-500 text-sm">AI Assistant</div>
                </div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="text-gray-400">
                  <span className="text-gray-500">You:</span> Show me leads from the webinar who haven&apos;t been contacted
                </div>
                <div className="text-gray-300">
                  <span className="text-[#8A7FFF]">Agent:</span> Found 23 leads from &quot;Q1 Product Webinar&quot; with no activity in the last 7 days. Would you like me to add them to a nurture campaign?
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to streamline your stack?
            </h2>
            <p className="text-gray-400 mb-8">
              Join the private beta and start saving hours every week.
            </p>
            <Button size="lg" className="bg-[#8A7FFF] hover:bg-[#7A6FEF] text-white px-8" asChild>
              <Link href="/contact">
                Request Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
