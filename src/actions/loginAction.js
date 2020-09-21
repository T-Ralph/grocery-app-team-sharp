const loginAction = loginContent => {
    return {
        type: 'LOG_IN',
        payload: loginContent
    };
}

export default loginAction;