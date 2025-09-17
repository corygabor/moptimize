import { openai } from "@ai-sdk/openai"
import { convertToModelMessages, streamText, type UIMessage, tool } from "ai"
import { z } from "zod"
import { neon } from "@neondatabase/serverless"

export const maxDuration = 30

const sql = neon(process.env.DATABASE_URL!)

// Tool for collecting contact information
const collectContactInfo = tool({
  description: "Collect and validate contact information from the user",
  inputSchema: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Valid email is required"),
    company: z.string().min(1, "Company is required"),
    howCanWeHelp: z.string().min(10, "Please provide more details about how we can help"),
  }),
  execute: async ({ firstName, lastName, email, company, howCanWeHelp }) => {
    try {
      // Insert contact into database
      const result = await sql`
        INSERT INTO contacts (first_name, last_name, email, company, how_can_we_help)
        VALUES (${firstName}, ${lastName}, ${email}, ${company}, ${howCanWeHelp})
        RETURNING id
      `

      const contactId = result[0].id

      await sendSlackNotification({
        firstName,
        lastName,
        email,
        company,
        howCanWeHelp,
        contactId,
      })

      return {
        success: true,
        message: "Thank you! Your information has been submitted successfully. We'll get back to you soon.",
        contactId,
      }
    } catch (error) {
      console.error("[v0] Error saving contact:", error)
      return {
        success: false,
        message: "Sorry, there was an error submitting your information. Please try again.",
      }
    }
  },
})

async function sendSlackNotification(contactData: {
  firstName: string
  lastName: string
  email: string
  company: string
  howCanWeHelp: string
  contactId: number
}) {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL

  if (!slackWebhookUrl) {
    console.log("[v0] SLACK_WEBHOOK_URL not configured, skipping Slack notification")
    return
  }

  const message = {
    text: "New Contact Form Submission",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "🎉 New Contact Submission",
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:*\n${contactData.firstName} ${contactData.lastName}`,
          },
          {
            type: "mrkdwn",
            text: `*Email:*\n${contactData.email}`,
          },
          {
            type: "mrkdwn",
            text: `*Company:*\n${contactData.company}`,
          },
          {
            type: "mrkdwn",
            text: `*Contact ID:*\n#${contactData.contactId}`,
          },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*How can we help:*\n${contactData.howCanWeHelp}`,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `Submitted at ${new Date().toLocaleString()}`,
          },
        ],
      },
    ],
  }

  try {
    const response = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.status}`)
    }

    console.log("[v0] Slack notification sent successfully")
  } catch (error) {
    console.error("[v0] Error sending Slack notification:", error)
  }
}

const tools = {
  collectContactInfo,
} as const

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const systemPrompt = `You are a helpful AI assistant for a business contact form. Your goal is to collect the following required information from potential clients in a conversational way:

1. First name
2. Last name  
3. Email address
4. Company name
5. How can we help? (detailed description of their needs)

Guidelines:
- Be friendly, professional, and conversational
- Ask for information naturally, don't make it feel like a rigid form
- Validate email addresses and ensure all fields are complete
- Once you have all required information, use the collectContactInfo tool to submit it
- If any information is missing or invalid, ask for clarification
- Keep responses concise but helpful
- After successful submission, let them know we'll be in touch soon

Start by greeting them and asking how you can help them today.`

  const result = streamText({
    model: openai("gpt-4"),
    messages: [{ role: "system", content: systemPrompt }, ...convertToModelMessages(messages)],
    tools,
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    onFinish: async ({ isAborted }) => {
      if (isAborted) {
        console.log("[v0] Chat aborted")
      }
    },
  })
}
