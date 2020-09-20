import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <h1>Nav</h1>
            <ul>
                <li>Logo</li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/recipe-list">Recipe List</Link>
                </li>
                <li>
                    <Link to="/shopping-list">Shopping List</Link>
                </li>
                <li>
                    <Link to="/about-us">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;