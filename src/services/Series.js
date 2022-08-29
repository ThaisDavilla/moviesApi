import React, {Component} from 'react';
import axios from 'axios';

const apiSeries = axios.create({
  baseURL:'https://api.themoviedb.org/3/tv/popular?api_key=60155d9794b7153bd4dfd6a33756c8ef&language=pt-Br&page=1'
})
console.log(apiSeries)


export default class Series extends Component{
  state={
    series:[]
  }
  componentDidMount(){
    this.getSeries()
  }

  getSeries = async () => {
    const resposta = await apiSeries.get()
    console.log(resposta)
    const allSeries = resposta.data.results.map((item) => {
      return{
      ...item,
    image:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
  }
    })
    this.setState({
      series:allSeries
    })
  }
  

render(){
    return(
      <div>
        {this.state.series.map((item) => (
          <div>
          <p>{item.overview}</p>
          <img src={item.image} alt={item.name}/>
        
          </div>
        ))}

      </div>
    )
  }
}