"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Small",
    price: "$5,000",
    features: [
      "All services included",
      "Up to 30 hours per month",
      "Weekly office hours",
      "Communication via Slack, email, and Google Meet",
    ],
  },
  {
    name: "Medium",
    price: "$8,000",
    features: [
      "All services included",
      "Up to 50 hours per month",
      "Weekly office hours",
      "Communication via Slack, email, and Google Meet",
    ],
  },
  {
    name: "Large",
    price: "$12,000",
    features: [
      "All services included",
      "Up to 80 hours per month",
      "Weekly office hours",
      "Communication via Slack, email, and Google Meet",
    ],
  },
]

export default function SubscriptionPlans() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Subscriptions</h1>
          <div className="w-24 h-1 bg-[#8A7FFF] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#8A7FFF]/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold text-[#8A7FFF] mb-6">
                {plan.price}
                <span className="text-gray-400 text-base font-normal"> / month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-[#8A7FFF] mr-2 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#8A7FFF] hover:bg-[#7A6FEF] text-white" asChild>
                <Link href="/contact">Book A Meeting</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

