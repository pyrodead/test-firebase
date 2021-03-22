const initState = {
    initialized: true,
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_INITIALIZED' :
            return {...state, initialized: action.payload}
        default:
            return state;
    }
}

export default rootReducer;