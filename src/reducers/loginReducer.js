const loginReducer = ( state=false, action ) => {
    if ( action.type === 'LOGGED_IN' ) {
        const isLoggedIn = action.payload;
        return isLoggedIn;
    } else {
        return state;
    }
}

export default loginReducer;