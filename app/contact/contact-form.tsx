"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-black/50 backdrop-blur-sm border-white/10">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-[#8A7FFF] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Thank you for reaching out!</h3>
            <p className="text-gray-300">We've received your message and will get back to you within 24 hours.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto bg-black/50 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Work With Us</CardTitle>
        <CardDescription className="text-gray-300">
          Let's explore how we can streamline your stack, automate growth, and scale together.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="John"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-[#8A7FFF]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Doe"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-[#8A7FFF]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Work Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="john@company.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-[#8A7FFF]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-white">
              Company *
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              placeholder="Your Company Name"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-[#8A7FFF]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              How can we help? *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Tell us about your project, challenges, or goals..."
              rows={4}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-[#8A7FFF] resize-none"
            />
          </div>

          {error && <div className="text-red-400 text-sm">{error}</div>}

          <Button type="submit" className="w-full bg-[#8A7FFF] hover:bg-[#7A6FEF] text-white" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Start the Conversation"
            )}
          </Button>
          <p className="text-center text-sm text-gray-400 mt-2">We'll reply within 1 business day.</p>
        </form>
      </CardContent>
    </Card>
  )
}
