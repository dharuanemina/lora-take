const axios = require("axios")
const errorUtils = require("../utils/ErrorUtils")

module.exports = {
    // return last repositories by custom quantity
    async getLastRepos(user, lang, quant) {
        let response = {
            status: 200,
            message: "Ok",
            data: {
                quant: 0,
                results: []
            }
        }

        // create recursive function paginate when request other languages...
        // todo -> create function query for better requests

        const repos = await this.getLast20Repo(user, 1)

        if(repos.length > 0) {
            repos.forEach((repo) => {
                if(repo.language && repo.language.toLowerCase() == lang.toLowerCase()) {
                    if(response.data.results.length < quant) {
                        response.data.results.push(repo)
                        response.data.quant++
                    }
                }
            })
        }
        else {
            response = {
                ...repos
            }
        }

        return response

    },
    // return last fifty repositories paginated
    async getLast20Repo(user, page) {
        try {

            let getContent = await axios.get(`https://api.github.com/users/${user}/repos?sort=created&direction=asc&per_page=20&page=${page}`)

            return getContent.data

        }
        catch(e) {
            return errorUtils.errorDataNormalize(e)
        }
    },
}