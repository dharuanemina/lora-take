const routes = require("express").Router()
const userControllers = require("./controllers/UserControllers")
const repoControllers = require("./controllers/RepositoryControllers")

// gets - user
routes.get("/user/getAvatar/:name", userControllers.getAvatar)
routes.get("/user/getAllData/:name", userControllers.getAllData)

// gets - repositories
routes.post("/repo/last", repoControllers.getLastRepositories)

module.exports = routes