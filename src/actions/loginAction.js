// Action to update login state (changes isLoggedIn to true and adds username and password)
const loginAction = loginContent => {
    return {
        type: 'LOG_IN',
        payload: loginContent
    };
}

// Action to update login state (changes isLoggedIn to false and changes username to 'Guest', password to an empty string)
const logoutAction = logoutContent => {
    return {
        type: 'LOG_OUT',
        payload: logoutContent
    };
}

export { loginAction, logoutAction };