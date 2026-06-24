const generateResponse = require('../services/aiServices')
const sustainablePrompt = require('../prompts/sustainablePrompt')

async function sustainbaleHandler(histroy) {
    const reply = await generateResponse(sustainablePrompt, histroy)
    return reply;
}
module.exports = sustainbaleHandler;