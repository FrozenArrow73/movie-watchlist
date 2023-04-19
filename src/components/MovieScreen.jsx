import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({list, movieList, page, setPage}) => {

    const movieDisplay = movieList.map((movie, index)=>{
        return (
            <MovieCard movie={movie} />
        )
    })

    return (
        <div className="page">
            <h1>Derek's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen