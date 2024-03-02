import React from "react";
import './navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => (
    <ul className="Navbar">

    <li>

        <Link to="/">
        <button>
            shop
        </button>
        </Link>

    </li>
    <li>
        <Link to="/about">
        <button>
            About
        </button>
        </Link>

    </li>

    <li>
        <Link to="/blog">
        <button>
            Blog
        </button>
        </Link>

    </li>


    <li>
        <Link to="/contact">
        <button>
            Contact
        </button>
        </Link>

    </li>




   

    

    </ul>

    

)

export default Navbar;