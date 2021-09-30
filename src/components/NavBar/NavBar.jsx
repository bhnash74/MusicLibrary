import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <ul className="navbar-nav" id="topnav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Music</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Artists</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Gallery</a>
                    </li>
                </ul>
            </nav>     
        </div>
    );
}
export default NavBar;