import axios from 'axios';

class BeerServices {
constructor(){
    this.beerApi= axios.create({
        baseURL:'https://ih-beers-api2.herokuapp.com'
    })}

   getAllBeers=async()=>{
       try{
           const beers = await this.beerApi.get('/beers')
            return beers.data
       } catch(error){
           console.log(error)
       }
   }
}

const beerServices= new BeerServices();
export default beerServices