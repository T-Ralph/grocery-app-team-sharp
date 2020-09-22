//Import React
import React from 'react';
import { Link } from 'react-router-dom';
import { logoutAction }  from '../../actions/loginAction';
import { useSelector, useDispatch } from 'react-redux';


//Declare Function
function SignedIn() {

    // useDispatch hook is used to update global state
    const dispatch = useDispatch();
    // Brings in loginReducer global state for use
    const userInfo = useSelector(state => state.loginReducer);
    const guestUser = (event) => {
        event.preventDefault();
        dispatch(logoutAction({ username: "Guest", password: "", isLoggedIn: false }));
    }

    return(
        <>
        <main>
            <section className="main-section">
                <h2>
                    <i className="fas fa-user"></i>
                    Welcome {userInfo.username}!
                </h2>
               
                <h3>What would you like to do?</h3>
                <Link to="/recipe-list">
                    <i className="fas fa-utensils"></i>
                    <span className="desktop-screen-only">Recipe List</span>
                </Link>
       
                <Link to="/shopping-list">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="desktop-screen-only">Shopping List</span>
                </Link>
                <button onClick={guestUser}>Sign out</button>
            </section>
        </main>
    </>
    )
}

//Export Function
export default SignedIn;