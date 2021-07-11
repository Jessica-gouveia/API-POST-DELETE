const express = require("express")
const app = express()

const contacts = require("./routes/listRoutes")
const index = require("./routes/index")

app.use(express.json())

app.use("/", index)
app.use("/contatos", contacts)

module.exports = app

