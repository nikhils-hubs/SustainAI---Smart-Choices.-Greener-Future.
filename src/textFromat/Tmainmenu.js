const menuReply =
    `🌱 Welcome to SustainAI

1 ♻️ Waste Management
2 🍽️ Leftover Recipe Generator
3 💧 Water Usage Advisor
4 ⚡ Electricity Usage Analyzer
5 🌍 Sustainability Tips

Reply with the option number: `

const WasteReply =
    `♻️ Waste Management
Please tell me the item you want to dispose of.
Example: Broken charger`

const recipeReply =
    `🍽️ Leftover Food Recipe Generator
Please send the ingredients you have.
Example: Rice, Onion, Eggs`

const waterReply =
    `💧 Water Usage Advisor
Tell me about your daily water usage.
Example: Family of 4 uses 900 liters/day`

const electricityReply =
    `⚡ Electricity Usage Analyzer
Tell me the appliances and usage.
Example: AC 8 hrs, TV 4 hrs`

const sustainableReply =
    `🌍 Sustainability Tips
Ask me anything about sustainable life`

const systemPrompt =
    `You are SustainAI, an AI assistant that helps users with sustainability.

You help with:
- Waste Management
- Leftover Recipe Generation
- Water Conservation
- Electricity Saving
- Sustainable Living

Always provide clear, practical, and concise answers.`

module.exports = {
    menuReply,
    WasteReply,
    recipeReply,
    waterReply,
    sustainableReply,
    electricityReply,
    systemPrompt,
}