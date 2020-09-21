//Import React
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import loginAction from '../actions/loginAction';

//Declare Function
function SignIn( event ) {

    const [ newUsername, setUsername ] = useState( "Guest" );
    const dispatch = useDispatch();
    const loginForm = document.getElementById("form-sign-in");

    const newUser = (event) => {
        event.preventDefault();
        setUsername(newUsername);
        dispatch(loginAction(newUsername));
        loginForm.reset();
    }
   
    

    return(
        <>
            <main>
                {newUsername}
                <section className="main-section">
                    <h2>
                        <i className="fas fa-user"></i>
                        Sign In / Sign Up
                    </h2>
                    <form className="form" id="form-sign-in">
                        <label htmlFor="username"><i className="fas fa-user"></i> Username</label>
                        <input type="text" id="username" placeholder="Username" onChange={e => { setUsername( e.target.value )}} />
                        <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                        <input type="password" id="password" placeholder="Password" />
                        <input type="button" id="signin" value="Sign In" onClick={newUser}/>
                        <input type="button" id="signup" value="Sign Up" onClick={newUser}/>
                    </form>
                </section>
            </main>
        </>
    );
}

//Export Function
export default SignIn;