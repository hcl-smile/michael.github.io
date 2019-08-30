import ajax from '../../fetch/ajax'

import {
    HOME_REQUEST, 
    HOME_SUCCESS, 
    HOME_FAILURE
} from './contants'

function fetchList(payload) {
    return {
        type: HOME_SUCCESS,
        payload
    }
}

export function getList(data) {
    return (dispatch) => {
        return ajax('get','/data/cityinfo/101010100.html',data || '')
               .then(res => {
                  dispatch(fetchList(res.data))
               })
               .catch(e => {
                   console.log(e)
               })
    }
}
