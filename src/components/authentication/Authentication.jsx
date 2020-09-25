//Import React
import React from 'react';
import { useSelector } from 'react-redux';
import SignedIn from './SignedIn';
import SignInForm from './SignInForm';

//Declare Function
function Authentication( ) {

    // useSelector gives us access to the loginReducer global state
    const userInfo = useSelector(state => state.loginReducer);

    // The below code block renders one of two different components depending on whether isLoggedIn is true or false
    if ( userInfo.isLoggedIn ) {
            return <SignedIn />;
        } else
        return <SignInForm />; 
    };

//Export Function
export default Authentication;