import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
           <Link to='/' style={{textDecoration:'none', color:'white', fontSize:'30px'}}>Home</Link>
        </div>
    )
}

export default NavBar;
