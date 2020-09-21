const initialState = {
    username: "Guest",
    password: "",
    isLoggedIn: false
}

const loginReducer = ( state = initialState , action ) => {
    
    switch ( action.type ) {
        case 'LOG_IN':
            const newUser = 
                action.payload;
                console.log(newUser.username);
                console.log(newUser.password);
            return newUser;
        default:
            return state;
    }
}

export default loginReducer;