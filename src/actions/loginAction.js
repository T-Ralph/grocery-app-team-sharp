const loginAction = boolean => {
    return {
        type: 'LOGGED_IN',
        payload: boolean
    };
}

export default loginAction;