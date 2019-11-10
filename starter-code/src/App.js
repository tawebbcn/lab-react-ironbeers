import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home'
import NewBeer from './pages/NewBeer'
import RandomBeers from './pages/RandomBeers'
import Beers from './pages/Beers';
import BeerDetail from './pages/BeerDetail';



import './App.css';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
  
      <div className="App">
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/> 
            <Route exact path='/beers' component={Beers}/> 
            <Route path="/beers/:beerId" component={BeerDetail}exact></Route>
            <Route exact path='/beers/random' component={RandomBeers}/>
            <Route exact path='/new-beer' component={NewBeer}/>
          </Switch>
        </Router>
      


      </div>
    );
  }
}

export default App;
