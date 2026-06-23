const generateResponse = require('../services/aiServices')
const waterPrompt = require('../prompts/waterPrompt')

async function waterHandler(history) {
    const reply = await generateResponse(waterPrompt, history)
    return reply;
}
module.exports = waterHandler;