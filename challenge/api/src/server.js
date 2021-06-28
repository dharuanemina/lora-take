require("dotenv").config();
const server = require("express")();
const routes = require("./router")

server.use(routes)

server.listen(process.env.PORT, () => console.log(`Server running at: ${process.env.URL}:${process.env.PORT}`));
module.exports = server;