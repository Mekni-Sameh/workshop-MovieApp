import React from 'react'
import MovieCard from './MovieCard';
function MovieList({movieList}) {
    console.log(movieList)
    return (
        <div>
             
            <MovieCard films={movieList}/>
        </div>
    )
}

export default MovieList
