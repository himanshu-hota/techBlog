import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul id="nav">
                <li>
                    <Link to='/' >Home</Link>
                </li>

                <li>
                    <Link to='/create-post' >Create</Link>
                </li>
             </ul>
        </div>
    )
}

export default Navbar;