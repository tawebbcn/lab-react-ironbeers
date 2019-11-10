import React, { Component } from 'react'
import beerServices from '../services/BeerServices'
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Beers extends Component {
    state={
        beers:null
    }

    async componentDidMount(){
        const newBeers= await beerServices.getAllBeers()
        this.setState({
            beers:newBeers
        })
    }
    render() {
        const {beers} = this.state
        return (
            
            <section className="beersList">
                <Header/>

            {   beers ?
                beers.map((beer,index)=>(
                <article key={index}>
                  <img src={beer.image_url} alt=""/>
                  <p>{beer.name}</p>
                  <p>{beer.tagline}</p>
                  <p>{beer.contributed_by}</p>
                    
                </article>   
                )) : <p>Loading...</p>
            
            

            }
           
          
            </section>
        )
    }
}

export default Beers

