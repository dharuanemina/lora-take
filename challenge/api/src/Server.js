require("dotenv").config()
const express = require("express")
const server = express()
const morgan = require("morgan")
const routes = require("./Router")

// url encoded accept json body
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

// track route access
server.use(morgan('dev'))

server.use(routes)

server.listen(process.env.PORT, () => console.log(`Server running at: ${process.env.URL}:${process.env.PORT}`))

module.exports = server