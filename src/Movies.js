import React from 'react'

export default function Movies (props) {

  return (
    <div className = 'movies_container'>
      {
        props.movies === ''? '' : props.movies.map(movie => <div className= 'movie_container' key={movie.id}>
          <h3 className= 'movie_title' >{movie.original_title}</h3>
          <img className= 'movie_img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
          <p className='movie_details' >Overview: {movie.overview}</p>
          <p className='movie_details' >Release date: {movie.release_date}</p>
          <p className='movie_details' >Original Language: {movie.original_language}</p>
          <p className='movie_details' >Vote average: {movie.vote_average}</p>

          </div>)
      }
    </div>
  )

}
