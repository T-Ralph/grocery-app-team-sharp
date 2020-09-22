//Import React
import React from 'react';
import { useSelector } from 'react-redux';
import SignedIn from './SignedIn';
import SignInForm from './SignInForm';

//Declare Function
function Authentication( ) {

    const userInfo = useSelector(state => state.loginReducer);

    if ( userInfo.isLoggedIn ) {
            return <SignedIn />;
        } else
        return <SignInForm />; 
    };

//Export Function
export default Authentication;