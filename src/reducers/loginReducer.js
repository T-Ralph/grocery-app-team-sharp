// This is a temporary reducer used to populate the store for development. This likely will not be used
const loginReducer = (state = false, action) => {
    switch (action) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}

export default loginReducer;