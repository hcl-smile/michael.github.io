import {HOME_REQUEST, HOME_SUCCESS, HOME_FAILURE} from './contants'

const initState = {
    res: ''
}

export default function (state=initState, action){
    switch(action.type) {
        case HOME_SUCCESS:
            return {
                ...state,
                res: action.payload
            }

        default:
            return state
    }
}