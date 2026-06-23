const generateResponse = require('../services/aiServices')
const recipePrompt = require('../prompts/recipePrompt')

async function recipeHandler(history) {

    const reply = await generateResponse(recipePrompt, history)
    return reply;
}
module.exports = recipeHandler;