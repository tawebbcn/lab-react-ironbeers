import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="Header">
            <Link to ={'/'}><img src="./images/favicon.ico"/>
            </Link>
        </div>
    )
}

export default Header
