require('dotenv').config()
const axios = require('axios')
const client = require('twilio')(
    process.env.SID,
    process.env.ACCESS_TOKEN
)

async function sendMessage(to, body) {
    console.log("Sending to:", to);
    try {
        const message = await client.messages.create({
            body: body,
            from: 'whatsapp:+14155238886',
            to: to,
        });
        console.log("message sent: ", message.sid);

    }
    catch (err) {
        console.log(err);

    }
}
module.exports = sendMessage;
