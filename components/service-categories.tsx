"use client"

import { motion } from "framer-motion"
import { Server, BarChart, LineChart } from "lucide-react"

const services = [
  {
    title: "Platform Operations",
    icon: Server,
    description:
      "Platform operations focuses on implementing, optimizing, and managing various marketing platforms and tools that drive your marketing strategies.",
    items: [
      "Implementation & Migration",
      "Marketing Automation Platform Audit",
      "Lead Management",
      "Tool Evaluation",
      "User Management & Permission Sets",
      "Troubleshooting & Quality Assurance",
      "Sync Errors",
      "Day-to-Day System Administration",
      "Native Integrations",
      "Data Normalization",
    ],
  },
  {
    title: "Campaign Operations",
    icon: BarChart,
    description:
      "Campaign operations serves as the foundation of your marketing campaigns. It involves planning, execution, and monitoring to ensure campaigns align with your business objectives and deliver the desired results.",
    items: [
      "Campaign Management",
      "Nurture Strategy",
      "UTMs & Tracking",
      "Workflow Automation & Process Optimization",
      "Campaign Execution & A/B Testing",
      "Center of Excellence",
      "Intake/Ticket Process",
      "Segmentation & Targeting",
      "Quality Assurance",
    ],
  },
  {
    title: "Marketing Analytics & Insights",
    icon: LineChart,
    description: "Marketing analytics provides insights into marketing campaign performance.",
    items: ["In-platform reporting", "Salesforce (SFDC) reporting", "Attribution", "Quality Assurance"],
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

