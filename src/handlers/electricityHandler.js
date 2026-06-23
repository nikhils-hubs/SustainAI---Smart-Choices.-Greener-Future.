const generateResponse = require('../services/aiServices')
const electricityPrompt = require('../prompts/electricityPrompt')

async function electricityHandler(history) {
    const reply = await generateResponse(electricityPrompt, history)
    return reply;
}
module.exports = electricityHandler