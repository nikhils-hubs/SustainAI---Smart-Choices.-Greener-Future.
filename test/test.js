const generateResponse = require('../src/services/aiServices')

async function test() {
    const prompt = 'Give me a recipe using rice, onion and eggs.';
    const reply = await generateResponse(prompt)
    console.log(reply);
}

test();