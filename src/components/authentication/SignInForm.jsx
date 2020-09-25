//Import React
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction }  from '../../actions/loginAction';

//Declare Function
function SignInForm( ) {

    // Two states are declared, one for username and another for password
    let [ newUsername, setUsername ] = useState( "" );
    let [ newPassword, setPassword ] = useState( "" );

    // useDispatch hook is used to update global state
    const dispatch = useDispatch();

    // The below code block runs when 'sign in' or 'sign up' are triggered (buttonclicks)
    const newUser = (event) => {
        event.preventDefault();

        // creating error message area
        let errorArea = document.getElementById( "errorArea" );
        // Ensuring that every time this block runs, the error area will start out empty (previous messages will be removed)
        errorArea.innerHTML = "";
    
        // If username is 'Guest', or username or password are an empty string, error messages get generated and displayed as a list. Otherwise, global state gets updated with new user info
        if ((newUsername === "Guest") || (newUsername.length <= 0) || (newPassword.length <= 0) ) {
                   
            // The below two lines of code add the unordered list that will be populated with the error messages 
            const newUL = document.createElement( 'UL' );
            newUL.classList.add( "errorMessages" );           

            // Error messages display if username or password fields are left blank upon sign-in/sign-up
            // The below block of code adds a list item (an error message) if username is an empty string
            if ( newUsername === "" ) {
                const newLI = document.createElement( 'LI' );
                newLI.textContent = "You need to enter a username.";
                newUL.appendChild( newLI );                
            }
            // The below block of code adds a list item (an error message) if password is an empty string
            if ( newPassword.length <= 0 ) {
                const newLI = document.createElement( 'LI' );
                newLI.textContent = "You need to enter a password.";
                newUL.appendChild( newLI );                
            }
            // Adds the new error block created (unordered list with list item(s)) to the empty errorArea
            errorArea.appendChild( newUL );
        } else {
            // loginReducer global state gets updated with new user info
            dispatch(loginAction({ username: newUsername, password: newPassword, isLoggedIn: true })); 
        }
    }

    return(
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-user"></i>
                        Sign In / Sign Up
                    </h2>
                    <form className="form" id="form-sign-in">
                        <label htmlFor="username"><i className="fas fa-user"></i> Username</label>
                        {/* As user types into the username input field, Username state gets updated (trim() ensures that leading and trailing white spaces are not included) */}
                        <input type="text" id="username" placeholder="Username" onChange={e => { setUsername( e.target.value.trim() )}} required />
                        <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                         {/* As user types into the password input field, Password state gets updated */}
                        <input type="password" id="password" placeholder="Password" onChange={e => { setPassword( e.target.value )}} required />
                        {/* When user presses signin button, newUser function gets run */}
                        <input type="button" id="signin" value="Sign In" onClick={newUser}/>
                        {/* When user presses signup button, newUser function gets run. As there is no backend for this project, signin and signup get treated the same way (just simulated) */}
                        <input type="button" id="signup" value="Sign Up" onClick={newUser}/>
                        {/* The area where error messages will display */}
                        <div id="errorArea"></div>
                    </form>
                </section>
            </main>
        </>
    );
}

//Export Function
export default SignInForm;