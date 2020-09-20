//Import React, Link from React-Router
import React from 'react';
import { Link } from 'react-router-dom';

//Declare Function
function Nav() {
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
                        <li>
                            <Link to="/sign-in">
                                <i className="fas fa-user"></i>
                                <span className="desktop-screen-only">Guest</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

//Export Function
export default Nav;