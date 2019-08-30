import axios from 'axios'

export default function(method,url,data) {
    return axios({
        method: method || 'post',
        url,
        data
    })
    .catch(e => {
        console.log(e)
    })
}
