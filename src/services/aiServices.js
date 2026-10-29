require("dotenv").config()
const Groq = require("groq-sdk")
const { systemPrompt } = require("../textFromat/Tmainmenu")
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

async function generateResponse(systemprompt, history = []) {
    try {
        const chat_completion = await groq.chat.completions.create({
            messages: [{
                role: 'system',
                content: systemprompt,
            },
            ...history,
            ],
            model: 'openai/gpt-oss-120b',
        });
        return chat_completion.choices[0]?.message?.content;
    } catch (error) {
        console.error('groq err: ', error);
        return 'Sorry I am having trouble generating a response rn'

    }
}
module.exports = generateResponse