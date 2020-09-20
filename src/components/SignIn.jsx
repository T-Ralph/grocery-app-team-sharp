//Import React
import React from 'react';

//Declare Function
function SignIn() {
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
                        <input type="text" id="username" placeholder="Username" />
                        <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                        <input type="password" id="password" placeholder="Password" />
                        <input type="button" id="signin" value="Sign In" />
                        <input type="button" id="signup" value="Sign Up" />
                    </form>
                </section>
            </main>
        </>
    );
}

//Export Function
export default SignIn;