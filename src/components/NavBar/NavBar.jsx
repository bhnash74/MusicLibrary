import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <ul className="navbar-nav" id="topnav">
                    <li className="nav-item active">
                        <a className="nav-link" href= "https://www.w3schools.com/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href= "https://open.spotify.com//">Music</a>
                    </li>
                </ul>
            </nav>     
        </div>
    );
}
export default NavBar;