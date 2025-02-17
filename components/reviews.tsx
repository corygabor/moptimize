"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const reviews = [
  {
    text: "Cory was a highly-valued consultant for our digital marketing operations while I was leading the consumer marketing team for a large virtual healthcare company. He has a great combination of technical knowledge and people skills which he employed to help us establish repeatable processes, solve for new challenges as they arose, and keep multiple stakeholders happy with strong client service and communication.",
    author: "Jeremy Z.",
    company: "Virtual Healthcare Company",
  },
  {
    text: "Working with Cory was a game-changer for our marketing operations and Marketo initiatives. Cory's strategic expertise and hands-on approach not only streamlined our processes but also significantly boosted our campaign effectiveness, making our collaboration an invaluable asset. If you are looking to solidify your marketing ops, while learning from the best, Cory is your guy!",
    author: "Cody H.",
    company: "Global Insurance Company",
  },
  {
    text: "I worked with Cory on a Marketo implementation and retainer. To say that he was awesome would be an understatement. Cory was always available to talk through issues or lay out projects with me. His knowledge, leadership and partnership really helped to make the whole experience as smooth as it could have been. Given the chance, I would absolutely work with Cory again on any project.",
    author: "Hannah A.",
    company: "Virtual Healthcare Company",
  },
  {
    text: "Hiring Cory was one of the best decisions I've ever made in my professional career. He's one of those people that makes everyone else look good. Cory is a phenomenal marketing operations manager, but he brings so much more to the table than that. Cory is always looking around the corner for ways to improve systems and processes to gain better insights and make better data-driven decisions. He's proactive, level-headed, kind, humble, and incredibly smart. He knows how to ruthlessly prioritize his daily tasks so that he can focus on the things that will have the greatest business impact. I honestly don't know what I would have done without Cory on my team and hope to be able to hire him again someday. I can't recommend him enough to anyone looking to add a top-notch marketer to their team.",
    author: "Stacey B.",
    company: "Open Source Data Science Platform",
  },
]

export default function Reviews() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
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
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#8A7FFF]/50 transition-colors"
            >
              <Quote className="w-8 h-8 text-[#8A7FFF] mb-4" />
              <p className="text-gray-300 mb-4">{review.text}</p>
              <div className="text-[#8A7FFF] font-semibold">{review.author}</div>
              <div className="text-gray-400 text-sm">{review.company}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

