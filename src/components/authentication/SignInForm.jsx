//Import React
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction }  from '../../actions/loginAction';

//Declare Function
function SignInForm( event ) {

    const [ newUsername, setUsername ] = useState( "Guest" );
    const [ newPassword, setPassword ] = useState( "" );
    // useDispatch hook is used to update global state
    const dispatch = useDispatch();
    const loginForm = document.getElementById("form-sign-in");
    const usernameFieldValue = document.getElementById("username");

    
    const newUser = (event) => {
        event.preventDefault();
        if ((newUsername === "Guest") && (!usernameFieldValue)) {
            console.log("You need to enter your username!");
        } else {
             // loginReducer global state gets updated with new user
            dispatch(loginAction({ username: newUsername, password: newPassword, isLoggedIn: true }));
            if (loginForm === null ){
                loginForm.reset();
            }
            
        }
    }

    return(
        <form className="form" id="form-sign-in">
            <h2>
                <i className="fas fa-user"></i>
                Sign In / Sign Up
            </h2>
            <label htmlFor="username"><i className="fas fa-user"></i> Username</label>
            <input type="text" id="username" placeholder="Username" onChange={e => { setUsername( e.target.value )}} required />
            <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
            <input type="password" id="password" placeholder="Password" onChange={e => { setPassword( e.target.value )}} required />
            <input type="button" id="signin" value="Sign In" onClick={newUser}/>

            {/* Temporarily changed Sign Up button to log out to test functionality */}
            <input type="button" id="signup" value="Sign Up" onClick={newUser}/>
        </form>         
    );
}

//Export Function
export default SignInForm;