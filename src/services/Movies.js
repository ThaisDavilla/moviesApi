import React, { Component } from 'react'
import axios from 'axios'


const FilmesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/550?api_key=60155d9794b7153bd4dfd6a33756c8ef'
})
console.log(FilmesApi)

export default class Movies extends Component {
  state = {
    movies: [],
    FilterMovies: []
  }

  componentDidMount() {
    this.getMovies()
    this.getMovies();
  }

  getMovies = async () => {
    this.setState({
      movies: allFilmes,
      FilterMovies: allFilmes
    })
    console.log(allFilmes)
  }

  handleChange = (event) => {
    const ListaFiltrada = this.state.movies.filter((item) => {
      if (item.original_title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true
      } else {
        return ""
      }
    })
    this.setState({
      FilterMovies: ListaFiltrada
    })
    console.log(this.state.FilterMovies)
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        {this.state.FilterMovies.map((item, index) => (
          <div key={index}>
            <ul>
              <li>{item.original_title}</li>
              <li>{item.overview}</li>
              <li>{item.vote_average}</li>
            </ul>
            <img src={item.image} alt='posters' />
          </div>
        ))
        }
      </div>
    );
  }
}