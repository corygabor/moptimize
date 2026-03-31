"use client"

import { motion } from "framer-motion"
import { Bot, ArrowRightLeft, Database, Workflow } from "lucide-react"

const services = [
  {
    title: "AI Agents for MOps",
    icon: Bot,
    description:
      "Custom AI agents that handle the repetitive work your team does every day — built to fit your specific stack and processes.",
    items: [
      "Slack-based campaign ops agents",
      "Automated list import with AI validation",
      "Lead research and qualification agents",
      "Auto-outbound sequence generation",
      "Natural language querying across MAP + CRM",
      "Custom agent builds for your team's workflows",
    ],
  },
  {
    title: "Platform Migrations",
    icon: ArrowRightLeft,
    description:
      "End-to-end MAP and CRM migrations — rebuilding nurtures, templates, routing, and integrations without losing momentum.",
    items: [
      "MAP migrations (Marketo, HubSpot, Inflection, SFMC)",
      "Nurture journey rebuilds",
      "Email template migration and Knak implementation",
      "Lead lifecycle and scoring framework setup",
      "Salesforce Flows for lifecycle management",
      "Integration and sync configuration",
    ],
  },
  {
    title: "Data & Enrichment Pipelines",
    icon: Database,
    description:
      "Clean, enrich, and route your data so the right leads get to the right people with the right context.",
    items: [
      "Clay enrichment workflows",
      "Lead routing and assignment logic",
      "Data normalization and hygiene",
      "Snowflake and warehouse integrations",
      "Deduplication and merge strategies",
      "Compliance-ready data governance",
    ],
  },
  {
    title: "Campaign Automation",
    icon: Workflow,
    description:
      "Design and build the workflows, nurtures, and operational processes that keep campaigns running without manual intervention.",
    items: [
      "Nurture strategy and execution",
      "Workflow automation across your GTM stack",
      "Salesforce campaign management",
      "UTM strategy and tracking",
      "Segmentation and targeting",
      "A/B testing frameworks",
    ],
  },
]

export default function ServiceCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h1>
          <div className="w-24 h-1 bg-[#8A7FFF] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#8A7FFF]/50 transition-colors"
            >
              <service.icon className="w-12 h-12 text-[#8A7FFF] mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#8A7FFF] rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

