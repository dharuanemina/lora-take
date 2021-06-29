const axios = require("axios")
const errorUtils = require("../utils/ErrorUtils")

module.exports = {
    async getLastRepos(user, lang, quant) {
        let response = {
            status: 200,
            message: "Ok",
            quant: 0,
            data: {
                results: []
            }
        }

        try {
            
            const getContent = await axios.get(`https://api.github.com/users/${user}/repos?sort=created&direction=asc&per_page=10&page=1`)

            getContent.data.forEach((e) => {
                if(e.language && e.language.toLowerCase() === lang.toLowerCase()) {
                    response.data.results.push(e)
                }
            })

            console.log(response.data.results.length)

            return response
        }
        catch(e) {
            console.log(e)
        }
    }
}