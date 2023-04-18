import React from "react";

const MovieScreen = ({list, movieList, page, setPage}) => {

    const movieDisplay = movieList.map((movie, index)=>{
        return (
            <h2>{movie.original_title}</h2>
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