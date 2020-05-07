import React from "react";
import {Link} from "react-router-dom"
import './App.css'

function Navbar() {
    const navStyle = {
        color:'white'
    };
    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to={"/"}>
                    <li>Main Page</li>
                </Link>
                <Link style={navStyle} to={"/favorites"}>
                    <li>Favorites</li>
                </Link>
                <Link style={navStyle} to={"/addedFiles"}>
                    <li>Added Musics</li>
                </Link>
            </ul>
        </nav>
    );
}



export  default Navbar;
