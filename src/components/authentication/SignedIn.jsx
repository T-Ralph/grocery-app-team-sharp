//Import React
import React, { useState } from 'react';
import { logoutAction }  from '../../actions/loginAction';
import { useSelector, useDispatch } from 'react-redux';

//Declare Function
function SignedIn() {

    const [ newUsername, setUsername ] = useState( "Guest" );
    // useDispatch hook is used to update global state
    const dispatch = useDispatch();
    // Brings in loginReducer global state for use
    const userInfo = useSelector(state => state.loginReducer);
    const loginForm = document.getElementById("form-sign-in");

    const guestUser = (event) => {
        event.preventDefault();
        dispatch(logoutAction({ username: "Guest", password: "", isLoggedIn: false }));
        loginForm.reset();
    }

    return(
        <>
        <main>
            <section className="main-section">
                <h2>
                    <i className="fas fa-user"></i>
                    You are currently signed in as {userInfo.username}
                </h2>
               
                <p>If that is not you or you are ready to sign out, click the button below.</p>
                <button onClick={guestUser}>Sign out</button>
            </section>
        </main>
    </>
    )
}

//Export Function
export default SignedIn;