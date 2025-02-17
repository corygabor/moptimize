---
title: 'How to Integrate Marketo with ChatGPT with a Webhook'
date: '2023-10-30'
author: 'Cory Gabor'
---

As many Marketing Ops veterans know, maximizing marketing impact can be achieved through a number of strategies. The methodology of focus in this blog is saving time on a key task for database management, segmentation, which can be as crucial as it is tedious. 

I recently built an integration between Adobe Marketo and OpenAI's ChatGPT. The goal? To streamline and refine lead segmentation process, moving beyond the limitations of traditional smart lists and smart campaigns with an extensive list of choice steps. Below, I will share the goals achieved, key outcomes, and a glimpse into how this integration was set up behind the scenes:

## Goals Achieved:

- **Scalability**: Moved beyond the rigidity of traditional smart lists and campaigns, now effortlessly mapping diverse inputs to precise segmentations.
- **Accuracy**: Attained a nuanced categorization of leads, refining the segmentation process.
- **Efficiency**: Automated real-time role determination, trimming down manual operations.

## Key Outcomes:

- Reduced QA time and risk for inaccurate segmentation.
- Less frequent need for smart campaign updates.
- Improved email personalization.

## How to DIY:

In the example below, my goal was improving standardization of the varied inputs commonly received for Job Title, without having to enter every variation manually into a smart campaign. 

I started by building a webhook within Marketo to communicate with ChatGPT's API. This setup facilitates POST requests to ChatGPT, which will send the prompt to ChatGPT and then return the response into specified fields in Marketo. In the screenshot below is a simplified version of the webhook. If you have specific questions as you go through this, reach out here. 

### Marketo Webhook Configuration:

ChatGPT API docs: [https://platform.openai.com/docs/api-reference/chat/create](https://platform.openai.com/docs/api-reference/chat/create)

Set up a POST request to the completion's endpoint which includes the model that you want to use as well as your prompt (content).

Tip: You can include lead tokens within the payload template.

ChatGPT processes this data, and returns specific responses mapped directly to Marketo fields. In order to do this, you will need to take the response structure from ChatGPT, and create rules for each field you want mapped within the Response Mappings section. You can do this by parsing the JSON response into the specified fields. Here's some documentation on how that works in Marketo.

For this webhook, I have data mapping into a 'Persona' field as well as a 'Usage' field where I am tracking ChatGPT token usage directly in Marketo.

Once you have your webhook setup completed, you can setup a Marketo Program to trigger it.

### Marketo Program Configuration:

In this example, I set up a smart campaign that is triggered upon a new person being created in Marketo or data value changes for the job title attribute. Upon triggering the webhook, Marketo sends the prompt to ChatGPT.

Reminder: Webhooks can only be used in Trigger Campaigns.

The response from ChatGPT gets mapped to a designated Marketo only field, updating the lead's record. I'd recommend creating a field solely for ChatGPT to utilize, that you are able to QA without directly impacting your raw data, as well as to test additional prompts. 

A smart campaign can be created to stamp only specific values into your final field. You can then use data in that field for downstream segmentation.

This integration is just the tip of the iceberg, and I am excited about the possibilities it unfolds!

