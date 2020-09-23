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
                
                    <h2>
                        What would you like to do?
                    </h2>
                    <button className="table-button center">
                        <Link to="/recipe-list">
                            <i className="fas fa-utensils"></i>
                            Recipe List
                        </Link>
                    </button>
                    <button className="table-button center">
                        <Link to="/shopping-list">
                            <i className="fas fa-shopping-cart"></i>
                            Shopping List
                        </Link>
                    </button>
                    <button className="table-button center" onClick={guestUser}>
                        <i className="fas fa-sign-out-alt"></i>
                        Sign Out
                    </button>
                </section>
            </main>
        </>
    );
}

//Export Function
export default SignedIn;