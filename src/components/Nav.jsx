//Import React, Link from React-Router
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction}  from '../actions/loginAction';
import SignInForm from '../components/authentication/SignInForm';

//Declare Function
function Nav() {


    // useDispatch hook is used to update global state
    const dispatch = useDispatch();
    // Brings in loginReducer global state for use
    const userInfo = useSelector(state => state.loginReducer);

    // Logout function ready to be connected to logout button
    const guestUser = (event) => {
        event.preventDefault();
        dispatch(logoutAction({ username: "Guest", password: "", isLoggedIn: false }));
    }


    return(
        <>
            <header>
                <nav>
                    <ul className="header-nav-ul">
                        <li>
                            <Link to="/">
                                <i className="fas fa-home"></i>
                                <span className="desktop-screen-only">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/recipe-list">
                                <i className="fas fa-utensils"></i>
                                <span className="desktop-screen-only">Recipe List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shopping-list">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="desktop-screen-only">Shopping List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us">
                                <i className="fas fa-scroll"></i>
                                <span className="desktop-screen-only">About Us</span>
                            </Link>
                        </li>
                        <li className="nav-ul-li-dropdown">
                            <Link to="/authentication">
                                <i className="fas fa-user"></i>
                                <span className="desktop-screen-only">{userInfo.username}</span>
                            </Link>
                            <button className="nav-ul-li-dropdown-link" onClick={guestUser}>
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="desktop-screen-only">Out</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

//Export Function
export default Nav;