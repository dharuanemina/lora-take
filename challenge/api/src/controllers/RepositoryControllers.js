const repository = require("../model/Repository")

module.exports = {
    async getLastRepositories(req, res) {
        return res.send(await repository.getLastRepos(req.body.user, req.body.language, req.body.quant))
    }
}