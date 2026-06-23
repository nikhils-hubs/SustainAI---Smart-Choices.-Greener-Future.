const sendMessage = require("../services/sendMessage")
const { menu, MainMenu } = require("../handlers/mainMenu")
const { getUser, setUser, updateUser, resetUser, addMessage, getHistory } = require("../states/userState")
const recipeHandler = require('../handlers/recipeHandler')
const electricityHandler = require('../handlers/electricityHandler')
const waterHandler = require('../handlers/waterHandler')
const wasteHandler = require('../handlers/wasteHandler')
const sustainableHandler = require('../handlers/sustainableHandler')

const express = require('express')
const router = express.Router()

router.post("/webhook", async (req, res) => {
    try {
        const sender = req.body.From;
        const message = req.body.Body.trim();
        console.log("sender: ", sender);
        console.log("Message: ", message);
        let user = getUser(sender);
        const greetings = ['hi', 'hello', 'run', 'hey', 'start']
        const SESSION_TIMEOUT = 5 * 60 * 1000
        if (greetings.includes(message.toLowerCase())) {
            resetUser(sender);
            setUser(sender, "awaiting_menu");
            await sendMessage(sender, menu);
            return res.status(200).send();
        }
        if (user && Date.now() - user.lastActivity > SESSION_TIMEOUT) {
            resetUser(sender)
            user = null
        }
        if (!user) {
            await sendMessage(
                sender,
                `👋 Your session has expired. Send *Hi* to start a new conversation.`
            );

            return res.status(200).send()
        }

        if (user.mode == "awaiting_menu") {
            const result = MainMenu(message)
            setUser(sender, result.mode)
            await sendMessage(sender, result.reply)
            return res.status(200).send()
        }

        if (user.mode == "recipe") {
            addMessage(sender, 'user', message)
            const history = getHistory(sender)
            const aiReply = await recipeHandler(history)
            addMessage(sender, "assistant", aiReply);
            await sendMessage(sender, aiReply)
            updateUser(sender)
            return res.status(200).send()
        }
        if (user.mode == "waste") {
            addMessage(sender, 'user', message)
            const history = getHistory(sender)
            const aiReply = await wasteHandler(history)
            addMessage(sender, "assistant", aiReply);
            await sendMessage(sender, aiReply)
            updateUser(sender)
            return res.status(200).send()
        }
        if (user.mode == "water") {
            addMessage(sender, 'user', message)
            const history = getHistory(sender)
            const aiReply = await waterHandler(history)
            addMessage(sender, "assistant", aiReply);
            await sendMessage(sender, aiReply)
            updateUser(sender)
            return res.status(200).send()
        }
        if (user.mode == "electricity") {
            addMessage(sender, 'user', message)
            const history = getHistory(sender)
            const aiReply = await electricityHandler(history)
            addMessage(sender, "assistant", aiReply);
            await sendMessage(sender, aiReply)
            updateUser(sender)
            return res.status(200).send()
        }
        if (user.mode == "sustainability") {
            addMessage(sender, 'user', message)
            const history = getHistory(sender)
            const aiReply = await sustainableHandler(history)
            addMessage(sender, "assistant", aiReply);
            await sendMessage(sender, aiReply)
            updateUser(sender)
            return res.status(200).send()
        }

    } catch (err) {
        console.error(err)
        return res.sendStatus(500)
    }
})

module.exports = router;