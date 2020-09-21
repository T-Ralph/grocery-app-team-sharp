const loginReducer = ( state="Guest", action ) => {
    if ( action.type === 'LOG_IN' ) {
        const newLogIn = {
            username: action.payload
        }
        return newLogIn;
    } else {
        return state;
    }
}

export default loginReducer;