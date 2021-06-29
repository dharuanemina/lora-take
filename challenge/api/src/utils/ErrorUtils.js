module.exports = {
    errorDataNormalize(data) {
        return {
            status: data.response.status,
            message: data.response.statusText,
        }
    },
}