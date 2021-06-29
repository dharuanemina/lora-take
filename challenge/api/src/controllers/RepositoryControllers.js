const repository = require("../model/Repository")

module.exports = {
    async getLastRepositories(req, res) {
        const response = await repository.getLastRepos(req.body.user, req.body.language, req.body.quant)
        return res.status(response.status).send(response)
    }
}