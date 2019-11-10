import React, { Component } from 'react'
import beerServices from '../services/BeerServices'
import Header from '../components/Header';

export default class BeerDetail extends Component {
    state={
        beers:null,
    }
    async componentDidMount(){
        const {beerId}= this.props.match.params
        const newBeer = await beerServices.getBeer(beerId)
        console.log(newBeer)
        this.setState({
            beers:newBeer
        })
    }
    render() {
        const {beers} = this.state
        if (beers){
            return (
                
                <section className="beer-detail">
                <Header/>
                <img src = {beers.image_url} alt=""/>
                <p>{beers.name}</p>
                <p>{beers.first_brewed}</p>
                <p>{beers.attenuation_level}</p>
                <p>{beers.description}</p>
                <p>{beers.contributed_by}</p>
                </section>
            )
        } else{
            return(
                <p>Loading ...</p>
            )
        }
        
    }
}
