# 🌱 SustainAI

**Smart Choices. Greener Future.**

SustainAI is an AI-powered WhatsApp chatbot that helps users make sustainable decisions in their daily lives. Instead of searching through multiple websites, users can simply send a message on WhatsApp and receive instant, personalized guidance.

The project was built using Node.js, Twilio WhatsApp API, and Groq AI with a modular backend architecture.

---

## Features

### ♻️ Waste Management

Get guidance on how to dispose of different types of waste correctly.

**Example**

* Broken charger
* Banana peel
* Plastic bottle

---

### 🍽️ Leftover Recipe Generator

Enter the ingredients available at home and receive simple vegetarian recipes that help reduce food waste.

**Example**

* Rice, Paneer, Onion
* Potato, Capsicum, Tomato

---

### 💧 Water Usage Advisor

Analyze daily water usage and receive practical suggestions to reduce consumption.

**Example**

* Shower duration
* Washing habits
* Household water usage

---

### ⚡ Electricity Usage Analyzer

Estimate electricity consumption based on appliance usage and receive recommendations to reduce energy bills.

**Example**

* AC usage
* Fan
* Refrigerator
* TV

---

### 🌍 Sustainability Tips

Ask questions related to sustainable living and receive practical, AI-generated suggestions.

---

## Conversation Memory

The chatbot remembers the conversation during an active session, allowing users to ask follow-up questions naturally.

Example:

> User: I use my AC for 6 hours every night.
> Bot: Here's the estimated electricity consumption...
> User: What if I increase the temperature to 26°C?
> Bot: It recalculates the estimate without asking for all the details again.

Sessions automatically expire after 5 minutes of inactivity.

---

## Tech Stack

* Node.js
* Express.js
* Twilio WhatsApp API
* Groq API
* JavaScript

---

## Project Structure

```text
src/
├── handlers/
├── prompts/
├── routes/
├── services/
├── states/
├── textFormat/
└── index.js
```

---

## Installation

Clone the repository:

```bash
git clone <https://github.com/nikhils-hubs/SustainAI---Smart-Choices.-Greener-Future.>
cd SustainAI
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
SID=your_twilio_sid
ACCESS_TOKEN=your_twilio_auth_token
GROQ_API_KEY=your_groq_api_key
```

Start the server:

```bash
npm run dev
```

---

## Future Improvements

* User authentication
* Persistent database storage
* Multi-language support
* Voice message support
* Carbon footprint calculator
* Personalized sustainability dashboard

---

## Author

**Nikhil Singh**

Built as part of an AI internship project to demonstrate how conversational AI can make sustainable living by 1M1B AI for Sustainability Virtual Internship
