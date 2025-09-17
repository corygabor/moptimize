"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const reviews = [
  {
    quote: "Cory helped us establish repeatable processes and keep multiple stakeholders aligned.",
    text: "Cory was a highly valued consultant for our digital marketing operations while I was leading the consumer marketing team at a large healthcare company. He combined technical expertise with people skills to solve new challenges, maintain strong communication, and keep our team efficient.",
    author: "Jeremy Z.",
    title: "VP, Brand and Digital Marketing",
    company: "Virtual Healthcare Company",
  },
  {
    quote: "A game-changer for our marketing operations.",
    text: "Cory's strategic expertise and hands-on approach streamlined our processes and boosted campaign effectiveness. He made our collaboration seamless and impactful, and I would recommend him to any team looking to strengthen their marketing operations.",
    author: "Cody H.",
    title: "Sales & Marketing Operations Manager",
    company: "Global Insurance Company",
  },
  {
    quote: "Cory made our implementation smooth and successful.",
    text: "Cory was always available to talk through issues, share guidance, and ensure our projects stayed on track. His knowledge and leadership made the entire experience as smooth as possible. I would gladly work with him again.",
    author: "Hannah A.",
    title: "Manager, Marketing Operations",
    company: "Virtual Healthcare Company",
  },
  {
    quote: "Hiring Cory was one of the best professional decisions I've made.",
    text: "Cory consistently looked for ways to improve systems, reduce manual work, and help us make better decisions. He is proactive, humble, and highly effective at prioritizing what matters most. I cannot recommend him enough.",
    author: "Stacey B.",
    title: "Senior Director of Marketing",
    company: "Open Source Data Science Platform",
  },
]

export default function Reviews() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Client Reviews
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#8A7FFF]/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-[#8A7FFF] mb-6" />
              <blockquote className="text-white text-lg font-medium mb-4 leading-relaxed">"{review.quote}"</blockquote>
              <p className="text-gray-300 mb-6 leading-relaxed">{review.text}</p>
              <div className="border-t border-white/10 pt-4">
                <div className="text-[#8A7FFF] font-semibold">{review.author}</div>
                <div className="text-gray-400 text-sm">{review.title}</div>
                <div className="text-gray-500 text-sm">{review.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
