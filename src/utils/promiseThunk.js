const createPromiseThunk = ({dispath,getState}) => next => action => {
    if(typeof action.then == 'function') {
        return action(dispath,getState)
    }

    return next(action)
}

const promiseThunk = createPromiseThunk

export default promiseThunk


  