const initialState = {
    username: "Guest",
    password: "",
    isLoggedIn: false
}

const loginReducer = ( state = initialState , action ) => {
    
    switch ( action.type ) {
        case 'LOG_IN':
            const newUser = action.payload;
            return newUser;
        case 'LOG_OUT':
            const guestUser = action.payload;
            return guestUser;
        default:
            return state;
    }
}

export default loginReducer;