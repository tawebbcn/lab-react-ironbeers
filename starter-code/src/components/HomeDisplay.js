import React from 'react'
import { Link } from 'react-router-dom';

const HomeDisplay = () => {
    return (
        <div>
            <Link to ={'/beers'}><img src="./images/beers.png" alt=""/>
            <p>All Beers</p> </Link>

            <Link to ={'/random-beer'}><img src="./images/random-beer.png" alt=""/>
            <p>Random Beer</p> </Link>

            <Link to ={'/new-beer'}><img src="./images/new-beer.png" alt=""/>
            <p>New Beer</p> </Link>

        </div>
    )
}

export default HomeDisplay
