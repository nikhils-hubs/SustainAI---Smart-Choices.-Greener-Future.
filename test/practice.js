const express = require(express)
const app = express()
const port = process.env.port

app.use(express.json())
app.get("/webhook", (req, res) => {
    const vt = process.env.verfiy_token

    const mode = req.qurey["hub.mode"]
    const token = req.qurey["hub.vt"]
    const challenge = req.qurey["hub.challenge"]

    if (mode == "subscribe" && token == vt) {
        return res.status(200).send(challenge)
    }

    else {
        res.sendStatus(403)
    }
})

app.post("/webhook", (req, res) => {
    console.log("message got");
    console.log(req.body);

    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`at ${port}`);

})