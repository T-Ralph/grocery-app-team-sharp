const loginAction = loginContent => {
    return {
        type: 'LOG_IN',
        payload: loginContent
    };
}

const logoutAction = logoutContent => {
    return {
        type: 'LOG_OUT',
        payload: logoutContent
    };
}

export { loginAction, logoutAction };