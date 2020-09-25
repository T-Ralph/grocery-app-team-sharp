//Import React
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction }  from '../../actions/loginAction';

//Declare Function
function SignInForm( ) {

    let [ newUsername, setUsername ] = useState( "" );
    let [ newPassword, setPassword ] = useState( "" );

    // useDispatch hook is used to update global state
    const dispatch = useDispatch();

    const newUser = (event) => {
        event.preventDefault();

        // creating error message area
        let errorArea = document.getElementById( "errorArea" );
        errorArea.innerHTML = "";
    
        // If username is guest or username or password are empty string, error messages get generated and displayed as a list, otherwise, global state gets updated with new user info
        if ((newUsername === "Guest") || (newUsername.length <= 0) || (newPassword.length <= 0) ) {

            errorArea.innerHTML = "";
            // Error messages display if username or password fields are left blank upon sign-in/sign-up
            
            const newUL = document.createElement( 'UL' );
            newUL.classList.add( "errorMessages" );           

            // Adds a list item with error message if username is Guest or empty string
            if ( newUsername === "" ) {
                const newLI = document.createElement( 'LI' );
                newLI.textContent = "You need to enter a username.";
                newUL.appendChild( newLI );                
            }
            // Adds a list item with error message if password is an empty string
            if ( newPassword.length <= 0 ) {
                const newLI = document.createElement( 'LI' );
                newLI.textContent = "You need to enter a password.";
                newUL.appendChild( newLI );                
            }
            errorArea.innerHTML = "";
            errorArea.appendChild( newUL );
        } else {
             // loginReducer global state gets updated with new user
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
                        <input type="text" id="username" placeholder="Username" onChange={e => { setUsername( e.target.value.trim() )}} required />
                        <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                        <input type="password" id="password" placeholder="Password" onChange={e => { setPassword( e.target.value )}} required />
                        
                        <input type="button" id="signin" value="Sign In" onClick={newUser}/>
                        
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