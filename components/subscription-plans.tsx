"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Foundation",
    price: "$7,500",
    hours: "~40 hrs/month",
    tagline: "Lay the groundwork for clean and scalable marketing operations.",
    features: [
      "Marketing ops audit and system cleanup",
      "Lead lifecycle and scoring framework",
      "Lead routing and meeting scheduling setup",
      "Campaign operations setup (nurtures, forms, workflows)",
      "Data hygiene and governance",
    ],
    recommended: false,
  },
  {
    name: "Automation",
    price: "$12,500",
    hours: "~60 hrs/month",
    tagline: "Automate manual tasks and add AI into everyday workflows.",
    features: [
      "Automated lead enrichment and routing",
      "Smart nurture and follow-up campaigns",
      "Outbound process automation",
      "Workflow improvements that remove repetitive tasks",
      "Ongoing monitoring and optimization",
    ],
    recommended: true,
  },
  {
    name: "AI-First",
    price: "$20,000",
    hours: "~80 hrs/month",
    tagline: "Build the next generation of GTM with AI agents and custom tools.",
    features: [
      "Custom AI agents for your team's specific workflows",
      "Internal apps that simplify campaign setup and execution",
      "AI-driven outbound and lead qualification",
      "Moptimize Agent access for natural language MAP/CRM queries",
      "Training and enablement for your team",
    ],
    recommended: false,
  },
]

const whyMoptimizeFeatures = [
  {
    icon: Zap,
    title: "AI-Driven",
    description: "Smarter workflows and faster execution",
  },
  {
    icon: Target,
    title: "Ops Expertise",
    description: "Deep experience in GTM systems and processes",
  },
  {
    icon: TrendingUp,
    title: "Proven Impact",
    description: "Cleaner operations, faster campaigns, better results",
  },
]

export default function SubscriptionPlans() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Subscriptions That Scale With You</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose the level of support that fits your stage of growth. Each plan includes the strategy, execution, and
            automation expertise to build a smarter GTM system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-black/50 backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                plan.recommended
                  ? "border-[#8A7FFF] bg-[#8A7FFF]/10 shadow-lg shadow-[#8A7FFF]/20"
                  : "border-white/10 hover:border-[#8A7FFF]/30"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#8A7FFF] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Recommended
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-1">
                  {plan.price}
                  <span className="text-gray-300 text-base font-normal">/mo</span>
                </div>
                <p className="text-gray-300 text-sm">{plan.hours}</p>
              </div>

              <p className="text-gray-300 mb-6 text-center italic">{plan.tagline}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-[#8A7FFF] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full text-white font-semibold py-3 ${
                  plan.recommended
                    ? "bg-[#8A7FFF] hover:bg-[#7A6FEF]"
                    : "bg-white/10 hover:bg-[#8A7FFF] border border-white/20 hover:border-[#8A7FFF]"
                }`}
                asChild
              >
                <Link href="/contact">Work With Us</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI + Ops Expertise = Smarter Growth</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We bring AI into your existing processes to reduce manual work, speed up handoffs, and scale campaigns
            without adding extra headcount.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyMoptimizeFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#8A7FFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-[#8A7FFF]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-[#8A7FFF]/10 backdrop-blur-sm p-12 rounded-xl border border-[#8A7FFF]/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Scale Smarter?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start the conversation today. We will reply within 1 business day.
          </p>
          <Button className="bg-[#8A7FFF] hover:bg-[#7A6FEF] text-white px-8 py-3 text-lg" asChild>
            <Link href="/contact">Work With Us</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
