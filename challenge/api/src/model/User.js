const axios = require("axios")
const errorUtils = require("../utils/ErrorUtils")

module.exports = {
    async getUserAvatar(user) {

        let response = {
            status: 200,
            message: "Ok",
            data: {
                avatar: ""
            }
        }

        try {
            const getContent = await axios.get(`https://api.github.com/users/${user}`)
            response.data.avatar = getContent.data.avatar_url
            return response
        }
        catch(e){
            response = {
                ...errorUtils.errorDataNormalize(e)
            }
            return response
        }
    },
    async getUserData(user) {

        let response = {
            status: 200,
            message: "Ok",
            data: {
                result: null
            }
        }
        try {
            const getContent = await axios.get(`https://api.github.com/users/${user}`)
            response.data.result = getContent.data
            return response
        }
        catch(e){
            response = {
                ...errorUtils.errorDataNormalize(e)
            }
            return response
        }
    },
}