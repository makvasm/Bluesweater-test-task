const express = require("express")
const app = express()

app.use(express.static("/src/public"))

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.listen(port, () => console.log(`Listening port ${port}`))