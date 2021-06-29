const user = require("../model/User")

module.exports = {
    async getAvatar(req, res) {
        const response = await user.getUserAvatar(req.params.name)
        return res.status(response.status).send(response)
    },
    async getAllData(req, res) {
        const response = await user.getUserData(req.params.name)
        return res.status(response.status).send(response)
    },
}