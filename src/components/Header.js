import React from "react"
import { Nav } from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";


function Header() {
    return (
       <nav className="nav">

                <Link to="/">
                    <img className="albums" src="../images/Coheed.jpg"></img>
                    <h1 className="site-title">Coheed And Cambria Song List</h1>
                </Link>

                <NavLink exact to="/vaxis">
                    Vaxis II
                    <img className="albums" src="../images/album1.jpeg"></img>
                </NavLink>
                <br></br>
                <NavLink exact to="/color">
                    The Color Before the Sun
                    <img className="albums" src="../images/album2.jpg"></img>
                </NavLink>
                <br></br>
                <NavLink exact to="/secret">
                    In Keeping Secrets
                    <img className="albums" src="../images/album3.jpeg"></img>
                </NavLink>


    </nav>
    );
}

export default Header;