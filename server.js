const express = require("express")
const app = express()

app.use(express.static("/public"))

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/public/index.html")
})

app.listen(port, () => console.log(`Listening port ${port}`))