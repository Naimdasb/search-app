import React, {useState, useEffect} from 'react'
import Movies from './Movies'

export default function App() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState('');
	const api_key = 'b5d84caaa446cd8b644ab5c13c875c09';

  const fetchAPI = async (event) => {
			event.preventDefault();
			const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
			const moviesJson = await data.json();
			setMovies(moviesJson.results)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }


  return (<div className='container'>
    <h1 className='main_title'>
      Search Movies
    </h1>
    <form onSubmit={fetchAPI}>
      <input className='search_bar' type='text' placeholder='Enter your movie..' value={query} onChange={handleChange}/>
      <input className='button' type='submit' value="Search"/>
    </form>

		<Movies movies={movies} />

  </div>)
}
