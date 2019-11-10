import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
        <ul>
            <li> <Link to='/'> Home</Link></li>
            <li> <Link to='/beers'> Beers</Link></li>


            <li> <Link to='/random-beer'> Random Beer</Link></li>
            <li> <Link to='/new-beer'> New Beer</Link></li>


        </ul>
            
        </nav>
    )
}

export default NavBar
