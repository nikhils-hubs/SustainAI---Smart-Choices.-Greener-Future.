const generateResponse = require('../services/aiServices')
const wastePrompt = require('../prompts/wastePrompt')

async function wasteHandler(history) {
    const reply = await generateResponse(wastePrompt, history)
    return reply;
}

module.exports = wasteHandler;
