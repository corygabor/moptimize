import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Insert contact into database
    await sql`
      INSERT INTO contacts (first_name, last_name, email, company, how_can_we_help, created_at)
      VALUES (${firstName}, ${lastName}, ${email}, ${company}, ${message}, NOW())
    `

    // Send Slack notification
    if (process.env.SLACK_WEBHOOK_URL) {
      const slackMessage = {
        text: "New Contact Form Submission",
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "🚀 New Contact Form Submission",
            },
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Name:* ${firstName} ${lastName}`,
              },
              {
                type: "mrkdwn",
                text: `*Email:* ${email}`,
              },
              {
                type: "mrkdwn",
                text: `*Company:* ${company}`,
              },
            ],
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Message:*\n${message}`,
            },
          },
        ],
      }

      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(slackMessage),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}
