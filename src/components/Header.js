import React from "react"


function Header() {
    return (
       <nav className="nav">
        <a href="/" className="site-title">Coheed And Cambria Song List</a>
        <ul>
            <li> <a href="/album1">Vaxis II: A Window of the Waking Mind</a> </li>
            <li> <a href="/album2">The Color Before The Sun</a> </li>
            <li> <a href="/album3">In Keeping Secrets</a> </li>
         </ul>
    </nav>
    );
}

export default Header;