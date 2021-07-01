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

        // paginate api requests
        for(let i = 1; i > response.data.results.length; i++) {
            // check enought contents
            if(response.data.results.length < quant) {
                const repos = await this.getLast20Repo(user, i)
                if(repos.length > 0) {
                    repos.forEach((repo) => {
                        if(repo.language && repo.language.toLowerCase() == lang.toLowerCase()) {
                            if(response.data.results.length < quant) {
                                response.data.results.push(this.formatDataObj(repo))
                                response.data.quant++
                            }
                        }
                    })
                }
                else {
                    // if getLast20Repo returns an object, that means an error occurred
                    if(repos.status) {
                        response = {
                            ...repos
                        }
                        break
                    }
                    else {
                        break
                    }
                }
            }
            else {
                break
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
    // factory function format less info returned
    formatDataObj(repo) {
        return {
            full_name: repo.full_name,
            description: repo.description ? repo.description : "This repository doesn't have a description",
            avatar: repo.owner.avatar_url,
        }
    }
}