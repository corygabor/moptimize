"use client"

import type React from "react"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, MessageCircle } from "lucide-react"

export default function ContactChat() {
  const [inputValue, setInputValue] = useState("")

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat/contact" }),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && status !== "in_progress") {
      sendMessage({ text: inputValue.trim() })
      setInputValue("")
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="h-[600px] flex flex-col">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-blue-600" />
            Chat with us
          </CardTitle>
          <p className="text-sm text-muted-foreground">Tell us about your project and we'll get back to you soon</p>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-blue-600/20" />
                <p>Hi! I'm here to help you get in touch with our team.</p>
                <p className="text-sm mt-2">Just type a message to get started.</p>
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user" ? "bg-blue-600 text-white" : "bg-muted text-foreground"
                  }`}
                >
                  {message.parts.map((part, index) => {
                    if (part.type === "text") {
                      return (
                        <div key={index} className="whitespace-pre-wrap">
                          {part.text}
                        </div>
                      )
                    }

                    if (part.type === "tool-collectContactInfo") {
                      switch (part.state) {
                        case "input-available":
                          return (
                            <div key={index} className="text-sm opacity-75">
                              Processing your information...
                            </div>
                          )
                        case "output-available":
                          return (
                            <div
                              key={index}
                              className={`p-3 rounded border ${
                                part.output.success
                                  ? "bg-green-50 border-green-200 text-green-800"
                                  : "bg-red-50 border-red-200 text-red-800"
                              }`}
                            >
                              {part.output.message}
                            </div>
                          )
                        case "output-error":
                          return (
                            <div key={index} className="text-red-600 text-sm">
                              Error: {part.errorText}
                            </div>
                          )
                      }
                    }

                    return null
                  })}
                </div>
              </div>
            ))}

            {status === "in_progress" && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                disabled={status === "in_progress"}
                className="flex-1"
              />
              <Button type="submit" disabled={!inputValue.trim() || status === "in_progress"} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
