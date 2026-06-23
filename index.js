const twilio_webhook = require('./src/routes/webhook')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use(twilio_webhook)

app.listen(port, () => {
    console.log(`thing are going on ${port}`)

})