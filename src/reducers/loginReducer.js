const loginReducer = ( state="Guest", action ) => {
    if ( action.type === 'LOG_IN' ) {
        const username = action.payload
        return username;
    } else {
        return state;
    }
}

export default loginReducer;