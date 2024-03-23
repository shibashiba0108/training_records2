export default {
    //記録保存
    postRecord(params) {
        return new Promise((resolve, reject) => {
            axios.post('/api/record', params)
            .then(res => {
                const resData = res.data.body
                resolve(resData)
            })
            .catch(error => {
                reject(error)
            })
        })
    }
}